import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatView from './src/pages/ChatView';
import { Provider } from 'react-redux';
import store from './src/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Chat" component={ChatView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}