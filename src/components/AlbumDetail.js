import React from 'react';
import { Text, StyleSheet, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.headerThumbnailView}>
          <Image
            style={styles.headerThumbnail}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerTextTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.bodyImage} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPressHandler={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerThumbnailView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextView: {
    justifyContent: 'space-around'
  },
  headerThumbnail: {
    width: 50,
    height: 50
  },
  headerTextTitle: {
    color: '#000',
    fontSize: 15
  },
  bodyImage: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
