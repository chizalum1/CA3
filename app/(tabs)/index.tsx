import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Rita's App!</Text>
      <Image
        source={require('../../assets/rita.jpg')} // Update path if needed
        style={styles.image}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#D7C4A3'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color:'#000',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});