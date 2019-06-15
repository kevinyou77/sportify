import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar
} from "react-native";
import { formButtons } from "../styles/common/buttonStyles";
import { textColor } from "../styles/common/fontStyles";
import { marginTop } from "../styles/common/properties";
import { Actions } from "react-native-router-flux";

const InitialPage = () => {
  const {
    wrapper,
    buttonContainer,
    logoImageWrapperStyles,
    logoImageStyles
  } = styles;
  return (
    <ImageBackground
      style={wrapper}
      source={{
        uri:
          "https://i.pinimg.com/originals/86/11/40/86114094c738c4077008e3162072eac4.jpg"
      }}
    >
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={logoImageWrapperStyles}>
        <Image
          source={require("../../assets/white.png")}
          style={[logoImageStyles]}
        />
      </View>

      <View style={buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            Actions.login()
          }}
          style={[formButtons.primaryWhite, marginTop.default]}
        >
          <Text style={textColor.white}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Actions.signUp()}
          style={[formButtons.primaryWhite, marginTop.default]}
        >
          <Text style={textColor.white}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "flex-end",
    height: "95%",
    marginTop: 25,
    padding: 20,
    zIndex: 99
  },
  wrapper: {
    height: "100%",
    width: "100%"
  },
  mainTitleStyle: {
    zIndex: 2
  },
  logoImageWrapperStyles: {
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  logoImageStyles: {
    width: 100,
    height: 117
  }
});

export default InitialPage;
