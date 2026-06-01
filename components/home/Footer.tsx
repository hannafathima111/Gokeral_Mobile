import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Kerides</Text>

      <Text>+91 98765 43210</Text>
      <Text>info@kerides.com</Text>

      <Text style={styles.copy}>
        © 2025 Kerides. All rights reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    alignItems: "center",
  },

  logo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  copy: {
    marginTop: 20,
    color: "#666",
  },
});