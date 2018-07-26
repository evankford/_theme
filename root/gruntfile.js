//Gruntfile

//Basic setup w/ watch task

//Wrapper for all grunt actions
module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'sasssrc/style-raw.css': 'sass/style.scss'
                }
            }
        },
        autoprefixer: {
            base: {
                options: {
                    browsers: ['last 2 versions', '> 5%']
                },
                src: 'sasssrc/style-raw.css',
                dest: 'sasssrc/style-big.css'
            }
        },
        cssmin: {
            min: {
                files: [{
                    src: 'sasssrc/style-big.css',
                    dest: 'style.css'
                }]
            }
        },

        //Watch task
        watch: {
            sass: {
                files: ['sass/*', 'sass/**/*'],
                tasks: ['sass', 'autoprefixer', 'cssmin']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('deliv', ['copy:deliv']);


};