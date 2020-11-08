# test_pwa
This is a useful template to build basic Progressive Web Apps.

Try it: <https://agalliani.github.io/test_pwa.github.io/>

As you can see in the browser bar appears the ***+Install*** button. This PWA works also on browser and on smartphones, online and offline.

## First Step:
Create
- index.html
- service-worker.js: here we only have *install* and *fetch* functions.
- manifest.json
- manage icons

Following this tutorial to create a simple pwa: https://medium.com/james-johnson/a-simple-progressive-web-app-tutorial-f9708e5f2605


## Second Step:
We choose a chaching strategy and then build all the needed functions.

In this case I use the ***stale-while-revalidate*** strategy: 
<p align=center>
<img src="images/cm-stale-while-revalidate.png" width="300">
</p>


Expand the pwa's behavior following some steps from google's documentation: https://codelabs.developers.google.com/codelabs/your-first-pwapp/#0 

## Third step
Implement the flutter's code building the web app from android studio.

-----------------------------

**Important:** Flutter is a Dart framework. In order to be used in web it have to be built, then Android Studio (or other equivalent alternatives compatible with this framework) will give you a js file with the same behavior of the dart files coded for the native app.

Run the following command to generate a release build: ``` $ flutter build web```.

A release build uses **dart2js** (instead of the development compiler) to produce a single JavaScript file **main.dart.js**.

You can create a release build using release mode ``` $ flutter run --release ``` or by using flutter build web. This populates a build/web directory with built files, including an assets directory, which need to be served together.

