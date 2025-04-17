import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useComparison } from '../hooks/useComparison';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ComparisonScreen = () => {
  const { comparisonItems, removeFromComparison } = useComparison();
  const navigation = useNavigation<NavigationProp>();

  if (comparisonItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No items selected for comparison</Text>
      </View>
    );
  }

  const attributes = [
    { key: 'goldKaratage', label: 'Gold Karatage' },
    { key: 'goldWeight', label: 'Gold Weight' },
    { key: 'gemstoneWeight', label: 'Gemstone Weight' },
    { key: 'totalPrice', label: 'Total Price' },
    { key: 'laborCharges', label: 'Labour Charge' },
    { key: 'designCode', label: 'Design Code' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>COMPARISON CHART</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.comparisonContainer}>
          {comparisonItems.map((item, index) => (
            <View key={item.id} style={styles.itemColumn}>
              <View style={styles.imageContainer}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => removeFromComparison(item.id)}
                >
                  <Ionicons name="close-circle" size={24} color="#000" />
                </TouchableOpacity>
                <Image 
                  source={typeof item.image === 'string' ? { uri: item.image } : item.image} 
                  style={styles.productImage} 
                />
              </View>
              {attributes.map((attr) => (
                <View key={attr.key} style={styles.attributeRow}>
                  <Text style={styles.label}>{attr.label}</Text>
                  <Text style={styles.value}>
                    {item[attr.key as keyof typeof item]}
                  </Text>
                </View>
              ))}
              {index < comparisonItems.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={styles.purchaseButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.purchaseButtonText}>Proceed to Purchase</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#C4A484',
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollView: {
    flex: 1,
  },
  comparisonContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  itemColumn: {
    flex: 1,
    marginHorizontal: 8,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  attributeRow: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  divider: {
    width: 1,
    backgroundColor: '#DDD',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: -8,
  },
  purchaseButton: {
    backgroundColor: '#C4A484',
    padding: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  purchaseButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});

export default ComparisonScreen; 