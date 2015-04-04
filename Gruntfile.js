module.exports = function(grunt) {
  var cleanCssOptions;

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  grunt.initConfig({

    connect: {
      all: {
        options:{
          port: 9000, // keepalive server is 8000
          hostname: "localhost",
          keepalive: true
        },
      },
      keepalive: true,
    },
    less: {
      development: {
        options: {
          paths: ["./assets/"],
          yuicompress: true
        },
        files: {
          "./assets/css/application.css": "./assets/less/application.less",
          "./assets/css/navigation.css": "./assets/less/navigation.less"
        },
      },
    },
    watch: {
      files: "./assets/less/*.less",
      tasks: ["less"],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  grunt.registerTask('server',[
    'connect:keepalive',
    'watch',
  ]);
};