import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Description = ({ description }) => {
  return <Text style={styles.description}>{description}</Text>;
};

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    fontFamily: 'Nasalization',
  },
});

export default Description;
