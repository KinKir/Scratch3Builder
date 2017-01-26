var path = require('path')
var connect = require('connect');
var serveStatic = require('serve-static');
try {
connect().use(serveStatic(path.join(__dirname, 'editor'))).listen(8080, function(){
    console.log('Server running on 8080...');
});
}
catch (e) {
    console.log(e);
}
