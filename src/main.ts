import Vue, { createApp } from 'vue'

import App from './App.vue'
import { router } from './router'
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App);

app.use(VMdEditor);
app.use(router)

app.mount('#app')

