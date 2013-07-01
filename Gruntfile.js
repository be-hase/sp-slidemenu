module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            min: {
                files: {
                    'sp-slidemenu-min.js': [
                        'sp-slidemenu.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};