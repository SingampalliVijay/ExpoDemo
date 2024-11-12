import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: true,
      }}>
      <Tabs.Screen name="Product"
        options={{
          title: 'Products',
          tabBarIcon: ({ color, size }) =>
            <FontAwesome name='product-hunt' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="ProductDetails"
        options={{
          title: 'ProductDetails',
          tabBarIcon: ({ color, size }) =>
            <FontAwesome name='pencil' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="RemoteConfig"
        options={{
          title: 'RemoteConfig',
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name='ab-testing' color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
