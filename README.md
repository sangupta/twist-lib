# Twist Lib

A collection of components and utility classes to be used in
conjunction with Adobe Twist framework.

* [Available Components](#available-components)
* [Usage](#usage)
* [Dependencies](#dependencies)
* [Hacking](#hacking)
  * [Webpack](#webpack)
  * [Rollup](#rollup)
  * [Typescript](#typescript)
  * [ParcelJS](#parceljs)
* [Versioning](#versioning)
* [License](#license)

## Available Components

 * WindowSizeAware - helps with responsive page contruction
 * InfinteScroll - for the infinite scroll
 * Bootstrap components

## Usage

To use this library:

```
$ yarn install --dev twist-lib

# yarn is preferred but works with npm as well
$ npm install --save-dev twist-lib
```

To use the Bootstrap based components, include the CSS file in your
HTML source code yourself. This is done to reduce the size of the JS
bundle that changes often.

The current Bootstrap 4.1 documentation mentions to use the following
include for the CSS:

```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
```

## Dependencies

* React 16+
* Adobe Twist

## Hacking

There are 2 branches in the project:

* `master`: this includes the latest codebase
* `typescript`: this has errors in typescript compilation. See below for
more details.

### Webpack

Building via `webpack` is done:

```
$ npm run build
```

### Rollup

`rollup` compilation currently only builds `index.ts` file and generates
just the pure imports. A single bundle build via `rollup` could not be generated
due to lack of experience with the tool. 

Packaging via `rollup` was tried using:

```
$ rollup src/index.ts --format iife --name "twistlib" --file bundle.js
```

### Typescript

The source code contains type declarations to open project in Visual Studio
Code, however, the `typescript` compiler fails with errors as we cannot add
default intrinsic JSX properties.

`typescript` compiler can be fired using:

```
$ tsc
```

### ParcelJS

Hopefully we will be able to compile using ParcelJS one day via:

```
$ parcel src/index.ts
```

## Versioning

For transparency and insight into our release cycle, and for striving 
to maintain backward compatibility, `twist-lib` will be maintained under 
the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the follow format:

```
<major>.<minor>.<patch>
```

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major
* New additions without breaking backward compatibility bumps the minor
* Bug fixes and misc changes bump the patch

For more information on SemVer, please visit http://semver.org/.

## License

```
 twist-lib: Components for Adobe Twist
 Copyright (c) 2018, Sandeep Gupta

 https://sangupta.com/projects/twist-lib

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
```
