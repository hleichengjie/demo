<template>
    <div class="comment">
        
        <p>发表评论：</p>
        <hr>
        <textarea placeholder="请输入内容（最多120字）" maxlength="120" v-model="commentcontent"></textarea>
        <mt-button type="primary" size="large" @click.native="addcomment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, index) in comments" :key="index">
                <div class="cmt-title">第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat}}</div>
                <div class="cmt-content">{{item.content}}</div>
            </div>
        </div>
        <mt-button @click.native="getmore" type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
           pageindex:1,
           comments:[],
            commentcontent:""
        }
    },
    props:["artid"],
    created() {
        this.getcomments();
    },
    methods: {
        getcomments(){
            this.$http.get('api/getcomments/'+this.artid+'?pageindex='+this.pageindex).then(res=>{
                this.comments=this.comments.concat(res.body.message)  
            })
        },
        getmore(){
            this.pageindex+=1
            this.getcomments()
        },
        addcomment(){
            if(this.commentcontent.trim().length===0){
                return Toast({
                    message: '评论内容不可为空', 
                    duration: 2000
                });
            }
            this.$http.post('api/postcomment/'+this.artid,{content:this.commentcontent}).then(res=>{
                Toast({
                    message: res.body.message, 
                    duration: 2000
                })
                this.pageindex=1
                this.comments=[]
                this.commentcontent=''
                this.getcomments()
            })
        }

    },
}
</script>
<style lang="less">
.comment{
    .cmt-list{
        padding: 5px 0;
        .cmt-item{
            line-height: 30px;
            font-size: 14px;
            .cmt-title{
                background-color: #ccc;
                 font-size: 13px;
            }
        }
    }

}
</style>
