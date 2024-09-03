import React, { Component } from 'react'
import { View,Text, StyleSheet,Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class StudentInsert extends Component {
    constructor(props)
    {
        super(props);
        this.state={RollNo:'',StudentName:'',Course:''};

    }

    InsertRecord=()=>
        {
            var RollNo=this.state.RollNo;
            var StudentName=this.state.StudentName;
            var Course=this.state.Course;

            if(RollNo.length==0 || StudentName.length==0 || Course.length==0)
                {
                    alert("Require field");
                }
                else
                {
                    var InsertAPIURL="http://10.0.2.2:80/demo/insert.php";

                    var headers={
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    };
                    var Data={
                        RollNo:RollNo,
                        StudentName:StudentName,
                        Course:Course,
                    };

                    fetch(InsertAPIURL,
                        {
                            method:'POST',
                            headers:headers,
                            body:JSON.stringify(Data)
                        }
                    )
                    .then((response)=>response.json())
                    .then((response)=>
                    {
                        alert(response[0].Message);
}
                    )
                    .catch((error)=>
                    {
                        alert("Error"+error);
                    })
                }
        }

  render() {
    return (
      <View style={styles.ViewStyle}>
<TextInput
    placeholder={'RollNo'}
    placeholderTextColor={"red"}
    keyboardType={'numeric'}
    style={styles.txtStyle}
    onChangeText={RollNo=>this.setState({RollNo})}
/>
<TextInput
    placeholder={'StudentName'}
    placeholderTextColor={"orange"}
    style={styles.txtStyle}
    onChangeText={StudentName=>this.setState({StudentName})}
    
/>
<TextInput
    placeholder={'Course'}
    placeholderTextColor={"orange"}
    style={styles.txtStyle}
    onChangeText={Course=>this.setState({Course})}

/>
<Button
    title={'Save Record'}
    onPress={this.InsertRecord}
/>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    ViewStyle:
    {
        flex:1,
        padding:20,
        marginTop:10
    },
    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'red',
        marginBottom:20
    }
})
