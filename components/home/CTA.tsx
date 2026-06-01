import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CTA() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ready to Start Your Journey?
      </Text>

      <Text style={styles.subtitle}>
        Book your perfect vehicle today
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16A34A",
    margin: 20,
    padding: 25,
    borderRadius: 25,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#fff",
    marginTop: 10,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#16A34A",
    fontWeight: "bold",
  },
});