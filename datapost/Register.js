import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,TextInput,TouchableOpacity
} from 'react-native';

export default class register extends Component {
       static navigationOptions= ({navigation}) =>({
          title: 'Register',    
          headerRight:  
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{margin:10,backgroundColor:'orange',padding:10}}>
            <Text style={{color:'#ffffff'}}>Home</Text>
          </TouchableOpacity>
        
    });     
          
    constructor(props){
        super(props)
        this.state={
            userName:'',
            userEmail:'', 
            userPassword:''             
        }
    }
    
    userRegister = () =>{
        //alert('ok'); // version 0.48
        
        const {userName} = this.state;
        const {userEmail} = this.state;
        const {userPassword} = this.state;
        
        
        
        fetch('http://127.0.0.1/login/Register.php', {
            method: 'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                name: userName,
                email: userEmail,
                password: userPassword,
            })
            
        })
        .then((response) => response.json())
            .then((responseJson) =>{
                alert(responseJson);
            })
            .catch((error)=>{
                console.error(error);
            });
        
    }
    
  render() {
    return (
    <View style={styles.container}>
        
    
      <TextInput
      placeholder="Enter Name caps"
      style={{width:250,margin:10, borderColor:"#333", 
      borderWidth:1}}   
      underlineColorAndroid="transparent"
  onChangeText= {userName => this.setState({userName})}
      
      />
      
      <TextInput
      placeholder="Enter Email"
      style={{width:250,margin:10, borderColor:"#333", 
      borderWidth:1}}   
      underlineColorAndroid="transparent"
      onChangeText= {userEmail => this.setState({userEmail})}
      />
      
      <TextInput
      placeholder="Enter Password"
      style={{width:250,margin:10, borderColor:"#333", 
      borderWidth:1}}   
      underlineColorAndroid="transparent"
      onChangeText= {userPassword => this.setState({userPassword})}
      />
      
      <TouchableOpacity
        onPress={this.userRegister}
        style={{width:250,padding:10, backgroundColor:'magenta',
        alignItems:'center'}}>
      <Text style={{color:'#fff'}}>Signup</Text>
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('register', () => register);



/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    fetch('https://newfireservice.000webhostapp.com/Register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Alert.alert('Success', 'User registered successfully');
        } else {
          Alert.alert('Error', 'Failed to register user. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert('Error', 'An error occurred. Please try again later.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default App;

/*import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Dimensions,
  Image,
  Alert,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ActivityIndicator,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
const {width} = Dimensions.get('screen');

// Import statements remain the same

const Register = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!userName) {
      setUserNameError('Username is required');
      isValid = false;
    } else {
      setUserNameError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;
  };

  const saveDetails = () => {
    if (validateForm()) {
      setIsLoading(true);
      fetch('https://newfireservice.000webhostapp.com/Register.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: userName,
          password: password,
          email: email,
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(responseJson => {
          console.log('Response:', responseJson);

          if (responseJson) {
            setMessage('Success: Register Successfully');
            console.log('Success: Register Successfully', responseJson);
          } else {
            throw new Error('Invalid response from server');
          }
        })
        .catch(error => {
          setIsLoading(false);
          console.error('Error registering user:', error);
          setMessage('Error registering user');
        });
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.inputView1}>
          <TextInput
            placeholder="UserName"
            style={styles.inputText}
            placeholderTextColor="#000000"
            onChangeText={text => {
              setUserName(text);
              setUserNameError('');
            }}
          />
        </View>
        <Text style={styles.errorText}>{userNameError}</Text>

        <View style={styles.inputView1}>
          <TextInput
            placeholder="Member Password"
            style={styles.inputText}
            placeholderTextColor="#000000"
            onChangeText={text => {
              setPassword(text);
              setPasswordError('');
            }}
            secureTextEntry
          />
        </View>
        <Text style={styles.errorText}>{passwordError}</Text>

        <View style={styles.inputView1}>
          <TextInput
            placeholder="Email"
            style={styles.inputText}
            placeholderTextColor="#000000"
            onChangeText={text => {
              setEmail(text);
              setEmailError('');
            }}
          />
        </View>
        <Text style={styles.errorText}>{emailError}</Text>

        {message !== '' && <Text style={styles.message}>{message}</Text>}

        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ebb134" />
            <Text style={styles.loadingText}>Please wait, loading...</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={saveDetails}>
            <Text style={styles.buttonText}>Submit Application</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  inputText: {
    color: 'black',
  },
  inputView1: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
  },
  message: {
    color: 'green',
    marginBottom: 15,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: 'red',
  },
  button: {
    backgroundColor: '#660066',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 50,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Register;


/*


import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
      fetch('https://pjopcom24.000webhostapp.com/Native/Register.php', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: username,
              email: email,
              password: password
          })
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          // Handle success response
          console.log(data);
      })
      .catch(error => {
          // Handle error
          console.error('Error:', error);
      });
  };
  
 
    return (
        <View>
            <TextInput
                placeholder="Username"
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Email"
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button
                title="Register"
                onPress={handleRegister}
            />
        </View>
    );
};

export default RegisterScreen; */
/*
import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function SignUp() {
    const navigate = useNavigate();

    const signUpAlert = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('username', username);
            formData.append('email', email);
            
            formData.append('password', password);

            const response = await axios.post('http://localhost/datapost/register.php', formData, {
                headers: {
                    // 'Content-Type': 'multipart/form-data'
                    'Content-Type': 'application.json'
                }
            });
            console.log(response.data); 
        } catch (error) {
            console.error(error);
        }
        navigate('/');
    };

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState('');

    return (
        <>
        <div className='signup-bg'>
            <Container>
                <div >
                    <Row className='mx-auto justify-content-center align-items-center min-vh-100 g-0 w-50'>
                        <Col className='mx-auto '>
                            <h1 className='text-center text-light'>Sign Up</h1>
                            <h4 className='text-center text-light'>(Create Your Account)</h4>

                            <Form>
                                <FloatingLabel controlId="floatingInput" label="User Name"  className="mb-3 text-light">
                                    <Form.Control value={username} type="text" className='text-light' style={{backgroundColor:'black'}} required onChange={(e) => setUsername(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Email address" className="text-light mb-3">
                                    <Form.Control value={email} type="email" className='text-light'  style={{backgroundColor:'black'}}  onChange={(e) => setEmail(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 text-light">
                                    <Form.Control value={password} type="password" className=' text-light' style={{backgroundColor:'black'}}  onChange={(e) => setPassword(e.target.value)} />
                                </FloatingLabel>
                                <Button variant='success' type='submit' className='mt-4' onClick={signUpAlert}>Sign Up</Button><br />
                                <a href='' onClick={() => navigate('/')}>Already have an account? Log In</a>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
            </div>
        </>
    );
}*/
