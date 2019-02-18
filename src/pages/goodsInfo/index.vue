<template>
    <div class="goodsinfo">
       
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <mt-swipe :auto="4000">
                    <mt-swipe-item>1</mt-swipe-item>
                    <mt-swipe-item>2</mt-swipe-item>
                    <mt-swipe-item>3</mt-swipe-item>
                </mt-swipe>
                </div>
            </div>
		</div>
        <div class="mui-card">
            <div class="mui-card-header">苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <div class="sell">市场价：<del>&yen;2699</del>&nbsp;&nbsp;销售价：<span>&yen;2699</span></div>
                   <div class="num">购买数量：
                       <div class="numbox">
                           <input type="button" value="-">
                           <input type="number" value="1" min="1" max="10">
                           <input type="button" value="+">
                       </div>
                   </div>
                   <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small">加入购物车</mt-button>
                </div>
            </div>
		</div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p>商品货号：1234567</p>
                   <p>库存情况：</p>
                   <p>上架时间：</p>
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
		</div>
    </div>
</template>
<style lang="less">
.goodsinfo{

}
</style>
<script>
export default {
    data() {
        return {
            id:this.$route.params.id,
            goodsinfo:[]
        }
    },
    created() {
        this.getGoodInfo()
    },
    methods: {
        getGoodInfo(){
            this.$http.get('api/goods/getdesc/'+this.id).then(res=>{
                console.log(res)
            })
        }
    },
}
</script>
