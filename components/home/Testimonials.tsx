import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmed",
      text: "Amazing experience.",
    },
    {
      name: "Rahul",
      text: "Very professional drivers.",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What Our Customers Say</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {reviews.map((r) => (
          <View key={r.name} style={styles.card}>
            <Text>⭐⭐⭐⭐⭐</Text>

            <Text style={styles.text}>{r.text}</Text>

            <Text style={styles.name}>- {r.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 15,
  },

  card: {
    width: 280,
    marginLeft: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    elevation: 2,
  },

  text: {
    marginVertical: 10,
  },

  name: {
    fontWeight: "bold",
  },
});