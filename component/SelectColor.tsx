import React, { useState } from "react";
import { TouchableOpacity, View, Text, Modal, StyleSheet } from "react-native";
import { colorSelect, windowHeight, windowWidth } from "../Constant";

import { useStoreColorProps } from "../Sdk/store";

export const SelectColor = () => {
  const color = useStoreColorProps((store) => store.action?.color);
  const { dispatchAction } = useStoreColorProps();

  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={[styles.brush, { backgroundColor: color || "black" }]}
      ></TouchableOpacity>
      <Modal transparent={true} visible={visible}>
        <View style={styles.colorPad}>
          {colorSelect.map((color, index) => (
            <TouchableOpacity
              onPress={() => {
                dispatchAction(color);
                setVisible(false);
              }}
              key={index}
              style={[styles.itemColor, { backgroundColor: color }]}
            ></TouchableOpacity>
          ))}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  brush: {
    position: "absolute",
    width: 40,
    height: 40,
    top: 2,
    left: 2,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
  },
  colorPad: {
    width: windowWidth / 2,
    height: windowHeight / 3,
    backgroundColor: "#b3e6ff",
    top: 10,
    left: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 15,
    position: "absolute",
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  itemColor: {
    width: 20,
    height: 20,
    borderRadius: 50,
    margin: 2,
    borderWidth: 1,
    borderColor: "black",
  },
});
