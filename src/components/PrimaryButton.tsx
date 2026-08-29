import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};

export function PrimaryButton({ label, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
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
