requirejs.config({
  baseUrl: "/static",
  paths: {
    jquery: "vendors/jquery/dist/jquery",
    jsx: "vendors/jsx-requirejs-plugins/js/jsx",
    JSXTransformer: "vendors/jsx-requirejs-plugins/js/JSXTransformer",
    react: "vendors/react/react-with-addons",
    createReactClass: "vendors/create-react-class/create-react-class",
    react_dom: "vendors/react/react-dom",
    text: "vendors/requirejs-text/text",
    bootstrap: "vendors/bootstrap/dist"
  },
  jsx: {
    fileExtension: ".jsx"
  }
})
