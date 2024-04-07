import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionsListScreen from '../screens/TransactionsListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

const Stack = createNativeStackNavigator();

const TransactionsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#add8e6', // Light blue color
      },
      headerTintColor: '#fff', // White color for the text
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen name="TransactionsList" component={TransactionsListScreen} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Transaction Detail' }} />
  </Stack.Navigator>
);

export default TransactionsStack;
