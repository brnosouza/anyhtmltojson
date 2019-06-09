# anyhtmltojson

> Transform HTML in JSON string

## Getting Started
This plugin requires Grunt `>=0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install anyhtmltojson --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('anyhtmltojson');
```

## The "anyhtmltojson" task

### Overview
In your project's Gruntfile, add a section named `anyhtmltojson` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    anyhtmltojson: {
        options: {
            // Defaults
            pretty_print  : false,
            enable_htmlmin: true,
            htmlmin       : {
                collapseWhitespace : true,
                minifyCSS          : true,
                minifyJS           : true,
                minifyURLs         : true,
                preserveLineBreaks : false,
                removeComments     : true,
                removeOptionalTags : true,
                removeTagWhitespace: true
            }
        },
        dist   : { // or any other target
            src : ['src/*.txt', 'src/*.html'],
            dest: 'dist/templates.json'
        }
    }
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
Type: `Object`

Default: 
```json
{
  "collapseWhitespace": true,
  "minifyCSS": true,
  "minifyJS": true,
  "minifyURLs": true,
  "preserveLineBreaks": false,
  "removeComments": true,
  "removeTagWhitespace": true
}
```

See the `html-minifier` [options](https://github.com/kangax/html-minifier#options-quick-reference) for more.
 


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 0.1
    - Transform any html in json string, where key is your file path.
    - Minimize or pretty print JSON data
    - Added support for HTML minification
