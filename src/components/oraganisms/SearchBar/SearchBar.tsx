import React, {memo} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
} from 'react-native';

import {ICSearch} from '@assets';

import {Gap} from '@components/atoms';

interface SearchBarProps extends ViewProps {
  onSearch: (query: string) => void;
  value: string;
  inputStyle?: TextInputProps;
  rightElement?: JSX.Element;
}

const SearchBar = memo((props: SearchBarProps) => {
  const {onSearch, value, rightElement, inputStyle, ...baseProps} = props;
  return (
    <View style={styles.container} {...baseProps}>
      <ICSearch fill={'#a7a7a7'} height={16} width={16} />
      <Gap width={5} />
      <TextInput
        style={styles.searchInput}
        placeholder="Cari nama, bank atau nominal"
        placeholderTextColor="#a7a7a7"
        numberOfLines={1}
        onChangeText={onSearch}
        value={value}
        {...inputStyle}
      />
      {rightElement}
    </View>
  );
});

export default SearchBar;

const styles = StyleSheet.create({
  container: {
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
});
