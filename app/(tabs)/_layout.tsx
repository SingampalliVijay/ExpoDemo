import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: true,
      }}>
      <Tabs.Screen name="index"
        options={{
          title: 'Products',
          tabBarIcon: ({ color, size }) =>
            <FontAwesome name='product-hunt' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="ProductDetails"
        options={{
          title: 'Product Details',
          tabBarIcon: ({ color, size }) =>
            <FontAwesome name='pencil' color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
