import React from 'react';
import {TouchableOpacity,Image,Text} from 'react-native'

const LoginButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            padding:5,
            borderRadius:5,
            backgroundColor:props.backgroundColor,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin:10
        }}>
            <Image style={{
                height:50,
                width:50,
            }} source={props.icon}/>
            <Text style={{
                flex:4,
                paddingLeft:25,
                fontWeight: 'bold',
                color:'white',
                fontSize:18
            }}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default LoginButton;