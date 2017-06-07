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
import RecadoContainer from './RecadoContainer';


export default class RecadosContainer extends Component {
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
                <ListView
                    dataSource={this.state.dataSource}
                    renderSeparator={this.renderSeparator}
                    renderRow={(data) =>
                        <TouchableOpacity style={styles.listFlexCol} onPress={() => this.props.navigator.push({
                            component: RecadoContainer,
                            title: 'Recado'
                        })} >
                            <Text style={styles.subject} numberOfLines={1}>
                                {data.assunto}
                            </Text>
                            <Text style={styles.textEmail} numberOfLines={2}>
                                {data.texto}
                            </Text>
                        </TouchableOpacity>
                    }
                />

                <TouchableHighlight style={styles.addButton}
                    underlayColor='#9eceff' onPress={() => this.props.navigator.push({
                    component: RecadoContainer,
                    title: 'Recado',
                    passProps: {
                        subject: 'Festa Junina'
                    }
                })} >
                    <Text style={{fontSize: 30, color: 'white'}}>+</Text>
                </TouchableHighlight>
            </View>
        );
    }

    //noinspection JSAnnotator
    renderSeparator = (sectionID: number, rowID: number, adjacentRowHighlighted: bool) => {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                    height: adjacentRowHighlighted ? 4 : 1,
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
                }}
            />
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
    },
    addButton: {
        backgroundColor: '#80bfff',
        borderColor: '#80bfff',
        borderWidth: 1,
        height: 70,
        width: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 60,
        right:20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
});