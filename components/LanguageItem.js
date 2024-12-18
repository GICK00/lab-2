import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProgrammingLanguageItem = ({ name, experience, logo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.experience}>Опыт изучения: {experience}</Text>
      <Image source={{ uri: logo }} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  experience: {
    fontSize: 16,
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default ProgrammingLanguageItem;
