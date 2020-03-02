const express       = require('express');
const bodyParser    = require('body-parser');
const config        = require('config');
const consign       = require('consign');

module.exports = () => {
    const app = express();

    // Setando as variáveis da aplicação
    app.set('port', process.env.PORT || config.get('server.port'));

    // MiddleWares
    app.use(bodyParser.json());

    consign({cwd: 'api'})
        .then('data')
        .then('controllers')
        .then('routes')
        .into(app)

    return app;
};