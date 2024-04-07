import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';

import * as database from '../database';
const AddTransactionScreen = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const [address, setAddress] = useState('');

  const [savingData, setSavingData] = useState(false)
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
    const day = d.getDate().toString().padStart(2, '0'); // Add leading zero if needed
    return `${year}-${month}-${day}`;
  };
  const handleAddTransaction = async () => {
    // Basic validation
    if (!name.trim() || !amount.trim() || !address.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (isNaN(amount) || Number(amount) <= 0) {
      Alert.alert('Error', 'Please enter a valid amount.');
      return;
    }
  const data=  {
        name,
        amount: parseFloat(amount),
        date: formatDate(new Date()), // Convert date to Firestore timestamp
        address,
      }
    // Add transaction to Firestore
    setSavingData(true)
    const id = await database.save(data)
    setSavingData(false)
    
    console.log("ID: ",id)
    console.log("data: ",data)
    
      Alert.alert('Success', 'Transaction added successfully!');
      setName('');
      setAmount('');
      setAddress('');
    
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Transaction Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="e.g. Starbucks"
      />
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="e.g., 12.00"
        keyboardType="numeric"
      />
     
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="e.g., 123 King St, Toronto, ON"
      />
      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 6,
  },
});

export default AddTransactionScreen;
