import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Text,
    View,
    ListView,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

export default class RecadoContainer extends Component {
    constructor(props) {
        super(props);

        data =
            [
                {
                    "assunto": "Festa Junina",
                    "texto": 'Olá Papai, no dia 25/06/2017 teremos nossa festa junina.'
                },
                {
                    "assunto": "Mau Comportamento",
                    "texto": 'Ola Papai, hoje o Richard Oliveira Corria Apolinario se comportou mau na hora da aula, por favor, conversar com o mesmo assim que possivel.'
                }
            ]

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.subject} >
                        Assunto: {this.props.assunto}
                    </Text>
                    <Text style={styles.textEmail} numberOfLines={20}>
                        {this.props.textoRecado}
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={styles.textEmailInput}
                        autoFocus={true}
                        multiline={true}
                        value={this.state.text}
                        placeholder="Digite sua mensagem..." />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F5FCFF'
    },
    subject: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 75,
        marginLeft: 15
    },
    textEmail: {
        fontSize: 13,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    textEmailInput: {
        height: 40,
        // borderColor: 'gray',
        // borderWidth: 1,
        marginBottom: 51
    }
});