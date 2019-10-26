<template>
<div class="homeContent">
<div class="background">
<background-home></background-home>
<logo></logo>
<home-button><router-link :to="{name:'kidprofile'}"></router-link></home-button>
</div>
</div>
</template>

<script>
const fb=require('./../../firebaseConfig.js')
import backgroundHome from './../../components/BackgroundHome'
import logo from './../../components/Logo'
import homeButton from './../../components/HomeButton'

export default {
    name:'Home',
    data:function(){
        return {
        }
    },
    components:{
        backgroundHome,
        logo,
        homeButton
    },
    mounted(){
        let users=[]
        fb.usersCollection.get().then(
            querySnapshot=>{
                querySnapshot.forEach(doc=>{
                    users.push(doc.data())
                })
            }
        )
    }
}
</script>

<style>
.homeContent{
    width:100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
</style>