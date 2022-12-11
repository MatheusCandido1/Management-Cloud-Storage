import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard } from '../Pages/Dashboard';
import { Storage } from '../Pages/Storage';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Dashboard'}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Storage" component={Storage} />
      </Stack.Navigator>
    </NavigationContainer>
   );
}
