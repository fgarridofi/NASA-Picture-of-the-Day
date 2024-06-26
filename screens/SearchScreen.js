import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import Header from '../components/Header';
import MonthNavigator from '../components/MonthNavigator';
import ImageList from '../components/ImageList';
import ErrorText from '../components/ErrorText';
import { fetchApodDataForMonth } from '../api/fetchApodDataForMonth';

const SearchScreen = ({ navigation }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const { data, error, refetch, isFetching } = useQuery({
    queryKey: ['apodMonth', year, month],
    queryFn: () => fetchApodDataForMonth(year, month),
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [year, month]);

  const handlePreviousMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <View style={styles.container}>
      <MonthNavigator
        year={year}
        month={month}
        onPrevious={handlePreviousMonth}
        onNext={handleNextMonth}
      />
      {isFetching ? (
        <ActivityIndicator size="large" color="#fff" style={styles.loadingIndicator} />
      ) : error ? (
        <ErrorText message={error.message} />
      ) : data ? (
        <ImageList data={data} navigation={navigation} />
      ) : (
        <ErrorText message="No data available" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#061f4a',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
