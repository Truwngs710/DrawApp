import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { Point, SketchCanvas, SketchCanvasRef } from "rn-perfect-sketch-canvas";
import { ButtonAction } from "./component/ButtonAction";
import { colorSelect, TestData, windowWidth } from "./Constant";
import { useSColor } from "./Sdk/store";

export default function App() {
  const canvasRef = useRef<SketchCanvasRef & View>(null);
  const color = useSColor((store) => store.action?.color);
  const [drawData, setDrawData] = useState<Point[][]>();

  const HandleData = () => {
    setDrawData(canvasRef.current?.toPoints());
    console.log(drawData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}></View>
      <ButtonAction
        Clear={() => canvasRef.current?.reset()}
        Undo={() => canvasRef.current?.undo()}
        Redo={() => canvasRef.current?.redo()}
      />
      <View onTouchEnd={HandleData} ref={canvasRef} style={styles.DrawPad}>
        <SketchCanvas
          ref={canvasRef}
          strokeColor={color || "black"}
          strokeWidth={8}
          containerStyle={styles.container}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  DrawPad: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#99ccff",
    margin: 12,
    borderRadius: 3,
    shadowColor: "black",
  },
  Header: {
    width: windowWidth,
    height: 25,
  },
});
