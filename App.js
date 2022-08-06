/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Provider } from 'react-redux'
import store from './store';


const App=()=>{

  return (
    <Provider store={store}>
    <View>
    </View>
    </Provider>
  )
}
export default App