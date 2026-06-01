import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function RegisterScreen() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = () => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create your account</Text>

        <View style={styles.inputContainer}>
          <FontAwesome name="user-o" size={18} color="#999" />
          <TextInput
            placeholder="Enter name"
            style={styles.input}
            value={form.name}
            onChangeText={(text) =>
              setForm({ ...form, name: text })
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="envelope-o" size={18} color="#999" />
          <TextInput
            placeholder="Enter email"
            style={styles.input}
            value={form.email}
            onChangeText={(text) =>
              setForm({ ...form, email: text })
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={18} color="#999" />
          <TextInput
            placeholder="Enter password"
            secureTextEntry
            style={styles.input}
            value={form.password}
            onChangeText={(text) =>
              setForm({ ...form, password: text })
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={18} color="#999" />
          <TextInput
            placeholder="Confirm password"
            secureTextEntry
            style={styles.input}
            value={form.confirmPassword}
            onChangeText={(text) =>
              setForm({
                ...form,
                confirmPassword: text,
              })
            }
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/login")}
        >
          <Text style={styles.link}>
            Already have an account?{" "}
            <Text style={styles.linkBold}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF7F0",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 24,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    paddingHorizontal: 14,
    marginBottom: 14,
    height: 55,
  },

  input: {
    flex: 1,
    marginLeft: 10,
  },

  button: {
    backgroundColor: "#1FA64A",
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  link: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },

  linkBold: {
    color: "#1FA64A",
    fontWeight: "bold",
  },
});