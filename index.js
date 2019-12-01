import React from "react";
import { NativeModules, requireNativeComponent, Platform } from "react-native";

const { AppleSignIn } = NativeModules;

export const RNSignInWithAppleButton = requireNativeComponent(
  "RNCSignInWithAppleButton"
);

export const SignInWithAppleButton = ({ style, onResult, onError }) => {
  if (Platform.OS === "ios") {
    return (
      <RNSignInWithAppleButton
        style={style}
        onPress={async () => {
          await RNCAppleAuthentication.requestAsync({
            scopes: [
              RNCAppleAuthentication.Scope.FULL_NAME,
              RNCAppleAuthentication.Scope.EMAIL
            ]
          }).then(
            response => {
              onResult(response); //Display response
            },
            error => {
              onError(error); //Display error
            }
          );
        }}
      />
    );
  } else {
    return null;
  }
};

export default AppleSignIn;
