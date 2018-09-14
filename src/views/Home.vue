<template>
  <div class="Home">
    <h1 class="Home__headline">
      Storyblok Cloudinary Assets Demo
    </h1>
    <story-landing-page
      v-if="content"
      :content="content"
    />
  </div>
</template>

<script>
import storyblokMixin from '../mixins/storyblok';

import StoryLandingPage from '../components/StoryLandingPage.vue';

export default {
  name: `Home`,
  components: {
    StoryLandingPage,
  },
  mixins: [
    storyblokMixin,
  ],
  data() {
    return {
      slug: `home`,
    };
  },
};
</script>

<style lang="scss">
.Home {
  &__headline {
    margin-bottom: 1em;
    text-align: center;
  }
}
</style>
