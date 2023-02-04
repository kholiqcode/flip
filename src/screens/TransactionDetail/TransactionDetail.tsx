import React, {useCallback, useMemo} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

import {
  TransactionDetailEnum,
  TransactionStatusServiceEnum,
} from '@constants/transaction';
import useToggle from '@hooks/useToggle';
import {Transaction} from '@services/transactions/types';
import {formatCurrency, formatDate} from '@utils/formatter';

import {CopyButton, Gap} from '@components/atoms';
import {SenderBankText, TransactionInfoItem} from '@components/molecules';
import {
  InfoItem,
  TransactionDetailScreenNavigationProp,
} from '@screens/TransactionDetail/types';

const transactionInfoBuilder = (data: Transaction) => [
  {
    label:
      data.status === TransactionStatusServiceEnum.SUCCESS
        ? data.beneficiary_name
        : `-${data.beneficiary_name}`,
    value: data.account_number,
  },
  {
    label: TransactionDetailEnum.NOMINAL,
    value: formatCurrency(data.amount),
  },
  {
    label: TransactionDetailEnum.BERITA_TRANSAFER,
    value: data.remark,
  },
  {
    label: TransactionDetailEnum.KODE_UNIK,
    value: data.unique_code.toString(10),
  },
  {
    label: TransactionDetailEnum.WAKTU_DIBUAT,
    value: formatDate(data.created_at),
  },
];

export default function (props: TransactionDetailScreenNavigationProp) {
  const {route} = props;
  const {data} = route.params;

  const [iscloseInfo, setIsCloseInfo] = useToggle(true);

  const transactionInfo: InfoItem[] = transactionInfoBuilder(data);

  const keyExtractor = useCallback(
    (item: InfoItem) => `${item.label}_${item.value}`,
    [],
  );

  const renderHeaderSection = useMemo(
    () => (
      <View style={styles.headerWrapper}>
        <Text style={styles.text}>
          {TransactionDetailEnum.DETAIL_TRANSAKSI}
        </Text>
        <Pressable onPress={setIsCloseInfo}>
          <Text style={styles.closeTxt}>{TransactionDetailEnum.TUTUP}</Text>
        </Pressable>
      </View>
    ),
    [],
  );

  const renderTransactionInfo = useMemo(
    () => (
      <View style={styles.infoWrapper}>
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
          scrollEnabled={false}
        />
      </View>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.trxIdWrapper}>
        <Text style={styles.text}>
          {TransactionDetailEnum.ID_TRANSAKSI}: #{data?.id}
        </Text>
        <Gap width={5} />
        <CopyButton text={data.id} />
      </View>
      {renderHeaderSection}
      {iscloseInfo ? renderTransactionInfo : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3faf8',
    paddingTop: 24,
  },
  trxIdWrapper: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  text: {color: 'black', fontWeight: '800', fontSize: 14},
  headerWrapper: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 2,
    justifyContent: 'space-between',
  },
  closeTxt: {color: '#f96a53', fontWeight: '800', fontSize: 14},
  infoWrapper: {backgroundColor: 'white', padding: 20},
});
