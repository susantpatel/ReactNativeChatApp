import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

import { app } from '../firebaseCofig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  function handleSubmitButton() {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
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
});
