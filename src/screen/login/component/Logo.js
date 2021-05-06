import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
const Logo = (props) => {
  return (
      <View style={styles.container}>
        <Image source={props.image} style={styles.image} />
      </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 80,
    resizeMode: 'contain',
  },
});
