// components/Button.js
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress, disabled = false, style, textStyle }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
    >
      <Text style={[styles.text, disabled && styles.textDisabled, textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0066CC',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    backgroundColor: '#005BB5',
  },
  disabled: {
    backgroundColor: '#AAA',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
  textDisabled: {
    color: '#EEE',
  },
});
