import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const MediaContent = ({ data }) => {
  return data.media_type === 'image' ? (
    <Image source={{ uri: data.url }} style={styles.image} />
  ) : data.media_type === 'video' ? (
    <WebView
      source={{ uri: data.url }}
      style={styles.video}
      onError={(e) => console.error('Video failed to load', e)}
      onLoad={() => console.log('Video loaded successfully')}
    />
  ) : null;
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  video: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default MediaContent;
