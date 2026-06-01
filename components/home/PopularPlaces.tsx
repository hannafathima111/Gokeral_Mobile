import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

const places = [
  "Munnar",
  "Alleppey",
  "Wayanad",
  "Kochi",
];

export default function PopularPlaces() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Destinations</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {places.map((place) => (
          <View key={place} style={styles.card}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.image}
            />

            <Text style={styles.name}>{place}</Text>
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
    width: 250,
    marginLeft: 20,
  },

  image: {
    width: 250,
    height: 160,
    borderRadius: 20,
  },

  name: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
});