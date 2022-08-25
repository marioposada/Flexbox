import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <View>
  <Text style={styles.text}>
  Mi primer App 
  

  </Text>;
  <Text style={styles.text}>
 ReactNative Amoriiiii

  </Text>;
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
