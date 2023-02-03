import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';

import {SortEnum} from '@constants/sort';
import useFilter, {Filter} from '@hooks/useFilter';
import {useGetTransactionsQuery} from '@services/transactions';
import {Transaction} from '@store/transaction/types';

import {Gap} from '@components/atoms';
import {FilterButton, SortModal, TransactionCard} from '@components/molecules';
import {SearchBar} from '@components/oraganisms';

export default function TransactionList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(SortEnum.URUTKAN);
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

  const onSearch = (query: string) => {
    const newFilter = {
      ...filter,
      search: {
        ...filter.search,
        query,
      },
    };
    setFilter(newFilter);
  };

  const onFilter = (value: SortEnum) => {
    setSortBy(value);

    let newSort: Filter<Transaction>['sort'];
    switch (value) {
      case SortEnum.NAMAZA:
        newSort = {
          field: 'beneficiary_name',
          order: 'desc',
        };
        break;
      case SortEnum.TANGGAL_TERBARU:
        newSort = {
          field: 'created_at',
          order: 'asc',
        };
        break;
      case SortEnum.TANGGAL_TERLAMA:
        newSort = {
          field: 'created_at',
          order: 'desc',
        };
        break;

      default:
        newSort = {
          field: 'beneficiary_name',
          order: 'asc',
        };
        break;
    }

    setFilter(prevState => {
      return {
        ...prevState,
        sort: newSort,
      };
    });

    setModalVisible(false);
  };

  const keyExtractor = useCallback((item: Transaction) => item.id, []);

  const renderHeader = useMemo(
    () => (
      <>
        <SearchBar
          onSearch={onSearch}
          value={filter.search.query}
          rightElement={
            <FilterButton
              label={sortBy}
              onPress={() => setModalVisible(true)}
            />
          }
        />
        <Gap height={16} />
      </>
    ),
    [filter],
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
        onSort={onFilter}
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
});
