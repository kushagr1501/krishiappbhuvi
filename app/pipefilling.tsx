import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import pipedata from "../assets/pumpdata.json";

const pipefilling = () => {
  const [showView, setShowView] = useState<boolean>(false);
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => setShowView(true)}>
      <View style={styles.codeBox}>
        <Text style={styles.codeText}>{item.code}</Text>
      </View>
      <View style={styles.labelBox}>
        <Text style={styles.pumpName}>{item.pump}</Text>
        <Text style={styles.pumpLabel}>{item.label}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={pipedata}
        keyExtractor={(item, idx) => item.code + idx}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      {showView && (
        <View style={styles.modalWrapper}>
          <View style={styles.backdrop} />

          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => setShowView(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>

            <View style={styles.noteBox}>
              <Text style={styles.noteTitle}>📝 Note</Text>
              <Text style={styles.noteText}>
                Make sure the pipe is in the fluid and there's reagent in the
                bottle before clicking the button.
              </Text>
            </View>

            <TouchableOpacity style={styles.fillButton}>
              <Text style={styles.fillButtonText}>Start Filling</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  modalWrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  codeBox: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 12,
    marginRight: 14,
  },
  codeText: {
    fontWeight: "bold",
    color: "#111",
  },
  labelBox: {
    flex: 1,
  },
  pumpName: {
    color: "#666",
    fontSize: 12,
  },
  pumpLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  arrow: {
    fontSize: 20,
    color: "#ccc",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingTop: 200,
    paddingBottom: 32,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 10,
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 20,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  closeText: {
    fontSize: 20,
    color: "#666",
    fontWeight: "bold",
  },
  noteBox: {
    backgroundColor: "#f0f6ff",
    borderRadius: 12,
    padding: 16,
    marginTop: 40,
    bottom:150,
    marginBottom: 24,
  },
  noteTitle: {
    fontWeight: "bold",
    color: "#2b6cb0",
    marginBottom: 8,
  },
  noteText: {
    color: "#333",
    fontSize: 14,
  },
  fillButton: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  fillButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default pipefilling;