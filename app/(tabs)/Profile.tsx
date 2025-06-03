import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    Alert.alert('Saved', `Name: ${name}\nEmail: ${email}`);
    // You can add your actual save logic here (e.g. send to backend or AsyncStorage)
  };

  return (
    <ImageBackground
      source={require('../../assets/fairy.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.inner}>
          <Text style={styles.title}>Profile</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inner: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    margin: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#8B4513', // brown tone
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});