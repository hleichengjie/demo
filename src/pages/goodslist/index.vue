<template>
    <div class="goodslist">
        <div class="goods-item" v-for="(item) in goodslist" :key="item.id">
            <img :src="item.img_src" alt="">
            <h3>{{item.title}}</h3>
            <p class="price"><span>&yen;{{item.sell_price}}</span>&nbsp;&nbsp;<del>&yen;{{item.market_price}}</del></p>
            <p class="sell"><span>热卖中</span><span>剩{{item.stock_quantity}}件</span></p>
        </div>
    </div>
</template>
<script>
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
                    console.log(res)
                    this.goodslist=res.body.message
                }
            )
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
            height: 100%;
        }
        h3{
            font-size: 14px;
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
