module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false
        }
      }
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            preserveAspectRatio: "xMidYMid meet",
            fill: "none",
            stroke: "none",
          }
        ]
      }
    },
    {
      name: "convertColors",
      params: {
        currentColor: true,
        names2hex: true,
        rgb2hex: true,
        shorthex: true,
      }
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "*:class" // remove class attribute from all elements
      }
    },
    "reusePaths",
    "sortAttrs",
    "removeXlink",
    "removeXMLNS",
  ]
}
