import { CalculationHistoryProvider } from "@/contexts/calculatorContext";
import { Stack } from "expo-router";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function RootLayout() {
  return <KeyboardAvoidingView style={{ flex: 1, marginBottom: 50 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <CalculationHistoryProvider>
      <SQLiteProvider databaseName="coursedb" onInit={initializeDb}>
        <Stack />
      </SQLiteProvider>
    </CalculationHistoryProvider>
  </KeyboardAvoidingView>;
}

async function initializeDb(db: SQLiteDatabase) {
  try {
    await db.execAsync(`CREATE TABLE IF NOT EXISTS course (id INTEGER PRIMARY KEY NOT NULL, credits INT, title TEXT);`);
  } catch (error) {
    console.error('Could not open database', error);
  }
}
