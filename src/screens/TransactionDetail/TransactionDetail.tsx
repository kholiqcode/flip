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
          <View style={{flex: 2}}>
            <Text style={{color: 'black', fontWeight: '900', fontSize: 14}}>
              - SYIFA SALSABYLA
            </Text>
            <Gap height={3} />
            <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
              0313955548
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black', fontWeight: '900', fontSize: 14}}>
              NOMINAL
            </Text>
            <Gap height={3} />
            <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
              Rp10.028
            </Text>
          </View>
        </View>
        <Gap height={25} />
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2}}>
            <Text style={{color: 'black', fontWeight: '900', fontSize: 14}}>
              BERITA TRANSFER
            </Text>
            <Gap height={3} />
            <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
              Coba mbanking yey
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black', fontWeight: '900', fontSize: 14}}>
              KODE UNIK
            </Text>
            <Gap height={3} />
            <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
              50
            </Text>
          </View>
        </View>
        <Gap height={25} />
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2}}>
            <Text style={{color: 'black', fontWeight: '900', fontSize: 14}}>
              WAKTU DIBUAT
            </Text>
            <Gap height={3} />
            <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
              8 April 2020
            </Text>
          </View>
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
