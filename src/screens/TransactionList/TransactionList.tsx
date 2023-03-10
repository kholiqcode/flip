import React, {useCallback, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
} from 'react-native';

import {SortEnum} from '@constants/sort';
import useFilter, {Filter} from '@hooks/useFilter';
import {RootStackParamList} from '@navigation/types';
import {useGetTransactionsQuery} from '@services/transactions';
import {Transaction} from '@services/transactions/types';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Gap} from '@components/atoms';
import {FilterButton, SortModal} from '@components/molecules';
import {SearchBar, TransactionCard} from '@components/organisms';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type TransactionListScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'TransactionListScreen'
>;

export default function TransactionList(
  props: TransactionListScreenNavigationProp,
) {
  const {navigation} = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
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

  const {data: transactionsData, isLoading} = useGetTransactionsQuery({}, {});

  const filteredData = useFilter(
    transactionsData?.length ? transactionsData : [],
    filter,
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
          order: 'desc',
        };
        break;
      case SortEnum.TANGGAL_TERLAMA:
        newSort = {
          field: 'created_at',
          order: 'asc',
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

    setIsModalVisible(false);
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
              onPress={() => setIsModalVisible(true)}
            />
          }
        />
        <Gap height={16} />
      </>
    ),
    [filter],
  );

  const renderItem: ListRenderItem<Transaction> = useCallback(({item}) => {
    return (
      <>
        <TransactionCard
          data={item}
          onPress={() =>
            navigation.navigate('TransactionDetailScreen', {data: item})
          }
        />
        <Gap height={16} />
      </>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        ListFooterComponent={
          isLoading ? <ActivityIndicator color="#f96a53" size="large" /> : null
        }
        showsVerticalScrollIndicator={false}
      />
      <SortModal
        modalVisible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
        }}
        onSort={onFilter}
      />
    </SafeAreaView>
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
