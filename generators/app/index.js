'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var glob = require('glob');

var prompts = require('./prompts');

var CoffeeLibraryGenerator = yeoman.generators.Base.extend({

  prompting: function() {
    var done = this.async();

    this.prompt(prompts(this), function (props) {
      this.view = props

      done();
    }.bind(this));
  },

  writing: {
    setupEnv: function() {
      var self = this;

      glob.sync(this.sourceRoot() + "/**/*.*").forEach(function(file) {
        file = path.relative(self.sourceRoot(), file);

        self.template(file, file.replace(/^_/, ''));
      });
    }
  }
});

module.exports = CoffeeLibraryGenerator;
