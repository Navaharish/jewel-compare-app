import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <ThemedView style={styles.loginCard}>
        <ThemedText style={styles.title}>Sign in to your account</ThemedText>

        <TextInput
          style={styles.input}
          placeholder="ayaan@gmail.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="ayaan001"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => router.push('/(tabs)')}
        >
          <ThemedText style={styles.buttonText}>Continue</ThemedText>
        </TouchableOpacity>

        <ThemedText style={styles.orText}>Or Login with</ThemedText>

        <TouchableOpacity style={styles.socialButton}>
          <Image 
            source={require('../assets/images/google.png')} 
            style={styles.socialIcon} 
          />
          <ThemedText style={styles.socialButtonText}>Continue with Google</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image 
            source={require('../assets/images/apple.png')} 
            style={styles.socialIcon} 
          />
          <ThemedText style={styles.socialButtonText}>Continue with Apple</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B4513',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  loginCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
  },
  continueButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF7F50',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: '#666',
    marginVertical: 20,
    fontSize: 16,
  },
  socialButton: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#000',
  },
}); 