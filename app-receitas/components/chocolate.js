import * as React from 'react';
import{Text, View, Image, StyleSheet, ScrollView} from 'react-native';

export default function Chocolate(){
  return (
    <ScrollView>
      <View style={styles.container}>
      <Text  style={styles.paragraph}>
Bolo de chocolate é uma das receitas mais populares e amadas em todo o mundo. Com sua textura fofa e sabor delicioso, é difícil resistir a uma fatia deste doce tão amado. Neste texto, vou compartilhar uma receita de bolo de chocolate que é fácil de fazer e que certamente agradará a todos.
</Text>

<Text style={styles.subTitulo}>Ingredientes</Text>

<Text  style={styles.paragraph}>
- 2 xícaras de açúcar{'\n'}
- 1 3/4 xícaras de farinha de trigo{'\n'}
- 3/4 xícaras de cacau em pó{'\n'}
- 1 1/2 colher de chá de bicarbonato de sódio{'\n'}
- 1 colher de chá de sal{'\n'}
- 2 ovos{'\n'}
- 1 xícara de leite{'\n'}
- 1/2 xícara de óleo vegetal{'\n'}
- 2 colheres de chá de essência de baunilha{'\n'}
- 1 xícara de água quente
</Text>

<Text style={styles.subTitulo}>Modo de preparo</Text>

<Text  style={styles.paragraph}>
- Pré-aqueça o forno a 180 graus C. {'\n'}{'\n'}
- Unte uma forma de bolo com manteiga ou óleo e polvilhe com farinha.{'\n'}{'\n'}
- Em uma tigela grande, misture o açúcar, a farinha de trigo, o cacau em pó, o bicarbonato de sódio e o sal.{'\n'}{'\n'}
- Em outra tigela, misture os ovos, o leite, o óleo vegetal e a essência de baunilha.{'\n'}{'\n'}
- Adicione os ingredientes líquidos aos ingredientes secos e misture até ficar homogêneo.{'\n'}{'\n'}
- Adicione a água quente à mistura e misture novamente.{'\n'}{'\n'}
- Despeje a mistura na forma untada e leve ao forno por cerca de 35 a 40 minutos ou até que um palito inserido no centro do bolo saia limpo.{'\n'}{'\n'}
- Deixe esfriar antes de desenformar.
</Text>

<Text style={styles.subTitulo}>Dicas</Text>

<Text  style={styles.paragraph}>
Se quiser um bolo mais molhadinho, você pode adicionar mais água quente à receita.{'\n'}{'\n'}
Para deixar o bolo ainda mais saboroso, você pode adicionar pedaços de chocolate na massa antes de assar.{'\n'}{'\n'}
Sirva o bolo com uma calda de chocolate ou chantilly para deixá-lo ainda mais gostoso.{'\n'}{'\n'}

Este bolo de chocolate é perfeito para qualquer ocasião, desde um café da manhã especial até uma festa de aniversário. Ele é fácil de fazer e certamente será um sucesso entre seus amigos e familiares. Então, não hesite em experimentar esta receita deliciosa e desfrutar de um delicioso bolo de chocolate!
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