import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Reversible Angora Cardigan',
    price: '$120',
    description: '21WN reversible angora cardigan',
    image: 'ShoppingApp/assets/dress7.png',
  },
  {
    id: '2',
    title: 'Reversible Angora Cardigan',
    price: '$120',
    description: 'Black reversible angora cardigan',
    image: 'ShoppingApp/assets/dress2.png',
  },
  {
    id: '3',
    title: 'Reversible Angora Cardigan',
    price: '$120',
    description: 'Lame reversible angora cardigan',
    image: 'ShoppingApp/assets/dress3.png',
  },
  {
    id: '4',
    title: 'Recycle Boucle Knit Cardigan Pink',
    price: '$120',
    description: 'Recycle Boucle Knit Cardigan Pink',
    image: 'ShoppingApp/assets/dress4.png',
  },
  {
    id: '5',
    title: 'Office Wear',
    price: '$120',
    description: 'Office wear for your office',
    image: 'ShoppingApp/assets/dress1.png',
  },
];

const Item = ({ title, price, description, image }) => (
  <View style={styles.item}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text>{description}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      price={item.price}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    color: '#888',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
