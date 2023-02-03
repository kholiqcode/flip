import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {ICCopy} from '@assets';

import {Gap} from '@components/atoms';
import {TransactionInfoItem} from '@components/molecules';

const TransactionDetail = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          flexDirection: 'row',
          borderBottomColor: '#f8f8f8',
          borderBottomWidth: 1,
        }}>
        <Text style={{color: 'black', fontWeight: '800', fontSize: 14}}>
          ID TRANSAKSI: #FT16526923
        </Text>
        <Gap width={5} />
        <TouchableOpacity activeOpacity={0.4}>
          <ICCopy fill="#f96a53" width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          flexDirection: 'row',
          borderBottomColor: '#f8f8f8',
          borderBottomWidth: 2,
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black', fontWeight: '800', fontSize: 14}}>
          DETAIL TRANSAKSI
        </Text>
        <Pressable>
          <Text style={{color: '#f96a53', fontWeight: '800', fontSize: 14}}>
            Tutup
          </Text>
        </Pressable>
      </View>
      <View style={{backgroundColor: 'white', padding: 20}}>
        <View>
          <Text style={{color: 'black', fontWeight: '800', fontSize: 14}}>
            {`Permata → BNI`}
          </Text>
        </View>
        <Gap height={25} />
        <View style={{flexDirection: 'row'}}>
          <TransactionInfoItem
            style={{flex: 2}}
            label="- SYIFA SALSABYLA"
            value="0313955548"
          />
          <TransactionInfoItem
            style={{flex: 1}}
            label="NOMINAL"
            value="Rp10.028"
          />
        </View>
        <Gap height={25} />
        <View style={{flexDirection: 'row'}}>
          <TransactionInfoItem
            style={{flex: 2}}
            label="BERITA TRANSFER"
            value="Coba mbanking yey"
          />
          <TransactionInfoItem style={{flex: 1}} label="KODE UNIK" value="50" />
        </View>
        <Gap height={25} />
        <View style={{flexDirection: 'row'}}>
          <TransactionInfoItem label="WAKTU DIBUAT" value="8 April 2020" />
        </View>
      </View>
    </View>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3faf8',
    paddingTop: 24,
  },
});
