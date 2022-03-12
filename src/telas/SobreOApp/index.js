import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Text, View, Image,Linking,TouchableOpacity } from 'react-native';
import estilos from './estilos';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';
import BotoesNavegadores from '../../componentes/BotoesNavegadores';

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
                      <AntDesign name="link" size={14} color="white" /> Linkedin do autor
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
                      <AntDesign name="github" size={14} color="white" /> Código fonte do App
                </Text>
            </View>

            <View style={estilosGerais.divisor}/>
            <View style={estilosGerais.painelNavegacao}>
                <View style={estilosGerais.linhaMenu}>

                <BotoesNavegadores 
                    navigateDirection={'Home'}
                    art={'home'}>
                    Tela inicial
                </BotoesNavegadores>
                <Text style={estilosGerais.botoesNavegacao}
                        onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.engrenantorres.sesmc')}>
                        <AntDesign name="star" size={14} color="white" /> Avalie o App
                </Text>
                </View>
            </View>

        </TelaPadrao>
    )
}