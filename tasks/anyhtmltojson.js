'use strict';

const chalk = require('chalk');
const minify = require('html-minifier').minify;
const EOL = require('os').EOL;
const prettyBytes = require('pretty-bytes');

/*
 * anyhtmltojson
 * https://github.com/brnosouza/anyhtmltojson
 *
 * Copyright (c) 2019 Bruno Souza
 * Licensed under the MIT license.
 */

class AnyHTMLToJSON {
    constructor(grunt) {
        this.defaults = {
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
        };

        this.errorCount = 0;

        this.options = {};

        this.grunt = grunt;
    }

    transform(files) {
        const ret = {};

        for (let i = 0; i < files.length; i++) {
            const filepath = files[i];

            if (!this.grunt.file.isDir(filepath)) {
                const key = filepath.split('/').slice(1).join('/');
                ret[key] = this.minimize(filepath);
            }
        }

        return ret;
    }

    minimize(filepath) {
        const content = this.grunt.file.read(filepath, this.grunt.file.read);
        let minifiedHtml = content;

        if (this.options.enable_htmlmin) {
            try {
                minifiedHtml = minify(content, this.options.htmlmin);
            } catch (err) {
                this.grunt.warn(`${ filepath } ${ EOL } ${ err }`);
                this.errorCount++;
                return;
            }

            this.grunt
                .verbose
                .writeln(`Minified ${ chalk.cyan(filepath) } ${ prettyBytes(content.length) } → ${ prettyBytes(minifiedHtml.length) }`);
        }

        return minifiedHtml;
    }

    handleFinalJSON(json) {
        try {
            if (this.options.pretty_print) {
                return JSON.stringify(json, null, 4);
            } else {
                return JSON.stringify(json);
            }
        } catch (e) {
            this.errorCount++;
        }
    }

    ready() {
        const self = this;

        this.grunt.registerMultiTask('anyhtmltojson', 'Transform HTML in JSON string', function () {
            self.options = this.options(this.defaults);

            for (let i = 0; i < this.files.length; i++) {
                const file = this.files[i];
                const files = self.grunt.file.expand(file.src);

                const content = self.transform(files);

                self.grunt.file.write(file.dest, self.handleFinalJSON(content));

                // Fail task if errors were logged.
                if (self.errorCount) { return false; }
            }
        });
    }
}

module.exports = function (grunt) {
    new AnyHTMLToJSON(grunt).ready();
};
