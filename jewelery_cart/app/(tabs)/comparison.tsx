import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ComparisonScreen from '../../components/ComparisonScreen';

export default function ComparisonTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compare Products</Text>
      <ComparisonScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
}); 