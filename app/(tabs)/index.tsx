import * as React from "react";
import { Text,View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Balance from "~/components/home/balance";
import NavBar from "~/components/core/navBar";

export default function Screen() {
  return (
    <SafeAreaView className="flex-1">
      <NavBar />
      <Balance/>
    </SafeAreaView>
  );
}
