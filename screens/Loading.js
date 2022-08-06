import React from 'react';
import {ActivityIndicator,View} from 'react-native'
import auth from '@react-native-firebase/auth';

const Loading = ({navigation}) => {
    const [User,setUser]=React.useState(null)

  React.useEffect(()=>{
    auth().onAuthStateChanged(user=>{
      if(user){
        setUser(user)
        navigation.navigate('Home')
      }else{
        navigation.navigate('LogIn')
      }
    })
  },[])
    return (
        <View style={{
            height:'100%',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

export default Loading;