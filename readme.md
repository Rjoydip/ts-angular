# TypeScript & AngularJS TodoMVC Example

TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open Source.

 _[TypeScript - typescriptlang.org](http://typescriptlang.org)_

## Learning TypeScript

The [TypeScript website](http://typescriptlang.org) is a great resource for getting started.

Here are some links you may find helpful:

* [Tutorial](http://www.typescriptlang.org/Tutorial)
* [Code Playground](http://www.typescriptlang.org/Playground)
* [Documentation](https://github.com/Microsoft/TypeScript/wiki)
* [Applications built with TypeScript](http://www.typescriptlang.org/Samples)
* [Blog](http://blogs.msdn.com/b/typescript)
* [Source Code](https://github.com/Microsoft/TypeScript)

Articles and guides from the community:

* [Thoughts on TypeScript](http://www.nczonline.net/blog/2012/10/04/thoughts-on-typescript)
* [ScreenCast - Why I Like TypeScript](https://www.youtube.com/watch?v=Mh5VQVfWTbs)

Get help from other TypeScript users:

* [TypeScript on StackOverflow](http://stackoverflow.com/questions/tagged/typescript)
* [Forums](https://github.com/Microsoft/TypeScript/issues)
* [TypeScript on Twitter](http://twitter.com/typescriptlang)

_If you have other helpful links to share, or find any of the links above no longer work, please [let us know](https://github.com/tastejs/todomvc/issues)._


## Implementation

[TypeScript](http://typescriptlang.org) is a superset of JavaScript, with optional type annotations. As any JS is valid TS, there is no interoperability issue. You could slowly convert an existing JS code-base and use JS libraries natively. You already know most of the language. It compiles back to JS.

It's attractive to people with a background in strongly typed languages, who are willing to type in more code-- classes and type annotations-- receiving the benefit of type checking on compile time. IntelliSense works better, as well.

### Ambient declarations

It is useful to have type information for the libraries you use. [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) is a nice collection of annotations by Boris Yankov.


### Files

* `*.ts` are source code files.
* `*.d.ts` are ambient declarations for libraries.
* `*.js` are generated by the compiler, except in the `js/libs` folder.
* `*.js.map` are [source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) generated by the compiler, for better debugging experience.
* `_all.ts` is a convention used to enumerate file references in the project for the benefit of the TypeScript compiler.

If the number of files grows, you could put an `_all.ts` file into each folder, move all nested references to it and reference the nested `_all.ts` from the parent `_all.ts`.

Start reading `TodoCtrl.ts` first, continue with `Application.ts` and `index.html`, then the rest of it is easy.


### AngularJS

There is very little difference between this app and the vanilla AngularJS todo app in how AngularJS is used.
The only significant difference is that dependency injection is done via annotated constructors, which allows minification of JavaScript.

It's definitely possible to convert the vanillajs todo app into TypeScript, but TypeScript's benefits are more obvious with a full blown framework and project structure.


## Running

A standalone TypeScript compiler is available on NPM.

	npm install

To compile the TypeScript in this project:

	$ npm run compile

Or use Visual Studio with the TypeScript plugin.
