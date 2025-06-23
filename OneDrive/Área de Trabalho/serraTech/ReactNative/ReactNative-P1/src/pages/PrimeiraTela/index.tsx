import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function PrimeiraTela() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../gif-duolingo.gif")}
        style={styles.logo1}
      />
      <Image source={require("../../../Duolingo.png")} style={styles.logo2} />

      <Text style={styles.title}>Login to your account</Text>

      <View style={styles.inputContainer}>
        <Image source={require("../../../user-icon.png")} style={styles.icon} />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require("../../../lock-icon.png")} style={styles.icon} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Text style={styles.forgotText}>Forgot password?</Text>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don't have an account?
        <Text style={styles.signupLink}> Signup</Text>
      </Text>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../../../google.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../../../facebook.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require("../../../x.png")} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
