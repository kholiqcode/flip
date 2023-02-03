import React, {memo} from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

interface GapProps extends ViewProps {
  height?: number;
  width?: number;
}

const Gap = memo((props: GapProps) => {
  const {height = 0, width = 0, ...baseProps} = props;
  return <View style={styles.container(height, width)} {...baseProps} />;
});

export default Gap;

interface StyleSheetType {
  container: (height: number, width: number) => StyleProp<ViewStyle>;
}

const styles = StyleSheet.create<StyleSheetType>({
  container: (height: number, width: number): ViewStyle => ({
    height,
    width,
  }),
});
