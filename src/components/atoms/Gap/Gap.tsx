import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface IGapProps extends ViewStyle {
  height?: number;
  width?: number;
}

export default function Gap(props: IGapProps) {
  const {height = 0, width = 0, ...baseProps} = props;
  return <View style={styles.container(height, width)} {...baseProps} />;
}

interface StyleSheetType {
  container: (height: number, width: number) => StyleProp<ViewStyle>;
}

const styles = StyleSheet.create<StyleSheetType>({
  container: (height: number, width: number): ViewStyle => ({
    height,
    width,
  }),
});

