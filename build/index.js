'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes/routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.get('/users', _routes.getAll);
app.get('/users/:user_id', _routes.getUser);
app.post('/users', _routes.postUser);
app.put('/users/:id', _routes.updateUser);
app.delete('/users/:id', _routes.deleteUser);

app.listen(80);