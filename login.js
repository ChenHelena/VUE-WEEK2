

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const url = 'https://vue3-course-api.hexschool.io/v2';

createApp({
  data(){
    return{
      //建立使用者資料的空字串
      user:{
        username:'',
        password:'',
      }
    }
  },
  methods:{
    login(){
      axios.post(`${url}/admin/signin`, this.user)
      .then((res)=>{
        //把鑰匙及到期日取出來
        const { token,expired } = res.data;
        //把cookie儲存起來
        document.cookie = `helenaToken=${token};expires=${new Date(expired)}`;
        //頁面跳轉
        window.location="products.html"
      })
      .catch((err)=>{
        alert(err.response.data);
      })
    }
  },
}).mount('#app')