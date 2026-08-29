import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
};

export function PrimaryButton({ label, onPress, loading = false }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress} disabled={loading}>
      <Text style={styles.label}>{loading ? "Please wait…" : label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0B5FFF",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center"
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
});
