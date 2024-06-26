import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, ImageBackground, Alert, Animated } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useQuery } from '@tanstack/react-query';
import { fetchApodData } from '../api/fetchApodData';
import { styles } from '../styles/homeScreenStyles';
import Title from '../components/Title';
import ImageOrVideo from '../components/ImageOrVideo';
import DateDisplay from '../components/DateDisplay';
import NavigationButtons from '../components/NavigationButtons';
import SearchByDateButton from '../components/SearchByDateButton';

const HomeScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const opacity = useRef(new Animated.Value(0)).current;
  const scaleAnimLeft = useRef(new Animated.Value(1)).current;
  const scaleAnimRight = useRef(new Animated.Value(1)).current;

  const { data, error, refetch } = useQuery({
    queryKey: ['apod', date],
    queryFn: () => fetchApodData(date),
    enabled: false,
  });

  useEffect(() => {
    setImageLoading(true);
    refetch();
  }, [date]);

  const handlePrevious = () => {
    const previousDate = new Date(date);
    previousDate.setDate(date.getDate() - 1);
    setDate(previousDate);
  };

  const handleNext = () => {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    setDate(nextDate);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const today = new Date();
    if (currentDate > today) {
      Alert.alert('Invalid Date', 'You cannot select a date in the future.');
      setShowPicker(false);
    } else {
      setShowPicker(false);
      setDate(currentDate);
    }
  };

  const onLoadEnd = () => {
    setImageLoading(false);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const onButtonPressIn = (anim) => {
    Animated.spring(anim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const onButtonPressOut = (anim) => {
    Animated.spring(anim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.fixedContainer}>
          <Title data={data} />
          <ImageOrVideo 
            data={data} 
            imageLoading={imageLoading} 
            opacity={opacity} 
            onLoadEnd={onLoadEnd} 
            navigation={navigation} 
          />
          <DateDisplay data={data} date={date} />
          <NavigationButtons 
            date={date}
            handlePrevious={handlePrevious} 
            handleNext={handleNext} 
            scaleAnimLeft={scaleAnimLeft} 
            scaleAnimRight={scaleAnimRight} 
            onButtonPressIn={onButtonPressIn} 
            onButtonPressOut={onButtonPressOut} 
          />
          <SearchByDateButton setShowPicker={setShowPicker} />
        </View>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
