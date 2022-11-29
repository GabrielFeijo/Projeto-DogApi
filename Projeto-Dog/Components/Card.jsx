import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ImgCard from "./ImgCard";
import style from "./style";




export default function Card({ name, url, id ,selectPetData}) {
  return (
    <>
      <TouchableOpacity
        key={id}
        style={style.card}
        onPress={(event) => {
          selectPetData(id);
        }}
      >
        <ImgCard
          width={108}
          height={108}
          imageURL={url}
        />
        <Text style={style.cardName} key={"Txt" + id}>
          Raça: {name[0]['name']}
        </Text>
    
      </TouchableOpacity>
    </>
  );
}
