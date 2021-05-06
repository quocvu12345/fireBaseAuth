import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const WIDTH = Dimensions.get('screen').width;
export default function ButtomLogin(props) {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#009E7F'}]}
        onPress={() => {}}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: "center"
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: WIDTH - 40,
    borderRadius: 5,
  },
  text: {
    fontSize: 22,
    color: '#fff',
    // alignItems: "center",
  },
});
