import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TransactionList} from '@screens/TransactionList';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TransactionList"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TransactionList" component={TransactionList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
