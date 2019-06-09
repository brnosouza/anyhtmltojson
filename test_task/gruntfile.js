module.exports = function (grunt) {
    'use strict';

    // project configuration
    grunt.initConfig({
        anyhtmltojson: {
            options: {
                pretty_print: true
            },
            dist   : {
                src : ['src/**/*'],
                dest: 'dist/templates.json'
            }
        }
    });

    // Load local tasks.
    grunt.loadTasks('../tasks');

    // Default task.
    grunt.registerTask('default', 'anyhtmltojson');
};
