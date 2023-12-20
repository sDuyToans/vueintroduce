import { createApp} from "vue";
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $bus from './utils/Event.js';
import router from './routes.js';
import $pages from './data.js';

const app = createApp(App);

app.use(router);

// app.config.globalProperties.$bus = $bus;
// app.config.globalProperties.$pages = $pages;

app.provide('$bus', $bus);
app.provide('$pages', $pages);

app.mount('#app');