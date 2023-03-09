import React from "react";
import { View, Button, StyleSheet } from "react-native";

import { SketchCanvasRef } from "rn-perfect-sketch-canvas";
import { windowWidth } from "../Constant";
import { SelectColor } from "./SelectColor";

type Props = {
  Clear: () => void;
  GetPoint: () => void;
};

export const ButtonAction = (props: Props) => {
  const { Clear, GetPoint } = props;

  return (
    <View style={styles.container}>
      <SelectColor/>
      <View style={styles.ButtonReset}>
        <Button onPress={Clear} title="Reset" />
      </View>
      <View style={styles.ButtonGetPoint}>
        <Button onPress={GetPoint} title="log point" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonReset: {
    width: 100,
    height: 50,
    padding: 3
  },
  ButtonGetPoint: {
    width: 100,
    height: 50,
    padding: 3

  },
  container: {
    flexDirection: "row",
    width: windowWidth,
    justifyContent: "center",
    alignContent: "center",
    height: 70
  },
});
