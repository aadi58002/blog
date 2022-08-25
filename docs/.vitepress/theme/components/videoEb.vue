<template>
    <div v-if="valid" style="display: flex;justify-content: center;">
        <iframe style="border-radius: 10px" title="Video player with vue" loading="lazy" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen :src="url"></iframe>
    </div>
</template>
<script>
export default {
    props: {
        src: { type: String },
    },
    data() {
        return {
            valid: false,
            url: '',
            videos: [
                {
                    //reg: /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/i,
                    //reg: /^.*(?:(?:v|vi|be|videos|embed)\/(?!videoseries)|(?:v|ci)=)([\w-]{11})/i,
                    reg: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/i,
                    url: 'https://www.youtube.com/embed/$5'
                }
            ]
        }
    },
    methods: {
        parse() {
            if (this.src) {
                for (let i = 0; i < this.videos.length; i++) {
                    const v = this.videos[i];
                    var m = v.reg.exec(this.src);
                    if (m) {
                        this.url = this.src.replace(v.reg, v.url);
                        this.valid = true;
                        return;
                    }
                }
            }
            this.valid = false;
        },
    },
    mounted() {
        this.parse();
    }
}
</script>
