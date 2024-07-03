import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const checkoutItems = [
  {
    id: '1',
    name: 'Recycle Boucle Knit Cardigan Pink',
    price: '$120',
    imageUrl: 'ShoppingApp/assets/dress1.png',
  },
  {
    id: '2',
    name: 'Office wear for you office',
    price: '$120',
    imageUrl: 'ShoppingApp/assets/dress4.png', 
  },
];

const CheckoutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>CHECKOUT</Text>
      {checkoutItems.map(item => (
        <View key={item.id} style={styles.product}>
          <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      ))}
      <Text style={styles.total}>Est. Total $240</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  product: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default CheckoutScreen;
