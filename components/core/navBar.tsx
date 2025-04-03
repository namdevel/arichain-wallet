import { View, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "~/lib/useColorScheme";
import React from "react";
import { setAndroidNavigationBar } from "~/lib/android-navigation-bar";
import { Text } from "~/components/ui/text";
const navBar = () => {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  function toggleColorScheme() {
    const newTheme = isDarkColorScheme ? "light" : "dark";
    setColorScheme(newTheme);
    setAndroidNavigationBar(newTheme);
  }

  return (
    <View className="flex-row justify-between items-center px-4 py-3">
      {/* Left Header */}
      <View className="flex-row items-center">
        <Image
          source={{
            uri: 'https://arichain.io/assets/img/contents/symbol_ari.png',
          }}
          className="w-8 h-8 mr-2"
        />
        <Text className="text-2xl font-bold">ARI WALLET</Text>
      </View>

      {/* Right Header */}
      <View className="flex-row items-center">
        <TouchableOpacity
          onPress={toggleColorScheme}
          className="p-2 rounded-lg"
        >
          <MaterialIcons
            name="qr-code-scanner"
            size={24}
            color={isDarkColorScheme ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default navBar;
