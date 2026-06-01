import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import Hero from "@/components/home/Hero";

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1 }}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* HERO */}
        <Hero />

        <View style={styles.section}>
          <Text>Vehicle Categories</Text>
        </View>

        <View style={styles.section}>
          <Text>Features</Text>
        </View>

        <View style={styles.section}>
          <Text>Destinations</Text>
        </View>

        <View style={styles.section}>
          <Text>Testimonials</Text>
        </View>

        <View style={styles.section}>
          <Text>CTA</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    marginVertical: 10,
    borderRadius: 10,
  },
});