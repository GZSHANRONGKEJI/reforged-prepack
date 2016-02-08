//Thisis boilerplate and will likely change

const Hapi = require('hapi');
const Good = require('good');
var config = require(__dirname+"/config.js");


const r = require('rethinkdbdash')();

/*rethink stuff*/

r
  .db('test')
  .tableCreate('authors')
  .run()
  .then((data) => {
    console.log(data)
  });







const server = new Hapi.Server();
server.connection({port: config.hapi.port});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./public/index.html');
        }
    });
});


server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, (err) => {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(() => {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});


server.start(() => {
    console.log('Server running at:', server.info.uri);
});
