import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import {ICChevronDown, ICSearch} from '@assets';

import {Gap} from '@components/atoms';
import {SortModal, TransactionCard} from '@components/molecules';

export default function TransactionList() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <ICSearch fill={'#a7a7a7'} height={16} width={16} />
        <Gap width={5} />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari nama, bank atau nominal"
          placeholderTextColor="#a7a7a7"
          numberOfLines={1}
        />
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.sortContainer}>
          <Text
            style={{
              color: '#f96a53',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            URUTKAN
          </Text>
          <Gap width={5} />
          <ICChevronDown height={16} width={16} fill="#f96a53" />
        </Pressable>
      </View>
      <Gap height={16} />
      <TransactionCard
        data={{
          id: 'FT13141',
          amount: 1798552,
          unique_code: 430,
          status: 'SUCCESS',
          sender_bank: 'bni',
          account_number: '836901412',
          beneficiary_name: 'Sufyan Kramer',
          beneficiary_bank: 'bri',
          remark: 'sample remark',
          created_at: '2023-02-02 22:25:33',
          completed_at: '2023-02-02 22:25:33',
          fee: 0,
        }}
      />
      <Gap height={16} />
      <TransactionCard
        data={{
          id: 'FT13141',
          amount: 1798552,
          unique_code: 430,
          status: 'PENDING',
          sender_bank: 'bni',
          account_number: '836901412',
          beneficiary_name: 'Sufyan Kramer',
          beneficiary_bank: 'bri',
          remark: 'sample remark',
          created_at: '2023-02-02 22:25:33',
          completed_at: '2023-02-02 22:25:33',
          fee: 0,
        }}
      />
      <SortModal
        modalVisible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        onSort={sort => console.warn(sort)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3faf8',
    padding: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 12,
  },
  searchInput: {
    color: '#202020',
    flex: 2,
    fontSize: 12,
    fontWeight: '500',
  },
  sortContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortText: {
    color: '#f96a53',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
