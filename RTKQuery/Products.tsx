import { FlatList, Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '@/constants/Products'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetAllProductsQuery } from './ProductsApi'
import { Image } from 'react-native'
import { router } from 'expo-router'

const Products = () => {
  const [refreshing, setRefreshing] = useState(false);

  const { data, isError, isLoading }: any = useGetAllProductsQuery();
  console.log('results ', data?.products[0].title)
  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 1000);
  }

  const handleProduct = (product: any) => {
    router.push({
      pathname: '/ProductDetails',
      params: product
    })
  }
  
  return (
    <SafeAreaView>
      <FlatList
        data={data?.products}
        style={styles.listContainer}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => handleProduct(item)}>
            <View style={styles.card}>
              <Image source={{ uri: item.images[0] }} style={styles.img} />
              <View style={styles.list}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={{ margin: 10, paddingTop: 10 }}>{item.meta.createdAt}</Text>
                  <Text style={{ fontSize: 25, marginLeft: 10, color: 'black' }}>${item.price}</Text>
                </View>
              </View>
            </View>
            </Pressable>
          )
        }}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />

    </SafeAreaView>
  )
}

export default Products