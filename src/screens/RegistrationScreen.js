import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { Button } from 'react-native-paper';

import { app } from '../../firebase/firebaseCofig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');

  function handleSubmitButton() {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onFooterLinkPress() {
    navigation.navigate('Login');
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

        <TextInput
          style={styles.textInput}
          mode='outlined'
          label='userId'
          value={userId}
          onChangeText={(userId) => setUserId(userId)}
        />

        <Button mode='contained' onPress={handleSubmitButton}>
          Submit
        </Button>
      </KeyboardAwareScrollView>

      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Already got an account?{' '}
          <Text onPress={onFooterLinkPress} style={styles.footerLink}>
            Log in
          </Text>
        </Text>
      </View>
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
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
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
