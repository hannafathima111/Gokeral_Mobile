import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";export default function Hero() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Badge */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>✨ Premium Travel Experience</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Discover Kerala</Text>
      <Text style={styles.titleGreen}>in Comfort</Text>

      {/* Description */}
      <Text style={styles.description}>
        Book any vehicle across Kerala — from luxury cars to auto rickshaws.
        Explore God's Own Country with verified drivers and transparent pricing.
      </Text>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.primaryText}>
  Book Now <Ionicons name="arrow-forward" size={16} color="#fff" />
</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn}>
          <Text style={styles.secondaryText}>Learn More</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>500+</Text>
          <Text style={styles.statLabel}>Vehicles</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10K+</Text>
          <Text style={styles.statLabel}>Customers</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>24/7</Text>
          <Text style={styles.statLabel}>Support</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#F4FBF6",
  },

  // Badge
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 20,
  },
  badgeText: {
    color: "#166534",
    fontWeight: "600",
    fontSize: 12,
  },

  // Titles
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#111",
  },
  titleGreen: {
    fontSize: 36,
    fontWeight: "800",
    color: "#16A34A",
    marginBottom: 15,
  },

  // Description
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
    marginBottom: 25,
  },

  // Buttons
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 30,
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: "#16A34A",
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  primaryText: {
    color: "#fff",
    fontWeight: "700",
  },

  secondaryBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#16A34A",
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  secondaryText: {
    color: "#16A34A",
    fontWeight: "700",
  },

  // Stats
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
});