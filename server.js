var express= require('express'),
path = require('path'),
bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'client')));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function(){
	console.log('listening the port : 8000')
})