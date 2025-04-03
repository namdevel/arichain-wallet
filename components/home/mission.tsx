import { View, TouchableOpacity } from "react-native";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import { Twitter } from "~/lib/icons/Twitter";
import { Button } from "~/components/ui/button";
import { CalendarDays } from "~/lib/icons/CalendarDays";
import { MessageCircleQuestion } from "~/lib/icons/MessageCircleQuestion";
import { useColorScheme } from "~/lib/useColorScheme";
const Mission = () => {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();
  const [value, setValue] = React.useState("daily");
  return (
    <View className="flex-1 mx-4 mt-4">
      <Tabs
        value={value}
        onValueChange={setValue}
        className="w-full max-w-[400px] mx-auto flex-col gap-1.5"
      >
        <TabsList className="flex-row w-full">
          <TabsTrigger value="daily" className="flex-1">
            <Text>Daily</Text>
          </TabsTrigger>
          <TabsTrigger value="general" className="flex-1">
            <Text>General</Text>
          </TabsTrigger>
          <TabsTrigger value="collab" className="flex-1">
            <Text>Collab</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="daily" style={{ padding: 3 }}>
          <Accordion
            type="multiple"
            collapsible
            defaultValue={[]}
            className="w-full max-w-sm native:max-w-md gap"
          >
            <AccordionItem
              value="daily_task1"
              className={`border-b-0 border-t border-l border-r px-3 py-1 ${isDarkColorScheme ? 'border-stone-700' : 'border-gray-300'
                }`}
            >
              <AccordionTrigger>
                <View className="flex-row items-center">
                  <Twitter
                    size={24}
                    strokeWidth={2.5}
                    className="w-4 h-4 text-foreground/70 mr-2"
                  />
                  <Text>Arichain X (Twitter) Mission</Text>

                </View>
              </AccordionTrigger>
              <AccordionContent >
                <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
              </AccordionContent>
            </AccordionItem>
            <TouchableOpacity onPress={() => console.log("Mission Uncomplete")}>
              <Button variant="secondary" className="w-full rounded-none">
                <Text>GO</Text>
              </Button>
            </TouchableOpacity>
            <AccordionItem
              value="daily_task2"
              className={`border-b-0 border-t border-l border-r px-3 py-1 ${isDarkColorScheme ? 'border-stone-700' : 'border-gray-300'
                }`}
            >
              <AccordionTrigger>
                <View className="flex-row items-center">
                  <CalendarDays
                    size={24}
                    strokeWidth={2.5}
                    className="w-4 h-4 text-foreground/70 mr-2"
                  />
                  <Text>Daily Check-in</Text>

                </View>
              </AccordionTrigger>
              <AccordionContent>
                <Text>
                  In the world of React Native, universal components are
                  components that work on both web and native platforms.
                </Text>
              </AccordionContent>
            </AccordionItem>
            <TouchableOpacity onPress={() => console.log("Mission Uncomplete")}>
              <Button variant="secondary" className="w-full rounded-none">
                <Text>GO</Text>
              </Button>
            </TouchableOpacity>
            <AccordionItem
              value="daily_task3"
              className={`border-b-0 border-t border-l border-r px-3 py-1 ${isDarkColorScheme ? 'border-stone-700' : 'border-gray-300'
                }`}
            >
              <AccordionTrigger>
                <View className="flex-row items-center">
                  <MessageCircleQuestion
                    size={24}
                    strokeWidth={2.5}
                    className="w-4 h-4 text-foreground/70 mr-2"
                  />
                  <Text>Daily Quiz</Text>

                </View>
              </AccordionTrigger>
              <AccordionContent>
                <Text>
                  In the world of React Native, universal components are
                  components that work on both web and native platforms.
                </Text>
              </AccordionContent>
            </AccordionItem>
            <TouchableOpacity onPress={() => console.log("Mission Uncomplete")}>
              <Button variant="secondary" className="w-full rounded-none">
                <Text>GO</Text>
              </Button>
            </TouchableOpacity>
          </Accordion>
        </TabsContent>
        <TabsContent value="general">
          <Text className="text-center text-lg font-bold">General Mission</Text>
        </TabsContent>
        <TabsContent value="collab">
          <Text className="text-center text-lg font-bold">Collab Mission</Text>
        </TabsContent>
      </Tabs>
    </View>
  );
};

export default Mission;
