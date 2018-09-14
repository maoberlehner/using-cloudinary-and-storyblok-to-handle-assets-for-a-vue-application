const nodeSassMagicImporter = require(`node-sass-magic-importer`);

const PUBLIC_TOKEN = `apJYQSIkZhHzjwLd703RsQtt`;

process.env.VUE_APP_ACCESS_TOKEN = PUBLIC_TOKEN;

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        importer: nodeSassMagicImporter(),
      },
    },
  },
};
