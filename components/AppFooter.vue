<template>
    <footer class="footer has-cards">
        <div class="container">
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                  <a target="_blank" rel="noopener" href="https://twitter.com/asadidebuger/"
                     class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                     data-original-title="Follow us">
                    <i class="fa fa-twitter"></i>
                  </a>
<!--                  <a target="_blank" rel="noopener" href="https://www.facebook.com/creativetim"-->
<!--                     class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"-->
<!--                     data-original-title="Like us">-->
<!--                    <i class="fa fa-facebook-square"></i>-->
<!--                  </a>-->
<!--                  <a target="_blank" rel="noopener" href="https://dribbble.com/creativetim"-->
<!--                     class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"-->
<!--                     data-original-title="Follow us">-->
<!--                    <i class="fa fa-dribbble"></i>-->
<!--                  </a>-->
                  <a target="_blank" rel="linkedin" href="https://www.linkedin.com/in/mohammad-asadi-8ab426158/"
                     class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                     data-original-title="Connect to me">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a target="_blank" rel="noopener" href="https://github.com/asadidebuger/"
                     class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                     data-original-title="Star on Github">
                    <i class="fa fa-github"></i>
                  </a>
                  <a class="mr-5" href="https://microsign.ir" target="_blank" rel="noopener">&copy; {{year}}{{$t('microsign')}}</a>

                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">

                        <li class="nav-item">
                          <router-link :to="`/${prefix}/profile`" class="dropdown-item">{{$t('About me')}}</router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
  computed: {
    prefix() {
      return this.$locale().code;
    }
  }
};
</script>
<style>
</style>
