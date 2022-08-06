import React from 'react';
import { View,ScrollView,StyleSheet,

    TextInput ,Text,Button,ActivityIndicator
} from 'react-native';
import LoginButton from './../components/LoginButton';
import download from '../files/download.png'
import google from '../files/google.png'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const LogIn = () => {
    const [Loader,setLoader] =React.useState(false)
    const [Error,setError]=React.useState()

    React.useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email','profile'] ,
            webClientId: "458342188471-qqpju4d6bhmq1gca2hpbf4e6gfhkgs7d.apps.googleusercontent.com",
          });
    },[])
    
    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }
      async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      
        if (result.isCancelled) {
          throw 'User cancelled the login process';
        }
      
        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();
      
        if (!data) {
          throw 'Something went wrong obtaining access token';
        }
      
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
      }
    return (
        <ScrollView>
            <View style={styles.box}>
            <Text style={styles.text}>User Login</Text>
            <LoginButton onPress={()=>{
                onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))
            }} icon={download} text="Login with facebook"
                backgroundColor="#02BAFA"
            />
            <LoginButton onPress={()=>{
                onGoogleButtonPress().then(()=>{
                    console.log("User Login")
                })
            }} icon={google} text="Login with google"
                backgroundColor="#16A400"
            />
            <Text style={{color:'red'}}>{Error}</Text>
            </View>
            {
                Loader?(<ActivityIndicator size="small" color="#0000ff" />):(<></>)
            }

        </ScrollView>
    );
};

export default LogIn;
const styles=StyleSheet.create({
    box:{
        backgroundColor:'#DEDEDE',
        padding:10,
        marginTop:10,
    },
    input:{
        height:35,
        borderWidth:1,
        borderColor:'#000000'

    },
    button:{

    },
    text:{
        textAlign:'center',
        fontSize:25,
        color:'#000000',
    }
})