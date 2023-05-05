<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" :to="`/${prefix}/`">
                <img :src="`/microsign-simple-white-64.png`" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a :href="'/'+prefix">
                        <img src="/microsign-h.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>
          <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
            <router-link :to="'/'+prefix" class="nav-link"  role="button"><i class="fa fa-home d-lg-none"></i>
              <span class="nav-link-inner--text">{{$t('Home')}}</span>
            </router-link>
<!--              <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">-->
<!--                  <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">-->
<!--                      <i class="ni ni-ui-04 d-lg-none"></i>-->
<!--                      <span class="nav-link-inner&#45;&#45;text">Components</span>-->
<!--                  </a>-->
<!--                  <div class="dropdown-menu-inner">-->
<!--                      <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"-->
<!--                         class="media d-flex align-items-center">-->
<!--                          <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">-->
<!--                              <i class="ni ni-spaceship"></i>-->
<!--                          </div>-->
<!--                          <div class="media-body ml-3">-->
<!--                              <h6 class="heading text-primary mb-md-1">Getting started</h6>-->
<!--                              <p class="description d-none d-md-inline-block mb-0">Get started with Bootstrap, the-->
<!--                                  world's most popular framework for building responsive sites.</p>-->
<!--                          </div>-->
<!--                      </a>-->
<!--                      <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"-->
<!--                         class="media d-flex align-items-center">-->
<!--                          <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">-->
<!--                              <i class="ni ni-ui-04"></i>-->
<!--                          </div>-->
<!--                          <div class="media-body ml-3">-->
<!--                              <h5 class="heading text-warning mb-md-1">Components</h5>-->
<!--                              <p class="description d-none d-md-inline-block mb-0">Learn how to use Argon-->
<!--                                  compiling Scss, change brand colors and more.</p>-->
<!--                          </div>-->
<!--                      </a>-->
<!--                  </div>-->
<!--              </base-dropdown>-->
<!--              <base-dropdown tag="li" class="nav-item">-->
<!--                  <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">-->
<!--                      <i class="ni ni-collection d-lg-none"></i>-->
<!--                      <span class="nav-link-inner&#45;&#45;text">Examples</span>-->
<!--                  </a>-->
<!--                  <router-link to="/landing" class="dropdown-item">Landing</router-link>-->
<!--                  <router-link to="/profile" class="dropdown-item">Profile</router-link>-->
<!--                  <router-link to="/login" class="dropdown-item">Login</router-link>-->
<!--                  <router-link to="/register" class="dropdown-item">Register</router-link>-->
<!--              </base-dropdown>-->
            <base-dropdown tag="li" class="nav-item">
              <router-link slot="title" :to="`/${prefix}/products`" class="nav-link" data-toggle="dropdown" role="button">
                <i class="ni ni-collection d-lg-none"></i>
                <span class="nav-link-inner--text">{{$t('Products')}}</span>
              </router-link>
              <router-link :to="`/${prefix}/products/wpcrudrest`" class="dropdown-item">{{$t('WPCrudRest')}}</router-link>
            </base-dropdown>
            <router-link :to="`/${prefix}/blog`" class="nav-link"  role="button">
              <i class="fa fa-user d-lg-none"></i>
              <span class="nav-link-inner--text">{{$t('Blog')}}</span>
            </router-link>
              <router-link :to="`/${prefix}/profile`" class="nav-link"  role="button">
                <i class="fa fa-user d-lg-none"></i>
                <span class="nav-link-inner--text">{{$t('About me')}}</span>
              </router-link>
            </ul>
            <ul :class="`navbar-nav align-items-lg-center m${dir==='rtl'?'r':'l'}-lg-auto`">
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" rel="noopener"-->
<!--                       data-toggle="tooltip" title="Like us on Facebook">-->
<!--                        <i class="fa fa-facebook-square"></i>-->
<!--                        <span class="nav-link-inner&#45;&#45;text d-lg-none">Facebook</span>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"-->
<!--                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">-->
<!--                        <i class="fa fa-instagram"></i>-->
<!--                        <span class="nav-link-inner&#45;&#45;text d-lg-none">Instagram</span>-->
<!--                    </a>-->
<!--                </li>-->
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/asadidebuger/" target="_blank" rel="noopener"
                       data-toggle="tooltip" :title="$t('Follow me on twitter')">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">{{$t('Twitter')}}</span>
                    </a>
                </li>
              <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.linkedin.com/in/asadidebuger/" target="_blank" rel="noopener"
                       data-toggle="tooltip" :title="$t('Connect to me')">
                        <i class="fa fa-linkedin-square"></i>
                        <span class="nav-link-inner--text d-lg-none">{{$t('Linkedin')}}</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/asadidebuger/"
                       target="_blank" rel="noopener" data-toggle="tooltip" :title="$t('Follow me on github')">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">{{$t('Github')}}</span>
                    </a>
                </li>


                  <b-btn
                    class="locale btn-sm nav-item" v-for="locale in locales" :key="locale.code"
                    @click="switchLocalePath(locale.code)">{{ locale.name }}
                  </b-btn>

            </ul>
        </base-nav>
    </header>
</template>
<script>
// const menus =import('../content/menu');
export default {
  data() {
    return {
      // menu: menus,
    }
  },
  // mounted() {
  // },
  methods:{
    async switchLocalePath(code){
      // console.log(code);
      let to='/'
      let currentCode=this.$locale().code;
      let path=this.$route.fullPath;
      if (!path.startsWith('/'+currentCode)) to= '/'+code+path;
      else to= path.replace('/'+currentCode,'/'+code);

      await this.$router.push(to);
    },

  },
  computed: {
    prefix() {
      return this.$locale().code;
    },
    locales () {
      return this.$i18n.locales.filter(i => i.code !== this.$locale().code);
    },
    dir(){
      return this.$locale().dir;
    }

  },
};
</script>
<style>
.locale{
  color: white;
}

</style>
