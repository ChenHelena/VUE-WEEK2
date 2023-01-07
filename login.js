

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const url = 'https://vue3-course-api.hexschool.io/v2';

createApp({
  data(){
    return{
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
        const { token,expired } = res.data;
        document.cookie = `helenaToken=${token};expires=${new Date(expired)}`;
        window.location="products.html"
      })
      .catch((err)=>{
        alert(err.response.data);
      })
    }
  },
}).mount('#app')