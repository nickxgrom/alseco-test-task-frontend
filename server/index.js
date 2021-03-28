const express = require('express'),
    app = express(),
    config = require("../config/dev.webpack"),
    compiler = require("webpack")(config),
    history = require('connect-history-api-fallback'),
    PORT = 8080;

app.use(history())
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: 'minimal'
}))

app.use(require('webpack-hot-middleware')(compiler))

app.listen(PORT, err => {
    if (err)  {
        console.log(err)
    } else {
        console.log(`Server listening on port ${PORT}`)
    }
})