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
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'/content/avatar.png'" :class="`rounded-circle ${$locale().dir}`">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                  <a class="btn btn-primary mr-4" href="https://www.linkedin.com/in/mohammad-asadi-8ab426158/" target="_blank" rel="noopener"
                                     data-toggle="tooltip" :title="$t('Connect to me')" >
                                    <i class="fa fa-linkedin-square"></i>
                                    <span class="nav-link-inner--text">{{$t('Connect to me')}}</span>
                                  </a>
                                </div>
                            </div>
<!--                            <div class="col-lg-4 order-lg-1">-->
<!--                                <div class="card-profile-stats d-flex justify-content-center">-->
<!--                                    <div>-->
<!--                                        <span class="heading">22</span>-->
<!--                                        <span class="description">Friends</span>-->
<!--                                    </div>-->
<!--                                    <div>-->
<!--                                        <span class="heading">10</span>-->
<!--                                        <span class="description">Photos</span>-->
<!--                                    </div>-->
<!--                                    <div>-->
<!--                                        <span class="heading">89</span>-->
<!--                                        <span class="description">Comments</span>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>
                        <div class="text-center mt-5">
                            <h3>{{$t('Mohammadreza Asadi')}}
                                <small class="font-weight-light ltr">(@asadidebuger)</small>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i><span class="fa fa-map-marker"></span> {{$t('Islamic Republic of Iran, Isfahan')}}</div>
                            <a href="https://mdse.ui.ac.ir/" target="_blank"><div class="h6 mt-4"><i class="ni ni-hat-3 mr-2"></i> {{$t('MDSE research group')}}</div></a>
                            <div><i class="ni  mr-2"></i> {{$t('Faculty of Computer Engineering, University of Isfahan')}}</div>
                          <br>
                            <div><i class="ni ni-briefcase-24 mr-2"></i> {{$t('AboutMeExtra')}}</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <nuxt-content :document="page"></nuxt-content>
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

  async asyncData ({ $content }) {
    const page = await $content('_microsign/profile/'+$nuxt.$locale().code).fetch();
    return {
      page
    }
  },
  head(){
    return {
      ...this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true }),
      title: this.page.title,
      meta: [
        {
          property: 'og:description',
          name: 'description',
          content: this.page.description
        },
        {
          property: 'og:title',
          name: 'title',
          content: this.page.title
        }
      ],
    }
  },
};
</script>
<style>
</style>
