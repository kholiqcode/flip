import React, {useCallback, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {ICChevronDown, ICSearch} from '@assets';
import {useGetTransactionsQuery} from '@services/transactions';
import {Transaction} from '@store/transaction/types';

import {Gap} from '@components/atoms';
import {SortModal, TransactionCard} from '@components/molecules';

export default function TransactionList() {
  const [modalVisible, setModalVisible] = useState(false);

  const {data: transactionsData} = useGetTransactionsQuery({}, {});

  const keyExtractor = useCallback((item: Transaction) => item.id, []);

  const renderHeader = useCallback(
    () => (
      <>
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
      </>
    ),
    [],
  );

  const renderItem: ListRenderItem<Transaction> = useCallback(
    ({item, index}) => {
      return (
        <>
          <TransactionCard data={item} />
          {transactionsData && transactionsData.length - 1 === index ? null : (
            <Gap height={16} />
          )}
        </>
      );
    },
    [transactionsData],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactionsData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
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
