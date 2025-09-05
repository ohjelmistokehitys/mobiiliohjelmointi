import { CalculationHistoryProvider } from "@/contexts/calculatorContext";
import { Stack } from "expo-router";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function RootLayout() {
  return <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <CalculationHistoryProvider>
      <Stack />
    </CalculationHistoryProvider>
  </KeyboardAvoidingView>;
}
