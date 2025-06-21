import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { PrimeiraTela } from "./src/pages/PrimeiraTela";
import { StatusBar } from "expo-status-bar";
import { SegundaTela } from "./src/pages/SegundaTela";

export default function App() {
  return (
    <PrimeiraTela />
    // <SegundaTela />
  );
}
