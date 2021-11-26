import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  function setUserFromChild(value) {
    setUser(value);
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen name='Home' component={HomeScreen} />
          ) : (
            <>
              <Stack.Screen name='Login'>
                {(props) => (
                  <LoginScreen {...props} setUserFromChild={setUserFromChild} />
                )}
              </Stack.Screen>
              <Stack.Screen
                name='Registration'
                component={RegistrationScreen}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
