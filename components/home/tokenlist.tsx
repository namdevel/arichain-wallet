import * as React from "react";
import { Dimensions, View, Image } from "react-native";
import { Text } from "~/components/ui/text";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { useColorScheme } from "~/lib/useColorScheme";
const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;

const TokenList = () => {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    
    <View
  style={{ flex: 0 }}
  className={`${isDarkColorScheme ? 'bg-[#333]' : 'bg-neutral-100'} shadow-none mb-3 mx-4`}
>
      <Carousel
        ref={ref}
        width={width}
        height={width / 4}
        data={data}
        pagingEnabled={true}
        onProgressChange={progress}
        renderItem={({ index }) => (
          <View className="flex-1 justify-center border-0 mx-8 p-2">
            <View className="flex-row items-center space-x-2">
              <Image
                source={{
                  uri: "https://testnetex.arichain.com/assets/img/dapp/ariguild.png",
                }}
                className="w-8 h-8 -pl-2 -ml-2"
              />
              <Text className={`${isDarkColorScheme ? 'text-white' : 'text-gray-950'} text-xl font-bold`}>ARIGUILD (ARI-G)</Text>
            </View>

            <Text className="text-sm text-gray-400 mt-2">Balance</Text>

            <View className="flex-col items-start">
              <View className="flex-row items-center">
              <Text className={`${isDarkColorScheme ? 'text-white' : 'text-gray-950'} text-xl font-bold`}>1,79</Text>
                <Text className="text-sm font-semibold text-muted-foreground ml-2">
                  ARI-G
                </Text>
              </View>
            </View>
          </View>
        )}
      />

      
    </View>
  );
};

export default TokenList;
