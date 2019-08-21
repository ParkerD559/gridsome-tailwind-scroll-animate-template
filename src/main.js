// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'animate.css'
import '~/main.css'

import VueVisibleClass from 'vue-visible-class'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, router, head, isClient }) {
  // Page transition
  appOptions.render = h =>
    h(
      'transition',
      { props: { name: 'page', mode: 'out-in' } },
      [h("router-view", { attrs: { id: "app" } })]
    )
  Vue.use(VueVisibleClass, {
    globalClass: 'animated'
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
