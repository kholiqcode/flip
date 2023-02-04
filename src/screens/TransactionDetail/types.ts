import {RootStackParamList} from '@navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TransactionDetailScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'TransactionDetailScreen'
>;

export type InfoItem = {
  label: string;
  value: string;
};
