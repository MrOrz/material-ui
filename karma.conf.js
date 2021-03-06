// Karma configuration
module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: [ 'browserify', 'mocha', 'chai-sinon' ],

    files: [
      'node_modules/babel/node_modules/babel-core/browser-polyfill.js',
      'test/**/*spec.js'
    ],

    preprocessors: {
      'test/**/*spec.js': [ 'browserify' ]
    },

    browserify: {
      debug: true,
      extensions: [ '.js', '.jsx' ],
      paths: [ './node_modules', './src' ],
      transform: [
        ['babelify', {
          stage: 1,
          sourceMap: 'inline'
        }],
        'browserify-istanbul'
      ]
    },

    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      dir: 'coverage',

      subdir: function(browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
      },

      reporters: [
        // Uncomment when 'TypeError: Cannot read property 'text' of undefined' has been addressed in Istanbul.
//        { type: 'html', subdir: '.' },
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.' }
      ]
    },

    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: false,
    browsers: [ 'PhantomJS' ]
  })
}
