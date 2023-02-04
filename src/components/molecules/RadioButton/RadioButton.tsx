import React, {memo} from 'react';
import {Pressable, PressableProps, StyleSheet, Text, View} from 'react-native';

import {Gap} from '@components/atoms/Gap';

interface RadioButtonProps extends PressableProps {
  isSelected?: boolean;
  label: string;
}

const RadioButton = memo((props: RadioButtonProps) => {
  const {isSelected, label, ...baseProps} = props;

  return (
    <Pressable style={{flexDirection: 'row'}} {...baseProps}>
      <View style={styles.wrapper}>
        {isSelected ? <View style={styles.dot} /> : null}
      </View>
      <Gap width={10} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
});

export default RadioButton;

const styles = StyleSheet.create({
  wrapper: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f96a53',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#f96a53',
  },
  label: {color: '#202020', fontWeight: '600'},
});
