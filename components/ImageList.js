import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ImageList = ({ data, navigation }) => {
  const renderItem = ({ item }) => {
    const day = new Date(item.date).getDate();
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', { data: item })}>
        <Text style={styles.item}>{`${day}. ${item.title}`}</Text>
      </TouchableOpacity>
    );
  };

  return <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.date} />;
};

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    color: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default ImageList;
