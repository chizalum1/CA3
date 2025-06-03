// data.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function DataScreen() {
  const [loading, setLoading] = useState(true);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then((res) => res.json())
      .then(() => {
        setFetched(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#F5F0E6" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {fetched ? 'Data has been successfully fetched!' : 'Failed to fetch data.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7C4A3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D7C4A3',
  },
  message: {
    fontSize: 20,
    color: '#4B3B2A',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});