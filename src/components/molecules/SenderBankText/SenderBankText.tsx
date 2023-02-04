import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ICArrowRight} from '@assets';

import {Gap} from '@components/atoms';

interface SenderBankTextProps {
  data: {senderBank: string; beneficiaryBank: string};
}

const SenderBankText = memo((props: SenderBankTextProps) => {
  const {data, ...baseProps} = props;

  return (
    <View style={styles.container} {...baseProps}>
      <Text
        style={StyleSheet.flatten([
          styles.bankNameTxt,
          {
            textTransform:
              data.senderBank.length > 4 ? 'capitalize' : 'uppercase',
          },
        ])}>
        {data.senderBank}
      </Text>
      <Gap width={5} />
      <ICArrowRight width={16} height={16} />
      <Gap width={5} />
      <Text
        style={StyleSheet.flatten([
          styles.bankNameTxt,
          {
            textTransform:
              data.beneficiaryBank.length > 4 ? 'capitalize' : 'uppercase',
          },
        ])}>
        {data.beneficiaryBank}
      </Text>
    </View>
  );
});

export default SenderBankText;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  bankNameTxt: {
    color: 'black',
    fontWeight: '800',
    fontSize: 14,
  },
});
