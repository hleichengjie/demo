<template>
    <div >
        <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a :class="['mui-control-item',item.id===0?'mui-active':'']" v-for="(item) in imgCategory" :key="item.id" @click="getImages(item.id)">
                   {{item.title}}
                </a>
            </div>
        </div>
        <ul class="photolist">
         <router-link :to="'/home/photoesinfo/'+item.id" v-for="(item) in imagesList" :key="item.id" tag="li">
            
            <img  v-lazy="item.img_url" alt="">
            <div class="info">
                <h3>{{item.title}}</h3>
                <p>{{item.zhaiyao}}</p>
            </div>
        </router-link>
        </ul>
    </div>
</div>
</template>
<style lang="less">
.photolist{
    li{ position: relative;
        overflow: hidden;
        margin: 10px;
    text-align: center;

         img{
            width: 100%;
            height: 100%;

            &[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
        }
        .info{
            position: absolute;
            bottom: 10px;
            max-height: 84px;
            background-color: rgba(0,0, 0, .3);
            color: #fff; 
            text-align: left;
            h3{
            font-size: 14px;
            }
            p{
                color: #fff;  
            }     
        }
    }
}
</style>

<script>
import mui from "@/lib/mui/js/mui.min.js"


export default {
    data() {
        return {
           imgCategory:[{title:"全部",id:0}],
            imagesList:[]
        }
    },
    created() {
        this.getImgCategory()
        this.getImages(0)
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
    },
    methods: {
        getImgCategory(){
            this.$http.get('api/getimgcategory').then(res=>{
                // console.log(res) 
                this.imgCategory=this.imgCategory.concat(res.body.message)
            })
        },
        getImages(id){
            this.$http.get('api/getimages/'+id).then(res=>{
                // console.log(res.body.message)
                this.imagesList=res.body.message
            })
        }

    },
}
</script>