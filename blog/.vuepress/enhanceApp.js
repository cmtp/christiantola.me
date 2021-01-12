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
  router.addRoutes([
    { path: '/angular-cli-commands', redirect: '/2019/02/10/comandos-en-angular-cli/'},
    { path: '/create-vuepress-blog', redirect: '/2020/04/12/crear-blog-con-vuepress/'},
    { path: '/js-features-you-may-know', redirect: '/2019/12/25/caracteristicas-javascript-que-aprender/'},
    { path: '/create-api-rest-nestjs', redirect: '/2019/02/17/crear-api-rest-con-nestjs/'},
    { path: '/design-patterns', redirect: '/2019/01/20/design-patterns/'},
    { path: '/start-with-angular-cli', redirect: '/2019/01/13/iniciando-con-angular-cli/'},
    { path: '/start-with-vue', redirect: '/2019/01/06/desarrollo-progresivo-con-vue/'},
    { path: '/clean-code', redirect: '/2019/01/03/codigo-limpio/'},
    { path: '/config-routing-vuepress', redirect: '/2020/04/19/configuration-y-routing-en-vuepress/'},
  ]);
  import('vue-toastr').then(module => {
    Vue.use(module.default, {
        duration: 6000
    });
})
.catch(error => {
    console.log(error);
})
}
