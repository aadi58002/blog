#!/usr/bin/env python3
import glob
import os
import time

def dataModifieFloat(file):
    return os.path.getmtime(file)

def dateModified(file):
    return time.strftime("%Y-%m-%d", time.strptime(time.ctime(dataModifieFloat(file))))

def sortFilesBasedOnUpdateStatus(files):
    list = []
    for file in files:
        list.append(file)
    list.sort(reverse=True,key=dataModifieFloat)
    return list

def localFileParsing(file):
    count = 0
    frontmatter=[]
    for line in file:
        if line.startswith("---"):
            count = count + 1
        elif count == 1 :
            frontmatter.append(line.strip())
        if count == 2 :
            return frontmatter

def parsingFileTags(TagString,UniqTags):
    for tag in TagString.split(','):
        tag = tag.replace("'","").replace("[","").replace("]","").strip()
        UniqTags.add(tag)

def parsingFrontMatter(frontmatter,UniqTags):
    item = ""
    production = False
    file_tags = set()
    if frontmatter != None:
        for data in frontmatter:
            if data != "":
                data_collection = data.split(":")
                data_title = data_collection[0].strip()
                data_value = data_collection[1].strip()
                if data_title.lower() == 'title':
                    item = item + "        text: '" + data_value + "',\n"
                elif data_title.lower() == 'description':
                    item = item + "        description: '" + data_value + "',\n"
                elif data_title.lower() == 'production':
                    if data_value.lower() == 'true':
                        production = True
                elif data_title.lower() == 'tags':
                    parsingFileTags(data_value,file_tags)
                    sorted(file_tags)
                    item = item + "        tags: " + data_value + ",\n"
    development = False
    try:
        if os.environ['BLOG_DEVELOPMENT'].lower() == 'true':
            development = True
    except:
        pass
    if production or development:
        for ele in file_tags:
            UniqTags.add(ele)

    return (production or development,item)

def writingtsBlockToFile(file,UniqTags,listItems):
    with open(file,"r") as f:
        test = f.read()
        startString = '// Python Script Adjustment Block Start'
        endString = '// Python Script Adjustment Block End'
        f = test.index(startString) + len(startString)
        l = test.index(endString)
        test_final = test[:f+1] + "    Uniqtags: [ "
        for tag in UniqTags:
            test_final = test_final + "'" + tag + "',"
        test_final = test_final[:-1] + "],\n" + "    items: [\n"
        for item in listItems:
            test_final = test_final + item + ",\n"
        test_final = test_final[:-1] + "\n    ]\n" + test[l:]
    final_file = open(file,"w")
    final_file.write(test_final)
    final_file.close()


dirname = os.path.dirname(__file__)
BlogDir = os.path.join(dirname, 'content/blogs/')
blogFiles = glob.glob(BlogDir + "*.md")
blogFiles = filter(lambda x: x.endswith("index.md") != True,blogFiles)

SortFiles = sortFilesBasedOnUpdateStatus(blogFiles)

listItems = []
UniqTags = set()

for file in SortFiles:
    item = "      {\n        link: '/blogs/" + file.split("/")[-1].split(".")[0] + "',\n"
    frontmatter = localFileParsing(open(file, "r"))
    (production,front_matter_value) = parsingFrontMatter(frontmatter,UniqTags)
    if production:
        item = item + front_matter_value
        blogFileModified = dateModified(file)
        item = item + "        lastUpdated: '" + blogFileModified + "'\n      }"
        listItems.append(item)

writingtsBlockToFile(dirname + "/content/.vitepress/blogs.ts",UniqTags,listItems)
