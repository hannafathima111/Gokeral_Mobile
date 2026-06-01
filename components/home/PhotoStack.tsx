import { View, Image, StyleSheet } from "react-native";

export default function PhotoStack() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={[styles.card, styles.back]}
      />

      <Image
        source={require("../../assets/images/icon.png")}
        style={[styles.card, styles.middle]}
      />

      <Image
        source={require("../../assets/images/icon.png")}
        style={[styles.card, styles.front]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 260,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    width: 250,
    height: 180,
    borderRadius: 20,
    position: "absolute",
  },

  back: {
    transform: [{ rotate: "-10deg" }],
  },

  middle: {
    transform: [{ rotate: "5deg" }],
  },

  front: {},
});