import {RootStackParamList} from '@navigation/types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TransactionDetail} from '@screens/TransactionDetail';
import {TransactionList} from '@screens/TransactionList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TransactionListScreen"
        screenOptions={{
          animation: 'fade_from_bottom',
        }}>
        <Stack.Screen
          name="TransactionListScreen"
          component={TransactionList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransactionDetailScreen"
          component={TransactionDetail}
          options={{
            title: 'Transaction Detail',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
