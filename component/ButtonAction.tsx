import { Line } from "@shopify/react-native-skia";
import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

import { SketchCanvasRef } from "rn-perfect-sketch-canvas";
import { windowWidth } from "../Constant";
import { SelectColor } from "./SelectColor";

type Props = {
  Clear: () => void;
  Undo: () => void;
  Redo: () => void;
};

export const ButtonAction = (props: Props) => {
  const { Clear, Undo, Redo } = props;

  return (
    <View style={styles.container}>
      <SelectColor />
      <View>
        <TouchableOpacity onPress={Clear}>
          <Text style={styles.button}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={Undo}>
          <Text style={styles.button}>undo</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={Redo}>
          <Text style={styles.button}>redo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonReset: {
    width: 80,
    height: 50,
    padding: 3,
  },
  ButtonGetPoint: {
    width: 80,
    height: 50,
    padding: 3,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    height: 70,
    borderWidth: 1.5,
    borderColor: "black",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 6,
  },
  button: {
    width: 60,
    height: 25,
    backgroundColor: "#4da6ff",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 4,
    margin: 2,
  },
});
