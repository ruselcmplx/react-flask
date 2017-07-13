({
  preserveLicenseComments: false,
  optimize: "uglify2",
  uglify2: {
    output: {
      beautify: false,
      comments: false
    },
    compress: {
      drop_console: true
    }
  },
  paths: {
    jquery: "empty:",
    jsx: "vendors/jsx-requirejs-plugins/js/jsx",
    JSXTransformer: "vendors/jsx-requirejs-plugins/js/JSXTransformer",
    text: "vendors/requirejs-text/text",
    react: "vendors/react/react-with-addons.min",
    createReactClass: "vendors/create-react-class/create-react-class",
    bootstrap: "vendors/bootstrap"
  },
  jsx: {
    fileExtension: ".jsx"
  },
  stubModules: ["jsx", "JSXTransformer", "text"]
});
