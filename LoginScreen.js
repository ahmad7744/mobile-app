import React, { useState } from 'react';
import { View, Text, Button, StyleSheet , ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';



const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'ahmad' && password === 'ahmad123') {
      navigation.navigate('MainScreen');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('./secreens/Aseests/219d630b663aaeee35d157a37d83731f.jpg')} // Set the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} style={styles.Button} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight:'bold'
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  Button:{
    backgroundColor:"black"
  }
});

export default LoginScreen;
