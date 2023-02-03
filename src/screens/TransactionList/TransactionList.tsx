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
import {SortEnum} from '@constants/sort';
import useFilter, {Filter} from '@hooks/useFilter';
import {useGetTransactionsQuery} from '@services/transactions';
import {Transaction} from '@store/transaction/types';

import {Gap} from '@components/atoms';
import {SortModal, TransactionCard} from '@components/molecules';

export default function TransactionList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState<Filter<Transaction>>({
    search: {
      query: '',
      field: ['beneficiary_name', 'beneficiary_bank', 'sender_bank', 'amount'],
    },
    sort: {
      field: 'beneficiary_name',
      order: 'asc',
    },
  });

  const {data: transactionsData} = useGetTransactionsQuery({}, {});

  const filteredData = useFilter(
    transactionsData?.length ? transactionsData : [],
    filter.search,
    filter.sort,
  );

  const onSearch = (value: string) => {
    const newFilter = {
      ...filter,
      search: {
        ...filter.search,
        query: value,
      },
    };
    setFilter(newFilter);
  };

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
            onChangeText={onSearch}
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
              {SortEnum.URUTKAN}
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
    ({item}) => {
      return (
        <>
          <TransactionCard data={item} />
          <Gap height={16} />
        </>
      );
    },
    [transactionsData],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
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
    paddingHorizontal: 12,
    paddingTop: 12,
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
});
