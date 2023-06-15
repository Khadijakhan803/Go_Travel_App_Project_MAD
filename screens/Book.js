 import {View,Text,StyleSheet,TextInput,TouchableOpacity,Keyboard,Image} from 'react-native';
 import React,{useState} from 'react';
 import {firebase} from '../components/Login/firebase';

 const Book = () => {
    const todoRef = firebase.firestore().collection('newData');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateToVisit, setDateToVisit] = useState('');
  
    const addField = () => {
      if (name && name.length > 0) {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
          name: name,
          phoneNumber: phoneNumber,
          dateToVisit: dateToVisit,
          createdAt: timestamp,
        };
        todoRef
          .add(data)
          .then(() => {
            setName('');
            setPhoneNumber('');
            setDateToVisit('');
            Keyboard.dismiss();
          })
          .catch((error) => {
            alert(error);
          });
    {alert('Booked')}
      }
    };
    return (
        <View>
        <View>
        <Text className="text-[40px] text-[#063e44cf] font-extrabold ">Book Now</Text>
        <Text className="text-[#527283] text-[36px]">Enjoy your Beautiful Trip</Text>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',height:40,margin:100}}>
        <Image source={require('../assets/1.png')} style={styles.image}/>
        </View>
      </View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#aaaaaa"
              onChangeText={(name) => setName(name)}
              value={name}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#aaaaaa"
              onChangeText={(phone) => setPhoneNumber(phone)}
              value={phoneNumber}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType='numeric'
            />
            <TextInput
              style={styles.input}
              placeholder="Enter date to visit"
              placeholderTextColor="#aaaaaa"
              onChangeText={(date) => setDateToVisit(date)}
              value={dateToVisit}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={addField}>
              <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
    
          </View>
        </View>
      );
      
  }


 const styles=StyleSheet.create({
    formContainer:{
        flexDirection:'column',
        paddingTop:20,
        padding:30,
        margin:20,
        backgroundColor:'lightblue',
        borderRadius:10,
    },
    input:{
        height:40,
        borderRadius:5,
        backgroundColor:'white',
        margin:5,
        padding:10
    },
    button:{
        height:47,
        borderRadius:5,
        backgroundColor:'#063e44cf',
        width:80,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
    },
    buttonText:{
        color:'white',
        fontSize:20
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
       justifyContent:'center',
       alignItems:'center'
      },
 })
 export default Book;  