import React, { useRef, useState } from "react";
import { StyleSheet, SafeAreaView, Button, View, TouchableOpacity,Text } from "react-native";
import { SketchCanvas, SketchCanvasRef } from "rn-perfect-sketch-canvas";
import { ButtonAction } from "./component/ButtonAction";
import { colorSelect } from "./Constant";
import { useStoreColorProps } from "./Sdk/store";

export default function App() {
  const canvasRef = useRef<SketchCanvasRef>(null);
  const color = useStoreColorProps((store) => store.action?.color);

  const Clear = () => {
    canvasRef.current?.reset();
  };

  const GetPoint = () => {
    console.log(canvasRef.current?.toPoints());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.DrawPad}>
      
      <SketchCanvas
        ref={canvasRef}
        strokeColor={color|| 'black'}
        strokeWidth={8}
        containerStyle={styles.container}
        />
        </View>

      <ButtonAction Clear={Clear} GetPoint={GetPoint} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  DrawPad: {
    flex: 1,
    borderWidth: 10,
    borderColor: 'blue',
    margin: 12,
    borderRadius: 3,
    shadowColor: 'black',


  }
});
