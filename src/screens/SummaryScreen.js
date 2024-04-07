import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as database from '../database';

const SummaryScreen = () => {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    (async () => {
      const data = await database.load()
      setTransactions(data)
    })()
  })
  let totalExpenses=0,highSpending=0,lowSpending=0
if(transactions.length!=0){
   totalExpenses = transactions.reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0).toFixed(2);
   highSpending = transactions.length>1 ? transactions.reduce((prev, current) => (parseFloat(prev.amount) > parseFloat(current.amount)) ? prev : current): transactions[0];
  lowSpending = transactions.length>1 ? transactions.reduce((prev, current) => (parseFloat(prev.amount) < parseFloat(current.amount)) ? prev : current): transactions[0];
}
  // Mock balance - you can adjust as needed
  const balance = 1000 - totalExpenses;

  return (
    <View style={styles.container}>
      <View style={styles.summaryItem}>
        <Text>Total Transactions:</Text>
        <Text>{transactions.length}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text>Balance:</Text>
        <Text>${balance.toFixed(2)}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text>High Spending:</Text>
        <Text>{highSpending.name} - ${highSpending.amount}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text>Low Spending:</Text>
        <Text>{lowSpending.name} - ${lowSpending.amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  summaryItem: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f9f9f9', // Light grey background for each item
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd', // Light grey border color
    borderRadius: 5, // Slightly rounded corners for the items
    marginTop: 5,
  }
});

export default SummaryScreen;



