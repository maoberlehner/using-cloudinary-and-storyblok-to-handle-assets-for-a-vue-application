import api from '../utils/api';

export default {
  data() {
    return {
      content: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await api.get(`cdn/stories/${this.slug}`);
      this.content = data.story.content;
    },
  },
};
