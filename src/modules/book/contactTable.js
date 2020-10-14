import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import ContactRow from './contactRow'

const ContactTable = ({ books }) => {
  // const renderItem = ({ item }) => {
  //   const { bookingId, tutenUserClient, bookingTime, locationId, bookingPrice } = item
    
  //   return (
  //     <View style={styles.item}>
  //       <Text style={styles.title}>{bookingId}</Text>
  //     </View>
  //   )     
  // };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={books}
        renderItem={ContactRow}
        keyExtractor={item => item.bookingId.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ContactTable;