import React from "react";
import { View, Text, StyleSheet } from "react-native";

const vehicles = [
  { icon: "🚗", name: "Cars" },
  { icon: "🛺", name: "Auto" },
  { icon: "🚌", name: "Bus" },
  { icon: "🚑", name: "Ambulance" },
];

export default function VehicleCategories() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Vehicle Categories
      </Text>

      <View style={styles.grid}>
        {vehicles.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    width: "22%",
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  icon: {
    fontSize: 30,
  },

  name: {
    marginTop: 8,
    fontWeight: "600",
  },
});