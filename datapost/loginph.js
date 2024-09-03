import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';

export default class StudentInsert extends Component {
    constructor(props) {
        super(props);
        this.state = { Email: '', Phone: '' };
    }

    InsertRecord = () => {
        const { Email, Phone } = this.state;

        if (Email.length === 0 || Phone.length === 0) {
            Alert.alert('Required fields', 'Please fill in all fields');
        } else {
            const InsertAPIURL = 'http://10.0.2.2:80/demo/vef.php';

            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            };

            const data = {
                Email: Email,
                Phone: Phone,
            };

            fetch(InsertAPIURL, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((response) => {
                    Alert.alert('Response', response[0].Message);
                })
                .catch((error) => {
                    Alert.alert('Error', 'Failed to insert record. Please try again.');
                    console.error(error);
                });
        }
    };

    render() {
        return (
            <View style={styles.ViewStyle}>
                <TextInput
                    placeholder={'Email'}
                    placeholderTextColor={'red'}
                    keyboardType={'email-address'}
                    style={styles.txtStyle}
                    onChangeText={(Email) => this.setState({ Email })}
                />
                <TextInput
                    placeholder={'Phone'}
                    placeholderTextColor={'orange'}
                    keyboardType={'phone-pad'}
                    style={styles.txtStyle}
                    onChangeText={(Phone) => this.setState({ Phone })}
                />
                <Button title={'Save Record'} onPress={this.InsertRecord} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        padding: 20,
        marginTop: 10,
    },
    txtStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginBottom: 20,
    },
});
