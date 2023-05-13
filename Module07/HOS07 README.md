# HOP07 Navigation I
##  Learning Outcomes
1. Understand the differences between React Native navigation and web navigation.
2. Apply the React Native navigation to a simple navigation-based mobile app.
3. Analyze the navigation-based mobile apps regarding React Native navigation.
4. Evaluate the navigation-based mobile apps regarding React Native navigation.
5. Create a navigation-based mobile app using the navigation.

## Resources
* [React Native in Action](https://learning.oreilly.com/library/view/react-native-in/9781617294051/?sso_link=yes&sso_link_from=cityu-seattle)
    * [Chapter 6. Navigation](https://learning.oreilly.com/library/view/react-native-in/9781617294051/c06.xhtml)
    * [Source Code - React Native in Action](https://github.com/dabit3/react-native-in-action)
    
* [React Navigation Org - Getting Started](https://reactnavigation.org/)
    * Stack-based Navigation
      * [Hello React Navigation](https://reactnavigation.org/docs/hello-react-navigation)
      * [Moving between screens](https://reactnavigation.org/docs/navigating)
      * [Passing parameters to routes](https://reactnavigation.org/docs/params)
    * Tab-based Navigation
      * [Minimal example of tab-based navigation](https://reactnavigation.org/docs/tab-based-navigation#minimal-example-of-tab-based-navigation)
    * Drawer-based Navigation
      * [Minimal example of drawer-based navigation](https://reactnavigation.org/docs/drawer-based-navigation#minimal-example-of-drawer-based-navigation)
    * [React Navigation - NavigationContiner](https://reactnavigation.org/docs/navigation-container/)

  *JavaScript
    * [JavaScript Merge Objects](https://www.scaler.com/topics/javascript-merge-objects/)

  * [npm uuid](https://www.npmjs.com/package/uuidv4)
    * A UUID (Universal Unique Identifier) is a 128-bit value used to uniquely identify an object or entity on the internet.


## Skills
* Node
  * node --version
  * npx --version
  * npm --version
* Expo
  * Create a mobile app
    * **expo init my-mobile-app**
    * **cd my-mobile-app**
  * Install Expo CLI
    * **npm install -g expo-cli**
  * Create your account in [Expo](https://expo.dev/)
  * Log in your Expo account
    * **expo login**
  * Update your dependencies
    * **npm install**
  * Start your Expo React native mobile app
     * **expo start --tunnel**

  * React Navigation
    * Install React Naviation.
      * React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app.
      * **npm install @react-navigation/native**
    * Install dependencies into an Expo managed project
      * **npx expo install react-native-screens react-native-safe-area-context**
    * Install the tab-based navigation library.
      * **npm install @react-navigation/bottom-tabs**
    * Install the stack-based navigation library.
      * **npm install @react-navigation/native-stack**
  * uuid (if the Expo version is  >= 47). 
    * **npm install uuidv4**
  
  ### Techncial Challenge
* WARNING: The legacy expo-cli does not support Node +17. Migrate to the versioned Expo CLI (npx expo).
  * [Expo's Answer](https://github.com/expo/expo/issues/21026)
    * Try downgrading the node version to 16 run this on your terminal
    ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    ```
    * then use node version manager (nvm) to downgrade the current node run this code
    ```sh
    nvm install 16.17.0
    ```
   * after this command, you can now use "expo start" in your app.
    
