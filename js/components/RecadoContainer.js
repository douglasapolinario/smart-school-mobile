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
        fontSize: 12,
        fontWeight: 'bold',
        margin: 3
    },
    textEmail: {
        fontSize: 12,
        margin: 3,
    }
});