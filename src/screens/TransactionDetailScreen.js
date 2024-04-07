import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detailCard}>
        
        <Text style={styles.amount}>${transaction.amount}</Text>
        <Text style={styles.title}>{transaction.name}</Text>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.value}>{transaction.date}</Text>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>{transaction.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5', // Light gray background for contrast
  },
  detailCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // for Android
    padding: 20,
    width: '90%', // Adjust based on your layout preferences
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center', // Center title text
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50', // A green color for the amount to stand out
    marginBottom: 20,
    textAlign: 'center', // Center amount text
  },
  label: {
    fontSize: 16,
    color: '#757575', // A darker gray for labels
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#333', // Darker text for values
    marginBottom: 5,
  },
});

export default TransactionDetailScreen;
