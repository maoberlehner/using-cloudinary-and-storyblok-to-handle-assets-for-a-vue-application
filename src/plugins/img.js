import Vue from 'vue';

const defaultParameters = {
  c: `thumb`,
  f: `auto`,
  g: `center`,
  q: `auto`,
};
const imageHost = `https://res.cloudinary.com/maoberlehner/image/upload`;

export default {
  install() {
    Vue.prototype.$img = function $img(
      id = ``,
      width = 0,
      height = 0,
      parameters = {},
    ) {
      const activeParameters = { ...defaultParameters, ...parameters };

      if (width > 0) activeParameters.w = width;
      if (height > 0) activeParameters.h = height;

      const parameterString = Object.keys(activeParameters)
        .map(x => `${x}_${activeParameters[x]}`)
        .join(`,`);

      return `${imageHost}/${parameterString}/${id}`;
    };
  },
};
