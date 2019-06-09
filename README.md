# html2json

> Transform HTML in JSON string

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html2json --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html2json');
```

## The "html2json" task

### Overview
In your project's Gruntfile, add a section named `html2json` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html2json: {
    options: {
      // Task-specific options go here.
    },
     dist: { // or any other target
       src: ['src/*.txt', 'src/*.html'],
       dest: 'dist/templates.json'
    }
  },
});
```

### Options

#### options.pretty_print
Type: `boolean`
Default value: `false`

Pretty print or not final JSON. 

#### options.htmlmin
Type: `boolean`
Default value: `true`

Enable HTML minification.

#### options.htmlmin

See the `html-minifier` [options](https://github.com/kangax/html-minifier#options-quick-reference).
 


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 0.1
    - Transform any html in json string, where key is your file path.
    - Minimize or pretty print JSON data
    - Added support for HTML minification
