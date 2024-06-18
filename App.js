import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ZikirListScreen from './src/screens/ZikirListScreen';
import CounterScreen from './src/screens/CounterScreen';
import SettingScreen from './src/screens/SettingScreen';
import EsmaulHusna from './src/screens/EsmaulHusna';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ZikirListScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ZikirListScreen" component={ZikirListScreen} />
      <Stack.Screen name="CounterScreen" component={CounterScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Zikirler"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      })}>
      <Tab.Screen name="Esmaül Hüsna" component={EsmaulHusna} />
      <Tab.Screen name="Zikirler" component={StackNavigator} />
      <Tab.Screen name="Ayarlar" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  box: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default App;
