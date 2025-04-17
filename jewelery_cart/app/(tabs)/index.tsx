import { Image, StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import { necklaces } from '@/data/products';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const categories = [
  {
    id: 'necklace',
    name: 'Necklace',
    image: require('../../assets/images/necklace1.jpg'),
    items: necklaces
  },
  {
    id: 'ring',
    name: 'Ring',
    image: require('../../assets/images/ring1.jpg'),
    items: []
  },
  {
    id: 'earring',
    name: 'Earring',
    image: require('../../assets/images/earring1.jpg'),
    items: []
  },
  {
    id: 'bracelet',
    name: 'Bracelet',
    image: require('../../assets/images/bracelet1.jpg'),
    items: []
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Select Categories</ThemedText>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.categoriesGrid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => {
                navigation.navigate('CategoryProducts', {
                  category: category.name,
                  items: category.items
                });
              }}
            >
              <Image source={category.image} style={styles.categoryImage} />
              <ThemedText style={styles.categoryName}>{category.name}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
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
    padding: 20,
    paddingTop: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
  scrollView: {
    flex: 1,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  categoryName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    paddingVertical: 10,
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
