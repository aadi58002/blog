import{_ as n,o as e,c as o,k as s,a as l,t,Q as p}from"./chunks/framework.30efcb6d.js";const r="/blog/blogs/github-actions-void.png",c="/blog/blogs/github-workflow-dispatch.png",k=JSON.parse('{"title":"Github Actions For void linux","description":"Explaining how i understand github actions","frontmatter":{"title":"Github Actions For void linux","description":"Explaining how i understand github actions","production":true,"tags":["Github","Automation","Build systems"]},"headers":[],"relativePath":"blogs/Github-Actions.md","filePath":"blogs/Github-Actions.md","lastUpdated":1695808627000}'),i={name:"blogs/Github-Actions.md"},h={id:"frontmatter-title",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),u=p('<p><img src="'+r+`" alt="Banner Image"></p><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>I wanted to automate the building of package build with <code>xbps-src</code> to a remote automated job and then make it into a <a href="https://docs.voidlinux.org/xbps/repositories/custom.html" target="_blank" rel="noreferrer">repository</a> and host it (for free).</p><p>For summary <a href="https://github.com/void-linux/void-packages" target="_blank" rel="noreferrer">xbps-src</a> is a build system to build packages for void.</p><p>Solution which i found -&gt; Github Actions</p><h2 id="what-is-github-actions" tabindex="-1">What is Github Actions ? <a class="header-anchor" href="#what-is-github-actions" aria-label="Permalink to &quot;What is Github Actions ?&quot;">​</a></h2><p>Github actions are a service provided by github to do blah blah blah... <a href="https://docs.github.com/actions" target="_blank" rel="noreferrer">Read offical wording here</a>.<br> For our use case it is just a computer ( Virutal machine ) which run commands ( mostly bash ) declared in files under the <code>.github/workflows</code> folder.</p><p>If you don&#39;t want to read the complete thing and just want the source of automated build -&gt; <a href="https://github.com/aadi58002/void-packages/blob/master/.github/workflows/custom.yaml" target="_blank" rel="noreferrer">here</a> you go.</p><h2 id="why-i-am-doing-this" tabindex="-1">Why i am doing this ? <a class="header-anchor" href="#why-i-am-doing-this" aria-label="Permalink to &quot;Why i am doing this ?&quot;">​</a></h2><p>I have some package which i bundled myself for using on void but they won&#39;t be accepted in the main repo because of strict <a href="https://github.com/void-linux/void-packages/blob/master/CONTRIBUTING.md#package-requirements" target="_blank" rel="noreferrer">guideline</a>.</p><p>Hence to install them i had to compile them myself with <code>xbps-src</code> which is fine and all but i wanted my packages to do just installable with <code>xbps-install</code> from a repository.</p><h2 id="steps-to-achieve-the-goal" tabindex="-1">Steps to achieve the goal <a class="header-anchor" href="#steps-to-achieve-the-goal" aria-label="Permalink to &quot;Steps to achieve the goal&quot;">​</a></h2><ol><li>I want to check which custom package were bundled.</li><li>Build those packages in a CI environment.</li><li>Publish them with github pages as a repository host.</li></ol><h3 id="step-1" tabindex="-1">Step 1 <a class="header-anchor" href="#step-1" aria-label="Permalink to &quot;Step 1&quot;">​</a></h3><p>So in this step I want to identify which packages i bundled myself so that i don&#39;t have to build the entire <a href="https://github.com/void-linux/void-packages/tree/master/srcpkgs" target="_blank" rel="noreferrer">void-packages</a>.</p><p>Conveniently there are a lot of scripts inside <code>common/travis/</code> folder to make working in ci with void-packages very easy.</p><p>Let search through and find something which might help us. -&gt; <a href="https://github.com/void-linux/void-packages/blob/master/common/travis/changed_templates.sh" target="_blank" rel="noreferrer">Changed Templates</a></p><p>Let see if we can find intersting thing in this script and make it fit our usecase.</p><h4 id="lets-see-what-it-does" tabindex="-1">Lets see what it does. <a class="header-anchor" href="#lets-see-what-it-does" aria-label="Permalink to &quot;Lets see what it does.&quot;">​</a></h4><ul><li>This part seems to get the last commit in git which is not a merge commit and then save it to the tip variable.</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># changed_templates.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">tip</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">git</span><span style="color:#9ECBFF;"> rev-list </span><span style="color:#79B8FF;">-1</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">--parents</span><span style="color:#9ECBFF;"> HEAD)&quot;</span></span>
<span class="line"><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$tip</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># This is a merge commit, pick last parent</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">*</span><span style="color:#9ECBFF;">&quot; &quot;</span><span style="color:#F97583;">*</span><span style="color:#9ECBFF;">&quot; &quot;</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) tip=</span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">tip</span><span style="color:#F97583;">##*</span><span style="color:#9ECBFF;"> }&quot;</span><span style="color:#E1E4E8;"> ;;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># This is a non-merge commit, pick itself</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">)         tip=</span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">tip</span><span style="color:#F97583;">%%</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">*</span><span style="color:#9ECBFF;">}&quot;</span><span style="color:#E1E4E8;"> ;;</span></span>
<span class="line"><span style="color:#F97583;">esac</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># changed_templates.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">tip</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> rev-list </span><span style="color:#005CC5;">-1</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">--parents</span><span style="color:#032F62;"> HEAD)&quot;</span></span>
<span class="line"><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$tip</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;"># This is a merge commit, pick last parent</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">&quot; &quot;</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">&quot; &quot;</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) tip=</span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">tip</span><span style="color:#D73A49;">##*</span><span style="color:#032F62;"> }&quot;</span><span style="color:#24292E;"> ;;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;"># This is a non-merge commit, pick itself</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">)         tip=</span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">tip</span><span style="color:#D73A49;">%%</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">*</span><span style="color:#032F62;">}&quot;</span><span style="color:#24292E;"> ;;</span></span>
<span class="line"><span style="color:#D73A49;">esac</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><br><ul><li>This seems to get the last commit where you merged the main <code>void-linux/void-packages</code> repo into your personal branch.<details class="details custom-block"><summary>Details</summary><p>I didn&#39;t knew about <a href="https://linux.die.net/man/1/git-merge-base" target="_blank" rel="noreferrer">merge-base</a> command before this so we learn something new this time around</p></details></li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># You can run \`man git-merge-base\` to get a good idea of what it does ( it also has some diagrams )</span></span>
<span class="line"><span style="color:#E1E4E8;">base</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">git</span><span style="color:#9ECBFF;"> merge-base origin/HEAD &quot;</span><span style="color:#E1E4E8;">$tip</span><span style="color:#9ECBFF;">&quot;)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[ </span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">git</span><span style="color:#9ECBFF;"> rev-list </span><span style="color:#79B8FF;">--count</span><span style="color:#9ECBFF;"> &quot;</span><span style="color:#E1E4E8;">$tip</span><span style="color:#9ECBFF;">&quot; &quot;^</span><span style="color:#E1E4E8;">$base</span><span style="color:#9ECBFF;">&quot;)</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-lt</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;"> ] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;::error title=Branch out of date::Your branch is too out of date. Please rebase on upstream and force-push.&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">exit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># You can run \`man git-merge-base\` to get a good idea of what it does ( it also has some diagrams )</span></span>
<span class="line"><span style="color:#24292E;">base</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> merge-base origin/HEAD &quot;</span><span style="color:#24292E;">$tip</span><span style="color:#032F62;">&quot;)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[ </span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> rev-list </span><span style="color:#005CC5;">--count</span><span style="color:#032F62;"> &quot;</span><span style="color:#24292E;">$tip</span><span style="color:#032F62;">&quot; &quot;^</span><span style="color:#24292E;">$base</span><span style="color:#032F62;">&quot;)</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-lt</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;"> ] </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;::error title=Branch out of date::Your branch is too out of date. Please rebase on upstream and force-push.&quot;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">exit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><br><ul><li>Finally at the last part of the script it print outs all the name of the changed template in <code>srcpkgs</code> folder between the merge_base and the last non merge commit.<details class="details custom-block"><summary>Details</summary><ul><li>It uses cut to get the package name specifically from the path name like <code>srcpkgs/emacs/template</code> to <code>emacs</code>.</li><li>Note it uses tee to output both to the terminal screen (stdout) and to a file <code>/tmp/templates</code>.</li></ul></details></li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$base</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">$tip</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/tmp/revisions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">/bin/echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;\\x1b[32mChanged packages:\\x1b[0m&#39;</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff-tree</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-renames</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name-only</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--diff-filter=AM</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$base</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$tip</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;srcpkgs/*/template&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">cut</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">tee</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/tmp/templates</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">sed</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;s/^/  /&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&amp;2</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$base</span><span style="color:#032F62;"> </span><span style="color:#24292E;">$tip</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/tmp/revisions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">/bin/echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;\\x1b[32mChanged packages:\\x1b[0m&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff-tree</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-renames</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name-only</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--diff-filter=AM</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$base</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$tip</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;srcpkgs/*/template&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">cut</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">tee</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/tmp/templates</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">sed</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;s/^/  /&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&amp;2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><br><ul><li>What changes did i make to the script Lets see i don&#39;t usually merge the main repo into my personal one.<br> I just rebase my commit from the latest commit from the <a href="https://github.com/void-linux/void-packages" target="_blank" rel="noreferrer">upstream</a> with command <code>git pull --rebase upstream master</code>.<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Rebase advantage over merge:-</p><ul><li>No seperate commit for the merge.</li><li>Make it easier to identify which file you have changed.</li></ul></div></li></ul><p>Add the script assumes that the origin remote is the <a href="https://github.com/void-linux/void-packages" target="_blank" rel="noreferrer">main repo</a> but i have it under upstream. So just a little change of name and it is done.</p><div class="language-diff vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">- base=&quot;$(git merge-base origin/HEAD $tip)&quot;</span></span>
<span class="line"><span style="color:#85E89D;">+ base=&quot;$(git merge-base upstream/master $tip)&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">- base=&quot;$(git merge-base origin/HEAD $tip)&quot;</span></span>
<span class="line"><span style="color:#22863A;">+ base=&quot;$(git merge-base upstream/master $tip)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="step-2" tabindex="-1">Step 2 <a class="header-anchor" href="#step-2" aria-label="Permalink to &quot;Step 2&quot;">​</a></h3><p>This part was the part which i though would be the hardest but looking in the folder for workflow in the <a href="https://github.com/void-linux/void-packages" target="_blank" rel="noreferrer">main repo</a>.<br> I found the a build workflow for the package and there environment setup -&gt; <a href="https://github.com/void-linux/void-packages/blob/master/.github/workflows/build.yaml" target="_blank" rel="noreferrer">build.yaml</a> So we copy paste the part we want and try to understand whats going on.</p><h4 id="name" tabindex="-1">Name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;Name&quot;">​</a></h4><p>It is basically the name of the Action which is shown under the <a href="https://github.com/aadi58002/void-packages/actions" target="_blank" rel="noreferrer">Github Actions page</a>.</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build Custom package</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build Custom package</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="trigger" tabindex="-1">Trigger <a class="header-anchor" href="#trigger" aria-label="Permalink to &quot;Trigger&quot;">​</a></h4><p>Triggers are conditionals which tells github when to run a job.<br><a href="https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows" target="_blank" rel="noreferrer">All github actions triggers</a><br> You can see two triggers here.</p><ul><li>workflow_dispatch -&gt; It gives you <code>run workflow</code> button you see below to manually trigger the action. <img src="`+c+`" alt="Banner Image"></li><li>push.paths -&gt; Trigger the actions whenever a commit is pushed which changed the file under <code>srcpkgs</code> path.</li></ul><details class="details custom-block"><summary>Details</summary><p><code>srcpkgs/**</code> - The <code>**</code> here are called glob in bash. You can read more about it here <a href="https://linuxhint.com/bash_globbing_tutorial/" target="_blank" rel="noreferrer">Bash Globbing Tutorial</a></p></details><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">workflow_dispatch</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">paths</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&#39;srcpkgs/**&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">workflow_dispatch</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">paths</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&#39;srcpkgs/**&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="creating-a-job" tabindex="-1">Creating a Job <a class="header-anchor" href="#creating-a-job" aria-label="Permalink to &quot;Creating a Job&quot;">​</a></h4><p>Here is the thing you all been waiting for this is where we write the steps to do thing we want to do like build packages. You can read the below like. Run the build job ( name of the job ) in the ubuntu-latest Virtual machine.</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="attach-a-container-with-void-tools" tabindex="-1">Attach a Container with void tools <a class="header-anchor" href="#attach-a-container-with-void-tools" aria-label="Permalink to &quot;Attach a Container with void tools&quot;">​</a></h4>`,45);function d(a,E,b,m,g,F){return e(),o("div",null,[s("h1",h,[l(t(a.$frontmatter.title)+" ",1),y]),u])}const v=n(i,[["render",d]]);export{k as __pageData,v as default};
