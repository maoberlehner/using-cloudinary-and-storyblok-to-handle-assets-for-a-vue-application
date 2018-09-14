<template>
  <div class="StoryLandingPage">
    <div class="StoryLandingPage__image-grid">
      <div
        v-for="(imageColumn, index) in imageColumns"
        :key="index"
        class="StoryLandingPage__image-grid-column"
      >
        <app-image
          v-for="image in imageColumn"
          :key="image.id"
          :background-color="image.dominant_color"
          :height="300 / image.aspect_ratio"
          :lazy-src="$img(image.id, 300)"
          :lazy-srcset="`${$img(image.id, 600)} 2x`"
          :width="300"
          class="StoryLandingPage__image-grid-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppImage from './AppImage.vue';

export default {
  name: `StoryLandingPage`,
  components: {
    AppImage,
  },
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
  computed: {
    imageColumns() {
      const itemsPerChunk = 7;

      return this.content.image_grid.assets.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / itemsPerChunk);

        if (!resultArray[chunkIndex]) {
          // eslint-disable-next-line no-param-reassign
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);
    },
  },
};
</script>

<style lang="scss">
.StoryLandingPage {
  &__image-grid {
    display: flex;
    justify-content: center;
  }

  &__image-grid-column {
    max-width: 300px;

    &:not(:first-child) {
      margin-left: 1em;
    }
  }

  &__image-grid-image {
    &:not(:first-child) {
      margin-top: 1em;
    }
  }
}
</style>
