'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            example: {
                port: 1337,
                base: 'example'
            },
            meta: {
                port: 1338,
                base: 'tasks'
            },
            combined: {
                port: 1339,
                combine: [
                    'example',
                    'tasks'
                ]
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    //
    grunt.registerTask('connect', ['connect:example']);

};