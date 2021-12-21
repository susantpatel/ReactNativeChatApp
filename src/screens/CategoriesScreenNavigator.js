import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './CategoriesScreen';
import FilteredDoctorsScreen from './FilteredDoctorsScreen';

const Stack = createNativeStackNavigator();

export default function CategoriesScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='CategoriesScreen' component={CategoriesScreen} />
      <Stack.Screen
        name='FilteredDoctorsScreen'
        component={FilteredDoctorsScreen}
      />
    </Stack.Navigator>
  );
}
