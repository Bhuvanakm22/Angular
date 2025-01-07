# Url Shortener - Angular Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2 to integrate with the repository https://github.com/thiaguimcavalcanti/url-shortener creating a UI to shorten a URL.

##Recommended Upgrade approach for Angular
Upgrade approach for Angular 6 to 17 Though the best practice is to do a step-by-step upgrade, one major version at a time, it can be safely avoided in many cases.

Based on consideration of the timelines of breaking changes, this 4 stage upgrade will be the easiest:

Stage 1: Upgrade from Angular version 6 to 9
Stage 2: Upgrade from Angular 9 to 11
Stage 3: Upgrade from Angular 11 to 12 or 13
Stage 4: Upgrade from Angular 12/13 to 17

##To make the upgrade with the faster way but bad 
This will not be Recommended. If we need to make the version upgrade in a quickly manner for any reason. Here is one of the approach which I tried. 
To list outed versions and the latest versions
npm outdated
Update the latest package version manually in package.json under the dependencies or devDependencies section.
Install the updated packages by running:
npm install
npm install --legacy-peer-deps
npm install protractor@latest --save-dev --force
npm install @angular-devkit/build-angular@latest --save-dev --force
npm install codelyzer@latest --save-dev --force
npm install @angular/compiler-cli@latest --save-dev --force
npm install typescript@5.6.3 --save-dev --force

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
