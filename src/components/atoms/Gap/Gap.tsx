import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface IGapProps {
  height?: number;
  width?: number;
  style?: ViewStyle;
}

export default function Gap(props: IGapProps) {
  const {height = 0, width = 0, ...baseProps} = props;
  return <View style={styles.container(height, width)} {...baseProps} />;
}

interface StyleSheetType {
  container: ViewStyle;
}

const styles = StyleSheet.create<StyleSheetType>({
  container: (height: number, width: number) => ({
    height,
    width,
  }),
});
