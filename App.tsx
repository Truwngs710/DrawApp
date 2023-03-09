import React, { useRef } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import { SketchCanvas, SketchCanvasRef } from "rn-perfect-sketch-canvas";
import { ButtonAction } from "./component/ButtonAction";

export default function App() {
  const canvasRef = useRef<SketchCanvasRef>(null);

  const Crear = () => {
    canvasRef.current?.reset();
  };

  const GetPoin = () => {
    console.log(canvasRef.current?.toPoints());
  };

  return (
    <SafeAreaView style={styles.container}>
      <SketchCanvas
        ref={canvasRef}
        strokeColor={"black"}
        strokeWidth={8}
        containerStyle={styles.container}
      />

      <ButtonAction Clear={Crear} GetPoin={GetPoin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
