import { Image, StyleSheet, ScrollView, View, TouchableOpacity, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import { necklaces } from '@/data/products';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function CategoryProductsScreen() {
  const route = useRoute();
  const navigation = useNavigation<NavigationProp>();
  const { category } = route.params as RootStackParamList['CategoryProducts'];

  // For now, we'll just use necklaces data
  const items = necklaces;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="#666"
          />
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {items.map((item) => (
          <View key={item.id} style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <ThemedText style={styles.infoText}>Gold Karatage - {item.goldKaratage}k</ThemedText>
              <ThemedText style={styles.infoText}>Gold Weight - {item.goldWeight}</ThemedText>
              <ThemedText style={styles.infoText}>Gemstone weight - {item.gemstoneWeight}</ThemedText>
              <ThemedText style={styles.infoText}>Total price {item.totalPrice}</ThemedText>
              <ThemedText style={styles.infoText}>Labour Charge - {item.laborCharges}</ThemedText>
              <ThemedText style={styles.infoText}>Design Code - {item.designCode}</ThemedText>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home" size={24} color="#8B4513" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="search" size={24} color="#8B4513" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => navigation.navigate('Comparison')}
        >
          <Ionicons name="git-compare" size={24} color="#8B4513" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEB887',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#C4A484',
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  tabItem: {
    padding: 10,
  },
}); 