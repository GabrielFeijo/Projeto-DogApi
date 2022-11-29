import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import {  StyleSheet } from "react-native";

export const Container = styled.View`
    align-items: center;
    background-color: #14191F;
    flex: 1;
    padding:50px 0px;  
`;

export const Animation = styled(Animatable.View)`
    align-items: center;
    width: 100%;
`;

export const Input = styled.TextInput`
    background-color: #FFF;
    border-radius: 5px;
    color: #2F48D4;
    font-family: Roboto_500Medium;
    font-size: 16px;
    margin-top: 20px;
    padding: 8px 16px;
    width: 100%;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    background-color: coral;
    border-radius: 20px;
    margin-top: 20px;
    padding: 8px;
    width: 60%;
`;

export const ButtonText = styled.Text`
    color: white;
    font-family: Roboto_500Medium;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
   
`;

export const DogArea = styled.View`
    background-color: white;
    width:100px;
    heigth:100px
    align-items: center;
    margin-top: 15px;
`;

export const Text = styled.Text`
    color: #F6E125;
    font-family: Roboto_500Medium;
    font-size: 18px;
    max-width:850px;
    
`;


export const styles = StyleSheet.create({
    loadingScreen: {
        position: "absolute",
        display: "flex",
        width: "100%",
        height: "110%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0008",
        opacity: 1,
        zIndex: 9999,
    },h1: {
        color: '#FFF',
   
        marginTop: 12,
        fontSize:24
    },
    line:{
        marginTop:10,
        height: 2,
        backgroundColor: 'rgba(255, 255, 255 ,0.7)',
        alignSelf: 'stretch'
    },
   
    flex:{
        flex: 1,
        flexWrap: "wrap",
        justifyContent:'center',
        flexDirection: "row",
    },
   
});