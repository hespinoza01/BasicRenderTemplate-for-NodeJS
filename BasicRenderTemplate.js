'use strict';

const fs = require('fs');

const render = (routeFile, params) => {

  let html = fs.readFileSync(routeFile).toString(),
      variableList = html.match(/[^\{\}]+(?=\})/g);

    // Iteración del archivo cargado y remplazo con el valor de la variable
    variableList.forEach((variable, i) => {
      let value = params[variable];
      html = html.replace(`{${variable}}`, value);
    });

  console.log("r: ", html);
  return html;
};


module.exports.render=render;
