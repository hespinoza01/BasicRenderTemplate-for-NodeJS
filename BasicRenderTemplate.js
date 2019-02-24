const fs = require('fs');

const render = (routeFile, params) => {
  fs.readFile(routeFile, (err, html) => {
    var variableList = html.match(/[^\{\}]+(?=\})/g),

    // Iteración del archivo cargado y remplazo con el valor de la variable
    variableList.forEach((variable, i) => {
      var value = params[variable];
      html = html.replace(`{${variable}}`, value);
    });

    return html;
  });

  return "";
};


export default render;
