/*
 * Basic sass/bourbon template
 * Goal is to create index file with bourbon and grunt dependencies
 * links to style.prod.css, main.jquery.js,
 * install gruntfile and package.json,
 * create screen.scss, along with _partials and _variables for scss
 *
 */
'use strict';

exports.description = 'Loading project scaffolding for bourbon with partials & grunt support. Git should be outside of this folder for full Wordpress support.';

exports.after = "Remember to install project dependencies with _npm install_." +
    "After that, _grunt_ tasks should work (_watch_ is the only default task.)" +
    "To install more tasks, view ~/Desktop/Work/resources/gruntfiles";

exports.warnOn = '*';

exports.template = function(grunt, init, done) {
    init.process({}, [
        init.prompt('name'),
        init.prompt('title'),
        init.prompt('description'),
        init.prompt('version'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        init.prompt('author_url', 'http://evankerrickford.com')
    ], function(err, props) {
        props.keywords = [];
        props.devDependencies = {
            "grunt": "^0.4.5",
            "grunt-autoprefixer": "^0.6.5",
            "grunt-contrib-cssmin": "^0.11.0",
            "grunt-contrib-sass": "^0.7.4",
            "grunt-contrib-watch": "^0.5.3",
        };

        init.writePackageJSON('package.json', props);

        var files = init.filesToCopy(props);

        init.copyAndProcess(files, props, {
            noProcess: '{.git/**,inc/plugins/*.zip}'
        });

        done();
    });
};