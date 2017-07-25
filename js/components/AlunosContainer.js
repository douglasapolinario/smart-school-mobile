import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image, ListView, Alert
} from 'react-native';
import AlunoContainer from './AlunoContainer';


export default class AlunosContainer extends Component {

    constructor() {
        super();
        this.getAlunos()

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    getAlunos = () => {
        fetch('http://localhost:5000/alunos', {method: 'GET'})
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseJson) })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <ListView
                contentContainerStyle={styles.list}
                pageSize={2}
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={(rowData) =>
                    <TouchableOpacity
                        onPress={() => this.props.navigator.push({
                            component: AlunoContainer,
                            title: rowData.nome })}
                        style={styles.touchable} >
                        <Image source={{uri: rowData.imagem}}
                               style={{width: 100, height: 100, borderRadius: 50}} />
                        <Text style={styles.name}>
                            {rowData.nome}
                        </Text>
                    </TouchableOpacity>}
            />
        );
    }

}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    touchable: {
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
        paddingBottom: 50,
        margin: 10,
        width: 150,
        height: 150,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#CCC'
    },
    name: {
        fontWeight: 'bold',
        color: '#333333',
        marginTop: 10,
    },
});