module.exports = function(generator) {
  return [
    {
      name: 'packagename',
      message: 'What is will your package be named?',
      default: generator.appname
    },

    {
      name: 'packagedescription',
      message: 'Add a short description of your package.',
      default: ""
    },

    {
      name: 'giturl',
      message: 'Please provide a git repo for this package.'
    },

    {
      name: 'export',
      message: 'Please provide a global export name.',
      default: generator.appname
    }
  ]
}