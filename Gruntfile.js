module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'views/js/main.min.js': ['views/js/main.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'views/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'views/css',
                    ext: '.min.css'
                }, {
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'views/pizza-min.html': 'views/pizza.html' ,    // 'destination': 'source'
                    'index-min.html': 'index.html'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
};