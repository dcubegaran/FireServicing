import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

interface State {
    Email: string;
    Phone: string;
}

export default class StudentInsert extends Component<{}, State> {
    constructor(props: {}) {
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
            <View style={styles.container}>
                <Text style={styles.heading}>Welcome to FireShield App</Text>
                <TextInput
                    placeholder={'Email'}
                    placeholderTextColor={'red'}
                    keyboardType={'email-address'}
                    style={styles.input}
                    onChangeText={(Email) => this.setState({ Email })}
                />
                <TextInput
                    placeholder={'Phone'}
                    placeholderTextColor={'orange'}
                    keyboardType={'phone-pad'}
                    style={styles.input}
                    onChangeText={(Phone) => this.setState({ Phone })}
                />
                <TouchableOpacity style={styles.button} onPress={this.InsertRecord}>
                    <Text style={styles.buttonText}>Save Record</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
