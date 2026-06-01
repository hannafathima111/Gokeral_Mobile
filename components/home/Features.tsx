import { View, Text, StyleSheet } from "react-native";

const features = [
  "Verified Drivers",
  "24/7 Support",
  "Affordable Pricing",
  "Safe Journey",
];

export default function Features() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Why Choose Kerides?</Text>

      {features.map((item) => (
        <View key={item} style={styles.card}>
          <Text style={styles.title}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 2,
  },

  title: {
    fontWeight: "600",
  },
});