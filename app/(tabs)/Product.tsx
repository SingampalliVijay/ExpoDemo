import Products from '@/RTKQuery/Products';
import Login from '@/screens/Login';
import { View } from 'react-native';
import ProductDetails from './ProductDetails';

export default function TabOneScreen() {
  return (
    <View>
      <Products/>
    </View>
  );
}
