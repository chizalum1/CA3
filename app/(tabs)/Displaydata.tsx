import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface User {
  id: number;
  email: string;
  name: string
  company: {
    name: string;
  };
}

export default function DisplayScreen() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Company & Email List</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.company}>{item.company.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#D7C4A3',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
     color: '#4B3B2A',
  },
  card: {
    backgroundColor: '#FFF8F0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  company: {
    fontSize: 18,
    fontWeight: '600',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  name : {

  },
});