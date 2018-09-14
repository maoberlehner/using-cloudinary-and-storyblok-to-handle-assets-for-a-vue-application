<template>
  <div
    id="app"
    class="App o-container"
  >
    <view-home class="App__main"/>
  </div>
</template>

<script>
import ViewHome from './views/Home.vue';

export default {
  name: `App`,
  components: {
    ViewHome,
  },
};
</script>

<style lang="scss">
@import './assets/scss/settings/spacings';
@import './assets/scss/generic/base';
@import '{ .o-container } from ~@avalanche/object-container';

.App {
  &__main {
    padding-top: setting-spacing(xxl);
    padding-bottom: setting-spacing(xxl);
  }
}
</style>
