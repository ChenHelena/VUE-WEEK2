
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const url = 'https://vue3-course-api.hexschool.io/v2';
const path = 'helena27';

createApp({
  data(){
    return{
      url,
      path,
      products:[],
      tempProduct:{},
    }
  },
  mounted(){
    //取出token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)helenaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;

    this.checkAdmin();
    
  },
  methods:{
    //確認是否為登入狀態
    checkAdmin(){
      axios.post(`${this.url}/api/user/check`)
      .then(()=>{
        this.getData();
      })
      .catch((err)=>{
        console.log(err.response);
        window.location = 'login.html';
      })
    },
    //取得資料
    getData(){
      axios.get(`${this.url}/api/${this.path}/admin/products`)
      .then((res)=>{
        this.products = res.data.products;
        console.log(res.data.products);
      })
      .catch((err)=>{
        console.log(err.response);
      })
    },
    //點擊查看細節出現右邊畫面
    openProduct(item){
      this.tempProduct = item;
    }
  },
}).mount('#app')







