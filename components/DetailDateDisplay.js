import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DetailDateDisplay = ({ date }) => {
  return <Text style={styles.date}>{date}</Text>;
};

const styles = StyleSheet.create({
  date: {
    fontSize: 16,
    marginBottom: 20,
    color: '#fff',
    fontFamily: 'Nasalization',
  },
});

export default DetailDateDisplay;
