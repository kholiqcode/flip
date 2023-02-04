import React, {useCallback} from 'react';
import {
  Clipboard,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {ICCopy} from '@assets';
import {Transaction} from '@store/transaction/types';
import {formatCurrency, formatDate} from '@utils/formatter';

import {Gap} from '@components/atoms';
import {SenderBankText, TransactionInfoItem} from '@components/molecules';
import {
  InfoItem,
  TransactionDetailScreenNavigationProp,
} from '@screens/TransactionDetail/types';

const transactionInfoBuilder = (data: Transaction) => [
  {
    label:
      data.status === 'SUCCESS'
        ? data.beneficiary_name
        : `- ${data.beneficiary_name}`,
    value: data.account_number,
  },
  {
    label: 'Nominal',
    value: formatCurrency(data.amount),
  },
  {
    label: 'Berita Transfer',
    value: data.remark,
  },
  {
    label: 'Kode Unik',
    value: data.unique_code.toString(10),
  },
  {
    label: 'Waktu Dibuat',
    value: formatDate(data.created_at),
  },
];

export default function (props: TransactionDetailScreenNavigationProp) {
  const {route} = props;
  const {data} = route.params;

  const transactionInfo: InfoItem[] = transactionInfoBuilder(data);

  const keyExtractor = useCallback(
    (item: InfoItem) => `${item.label}_${item.value}`,
    [],
  );

  const copyToClipboard = () => {
    Clipboard.setString(data.id);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          flexDirection: 'row',
          borderBottomColor: '#f8f8f8',
          borderBottomWidth: 1,
        }}>
        <Text style={{color: 'black', fontWeight: '800', fontSize: 14}}>
          ID TRANSAKSI: #{data?.id}
        </Text>
        <Gap width={5} />
        <TouchableOpacity onPress={copyToClipboard} activeOpacity={0.4}>
          <ICCopy fill="#f96a53" width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          flexDirection: 'row',
          borderBottomColor: '#ebebeb',
          borderBottomWidth: 2,
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black', fontWeight: '800', fontSize: 14}}>
          DETAIL TRANSAKSI
        </Text>
        <Pressable>
          <Text style={{color: '#f96a53', fontWeight: '800', fontSize: 14}}>
            Tutup
          </Text>
        </Pressable>
      </View>
      <View style={{backgroundColor: 'white', padding: 20}}>
        <SenderBankText
          data={{
            senderBank: data.sender_bank,
            beneficiaryBank: data.beneficiary_bank,
          }}
        />
        <Gap height={25} />
        <FlatList
          data={transactionInfo}
          keyExtractor={keyExtractor}
          renderItem={({item, index}) => (
            <TransactionInfoItem
              style={{flex: index % 2 === 0 ? 2 : 1, marginBottom: 20}}
              label={item.label}
              value={item.value.toString()}
            />
          )}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3faf8',
    paddingTop: 24,
  },
});
