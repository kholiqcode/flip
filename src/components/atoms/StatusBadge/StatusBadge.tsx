import React from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';

export interface IStatusBadgeProps {
  isSuccess?: boolean;
  styles?: ViewProps;
}

enum TransactionStatusEnum {
  SUCCESS = 'Berhasil',
  PENDING = 'Pengecekan',
}

const StatusBadge = (props: IStatusBadgeProps) => {
  const {isSuccess, ...baseProps} = props;
  return (
    <View style={styles.container} {...baseProps}>
      <Text style={styles.label}>
        {isSuccess
          ? TransactionStatusEnum.SUCCESS
          : TransactionStatusEnum.PENDING}
      </Text>
    </View>
  );
};

export default StatusBadge;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#f96a53',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {color: '#202020', fontWeight: '800', fontSize: 12},
});
