import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./src/screens/login"
import { Register } from "./src/screens/register"
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="login" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="register" component={Register}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}