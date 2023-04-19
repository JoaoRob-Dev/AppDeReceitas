import * as React from 'react';
import{Text, View, Image, StyleSheet, Touch, FlatList, ScrollView} from 'react-native';

export default function Queijo(){
  return (
    <ScrollView>
      <View style={styles.container}>
      
      <Text style={styles.paragraph}>
O bolo de queijo é uma das sobremesas mais deliciosas que existem, e agora vou compartilhar com você uma receita fácil e deliciosa para que possa desfrutar desta delícia em casa.
</Text>

<Text style={styles.subTitulo}>Ingredientes</Text>

<Text style={styles.paragraph}>
 - 250g de biscoitos de leite {'\n'}
 - 100g de manteiga sem sal;{'\n'}
 - 500g de cream cheese;{'\n'}
 - 1 xícara de açúcar;{'\n'}
 - 2 colheres de sopa de farinha de trigo;{'\n'}
 - 4 ovos;{'\n'}
 - 1/4 xícara de creme de leite;{'\n'}
 - 1 colher de chá de essência de baunilha; {'\n'}
  - Raspas de limão siciliano;
</Text> 

<Text style={styles.subTitulo}> Modo de preparo</Text>

<Text style={styles.paragraph}>
- Pré-aqueça o forno a 180°C e unte uma forma de fundo removível com manteiga.{'\n'}{'\n'}
- Em um processador, triture os biscoitos até formar uma farofa. Adicione a manteiga derretida e misture bem.{'\n'}{'\n'}
- Coloque a mistura de biscoitos na forma, espalhando uniformemente e pressionando com as costas de uma colher.{'\n'}{'\n'} 

- Reserve em uma batedeira, bata o cream cheese até que fique cremoso.{'\n'}{'\n'}

- Adicione o açúcar, a farinha de trigo, os ovos e bata até que a mistura fique homogênea.{'\n'}{'\n'}

- Adicione o creme de leite, a essência de baunilha e as raspas de limão siciliano e misture.{'\n'}{'\n'}

- Despeje a mistura na forma preparada e leve ao forno por cerca de 40 minutos, ou até que o bolo esteja firme nas bordas e um pouco mole no centro.{'\n'}{'\n'}

- Retire do forno e deixe esfriar completamente antes de desenformar.{'\n'}{'\n'}

- Sirva o bolo de queijo gelado, decorado com raspas de limão siciliano ou frutas frescas.
</Text>
<Text style={styles.subTitulo}> Considerações</Text>
<Text style={styles.paragraph}>

Esta receita de bolo de queijo é perfeita para impressionar seus convidados em uma festa ou para simplesmente saborear em um dia de descanso. A textura cremosa e o sabor irresistível vão conquistar até os paladares mais exigentes. Então, experimente fazer este bolo em casa e surpreenda-se com o resultado!
     </Text>
      </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginTop: 35,
  },

  paragraph: {
    textAlign: 'justify',
    color: 'black',
    fontSize: 14,
    width: '90%'
  },

  subTitulo: {
    marginTop:30,
    marginBottom: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
  }
});