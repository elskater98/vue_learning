<template>
<div id="counter">
  <h1>Counter:{{counter}}</h1>
  <h1>Date:{{date_now}}</h1>
  <button v-bind:disabled="bool" v-on:click="getDate">Get Date</button>
  <input type="checkbox" v-model="bool">
  <input v-model="username" >
  <button  type="submit" @click="addElement(username)">Click!</button>
  {{getList}}
  {{this.user}}

</div>
</template>

<script>
export default {
  name: "Counter",
  inject:['user'],
  data(){
    let list = [];
    let counter=0;
    let bool = false;
    let date_now = new Date();
    return{counter,username:"",bool,list,date_now
    }
  },mounted(){
   setInterval(()=>{
      this.counter++;
    },1000)
  },methods:{
    getDate(){
      this.date_now = new Date()
    },
    addElement(username){
      this.list.push(username);
      this.username="";
    }
  },computed:{
    getList(){
      return this.list;
    }
  },created() {
    console.log(this.user)
  }
}
</script>

<style scoped>

</style>
