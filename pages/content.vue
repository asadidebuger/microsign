<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>

        </section>

        <section class="section section-skew">
            <div class="container">

              <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class=" py-5 ">
                          <h1 class="text-center br">{{title}}</h1>

                            <div class="row justify-content-center border-top">
                                <div class="content-container col-lg-9 mt-5">
                                    <nuxt-content v-if="content" :document="content"></nuxt-content>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  name:'profile',
  data(){
    return {
      content:null
    }

  },
  async asyncData (args) {
    console.log(args)
    return {$content:args.$content}
  },
  //
  // async asyncData ({ $content }) {
  //   // console.log($nuxt,$nuxt.$route.query);
  //   let getPath=new Promise((resolve, reject)=>{
  //     let check= ()=>{
  //       if (!$nuxt.$route.query.cat) {
  //         setTimeout(check, 100);
  //         console.log('s',$nuxt.$route.query.cat,$nuxt.$route)
  //         return;
  //       }
  //       let p1=$nuxt.$route.query.cat;
  //       let p2=$nuxt.$route.query.content;
  //       let p3=$nuxt.$route.query.lang || $nuxt.$locale().code;
  //       resolve(`${p1}/${p2}/${p3}`)
  //     }
  //     check();
  //     // console.log(p1,p2,p3);
  //     // let path=`${p1}/${p2}/${p3}`;
  //     // console.log(path)
  //
  //
  //   })
  //   let path=await getPath;
  //   let page = await $content(path).fetch();
  //   // console.log(page)
  //   return {
  //     page
  //   }
  // },
  async mounted() {
    // console.log($nuxt,$nuxt.$route.query);
    let getPath=new Promise((resolve, reject)=>{
      let check= ()=>{
        if (!$nuxt.$route.query.cat) {
          setTimeout(check, 100);
          console.log('s',$nuxt.$route.query.cat,$nuxt.$route)
          return;
        }
        let p1=$nuxt.$route.query.cat;
        let p2=$nuxt.$route.query.content;
        let p3=$nuxt.$route.query.lang || $nuxt.$locale().code;
        resolve(`${p1}/${p2}/${p3}`)
      }
      check();
      // console.log(p1,p2,p3);
      // let path=`${p1}/${p2}/${p3}`;
      // console.log(path)


    })
    let path=await getPath;
    this.content = await this.$content(path).fetch();
    // console.log(page)

  },
  head(){
    return {
      title: this.title,
      meta: [
        {
          hid: this.description,
          name: this.description,
          content: this.description
        }
      ],
    }
  },
  computed:{
    title(){
      return this.page && this.page.title || this.$t('microsign');
    },
    description(){
      return this.page && this.page.description || this.$t('microsign');
    }
  }
};
</script>
<style>
</style>
