import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { filterBySelect } from './bookListAction'
import SearchBar from './searchBar'
import ContactTable from './contactTable'

const bookScreen = ({ route, navigation }) => {
  const { books } = route.params;
  const [filterText, setFilterText] = useState(""); 
  const [filterPrice, setFilterPrice] = useState(""); 
  const [filterSelect, setFilterSelect] = useState("="); 
  const [bookShow, setBookShow] = useState(books); 

  useEffect(() => {     
    filterHandler();
  }, [filterText, filterPrice, filterSelect])

  const filterHandler = () => {
    let booksFilter = []

    if (filterText.length === 0 && filterPrice.length === 0) {        
      setBookShow(books)
    } else {        
      if (filterPrice.length > 0) { 
        console.log("filterSelect, booksFilter, books, filterPrice",filterSelect, booksFilter, books, filterPrice);                                                   
        booksFilter = filterBySelect(filterSelect, booksFilter, books, filterPrice)

        booksFilter = booksFilter.filter(item => { 
          return item.bookingId.toString().startsWith(filterText)                                       
        });
          
        setBookShow(booksFilter);    
      } else {
        booksFilter = books.filter(item => { 
          return item.bookingId.toString().startsWith(filterText)                                       
        });
      
        setBookShow(booksFilter);
      }                
    }            
  } 

  return (
    <LinearGradient
      colors={['#f6d365','#fda085']}
      start={[0, 0]}
      end={[1, 1]}            
      style={styles.container}
    > 
      <View style={{ margin: '5%' }}>
        <SearchBar
          filterText={filterText}
          setFilterText={setFilterText}
          filterPrice={filterPrice}
          setFilterPrice={setFilterPrice}
          filterSelect={filterSelect}
          setFilterSelect={setFilterSelect}          
        />
        <ContactTable
          books={bookShow}
          filterText={filterText}
          filterPrice={filterPrice}
          filterSelect={filterSelect}
        />
      </View>
    </LinearGradient>   
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'        
    },    
})

export default bookScreen;