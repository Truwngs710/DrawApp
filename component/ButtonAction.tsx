import React from "react";
import { View, Button, StyleSheet } from "react-native";

import { SketchCanvasRef } from "rn-perfect-sketch-canvas";
import { windowWidth } from "../Constant";

type Props = {
  Clear: () => void;
  GetPoin: () => void;
};

export const ButtonAction = (props: Props) => {
  const { Clear, GetPoin } = props;

  return (
    <View style={styles.container}>
      <View style={styles.ButtonReset}>
        <Button onPress={Clear} title="Reset" />
      </View>
      <View style={styles.ButtonGetPoin}>
        <Button onPress={GetPoin} title="log poin" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonReset: {
    width: 100,
    height: 50,
  },
  ButtonGetPoin: {
    width: 100,
    height: 50,
  },
  container: {
    flexDirection: "row",
    width: windowWidth,
    backgroundColor: "#898989",
    justifyContent: "center",
    alignContent: "center",
  },
});
