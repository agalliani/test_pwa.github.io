# test_pwa
This is a useful template to build basic Progressive Web Apps.

## First Step:
Following this tutorial to create a simple pwa: https://medium.com/james-johnson/a-simple-progressive-web-app-tutorial-f9708e5f2605

## Second Step:
Expand the pwa's behavior following some steps from google's documentation: https://codelabs.developers.google.com/codelabs/your-first-pwapp/#0 

## Third step
Implement the flutter's code building the web app from android studio.

**Important:** flutter is a Dart framework. In order to be used in web it have to be built, then Android Studio (or other equivalent alternative) will give you a js file with the same behavior of the dart files coded for the native app.

Run the following command to generate a release build: ``` $ flutter build web```.

A release build uses **dart2js** (instead of the development compiler) to produce a single JavaScript file **main.dart.js**.

You can create a release build using release mode ``` $ flutter run --release ``` or by using flutter build web. This populates a build/web directory with built files, including an assets directory, which need to be served together.

