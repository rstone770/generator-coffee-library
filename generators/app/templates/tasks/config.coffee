module.exports =

  pkg: require "#{process.cwd()}/package.json"

  default:
    deps: ['build']

  spec:
    paths: ["#{process.cwd()}/spec/specs/**/*.coffee"]

    options:
      reporter: 'dot'

  lint:
    paths: ["#{process.cwd()}/{src,tasks,spec}/**/*.coffee"]

  build:
    paths: ["#{process.cwd()}/src/index.coffee"]

    deps: ['lint', 'spec']

    exports: '<%= view.export %>'

    out:
      dir: "#{process.cwd()}/bin"
      name: '<%= view.packagename %>.min.js'