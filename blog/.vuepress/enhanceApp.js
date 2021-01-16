/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  import('vue-toastr').then(module => {
    Vue.use(module.default, {
      duration: 6000
    });
  })
    .catch(error => {
      console.log(error);
    })
}
