do require('chai').should

index = require "#{process.cwd()}/src/index"

describe 'index', () ->

  it 'should expose a mustache compatible \'name\'.', () ->
    index.name.should.equal '{{name}}'