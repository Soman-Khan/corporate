var path = require('path');

module.exports= {
     mode: "none",
    entry: "./app/assets/scripts/app.js",
    output: {
        path: path.resolve(__dirname,"./app/temp/scripts/"),
        filename: "App.js"
    }
}
