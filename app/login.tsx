import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { authService } from "@/services/authService";

export default function LoginScreen() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await authService.userLogin(form);

      if (res?.accessToken) {
        router.replace("/home");
      } else {
        setError("Invalid login response");
      }
    } catch (err: any) {
  console.log("LOGIN ERROR:", err);
  console.log("RESPONSE:", err?.response?.data);

  setError(
    JSON.stringify(err?.response?.data) ||
    err?.message ||
    "Login failed"
  );
}
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>User Login</Text>
        <Text style={styles.subtitle}>
          Welcome back! Sign in to your account
        </Text>

        {error ? (
          <View style={styles.errorBox}>
            <Text style={styles.error}>{error}</Text>
          </View>
        ) : null}

        <View style={styles.inputContainer}>
          <FontAwesome name="envelope-o" size={18} color="#999" />
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            value={form.email}
            onChangeText={(t) => setForm({ ...form, email: t })}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={18} color="#999" />

          <TextInput
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            style={styles.input}
            value={form.password}
            onChangeText={(t) => setForm({ ...form, password: t })}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <FontAwesome
              name={showPassword ? "eye-slash" : "eye"}
              size={18}
              color="#999"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => alert("Forgot Password")}
        >
          <Text style={styles.forgotPassword}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/register")}
        >
          <Text style={styles.link}>
            Don't have an account?{" "}
            <Text style={styles.linkBold}>
              Register now
            </Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.driverButton}
          onPress={() => alert("Driver Login")}
        >
          <Text style={styles.driverButtonText}>
            Login as Driver
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
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginTop: 6,
    marginBottom: 20,
  },

  errorBox: {
    backgroundColor: "#FFE5E5",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },

  error: {
    color: "#D32F2F",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 55,
    marginBottom: 14,
  },

  input: {
    flex: 1,
    marginLeft: 10,
  },

  forgotPassword: {
    textAlign: "right",
    color: "#1FA64A",
    fontWeight: "600",
    marginBottom: 18,
  },

  button: {
    backgroundColor: "#1FA64A",
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
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

  driverButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#DDD",
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  driverButtonText: {
    color: "#555",
    fontWeight: "600",
  },
});