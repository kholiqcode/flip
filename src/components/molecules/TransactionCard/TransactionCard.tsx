import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

import {Gap, StatusBadge} from '@components/atoms';

export interface ITransactionCardProps extends ViewStyle {
  data: {
    id: string;
    amount: number;
    unique_code: number;
    status: string;
    sender_bank: string;
    account_number: string;
    beneficiary_name: string;
    beneficiary_bank: string;
    remark: string;
    created_at: string;
    completed_at: string;
    fee: number;
  };
}

const TransactionCard = (props: ITransactionCardProps) => {
  const {data, ...baseProps} = props;
  return (
    <View style={styles.container} {...baseProps}>
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={StyleSheet.flatten([
            styles.infoText,
            {
              color: 'red',
            },
          ])}
          numberOfLines={1}>
          {`${data?.sender_bank} → ${data?.beneficiary_bank}`}
        </Text>
        <Gap height={8} />
        <Text style={styles.infoText} numberOfLines={1}>
          {`-${data?.beneficiary_name}`}
        </Text>
        <Gap height={8} />
        <Text
          style={
            styles.infoText
          }>{`${data?.amount} ● ${data?.completed_at}`}</Text>
      </View>
      <StatusBadge />
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderLeftColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderLeftWidth: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 12,
  },
  infoText: {color: '#202020', fontWeight: '600', fontSize: 12},
});
