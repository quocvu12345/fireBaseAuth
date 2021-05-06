import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Form from './component/Form';
import Logo from './component/Logo';
import logo from '../../assets/img/Logo.png';

const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Logo image={logo} />
      <View style={{height: 50}}></View>
      <Form navigation={navigation} />
    </ScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
