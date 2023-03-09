import React, { useState } from "react";
import { TouchableOpacity, View, Text, Modal } from "react-native";
import { colorSelect, windowHeight, windowWidth } from "../Constant";

import { useStoreColorProps } from "../Sdk/store";

export const SelectColor = () => {
  const color = useStoreColorProps((store) => store.action?.color);
  const { dispatchAction } = useStoreColorProps()

  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
      onPress={() => setVisible(true)}
        style={{
          position: "absolute",
          width: 40,
          height: 40,
          backgroundColor: color || "black",
          left: 20,
          bottom: 20,
          borderRadius: 50,
        }}
      ></TouchableOpacity>
      <Modal transparent={true} visible={visible}>
        <View
          style={{
            width: windowWidth / 2,
            height: windowHeight / 3,
            backgroundColor: "#898989",
            bottom: 40,
            left: 40,
            flexDirection: "row",
            flexWrap: "wrap",
            borderRadius: 15,
            position: 'absolute', padding: 5
          }}
        >
          {colorSelect.map((color, index) => (
            <TouchableOpacity
              onPress={() => {dispatchAction(color)
                setVisible(false)}}
              key={index}
              style={{
                backgroundColor: color,
                width: 20,
                height: 20,
                borderRadius: 50,
                margin: 2,
              }}
            ></TouchableOpacity>
          ))}
        </View>
      </Modal>
    </>
  );
};
