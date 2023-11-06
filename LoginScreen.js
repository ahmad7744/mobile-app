import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    const inputUsername = username;
    const inputPassword = password;

    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData !== null) {
        const user = JSON.parse(userData);
        if (user.username === inputUsername && user.password === inputPassword) {
          navigation.navigate('Home');
        } else {
          alert('Invalid credentials. Please try again.');
        }
      } else {
        alert('No user data found. Please sign up.');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  const handleSignup = () => {
    setShowSignupForm(true);
  };

  const handleBack = () => {
    setShowSignupForm(false);
  };

  const handleSignupSubmit = async () => {
    if (email && username && password && confirmPassword) {
      if (password === confirmPassword) {
        const newUser = {
          email,
          username,
          password,
        };

        try {
          await AsyncStorage.setItem('user', JSON.stringify(newUser));
          setShowSignupForm(false);
          navigation.navigate('Home');
        } catch (error) {
          console.error('Error saving user data:', error);
          alert('Failed to save user data. Please try again.');
        }
      } else {
        alert('Passwords do not match. Please make sure they are the same.');
      }
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./secreens/Aseests/alphasquad_tech_logo.jpg')} />

      {showSignupForm ? (
        <View>
          <Text style={styles.label}>Signup</Text>
          <TextInput mode='flat' style={styles.input} label="Email Address" value={email} onChangeText={setEmail} />
          <TextInput mode='flat' style={styles.input} label="Username" value={username} onChangeText={setUsername} />
          <TextInput mode='flat' style={styles.input} label="Password" value={password} onChangeText={setPassword} secureTextEntry />
          <TextInput mode='flat' style={styles.input} label="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
          <Button mode='contained' onPress={handleSignupSubmit} style={{ backgroundColor: 'gray' }}>
            Signup
          </Button>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Image source={require('./secreens/Aseests/left-arrow.png')} />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.label}>Please Enter Your Login Details</Text>
          <TextInput mode='flat' style={styles.input} value={username} onChangeText={setUsername} label="Username" />
          <TextInput mode='flat' style={styles.input} value={password} onChangeText={setPassword} secureTextEntry label="Password" />
          <Button mode='contained' title="Login" onPress={handleLogin} style={{ backgroundColor: 'gray' }}>
            Login
          </Button>
          <Button mode='text' title='Signup' onPress={handleSignup}>
            Signup
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: 260,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
});

export default LoginScreen;
