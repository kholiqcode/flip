import {useCallback, useMemo, useState} from 'react';

export default function useSearch<T>(
  data: T[],
  query: string,
  field: Array<keyof T>,
): T[] {
  const [searchedData, setSearchedData] = useState(data);

  const filterData = useCallback(() => {
    if (!query || !field.length) {
      setSearchedData(data);
    } else {
      const searched = data.filter(item =>
        field.some(
          key =>
            item &&
            item[key] &&
            item[key].toString().toLowerCase().includes(query.toLowerCase()),
        ),
      );
      setSearchedData(searched);
    }
  }, [query, field]);

  useMemo(() => {
    if (data.length) {
      filterData();
    }
  }, [data]);

  return searchedData;
}
