import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, Animated, Easing } from 'react-native';
import { Button } from 'react-native-paper';
import tw from 'twrnc';

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const pulseValue = new Animated.Value(1);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleLogout = () => {
    navigation.navigate('LoginScreen');
  };

  const startPulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1.8,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(pulseValue, {
          toValue: 0,
          duration: 1000, 
          useNativeDriver: true,
          easing: Easing.linear, 
        }),
      ])
    ).start();
  };

  useEffect(() => {
    if (loading) {
      startPulseAnimation();
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <Animated.Image
            source={require('./Aseests/alphasquad_tech_logo.jpg')}
            style={[styles.loaderImage, { transform: [{ scale: pulseValue }] }]}
          />
        </View>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text className="text-blue-500" style={tw`text-white text-[30px]`}>
            Welcome to AlphaSquad
          </Text>
          <Button style={{ backgroundColor: 'gray' }} mode="contained" onPress={handleLogout}>
            Logout
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderImage: {
    width: 200,
    height: 200,
  },
});

export default Home;
