import React from 'react';
import { View, TouchableOpacity, Animated, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const ImageOrVideo = ({ data, imageLoading, opacity, onLoadEnd, navigation }) => (
  <View style={styles.imageContainer}>
    {imageLoading && (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
    )}
    {data && (
      <>
        {data.media_type === 'image' ? (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { data })}>
            <Animated.Image
              source={{ uri: data.url }}
              style={[styles.image, { opacity }]}
              onError={() => setImageLoading(false)}
              onLoadEnd={onLoadEnd}
            />
          </TouchableOpacity>
        ) : data.media_type === 'video' ? (
          <Animated.View style={{ opacity, width: 300, height: 300 }}>
            <WebView
              source={{ uri: data.url }}
              style={styles.video}
              onError={() => setImageLoading(false)}
              onLoadEnd={onLoadEnd}
            />
          </Animated.View>
        ) : null}
      </>
    )}
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  video: {
    width: 300,
    height: 300,
  },
  loadingIndicator: {
    position: 'absolute',
  },
});

export default ImageOrVideo;
