import * as React from 'react';
import{Text, View, Image, StyleSheet, ScrollView} from 'react-native';

export default function Panqueca(){
  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.paragraph}>
O bolo de panqueca é uma receita deliciosa e fácil de fazer, perfeita para um café da manhã ou lanche da tarde. Ele combina a textura fofa de um bolo com o sabor e formato de uma panqueca. Se você está procurando uma receita para impressionar seus amigos e familiares, o bolo de panqueca é uma excelente opção.
</Text>


<Text style={styles.subTitulo}>Ingredientes</Text>

<Text style={styles.paragraph}>
- 2 xícaras de farinha de trigo{'\n'}
- 2 colheres de sopa de açúcar{'\n'}
- 1 colher de sopa de fermento em pó{'\n'}
- 1/2 colher de chá de bicarbonato de sódio{'\n'}
- 1/2 colher de chá de sal{'\n'}
- 2 ovos grandes{'\n'}
- 1 e 1/2 xícaras de leite{'\n'}
- 1/4 xícara de óleo vegetal{'\n'}
- 1 colher de chá de extrato de baunilha
</Text>

<Text style={styles.subTitulo}> Modo de Preparo</Text>

<Text  style={styles.paragraph}>
- Preaqueça o forno a 180 graus Celsius.
{'\n'}{'\n'}

- Em uma tigela grande, misture a farinha de trigo, o açúcar, o fermento em pó, o bicarbonato de sódio e o sal.
{'\n'}{'\n'}

- Em outra tigela, bata os ovos até ficarem leves e fofos. Adicione o leite, o óleo vegetal e o extrato de baunilha e bata novamente até misturar tudo.
{'\n'}{'\n'}

- Adicione a mistura líquida à mistura seca e misture delicadamente até ficar homogêneo. A massa ficará um pouco espessa.
{'\n'}{'\n'}

- Despeje a massa em uma forma de bolo untada e enfarinhada. Use uma espátula para alisar a superfície.
{'\n'}{'\n'}

- Asse por cerca de 30 a 35 minutos, ou até que um palito inserido no centro do bolo saia limpo.
{'\n'}{'\n'}

- Deixe o bolo esfriar por alguns minutos antes de desenformar. Sirva quente ou em temperatura ambiente, com frutas frescas, calda de chocolate ou mel.
</Text>

<Text style={styles.subTitulo}>Dicas</Text>

<Text style={styles.paragraph}>
Você pode adicionar algumas gotas de corante alimentício na massa para dar uma cor diferente ao bolo de panqueca.
{'\n'}{'\n'}
Experimente servir o bolo de panqueca com coberturas diferentes, como geleia, cream cheese, manteiga de amendoim ou chantilly.
{'\n'}{'\n'}
Se quiser uma versão mais saudável, substitua a farinha de trigo por farinha de aveia ou farinha de amêndoas e use leite de amêndoas ou leite de coco em vez de leite de vaca.
{'\n'}{'\n'}
O bolo de panqueca é uma receita versátil que pode ser personalizada de acordo com as preferências de cada um. Com ingredientes simples e um pouco de criatividade, você pode criar uma sobremesa deliciosa e impressionante para qualquer ocasião.
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