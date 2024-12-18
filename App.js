import React, { useState } from 'react';
import { View, FlatList, RefreshControl, StyleSheet } from 'react-native';
import LanguageItem from './components/LanguageItem';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(languages);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData([...languages]);
      setRefreshing(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LanguageItem
            name={item.name}
            experience={item.experience}
            logo={item.logo}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

const languages = [
  {
    id: '1',
    name: 'JavaScript',
    experience: '3 года',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  },
  {
    id: '2',
    name: 'Python',
    experience: '2 года',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    id: '3',
    name: 'Java',
    experience: '1 год',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
  },
];
