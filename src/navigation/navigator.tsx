import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TransactionDetail} from '@screens/TransactionDetail';
import {TransactionList} from '@screens/TransactionList';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TransactionDetail"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TransactionList" component={TransactionList} />
        <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
