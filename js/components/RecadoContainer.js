import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
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
                <Text style={styles.subject} >
                    Assunto: {this.props.assunto}
                </Text>
                <Text style={styles.textEmail} numberOfLines={20}>
                    {this.props.textoRecado}
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    listFlexCol: {
        flexDirection: 'column'
    },
    subject: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 75,
        marginLeft: 15
    },
    textEmail: {
        fontSize: 13,
        margin: 15,
    }
});