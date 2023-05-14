module.exports = {
  multipass: true,
  plugins: [
    'preset-default',
    {
      name: 'removeAttrs',
      params: {
        attrs: 'id',
      },
    },
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
    {
      name: 'convertStyleToAttrs',
    },
    {
      name: 'removeDimensions',
    }
  ]
};
