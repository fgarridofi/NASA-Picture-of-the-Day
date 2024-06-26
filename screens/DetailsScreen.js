import React from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';
import { styles } from '../styles/detailsScreenStyles';
import Header from '../components/Header';
import MediaContent from '../components/MediaContent';
import DetailDateDisplay from '../components/DateDisplay';
import Description from '../components/Description';

const DetailsScreen = ({ route }) => {
  const { data } = route.params;

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header title={data.title} />
        <MediaContent data={data} />
        <DetailDateDisplay date={data.date} />
        <Description description={data.explanation} />
      </ScrollView>
    </ImageBackground>
  );
};

export default DetailsScreen;
