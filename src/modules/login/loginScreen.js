import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getBooksWithToken, formValidate } from './loginAction'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [spinner, setSpinner] = useState(false); 

    const summitClick = async (e) => {
        e.preventDefault();
    
        if(formValidate(email,password)) {
            setSpinner(true)
            const books = await getBooksWithToken(email, password)            
            if (books) {               
                navigation.navigate('book', {
                    books
                });                     
            } else {
                setSpinner(false)
                console.log(`Bad Request`);
            }           
        } else {
            alert(`Bad Request`)
        }        
    }
    return ( 
        <LinearGradient
            colors={['#f6d365','#fda085']}
            start={[0, 0]}
            end={[1, 1]}            
            style={styles.container}
        >    
            {spinner ? 
                (
                    <div className="sp sp-3balls"></div>
                ) : 
                (
                    <>
                        <Text style={styles.logo}>Login</Text>
                        <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Username" 
                            onChangeText={text => setEmail(text)}/>
                        </View>
                        <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Password"
                            secureTextEntry={true} 
                            onChangeText={text => setPassword(text)}/>
                        </View>
                        <LinearGradient                    
                            colors={['rgba(34,193,195,1)', 'rgba(253,187,45,1)']}
                            start={[0, 0]}
                            end={[1, 1]}                                       
                            style={styles.loginBtn}                
                        >
                            <TouchableOpacity onPress={summitClick}>
                                <Text style={styles.textLoginBtn}>
                                    Log in
                                </Text>
                            </TouchableOpacity>                
                        </LinearGradient>            
                    </>
                ) 
            }            
        </LinearGradient>   
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    logo:{
        fontSize:35,
        marginBottom:20,
        fontWeight: '400'
    },
    inputView:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:5,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"black"
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    textLoginBtn:{
        color: '#fff',
        fontSize: '1.3rem',
        fontWeight: '700'
    }    
})

export default LoginScreen;