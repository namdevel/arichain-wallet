import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";
import { Send } from "~/lib/icons/Send";
import { Eye } from "~/lib/icons/Eye";
import { EyeOff } from "~/lib/icons/EyeOff";
import { Copy } from "~/lib/icons/Copy";
import { Text } from "~/components/ui/text";
import { Download } from "~/lib/icons/Download";
import { FileClock } from "~/lib/icons/FileClock";
import { Card, CardContent } from "~/components/ui/card";
import ToastManager, { Toast } from "toastify-react-native";
import { useColorScheme } from "~/lib/useColorScheme";
import TokenList from "~/components/home/tokenlist";
import Mission from "~/components/home/mission";


const truncateAddress = (address: String) => {
  return address.length > 16
    ? `${address.substring(0, 8)}...${address.substring(address.length - 8)}`
    : address;
};

const User = () => {
  const [isHidden, setIsHidden] = useState(false);
  const AriBalance = 100000000; // Example balance
  const AriAddress = "ARW6f7DYDxiCk85YwPgwyrqbpvTaG1ebA5rG5nzfaQT9GZDdsPcs7"; // Example address
  const { isDarkColorScheme, setColorScheme } = useColorScheme();
  const toggleBalance = () => {
    setIsHidden(!isHidden);
  };

  const copyToClipboard = async (content: any) => {
    await Clipboard.setStringAsync(content);
    Toast.show({
      type: "success",
      text1: "Copied to clipboard",
      position: "top",
      visibilityTime: 1000,
      autoHide: true,
      iconColor: "#4CAF50",
      iconSize: 24,
    });
  };


  return (
    <>
      <View className="flex-row items-center justify-center ">
        <Card className="w-full px-6 py-2 shadow-none border-0">
          <View className="flex-row items-center justify-between">
            {/* Left: Address */}
            <View className="flex-row items-center">
              <Text className="text-xs font-semibold">
                {truncateAddress(AriAddress)}
              </Text>
              <TouchableOpacity
                onPress={() => copyToClipboard(AriAddress)}
                className="ml-2 p-1"
              >
                <Copy className="text-xs text-foreground" size={12} />
              </TouchableOpacity>
            </View>

            {/* Right: Toggle Button */}
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={toggleBalance}
                className="p-2 rounded-lg"
              >
                {isHidden ? (
                  <EyeOff className="text-foreground" size={20} />
                ) : (
                  <Eye className="text-foreground" size={20} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Balance */}
          <View className="flex-col items-start">
            <View className="flex-row items-center">
              <Text className="text-3xl font-bold">
                {isHidden ? "*****" : AriBalance}
              </Text>
              <Text className="text-sm font-semibold text-muted-foreground ml-2">
                ARI
              </Text>
            </View>
          </View>

          <CardContent className="mt-4 px-0 mx-0">
            <View className="flex-row justify-between gap-2 mt-4">
              <TouchableOpacity className="flex-row items-center justify-center border border-gray-300 rounded-lg p-3 flex-1 mx-1">
                <Send
                  className="text-foreground mr-2"
                  size={20}
                  strokeWidth={1.25}
                />
                <Text className="text-sm font-medium">Send</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-center border border-gray-300 rounded-lg p-3 flex-1 mx-1">
                <Download
                  className="text-foreground mr-2"
                  size={20}
                  strokeWidth={1.25}
                />
                <Text className="text-sm font-medium">Receive</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-center border border-gray-300 rounded-lg p-3 flex-1 mx-1">
                <FileClock
                  className="text-foreground mr-2"
                  size={20}
                  strokeWidth={1.25}
                />
                <Text className="text-sm font-medium">History</Text>
              </TouchableOpacity>
            </View>
          </CardContent>
        </Card>

        <ToastManager
          style={{
            borderRadius: 2,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            padding: 4,
          }}
          showProgressBar={false}
          showCloseIcon={false}
          theme={isDarkColorScheme ? "dark" : "light"}
        />
      </View>
      <View className="flex-row items-center justify-start shadow-none border-0">
        <Text className="text-base font-semibold mx-4 mt-0 mb-2">
          Token
        </Text>
      </View>
      
        <TokenList />
        <Mission />
    </>
  );
};

export default User;
