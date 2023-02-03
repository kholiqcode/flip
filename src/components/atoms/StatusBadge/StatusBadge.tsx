import React, {memo} from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';

import {TransactionStatusEnum} from '@constants/transaction';

export interface StatusBadgeProps extends ViewProps {
  isSuccess?: boolean;
}

const StatusBadge = memo((props: StatusBadgeProps) => {
  const {isSuccess, ...baseProps} = props;

  const bgColorByStatus = isSuccess ? '#00bb83' : '#fff';
  const borderColorByStatus = isSuccess ? '#00bb83' : '#f96a53';
  const labelColorByStatus = isSuccess ? '#fff' : '#202020';

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {
          borderWidth: isSuccess ? 0 : 2,
          borderColor: borderColorByStatus,
          backgroundColor: bgColorByStatus,
        },
      ])}
      {...baseProps}>
      <Text
        style={StyleSheet.flatten([
          styles.label,
          {
            color: labelColorByStatus,
          },
        ])}>
        {isSuccess
          ? TransactionStatusEnum.SUCCESS
          : TransactionStatusEnum.PENDING}
      </Text>
    </View>
  );
});

export default StatusBadge;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {color: '#202020', fontWeight: '800', fontSize: 12},
});
