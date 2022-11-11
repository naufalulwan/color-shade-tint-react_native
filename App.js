import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { theme } from "./ColorPalette";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.config.dark[90],
    justifyContent: "center",
    alignItems: "center",
  },
  primaryBox: {
    backgroundColor: theme.primary[40],
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryBox: {
    backgroundColor: theme.secondary[40],
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.config.dark[40],
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.config.dark[40]}
      />
      <View style={styles.primaryBox}>
        <View style={styles.secondaryBox}>
          <Text style={styles.text}>{theme.secondary[40].toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
