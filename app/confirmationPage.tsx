import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import registersuccessimage from "../assets/images/registrationSuccess.png";

const ConfirmationPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={registersuccessimage}
        contentFit="contain"
        transition={1000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: 400,
  },
});

export default ConfirmationPage;