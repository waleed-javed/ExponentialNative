import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="font-bold text-white text-3xl bg-purple-500 px-4 py-1.5 rounded">Hello Waleed</Text>
      <StatusBar style="auto" />
    </View>
  );
};
