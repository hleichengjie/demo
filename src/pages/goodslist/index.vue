<template>
    <div class="goodslist">
        <div class="goods-item" v-for="(item) in goodslist" :key="item.id" @click="togoodsinfo(item.id)">
            <img :src="item.img_url" alt="">       
                <h3>{{item.title}}</h3>
                <p class="price"><span>&yen;{{item.sell_price}}</span>&nbsp;&nbsp;<del>&yen;{{item.market_price}}</del></p>
                <p class="sell"><span>热卖中</span><span>剩{{item.stock_quantity}}件</span></p>
        </div>
        <mt-button type="danger" size="large" @click.native="getmore">加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            pageindex:1,
            goodslist:[]
        }
    },
    created() {
       this.getgoods()
    },
    methods: {
        getgoods(){
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(
                res=>{
                    // console.log(res)
                    if(res.body.message.length===0){
                       return Toast({
                        message: '没有更多了哦。。。',
                        position: 'bottom',
                        duration: 2000
                        })
                    }
                    this.goodslist=this.goodslist.concat(res.body.message)    
                }
            )
        },
        getmore(){
            this.pageindex++
            this.getgoods()
        },
        togoodsinfo(id){
            this.$router.push('/home/goodsInfo/'+id)
        }
    },
}
</script>
<style lang="less">
.goodslist{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        box-shadow: 0 0 8px #ccc;
        padding: 5px;
        margin: 5px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%;     
        }
        h3{ 
            margin: 5px 0;
            font-size: 14px;
        }
        p{
            margin: 5px 0;
        }
        .price{
            span{
                color: red;
                font-size: 16px;
            }
        }
        .sell{
            display: flex;
            justify-content: space-between;
        }     
    }
}
</style>
