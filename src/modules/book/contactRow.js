import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const ContactRow = ({ item }) => {
  const { bookingId, tutenUserClient, bookingTime, locationId, bookingPrice } = item
  const { firstName, lastName } = tutenUserClient        
  
  const date = new Date(bookingTime)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  let dateBook
  if(month < 10){
    dateBook = `${day}-0${month}-${year}`
  }else{
    dateBook = `${day}-${month}-${year}`
  }

  return (
    <View style={styles.item}>
      <Text style={styles.title}><b>BookingId:</b> {bookingId}</Text>
      <Text style={styles.title}><b>Cliente:</b> {firstName +' '+ lastName}</Text>
      <Text style={styles.title}><b>Fecha de Creación:</b> {dateBook}</Text>
      <Text style={styles.title}><b>Direccion:</b> {locationId.streetAddress}</Text>
      <Text style={styles.title}><b>Precio:</b> ${new Intl.NumberFormat().format(bookingPrice)}</Text>      
    </View>
  )     
};  

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 5,
    marginVertical: 8,    
  },
  title: {
    fontSize: 10,
  },
});

export default ContactRow