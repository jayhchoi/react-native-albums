import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = ({ headerText }) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: '#000'
  }
});

export default Header;
