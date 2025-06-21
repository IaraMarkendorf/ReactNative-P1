import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function SegundaTela() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../gif-chest.gif")} style={styles.gif} />

      <Text style={styles.premio}>Você ganhou 5 cristais!</Text>

      <Text style={styles.parabens}>Parabéns por bater a sua meta diária!</Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
}
