import {useMemo, useState} from 'react';

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

export default function useFilter<T>(data: T[], filter: Filter<T>): T[] {
  const [searchedData, setSearchedData] = useState(data);

  const {search, sort} = filter;

  useMemo(() => {
    if (data.length) {
      let searched: T[] = [...data];
      if (search.query) {
        searched = data.filter(item =>
          search.field.some(
            key =>
              key &&
              item[key] &&
              String(item[key])
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
    }
  }, [search, sort, data]);

  return searchedData;
}
