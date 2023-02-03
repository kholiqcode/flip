import React, {memo} from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';

import {Gap} from '@components/atoms';

interface TransactionInfoItemProps extends ViewProps {
  label: string;
  value: string;
}

const TransactionInfoItem = memo((props: TransactionInfoItemProps) => {
  const {label, value, ...baseProps} = props;
  return (
    <View {...baseProps}>
      <Text style={styles.text}>{label}</Text>
      <Gap height={3} />
      <Text style={StyleSheet.flatten([styles.text, {fontWeight: '600'}])}>
        {value}
      </Text>
    </View>
  );
});

export default TransactionInfoItem;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: '900',
    fontSize: 14,
  },
});
