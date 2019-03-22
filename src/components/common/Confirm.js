import React from "react";
import { Text, View, Modal } from "react-native";
import { CardSection } from "./CardSection";
import { Button } from "./Button";

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, cardSectionStyle, textAligh } = styles;

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: "center"
  },
  containerStyle: {
    backgroundColor: "rgba(0,0,0,0.75)",
    position: "relative",
    justifyContent: "center",
    flex: 1
  },
  textStyle: {
    flex: 1,
    fonstSize: 18,
    textAligh: "center",
    lineHeight: 40
  }
};

export default { Confirm };
