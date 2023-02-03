import React, {memo} from 'react';
import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';

import {ICChevronDown} from '@assets';

import {Gap} from '@components/atoms';

interface FilterButtonProps extends PressableProps {
  label: string;
}

const FilterButton = memo((props: FilterButtonProps) => {
  const {label, ...baseProps} = props;
  return (
    <Pressable style={styles.container} {...baseProps}>
      <Text style={styles.label}>{label}</Text>
      <Gap width={5} />
      <ICChevronDown height={16} width={16} fill="#f96a53" />
    </Pressable>
  );
});

export default FilterButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#f96a53',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
