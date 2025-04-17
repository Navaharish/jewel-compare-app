import { useState } from 'react';
import { Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ComparisonButton from '@/components/ComparisonButton';

// Sample jewelry data - replace with your actual data source
const jewelryItems = [
  {
    id: '1',
    image: require('../../assets/images/ring1.jpg'),
    productType: 'Diamond Ring',
    goldKaratage: 18,
    goldWeight: 5.2,
    diamondWeight: 1.5,
    totalPrice: 2500,
    laborCharges: 200,
    designCode: 'DR-001'
  },
  {
    id: '2',
    image: require('../../assets/images/ring3.jpg'),
    productType: 'Gold Ring',
    goldKaratage: 22,
    goldWeight: 4.8,
    diamondWeight: 0.8,
    totalPrice: 1800,
    laborCharges: 150,
    designCode: 'GR-001'
  },
  // Add more items as needed
];

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredItems = jewelryItems.filter(item => {
    const matchesSearch = item.productType.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.designCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = (!minPrice || item.totalPrice >= Number(minPrice)) &&
                        (!maxPrice || item.totalPrice <= Number(maxPrice));
    return matchesSearch && matchesPrice;
  });

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>Browse Jewelry</ThemedText>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by type or design code"
          placeholderTextColor="#F8F6F0"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <ThemedView style={styles.priceFilter}>
          <TextInput
            style={styles.priceInput}
            placeholder="Min Price"
            placeholderTextColor="#F8F6F0"
            value={minPrice}
            onChangeText={setMinPrice}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.priceInput}
            placeholder="Max Price"
            placeholderTextColor="#F8F6F0"
            value={maxPrice}
            onChangeText={setMaxPrice}
            keyboardType="numeric"
          />
        </ThemedView>
      </ThemedView>

      {filteredItems.map((item) => (
        <ThemedView key={item.id} style={styles.productCard}>
          <Image 
            source={item.image}
            style={styles.productImage}
          />
          <ThemedView style={styles.productDetails}>
            <ThemedText type="subtitle" style={styles.productTitle}>{item.productType}</ThemedText>
            <ThemedText style={styles.productInfo}>Gold: {item.goldKaratage}K</ThemedText>
            <ThemedText style={styles.productInfo}>Diamond: {item.diamondWeight}ct</ThemedText>
            <ThemedText style={styles.productInfo}>Price: ${item.totalPrice}</ThemedText>
            <ComparisonButton item={item} />
          </ThemedView>
        </ThemedView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6F0',
  },
  header: {
    padding: 16,
    backgroundColor: '#D4AF37',
    
  },
  title: {
    color: '#F8F6F0',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
  
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 8,
    backgroundColor: '#6B4C9A',
    color: '#F8F6F0',
  },
  priceFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  priceInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 4,
    backgroundColor: '#6B4C9A',
    color: '#F8F6F0',
  },
  productCard: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#F8F6F0',
    margin: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D4AF37',
    shadowColor: '#6B4C9A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productTitle: {
    color: '#6B4C9A',
    marginBottom: 8,
  },
  productInfo: {
    color: '#6B4C9A',
    marginBottom: 4,
  },
});
