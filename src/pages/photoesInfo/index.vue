<template>
    <div class="photoinfo">
       
            <h1 class="news-title">{{imageInfo.title}}</h1>
            <p class="sub-title"><span>发表时间：{{ imageInfo.add_time | dateFormat }}</span><span>点击：{{imageInfo.click}}次</span></p>
            <hr>
            <!-- 缩略图 -->
            <div class="thums">
                <img class="preview-img" v-for="(item, index) in thumimages" :key="index" :src="item.src" height="100" @click="$preview.open(index, thumimages)">
            </div>
            <div class="content" v-html="imageInfo.content"></div>
            <comment :artid="id">
            </comment>
       
    </div>
</template>
<script>
export default {
    data() {
        return {
            id:this.$route.params.id,
            thumimages:[],
            imageInfo:{}
        }
    },
    created() {
        this.getthumimages()
    },
    methods: {
        getthumimages(){
            this.$http.get('api/getthumimages/'+this.id).then(res=>{
                console.log(res)
                res.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
                this.thumimages=res.body.message
            }),
             this.$http.get('api/getimageInfo/'+this.id).then(res=>{
                console.log(res)
                this.imageInfo=res.body.message[0]
            })
        }

    },
}
</script>
<style lang="less">
.photoinfo{
    padding: 5px;
    .news-title{
        font-size: 16px;
        margin: 15px 0;
        color:#26a2ff;
        text-align: center
    }
    .sub-title{
        display: flex;
        justify-content: space-between;
        
    }
    .thums{
         img{
      margin: 10px;
      box-shadow: 0 0 8px #999;
    }
        
    }
    .content{
        font-size: 14px;
        line-height: 30px;
    }
}
</style>
