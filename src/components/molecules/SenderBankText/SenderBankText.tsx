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
      <Text style={styles.bankNameTxt}>{data.senderBank}</Text>
      <Gap width={5} />
      <ICArrowRight width={16} height={16} />
      <Gap width={5} />
      <Text style={styles.bankNameTxt}>{data.beneficiaryBank}</Text>
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
