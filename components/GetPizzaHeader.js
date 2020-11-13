import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity,} from 'react-native';
import {Header, Icon,} from 'react-native-elements';
import logo from '../assets/logo.png';

const cardAction =() => {
    console.log("clicou no carrinho");
  }

const GetPizzaHeader = () => {
    return(
        <Header 
        backgroundColor='#131313'
      >
        <View />
        <Image source={logo} style={styles.logo}/>
        <TouchableOpacity onPress={cardAction}>
        <Icon
            type='font-awesome'
            color='#fff'
            name='shopping-cart'
        />
        </TouchableOpacity>
      </Header>
    )
}

const  styles = StyleSheet.create({
    logo:{
      width:30,
      height:30
    }
  });

export default GetPizzaHeader;