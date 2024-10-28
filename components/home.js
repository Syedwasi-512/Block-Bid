import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

const { width: windowWidth } = Dimensions.get('window');

const categories = ['Electronics', 'Furniture', 'Sports', 'Fashion', 'Vehicles'];
const items = [
  { id: '1', title: 'Item 1', image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Item 2', image: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Item 3', image: 'https://via.placeholder.com/150' },
];

const FeaturedAuction = () => {
  return (
    <View style={styles.auctionContainer}>
      <Text style={styles.sectionTitle}>Featured Auction</Text>
      <View style={styles.auctionItems}>
        {items.map(item => (
          <View key={item.id} style={styles.auctionItem}>
            <Image source={{ uri: item.image }} style={styles.auctionImage} />
            <Text>{item.title}</Text>
            <TouchableOpacity style={styles.bidButton}>
              <Text style={styles.bidButtonText}>Bid Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const Home = () => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item.image }} style={styles.carouselImage} />
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* First View */}
      <View style={styles.header}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.profileName}>John Doe</Text>
        </View>
        <View style={styles.rightIcons}>
          <Icon name="bell" size={24} color="#fff" />
          <Icon name="language" size={24} color="#fff" />
        </View>
      </View>
      <TextInput style={styles.searchInput} placeholder="Search" />

      {/* Second View: Categories */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={styles.categoryList}
      />

      {/* Third View: Carousel */}
      <Carousel
        data={items} // Ensure this is correctly passed
        renderItem={renderCarouselItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth - 60}
        loop={true}
      />

      {/* Fourth View: Featured Auction */}
      <FeaturedAuction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007BFF',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeContainer: {
    flexDirection: 'column',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileName: {
    color: '#fff',
    fontSize: 16,
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    margin: 20,
    elevation: 3,
  },
  categoryList: {
    paddingVertical: 10,
  },
  categoryItem: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  categoryText: {
    color: '#fff',
  },
  carouselItem: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  auctionContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  auctionItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  auctionItem: {
    alignItems: 'center',
    marginRight: 10,
    width: '30%',
  },
  auctionImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  bidButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  bidButtonText: {
    color: '#fff',
  },
});

export default Home;
