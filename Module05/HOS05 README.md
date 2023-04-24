# HOP05 - Design I
##  Learning Outcomes
1. Understand React Native fundamentals - props and state.
2. Apply React Native fundamentals to simple React Native mobile apps.
3. Analyze the simple React Native mobile apps regarding props and state.
4. Evaluate the simple React Native mobile apps regarding props and state.
5. Create a React Native mobile app using props and state.


## Resources
*	[React Native in Action](https://learning.oreilly.com/library/view/react-native-in/9781617294051/?sso_link=yes&sso_link_from=cityu-seattle)
  * [Chapter 3. Building your first React Native app](https://learning.oreilly.com/library/view/react-native-in/9781617294051/c03.xhtml)

* JavaScript
  * [Strict inequality (!==)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
  * [Strict equality (===)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)

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