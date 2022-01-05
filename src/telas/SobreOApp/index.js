import React from 'react';

import { Text, View, Image,Linking,TouchableOpacity } from 'react-native';
import estilos from './estilos';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';

export default function SobreOApp() {

    const imgSrc = require('../../../assets/Perfil.jpg')
    // const imgSrc = {uri: 'https://media-exp1.licdn.com/dms/image/C5603AQEH-Ogy22auFA/profile-displayphoto-shrink_200_200/0/1641052000483?e=1646265600&v=beta&t=zwEU-s_JfIfbqWVZ5H7wLfk1m362WzWRCDNp_oTeSuY'}

    const navigation = useNavigation();

    return (
        <TelaPadrao >
            <View>
                <Text h1 style={estilosGerais.titulosTela}> Sobre o App </Text>
                <View style={estilosGerais.divisor}/>
                <View >
                    <Text h2 style={estilos.titulo2}> Desenvolvido por Eng. Renan Torres. </Text>

                    <Text style={estilos.links}
                      onPress={() => Linking.openURL('https://br.linkedin.com/in/renan-torres-3ba43560')}>
                      Linkedin do autor
                    </Text>
                </View>
                <Text style={estilos.texto}> Contato: engrtorres@outlook.com </Text>
                <Image
                    style={estilos.fotoPerfil}
                    source={imgSrc}
                />
                <Text h2 style={estilos.texto}> O APP ainda se encontra em desenvolivmento. Para colaborar, ou saber mais, você pode acessar o código fonte no link baixo: </Text>
                <Text style={estilos.links}
                      onPress={() => Linking.openURL('https://github.com/engRenanTorres/simulaConcurso')}>
                      Ir ao GitHub do App
                </Text>
            </View>

            <View style={estilosGerais.divisor}/>

            <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    >
                    <Text style={estilosGerais.botoesNavegacao}> Voltar à Tela Inicial </Text>
            </TouchableOpacity>

        </TelaPadrao>
    )
}