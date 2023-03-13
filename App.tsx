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
import { db } from "./firebaseConfig";
import { ref, set, push,get,DatabaseReference, onValue, DataSnapshot, update } from "firebase/database";
import uuid from 'react-native-uuid';


type Data ={
  color: string
  point: string
}
export default function App() {
  const canvasRef = useRef<SketchCanvasRef & View>(null);
  const color = useSColor((store) => store.action?.color) || '#000000';
  const [drawData, setDrawData] = useState<Point[][]>();
  const [getData, setGetData] = useState<Data[]>()
  const [lengthData, setLengthData] = useState<number>(10000)

  const Clear = () => {
    canvasRef.current?.reset();
    setDrawData([]);
  };

  const HandleData = () => {
    setDrawData(canvasRef.current?.toPoints());
  };



  const GetData = async () => {
    const refGet = ref(db, 'TV')
    onValue(refGet, (snapshot) => {
      setGetData(snapshot.val())
      setLengthData(snapshot.val().length)
    })
    
    
  };

  useEffect(() => {
    GetData()
    console.log(getData);

  },[])

  useEffect(() => {
    let point = drawData && drawData[drawData?.length - 1];
    let randomKey = uuid.v4()
    let LastDraw = { color: point ? color : null , point: point ? JSON.stringify(point) :  null};
    update(ref(db, 'TV'), {
      randomKey : LastDraw
      // ????????
    });

    
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
