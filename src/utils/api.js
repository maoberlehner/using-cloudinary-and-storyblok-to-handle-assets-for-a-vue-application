import StoryblokClient from 'storyblok-js-client';

export default new StoryblokClient({
  accessToken: process.env.VUE_APP_ACCESS_TOKEN,
  cache: {
    clear: `auto`,
    type: `memory`,
  },
});
