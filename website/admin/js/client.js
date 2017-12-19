import { debug } from 'util';

var Promise=require('bluebird')
var axios=require('axios')
var Vue=require('vue')
var Vuex=require('vuex').default
var Vuetify=require('vuetify').default
var style=require('aws-lex-web-ui/dist/lex-web-ui.css')
Vue.use(Vuex)
Vue.use(Vuetify);

var config = {
  cognito:{},
  lex: {},
  ui:{
    //pageTitle:"QnA bot Client",
    //toolbarColor:"cyan",
    //toolbarTitle:"QnABot",
    toolbarLogo:null,
    //pushInitialTextOnRestart:false
  },
  recorder:{}
};

document.addEventListener('DOMContentLoaded', function(){
    Promise.resolve(axios.get('/api/client')).get('data')
    .tap(console.log)
    .then(function(result){
        console.log("mbaccaro");
        config.cognito.poolId = result.aws.cognitoPoolId
        config.lex.botName = result.iframeConfig.lex.botName
        config.ui.pageTitle = result.iframeConfig.lex.pageTitle
       
        var LexWebUi = require('aws-lex-web-ui/dist/lex-web-ui.js').Loader;
        const lexWebUi = new LexWebUi(config);

        var App = new Vue({
            template:'<client/>',
            store:lexWebUi.store,
            components:{
                client:require('./components/client/index.vue')
            }
        });

        App.$mount('#App');

    })

});