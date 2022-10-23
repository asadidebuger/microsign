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

              <card v-if="content" shadow style="margin-top: -400px"  no-body>
                    <div class="px-4">
                        <div class=" py-3 ">
                          <span>{{$t('in category')}}:</span> <router-link :to="`/${prefix}/content?cat=${category}`">{{$t(category)}}</router-link>
                          <h1 class="text-center br">{{title}}</h1>

                            <div class="row justify-content-center border-top">
                                <div class="content-container col-lg-9 mt-5">
                                    <nuxt-content  :document="content"></nuxt-content>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
                <card v-else-if="contents" shadow style="margin-top: -400px"  no-body>
                  <div class="px-4">
                    <div class=" py-3 ">
                      <span>{{$t('in category')}}: {{$t(category)}}</span>
                      <h1 class="text-center br">{{title}}</h1>

                      <div class="row justify-content-center border-top">
                        <ul class="content-container col-lg-9 mt-5 list-unstyled">
                          <li v-for="(c,i) of contents" :key="'item'+i">
                            <router-link :to="'/'+prefix+'/content?cat='+category+'&content='+getContentName(c.dir)">
                              <h2>{{c.title}}</h2>
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
      category:null,
      content:null,
      contents:null,
      filename:null,
    }
  },
  async asyncData (args) {
    const {$content,query} =args;


    return {$content}
  },
  async mounted() {
    await this.init(this.$content,this.$route.query);
  },
  head(){
    return {
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
    async init($content,query){
      let content=null;
      let contents=null;
      let category=query.cat;
      let filename=query.content;
      let lang=query.lang || $nuxt.$locale().code;
      if (filename) content = await $content(`${category}/${filename}/${lang}`).fetch();
      else {
        contents = await $content(category,{ deep: true }).fetch();
        let lang=this.prefix;
        contents=contents.filter(c=>{return c.slug===lang});
      }

      // console.log(contents);
      this.category=category;
      this.filename=filename;
      this.contents=contents;
      this.content=content;

    },
    getContentName(dir){
      let cat=this.category;
      let name=dir.substring(dir.indexOf(cat)+cat.length+1);
      // name=name.substring(0,name.length-1)
      console.log(name);
      return name;

    }
  },
  computed:{
    title(){
      if (this.content) return this.content && this.content.title || '';
      if (this.category) return this.$t(this.category);
      return ''
    },
    prefix(){
      return this.$locale().code;
    },
    description(){
      if (this.content) return this.content && this.content.description || '';
      if (this.category) return this.$t(this.category);
      return '';
    }
  },
  watchQuery(newQuery, oldQuery){
    this.init(this.$content,newQuery)

  }
};
</script>
<style>
</style>
