import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

import { app } from '../firebaseCofig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation, setUserFromChild }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  function handleSubmitButton() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUserFromChild(user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <TextInput
          style={styles.textInput}
          mode='outlined'
          label='Email'
          value={email}
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          style={styles.textInput}
          mode='outlined'
          label='Password'
          value={password}
          onChangeText={(password) => setPassword(password)}
        />

        <Button mode='contained' onPress={handleSubmitButton}>
          Submit
        </Button>
      </KeyboardAwareScrollView>

      <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={onFooterLinkPress} style={styles.footerLink}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: '#788eec',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
