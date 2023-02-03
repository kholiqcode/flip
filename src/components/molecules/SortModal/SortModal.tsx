import React, {memo, useCallback, useState} from 'react';
import {
  FlatList,
  Modal,
  ModalProps,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import {SortEnum} from '@constants/sort';

import {Gap} from '@components/atoms';
import {RadioButton} from '@components/molecules/RadioButton';

interface SortModalProps extends ModalProps {
  modalVisible: boolean;
  onSort?: (sort: string) => void;
  onClose: () => void;
}

const SortModal = memo((props: SortModalProps) => {
  const {modalVisible, onClose, onSort, ...baseProps} = props;
  const [selectedSort, setSelectedSort] = useState<string>(SortEnum.URUTKAN);

  const renderItem = useCallback(
    ({item, index}: {item: string; index: number}) => {
      const isLastItem = index + 1 === Object.keys(SortEnum).length;
      return (
        <>
          <RadioButton
            label={item}
            isSelected={item === selectedSort}
            onPress={() => {
              setSelectedSort(item);
              if (onSort) {
                onSort(item);
              }
            }}
          />
          {isLastItem ? null : <Gap height={20} />}
        </>
      );
    },
    [selectedSort],
  );

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      onRequestClose={onClose}
      {...baseProps}>
      <Pressable
        style={styles.container}
        onPress={event => {
          if (event.target == event.currentTarget) {
            onClose();
          }
        }}>
        <View style={styles.modal}>
          <FlatList
            data={Object.values(SortEnum)}
            renderItem={renderItem}
            keyExtractor={item => item}
          />
        </View>
      </Pressable>
    </Modal>
  );
});

export default SortModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 15,
  },
  modal: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 5,
    margin: 20,
    elevation: 5,
  },
});
