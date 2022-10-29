<template>
  <div>

    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-8">
                <h1 class="display-3  text-white">{{ page.title }}
                  <span>{{ page.description }}</span>
                </h1>

                <p class="lead  text-white"><nuxt-content :document="page"></nuxt-content></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
<!--    <section class="section section-lg pt-lg-0 mt&#45;&#45;200">-->
<!--      <div class="container">-->
<!--        <div class="row justify-content-center">-->
<!--          <div class="col-lg-12">-->
<!--            <div class="row row-grid">-->
<!--              <div class="col-lg-4">-->
<!--                <card class="border-0" hover shadow body-classes="py-5">-->
<!--                  <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">-->
<!--                  </icon>-->
<!--                  <h6 class="text-primary text-uppercase">Download Argon</h6>-->
<!--                  <p class="description mt-3">Argon is a great free UI package based on Bootstrap 4-->
<!--                    that includes the most important components and features.</p>-->
<!--                  <div>-->
<!--                    <badge type="primary" rounded>wordpress</badge>-->
<!--                    <badge type="primary" rounded>plugin generator</badge>-->
<!--                    <badge type="primary" rounded>mdse</badge>-->
<!--                  </div>-->
<!--                  <base-button tag="a" href="#" type="primary" class="mt-4">-->
<!--                    Learn more-->
<!--                  </base-button>-->
<!--                </card>-->
<!--              </div>-->
<!--              <div class="col-lg-4">-->
<!--                <card class="border-0" hover shadow body-classes="py-5">-->
<!--                  <icon name="ni ni-istanbul" type="success" rounded class="mb-4">-->
<!--                  </icon>-->
<!--                  <h6 class="text-success text-uppercase">Build Something</h6>-->
<!--                  <p class="description mt-3">Argon is a great free UI package based on Bootstrap-->
<!--                    4 that includes the most important components and features.</p>-->
<!--                  <div>-->
<!--                    <badge type="success" rounded>business</badge>-->
<!--                    <badge type="success" rounded>vision</badge>-->
<!--                    <badge type="success" rounded>success</badge>-->
<!--                  </div>-->
<!--                  <base-button tag="a" href="#" type="success" class="mt-4">-->
<!--                    Learn more-->
<!--                  </base-button>-->
<!--                </card>-->
<!--              </div>-->
<!--              <div class="col-lg-4">-->
<!--                <card class="border-0" hover shadow body-classes="py-5">-->
<!--                  <icon name="ni ni-planet" type="warning" rounded class="mb-4">-->
<!--                  </icon>-->
<!--                  <h6 class="text-warning text-uppercase">Prepare Launch</h6>-->
<!--                  <p class="description mt-3">Argon is a great free UI package based on Bootstrap-->
<!--                    4 that includes the most important components and features.</p>-->
<!--                  <div>-->
<!--                    <badge type="warning" rounded>marketing</badge>-->
<!--                    <badge type="warning" rounded>product</badge>-->
<!--                    <badge type="warning" rounded>launch</badge>-->
<!--                  </div>-->
<!--                  <base-button tag="a" href="#" type="warning" class="mt-4">-->
<!--                    Learn more-->
<!--                  </base-button>-->
<!--                </card>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->


  </div>
</template>

<script >
export default {
  name: 'index',
  layout: 'default',
  async asyncData({$content}) {
    console.log('microsign v2');
    let path = `_microsign/home/${$nuxt.$locale().code}`;
    const page = await $content(path).fetch();
    return {
      page
    }
  },
  head() {
    return {
      ...this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true }),
      title: this.title,
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
  computed: {
    title() {
      return this.$t('microsign');
    }
  }
}
</script>
