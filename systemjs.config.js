(function(global) {
  System.config({
    transpiler: 'ts',
    typescriptOptions: {
      experimentalDecorators: true,
      emitDecoratorMetadata: true
    },
    paths: {
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      rxjs: 'npm:rxjs',
      ts: "npm:plugin-typescript/lib/plugin.js",
      typescript: 'npm:typescript/lib/',
      moment: 'npm:moment/min/moment.min.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      '.': {
        defaultExtension: 'ts'
      },
      app: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      typescript: {
        main: "typescript.js",
        meta: {
          "typescript.js": {
            exports: "ts"
          }
        }
      }
    }
  });
})(this);
