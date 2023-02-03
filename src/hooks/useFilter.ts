import {useCallback, useMemo, useState} from 'react';

export type Filter<T> = {
  search: {
    query: string;
    field: Array<keyof T>;
  };
  sort: {
    field: keyof T;
    order: 'asc' | 'desc';
  };
};

export default function useFilter<T>(
  data: T[],
  search: Filter<T>['search'],
  sort: Filter<T>['sort'],
): T[] {
  const [searchedData, setSearchedData] = useState(data);

  const filterData = useCallback(() => {
    let searched: T[] = data;
    if (search.query) {
      searched = data.filter(item =>
        search.field.some(
          key =>
            key &&
            item[key] &&
            item[key]
              .toString()
              .toLowerCase()
              .includes(search.query.toLowerCase()),
        ),
      );
    }
    if (sort.field) {
      searched = searched.sort((a, b) => {
        if (a[sort.field] < b[sort.field]) {
          return sort.order === 'asc' ? -1 : 1;
        }
        if (a[sort.field] > b[sort.field]) {
          return sort.order === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    setSearchedData(searched);
  }, [search, sort]);

  useMemo(() => {
    if (data.length) {
      filterData();
    }
  }, [data]);

  return searchedData;
}
