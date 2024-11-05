import { SafeAreaView, Image, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import styles from '@/constants/Details';
import React from 'react';

export default function ProductDetails() {
  const product: any = useLocalSearchParams();

  console.log('Product ', product)

  return (
    <SafeAreaView>
      {Object.keys(product).length ?
        <View>
          <View style={styles.titleView}>
            <Text style={styles.detailTitle}>{product.title}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Image source={{ uri: product.images }} style={styles.detailImage} />
            <Text style={styles.detailPrice}>Price: ${product.price}</Text>
            <Text style={styles.detailText}>Description: {product.description}</Text>
            {/* <Text style={styles.detailText}>Created: {product.createdAt}</Text> */}
          </View>
        </View>
        :
        <View style={styles.viewContainer}>
          <Text style={styles.textContainer}> Product Details Not Available</Text>
        </View>
      }
    </SafeAreaView>
  );
}

