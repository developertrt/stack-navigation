import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Chat from './src/container/Chat';
import Detail from './src/container/Detail';
import Home from './src/container/Home';
import Notification from './src/container/Notification';

const Stack = createStackNavigator()

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ 
          headerShown:false
        }}>
          <Stack.Screen
            name='Home'
            component={Home}
          />
          <Stack.Screen
            name='Detail'
            component={Detail}
          />
           <Stack.Screen
            name='Chat'
            component={Chat}
          />
           <Stack.Screen
            name='Notification'
            component={Notification}
            options={{ title: 'Detail Screen' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;