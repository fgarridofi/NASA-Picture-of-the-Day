import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateDisplay = ({ data, date }) => (
  <View style={styles.dateContainer}>
    {data && <Text style={styles.date}>{date.toISOString().split('T')[0]}</Text>}
  </View>
);

const styles = StyleSheet.create({
  dateContainer: {
    minHeight: 40,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    marginTop: 10,
    color: '#fff',
    fontFamily: 'Nasalization',
  },
});

export default DateDisplay;
