import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import profilepic from "../assets/images/pfp.png";
import addplotimg from "../assets/images/addplot.png";
import mergeplotimg from "../assets/images/mergeplot.png";

const Profile = () => {
  const handleAddPlot = () => {
    console.log("Add Plot pressed");
  };

  const handleMergePlot = () => {
    console.log("Merge Plot pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={profilepic} style={styles.avatar} contentFit="contain" />
        <Text style={styles.userName}>MEOW 👽</Text>
        <Text style={styles.userLocation}>🦑🐸👾🤖 | +91 1234569870</Text>
      </View>

      <Text style={styles.description}>
        To begin a testing, register a new plot or merge existing plots that
        belong to this user but are listed under a different name.
      </Text>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleAddPlot}>
          <View style={styles.buttonCard}>
            <Image
              source={addplotimg}
              style={styles.iconImage}
              contentFit="contain"
            />
            <Text style={styles.actionText}>Add Plot</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleMergePlot}>
          <View style={styles.buttonCard}>
            <Image
              source={mergeplotimg}
              style={styles.iconImage}
              contentFit="contain"
            />
            <Text style={styles.actionText}>Merge Plot</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.doItLaterContainer}>
        <Text style={styles.doItLaterText}>Do it Later</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 500,
    height: 180,
    borderRadius: 40,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1f2937",
  },
  userLocation: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    paddingHorizontal: 20,
    marginVertical: 20,
    lineHeight: 22,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 8,
  },
  buttonCard: {
    backgroundColor: "#f9f9f9",
    paddingVertical: 40,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
    elevation: 2,
  },
  iconImage: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  actionText: {
    fontSize: 14,
    color: "#3b82f6",
    fontWeight: "500",
  },
  doItLaterContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    borderTopWidth: 0.5,
    borderTopColor: "#d1d5db",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },

  doItLaterText: {
    color: "#6b7280",
    fontSize: 14,
    fontWeight: "400",
  },
});
