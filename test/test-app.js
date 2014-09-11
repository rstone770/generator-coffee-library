/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var glob = require('glob');

var random      = (Math.random() * 1000) | 0,
    generator   = path.join(__dirname, '../generators/app');

describe('coffee-library:app', function () {
  before(function (done) {
    helpers.run(generator)
      .inDir(path.join(os.tmpdir(), './test' + random))
      .withOptions({
        'skip-install': true
      })
      .withPrompt({
        packagename: 'test-library'
      })
      .on('end', done);
  });

  it('should create all files in templates.', function () {
    var files = glob.sync(generator + '/templates/**/*.*')
      .map(function(file) {
        return path.relative(generator + '/templates', file).replace(/^_/, '');
      });

    assert.file(files);
  });

  it('should render files as templates.', function() {
    var pkg = require(process.cwd() + '/package.json');

    assert.equal(pkg.name, 'test-library');
  });
});