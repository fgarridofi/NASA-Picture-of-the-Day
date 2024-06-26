import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return <Text style={styles.header}>{title}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Nasalization',
  },
});

export default Header;
