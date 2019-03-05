import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: [],
    isFetching: true
  };

  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data, isFetching: false }))
      .catch(err => console.log(err));
  }

  renderAlbums() {
    return this.state.albums.map((album, index) => (
      <AlbumDetail album={album} key={index} />
    ));
  }

  render() {
    if (this.state.isFetching) return <Text>Loading...</Text>;

    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}
export default AlbumList;
