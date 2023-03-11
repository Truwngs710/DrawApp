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
import { db } from "./Firebase/firebaseConfig";
import { ref, set } from "firebase/database";

export default function App() {
  const canvasRef = useRef<SketchCanvasRef & View>(null);
  const color = useSColor((store) => store.action?.color);
  const [drawData, setDrawData] = useState<Point[][]>();

  const Clear = () => {
    canvasRef.current?.reset();
    setDrawData([]);
    PushData();
  };

  const HandleData = () => {
    setDrawData(canvasRef.current?.toPoints());
  };

  const PushData = () => {
    set(ref(db, "point/"), {
      title: "aaa",
    });
  };

  useEffect(() => {
    let point = drawData && drawData[drawData?.length - 1];
    let LastDraw = { color, point };
    console.log(LastDraw);
  }, [drawData]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}></View>
      <ButtonAction
        Clear={Clear}
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
