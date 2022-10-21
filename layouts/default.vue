<template>
    <div>
<!--			<b-alert variant="danger" md="12" fade :show="isOffline" >{{ $t('You Are Offline!') }}-->
<!--			</b-alert>-->
<!--     		<Nuxt />-->

<!--&lt;!&ndash;        <color-switcher />&ndash;&gt;-->


      <div id="app">
        <AppHeader/>
        <main>
          <fade-transition origin="center" mode="out-in" :duration="250">
            <Nuxt />
          </fade-transition>
        </main>
        <AppFooter/>
      </div>
    </div>




</template>
<script>
import { FadeTransition } from "vue2-transitions";
import {mapGetters,mapActions} from "vuex";
  import {
    theme
  } from "~/utils";
  export default {
    components: {
      FadeTransition
    },
      // name:'default',

		// data(){
		// 	return {
		// 		headerTitle:''
		// 	}
		// },
		head () {

      	// console.log(this.$route)
          return {
              title: this.pageTitle,
              // titleTemplate: '%s - '+this.$t('owner'),
          }
      }
      ,
		methods:{
			// ...mapActions({getMeta:'getMeta'}),
      addDir(){
        const direction = this.dir;
        if (direction==='rtl') {
          document.body.classList.add("rtl");
          document.dir = "rtl";
          document.body.classList.remove("ltr");
        } else {
          document.body.classList.add("ltr");
          document.dir = "ltr";
          document.body.classList.remove("rtl");
        }
      }
		},
		computed:{
      	...mapGetters({isOffline:'layout/isOffline',pageTitle:'layout/pageTitle'}),
      // isOffline(){
      // 	return $nuxt.isOffline;
			// }
      dir(){
        return theme.getDirection();
      }
		},
      beforeMount() {
				// document.body.classList.add("rounded");
        // console.log(theme);
        this.addDir();

    },

		// async created() {
		// 	// const {group,model,mode,id}= this.$route.params;
		// 	// if (model){const meta= await this.getMeta(model);
		// 	// this.headerTitle=meta.labels.plural;
		// 	// 	// console.log()
		// 	// }
		// }
		watch:{

      dir(val,old){
        // console.log('dir',val,old);
        this.addDir();
      }
		}

  }
</script>
