
import React from 'react';

import { Provider } from 'react-redux'
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import LogIn from './screens/Login';
import Chats from './screens/Chats';
import Loading from './screens/Loading';

const Stack = createNativeStackNavigator();
const App=()=>{
  

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Loading" options={{headerShown:false}} component={Loading} />
      <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Chats" component={Chats} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}
export default App

