<template>
    <div>
        photoInfo
    </div>
</template>
<script>
export default {
    data() {
        return {
            id:this.$route.params.id
        }
    },
    created() {
        this.getthumimages()
    },
  
    methods: {
        getthumimages(){
            this.$http.get('api/getthumimages/'+this.id).then(res=>{
                console.log(res)
            })
        }
    },
}
</script>