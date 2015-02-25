var Metalsmith = require('metalsmith');
var reactTemplate = require('metalsmith-react-templates');
var templates  = require('metalsmith-templates');
var browserify = require('metalsmith-browserify');
var reactify = require('reactify');

Metalsmith(__dirname)
  .clean(true)
  .use(reactTemplate({
    directory: "templates",
    nonStatic: true
  })) 
  .use(templates('handlebars'))
  .use(browserify({
    files: ['../scripts/loader.js'],
    dest: 'bundle.js',
    transforms: [reactify]
  })) 
  .destination('./build')
  .build(function(err) {
    if (err) throw err;
  }) 