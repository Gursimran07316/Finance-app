import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import * as database from '../database';
const TransactionsListScreen = ({ navigation }) => {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    (async () => {
      const data = await database.load()
      setTransactions(data)
    })()
  })
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.amount}>${item.amount}</Text>
          </View>
        </TouchableOpacity>
      )}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: '#333',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default TransactionsListScreen;
