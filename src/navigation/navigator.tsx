import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TransactionDetail} from '@screens/TransactionDetail';
import {TransactionList} from '@screens/TransactionList';

import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TransactionListScreen"
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
        }}>
        <Stack.Screen
          name="TransactionListScreen"
          component={TransactionList}
        />
        <Stack.Screen
          name="TransactionDetailScreen"
          component={TransactionDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
