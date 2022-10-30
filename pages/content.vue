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
                <card v-if="contents" shadow style="margin-top: -400px"  no-body>
                  <div class="px-4">
                    <div class=" py-3 ">
                      <span>{{$t('in category')}}: {{$t('All')}}</span>
                      <h1 class="text-center br">{{title}}</h1>

                      <div class="row justify-content-center border-top">
                        <ul class="content-container col-lg-9 mt-5 list-unstyled">
                          <li v-for="(c,i) of contents.filter(c=>!c.dir.startsWith('/_'))" :key="'item'+i">
                            <router-link :to="'/'+prefix+c.dir">
                              <h2><small > {{$t(getContentCat(c.dir))}}/</small> {{c.title}}</h2>
                              <p>{{c.description}}</p>

                              <hr>
                            </router-link>

                          </li>
                        </ul>
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
      // category:null,
      // content:null,
      // contents:null,
      // filename:null,
    }
  },
  async asyncData (args) {
    const {$content,query,params} =args;

    let content=null;
    let contents=null;
    let category=params.category;
    let filename=params.content;
    let lang=params.lang || $nuxt.$locale().code;
    if (filename) content = await $content(`${category}/${filename}/${lang}`).fetch();
    else {
      contents = await $content('/',{ deep: true }).fetch();
      // let lang=this.prefix;
      contents=contents.filter(c=>{return c.slug===lang});
    }

    // // console.log(contents);
    // this.category=category;
    // this.filename=filename;
    // this.contents=contents;
    // this.content=content;


    return {$content,category,filename,contents,content}
  },
  // async mounted() {
  //   await this.init(this.$content,this.$route.query);
  // },
  head(){
    return {
      ...this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true }),
      title: this.title,
      meta: [
        {
          property: 'og:description',
          name: 'description',
          content: this.description
        },
        {
          property: 'og:title',
          name: 'title',
          content: this.title
        }
      ],
    }
  },
  methods:{
    getContentName(dir){
      let name=dir.substring(dir.lastIndexOf('/')+1);
      return name;

    },
    getContentCat(dir){
      return dir.substring(1,dir.lastIndexOf('/'));
    }
  },
  computed:{
    title(){
      return this.$t('All contents');
    },
    prefix(){
      return this.$locale().code;
    },
    description(){
      return this.$t('All contents');
    }
  },
  // watchQuery(newQuery, oldQuery){
  //   this.init(this.$content,newQuery)
  // }
};
</script>
<style>
</style>
