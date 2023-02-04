import React, {memo} from 'react';
import {Pressable, PressableProps, StyleSheet, Text, View} from 'react-native';

import {TransactionStatusServiceEnum} from '@constants/transaction';
import {Transaction} from '@services/transactions/types';
import {formatCurrency, formatDate} from '@utils/formatter';

import {Gap, StatusBadge} from '@components/atoms';
import {SenderBankText} from '@components/molecules/SenderBankText';

export interface TransactionCardProps extends PressableProps {
  data: Transaction;
}

const TransactionCard = memo((props: TransactionCardProps) => {
  const {data, ...baseProps} = props;

  const isTransactionSuccess =
    data?.status === TransactionStatusServiceEnum.SUCCESS;
  const colorByStatus = isTransactionSuccess ? '#00bb83' : '#f96a53';

  return (
    <Pressable
      style={StyleSheet.flatten([
        styles.container,
        {
          borderLeftColor: colorByStatus,
        },
      ])}
      {...baseProps}>
      <View
        style={{
          flex: 1,
        }}>
        <SenderBankText
          data={{
            senderBank: data.sender_bank,
            beneficiaryBank: data.beneficiary_bank,
          }}
        />
        <Gap height={8} />
        <Text
          style={StyleSheet.flatten([
            styles.infoText,
            {textTransform: 'uppercase'},
          ])}
          numberOfLines={1}>
          {isTransactionSuccess ? null : '- '}
          {data.beneficiary_name}
        </Text>
        <Gap height={8} />
        <Text style={styles.infoText}>{`${formatCurrency(
          data.amount,
        )} ● ${formatDate(data.created_at)}`}</Text>
      </View>
      <StatusBadge isSuccess={isTransactionSuccess} />
    </Pressable>
  );
});

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
  infoText: {
    color: '#202020',
    fontWeight: '600',
    fontSize: 12,
  },
});
