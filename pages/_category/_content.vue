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
                          <span>{{$t('in category')}}:</span> <router-link :to="`/${prefix}/${category}`">{{$t(category)}}</router-link>
                          <h1 class="text-center br">{{title}}</h1>

                            <div class="row justify-content-center border-top">
                              <aside class="toc-container col-lg-3 mt-5" >
                                <div class="sticky top-16">
                                  <h4
                                    class="uppercase text-black font-h2 text-lg lg:mt-16 tracking-wider"
                                  >
                                    {{$t('Table of contents')}}
                                  </h4>
                                  <nav >
                                    <ul class="toc" >
                                      <li :class="'depth-'+link.depth" v-for="link of content.toc" :key="link.id">
                                        <a role="button" class="transition-colors duration-75 text-base mb-2 block "
                                          :href="`#${link.id}`">{{ link.text }}</a>
                                      </li>
                                    </ul>
                                  </nav>
                                </div>

                                <div class="related-box sticky top-16 mt-4 pt-3">
                                  <h4
                                    class="text-black font-h2 text-lg lg:mt-16 tracking-wider"
                                  >
                                    {{$t('Related Articles')}}
                                  </h4>
                                  <nav >
                                    <ul class="related" >
                                      <li class="small" v-for="(rContent,i) of related" :key="'related-'+i">
                                        <router-link role="button" class="transition-colors duration-75 text-base mb-2 block "
                                                     :to="`/${prefix}${rContent.dir}`">{{ rContent.title }}
                                        </router-link>

                                      </li>
                                    </ul>
                                  </nav>
                                </div>



                                <div class="tags-box sticky top-16 mt-4 pt-3">
                                  <h4 class="text-black font-h2 text-lg lg:mt-16 tracking-wider">
                                    {{$t('Tags')}}
                                  </h4>
                                  <router-link :to="`/${prefix}/tag/tag/?tag=${tag}`" role="button" class="badge badge-primary ml-2"  v-for="(tag,i) of content.tags||[]" :key="'tag-'+i">
                                  {{tag}}
                                  </router-link>
                                </div>
                              </aside>
                              <div class="content-container col-lg-9 mt-5">
                                  <nuxt-content  :document="content" tag="article"></nuxt-content>
                              </div>
                            </div>
                        </div>
                    </div>
                </card>
                <card v-else-if="contents" shadow style="margin-top: -400px"  no-body>
                  <div class="input-group">
                      <input type="search"  class="form-control" :placeholder="$t('Filter')" v-model="key"/>
                  </div>
                  <div class="px-4">
                    <div class=" py-3 ">
                      <span>{{$t(category?'in category':'Tag')}}</span>: <span class="badge badge-primary ml-2">{{$t(category)||tag}}</span>
                      <h1 class="text-center br">{{title}}</h1>

                      <div class="row justify-content-center border-top">
                        <ul class="content-container col-lg-9 mt-5 list-unstyled">
                          <li v-for="(c,i) of contents" :key="'item'+i">
                            <router-link :to="'/'+prefix+c.dir">
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
      key:'',
      // category:null,
      // content:null,
      // contents:null,
      // filename:null,
    }
  },
  async asyncData (args) {
    const {$content,query,params} =args;

    console.log(query,params)
    let content=null;
    let related=[];
    let contents=null;
    let category=params.category;
    let tag=query.tag;
    if (tag||category==='tag') {
      if (!tag) tag=params.content;
      category=null;
      params.content=null;
    }
    let filename=params.content;
    let lang=params.lang || $nuxt.$locale().code;
    if (filename) {
      content = await $content(`${category}/${filename}/${lang}`).fetch();
      if (content.tags?.length){
        for (const tag of content.tags) {
          let result = await $content('/',{ deep: true }).without(['body']).where({slug:lang,tags:{$contains:tag}}).fetch();
          for (const c of result) {
            if (c.path===content.path) continue;
            if (related.findIndex(o=>o.path===c.path)<0) related.push(c);
          }
        }
      }
    }
    else {
      if (category){
        contents = await $content(category,{ deep: true }).without(['body']).where({slug:lang}).sortBy('order','asc').fetch();

      }
      else {
        contents = await $content('/',{ deep: true }).without(['body']).where({slug:lang,tags:{$contains:tag}}).fetch();

      }
    }
    return {$content,category,filename,contents,content,lang,related,tag}
  },
  watch:{
    async key(val){
      let where={slug:this.lang};
      if (val) {
        where.title = {$contains: val.split(' ')};
      }
      let category=this.category;

      if (category){
        this.contents = await this.$content(category,{ deep: true }).without(['body']).where(where).sortBy('order','asc').fetch();
      }
      else {
        where.tags={$contains:this.tag};
        this.contents = await this.$content('/',{ deep: true }).without(['body']).where(where).fetch();
      }



    }
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
    // async init($content,query,params){
    //   let content=null;
    //   let contents=null;
    //   let category=params.category;
    //   let filename=params.content;
    //   let lang=params.lang || $nuxt.$locale().code;
    //   if (filename) content = await $content(`${category}/${filename}/${lang}`).fetch();
    //   else {
    //     contents = await $content(category,{ deep: true }).fetch();
    //     let lang=this.prefix;
    //     contents=contents.filter(c=>{return c.slug===lang});
    //   }
    //
    //   // console.log(contents);
    //   this.category=category;
    //   this.filename=filename;
    //   this.contents=contents;
    //   this.content=content;
    //
    // },
    getContentName(dir){
      let cat=this.category||'/';
      let name=dir.substring(dir.indexOf(cat)+cat.length+1);
      // name=name.substring(0,name.length-1)
      // console.log(name);
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

  // watchQuery(newQuery, oldQuery){
  //   this.init(this.$content,newQuery)
  // }
};
</script>
<style lang="scss" >
.content-container{
  img{
    margin-right: auto;
    margin-left: auto;
    display: block;
  }
}
.toc {
  list-style: none;
  padding: 0 0 0 0;
  line-height: 2;
  font-size: 85%;
}
aside h4{
  background: #f4f4f4;
  padding: 5px;
  text-align: center;
}
.related {
  list-style: none;
  padding: 0 0 0 0;
  line-height: 1.3;
  margin: 0 -7px 0 -19px;

  li {
    border-bottom: 1px dashed #cbcbcb;
    margin-top: 5px;
    padding: 5px;
  }
}
.rtl{
  .related {
    margin: 0 -19px 0 -7px;
  }
  .toc-container{
    border-left: 1px solid #d9d9d9;
  }
  .depth-2{
    font-weight: bold;
  }
  .depth-3{
    padding-right: 10px;
  }
}
.ltr {
  .toc-container{
    border-right: 1px solid #d9d9d9;
  }
  .depth-2{
    font-weight: bold;
  }
  .depth-3{
    padding-left: 10px;
  }
}
</style>
