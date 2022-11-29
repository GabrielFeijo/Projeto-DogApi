import React from "react";

import {  View,Image } from "react-native";
import Modal from "react-native-modal";
import style from "./style";
import ImgCard from "./ImgCard";
import { Text, Button, ButtonText } from '../src/screens/Home/styles';


export default function OpenCard({ toggleModal, isVisible, petData ,infos}) {
 
  return (
    <>
      <Modal
        key={`${petData.id} + modal`}
        transparent={true}
        isVisible={isVisible}
        animationIn={"bounceInRight"}
        animationInTiming={600}
        animationOut={"bounceOut"}
        animationOutTiming={600}
        onRequestClose={() => toggleModal()}
        onBackdropPress={() => toggleModal()}
        
      >
       
        <View style={[style.modal]}>
           
            <ImgCard
              width={208}
              height={208}
              imageURL={petData.url}
              style={[style.imageModal]}
            />

            <View style={[style.desc]}>
              <Text style={[style.text]} >Raça: {petData.breeds[0].name}</Text>
              <Text style={[style.text]} >Grupo: {petData.breeds[0].breed_group}</Text>
            
              <Text style={[style.text]} >Peso Médio: {petData.breeds[0].weight.metric} Kg</Text>
              <Text style={[style.text]} >Altura Média: {petData.breeds[0].height.metric} Cm</Text>
              {/* Sem Tradutor */}            
              {/* <Text style={[style.text]} >Expectativa de vida: {petData.breeds[0].life_span}</Text>
              <Text style={[style.text]} >Temperamento: {petData.breeds[0].temperament}</Text> */}

              {/* Com Tradutor */}
              <Text style={[style.text]} >Expectativa de vida: {infos[0]}</Text>
              <Text style={[style.text]} >Temperamento: {infos[1]}</Text>  
                
             
              
            </View>
           
            <Button onPress={() => toggleModal()}><ButtonText>Fechar</ButtonText></Button>
        </View>
      </Modal>
    </>
  );
}

