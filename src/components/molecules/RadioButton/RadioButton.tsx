import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewProps} from 'react-native';

import {Gap} from '../../atoms/Gap';

interface IRadioButton extends ViewProps {
  isSelected?: boolean;
  label: string;
  onPress?: () => void;
}

const RadioButton = React.memo((props: IRadioButton) => {
  const {isSelected, label, onPress, ...baseProps} = props;

  return (
    <View style={{flexDirection: 'row'}} {...baseProps}>
      <Pressable style={styles.wrapper} onPress={onPress}>
        {isSelected ? <View style={styles.dot} /> : null}
      </Pressable>
      <Gap width={10} />
      <Text style={{color: '#202020', fontWeight: '600'}}>{label}</Text>
    </View>
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
});
