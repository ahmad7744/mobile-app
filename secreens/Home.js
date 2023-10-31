import { View, Text, Button } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  const handleLogout = () => {
   
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", height: "100%", alignItems: "center" }}>
      <Text style={{ fontSize: 60, color: "#00aaff" }}>Home Page</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

export default Home;
