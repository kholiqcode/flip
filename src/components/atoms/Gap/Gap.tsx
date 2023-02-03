import React, {memo} from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';

interface GapProps extends ViewProps {
  height?: number;
  width?: number;
}

interface StyleSheetType {
  container: (height: number, width: number) => StyleProp<ViewStyle>;
}

const Gap = memo((props: GapProps) => {
  const {height = 0, width = 0, ...baseProps} = props;
  return <View style={styles.container(height, width)} {...baseProps} />;
});

export default Gap;

const styles: StyleSheetType = {
  container: (height: number, width: number): ViewStyle => ({
    height,
    width,
  }),
};
