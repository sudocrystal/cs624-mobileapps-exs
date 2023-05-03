# HOP05 Design I
##  Learning Outcomes
1. Understand React Native styles.
2. Apply and organize styles in React Native
3. Analyze the stylizing regarding View and Text components.
4. Evaluate the simple React Native mobile apps regarding styles.
5. Create a React Native mobile app using styles.

## Resources
*	[React Native in Action](https://learning.oreilly.com/library/view/react-native-in/9781617294051/?sso_link=yes&sso_link_from=cityu-seattle)
    * [Chapter 4. Introduction to styling](https://learning.oreilly.com/library/view/react-native-in/9781617294051/c04.xhtml)
    * [Source Code - React Native in Action](https://github.com/dabit3/react-native-in-action)

* React Native Props
  * [Text Style Props](https://reactnative.dev/docs/text-style-props)
    * [fontWeight](https://reactnative.dev/docs/text-style-props#fontweight)
    * [textShadowColor](https://reactnative.dev/docs/text-style-props#textshadowcolor)
  * [Layout Props](https://reactnative.dev/docs/layout-props)
    * [flex](https://reactnative.dev/docs/flexbox#flex)
  * [View Style Props](https://reactnative.dev/docs/view-style-props)
    * [shadowColor](https://reactnative.dev/docs/shadow-props#shadowcolor)

* React Native Core Components
  * [React Native - TouchableHighlight](https://reactnative.dev/docs/touchablehighlight)
  * [StyleSheet](https://reactnative.dev/docs/stylesheet)
    * [flatten](https://reactnative.dev/docs/stylesheet#flatten)
  
* React Native APIs
  * [React Native - Alert](https://reactnative.dev/docs/alert)

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
   * npm install
  * Install Expo CLI
    * npm install -g expo-cli
  * Log in your Expo account
    * expo login
  * expo start --tunnel