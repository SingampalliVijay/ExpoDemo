import { store } from '@/RTKQuery/Store';
import Login from '@/screens/Login';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      {/* <Login /> */}
    </Provider>
  );
}
