import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import GetPizzaHeader from './components/GetPizzaHeader';
import ProductRow from './components/ProductRow';

const datas= [
  {
    key:1,
    name:"Quatro queijos",
    desc:"Mussarela, Parmesão, Provolone, Catupiry e Molho de Tomate"
  },
  {
    key:2,
    name:"Frango e Catupiry",
    desc:"Frango desfiado, Catupiry, Milho, Molho De Tomate"
  },
  {
    key:3,
    name:"Calabresa",
    desc:"Calabresa, Cebola e Molho de Tomate"
  },
]

const App = () => {
  return(
    <View style={styles.container}>
     <GetPizzaHeader />

      <FlatList
      data={datas}
      keyExtractor={item => item.key.toString()}
      renderItem={({item})=> <ProductRow
        name={item.name}
        desc={item.desc}
      />
    }
      />

    </View>
  )
}

const  styles = StyleSheet.create({
  container: {
    flex:1
  },
  logo:{
    width:30,
    height:30
  }
});


export default App;