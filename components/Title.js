import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({ data }) => (
  <View style={styles.titleContainer}>
    {data && <Text style={styles.title}>{data.title}</Text>}
  </View>
);

const styles = StyleSheet.create({
  titleContainer: {
    minHeight: 40,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginTop: 20,
    textDecorationLine: 'underline',
    color: 'blue',
    fontFamily: 'Nasalization',
    textAlign: 'center',
  },
});

export default Title;
