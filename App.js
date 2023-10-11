/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  PermissionsAndroid,
} from 'react-native';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import ApplicationNavigator from './Navigator/Application';

function App() {

  const backgroundStyle = {
    backgroundColor:  Colors.lighter,
    flex: 1
  };


  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

  return (
    <SafeAreaView style={backgroundStyle}>
      <ApplicationNavigator/>
    </SafeAreaView>
  );
}

export default App;
