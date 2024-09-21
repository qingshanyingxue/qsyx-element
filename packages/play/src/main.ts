import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import QsyxElement from 'qsyx-element'
console.log("QsyxElement",QsyxElement);


createApp(App).use(QsyxElement).mount('#app')
