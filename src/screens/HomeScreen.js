import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreenNavigator from './CategoriesScreenNavigator';
import ChatScreen from './ChatScreen';

export default function HomeScreen() {
  const Tab = createBottomTabNavigator();
  const [location, setLocation] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='CategoriesScreenNavigator'
        component={CategoriesScreenNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name='Chat' component={ChatScreen} />
    </Tab.Navigator>
  );
}
