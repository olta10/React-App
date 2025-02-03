import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QyshDush from './screens/QyshDush';
import Products from './screens/Products';
import ProductDetailScreen from './screens/ProductDetailScreen';
const Stack = createStackNavigator();  // Correct the stack creation


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: "Login Screen" }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: "Welcome Screen" }} />
        <Stack.Screen name="QyshDush" component={QyshDush} options={{ title: "QyshDush Screen" }} />
        <Stack.Screen name="Products" component={Products} options={{ title: "Products Screen" }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
