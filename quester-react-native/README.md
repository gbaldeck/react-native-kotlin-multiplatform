## React Native with Kotlin

Note that this readme assumes you are using IntelliJ. If you're using a different IDE, like Eclipse, or using gradle on the command line, then it may take some modifications to get it working.

First, follow the instructions here to install create react native app: 
https://facebook.github.io/react-native/docs/getting-started.html

Then import the top level multiplatform project into IntelliJ.

Do `npm install` in this folder.

Run the gradle `installLibsToNpm` task and then the `build` task in the `quester-react-native` module. (From the IntelliJ sidebar is easiest)

When you update any of the library versions in the `build.gradle` file you must run `clean` and then `installLibsToNpm`.

Run `npm start` and you're all set!

Look at `build.gradle`, the `libs` folder, and `.babelrc` to see what to do if you would like to install another Kotlin library through Bintray to NPM. The Bintray libraries seem to be kept more up to date than what's on NPM which is why we install from Bintray to NPM instead of directly in NPM.
