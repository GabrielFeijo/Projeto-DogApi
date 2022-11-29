import React, { useState } from 'react';
import { Alert, View, Image,ScrollView,ActivityIndicator} from 'react-native';
import axios from 'axios';
import {
    Container,
    Text,
    styles

} from './styles';

import Card from '../../../Components/Card';
import OpenCard from '../../../Components/OpenCard';

let petData = [];
let infos = [];
export default function Home() {
    const [loading, setLoading] = useState(true);
    const [Dogs, setDogs] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  
    async function handleBuscar() {
            
        try {
            const config = {
                method: 'get',
                url: 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&limit=30',
                headers: { 'x-api-key': 'live_zYCqBO6xebMaasLBQECWUejx4ZDMGnsQX6NUgVvaNefMOL0q3tfMzYVbYqfS42ux' }
            }
            const { status, data } = await axios(config);

            if (status != 200 || data.erro) {
                Alert.alert('Buscar', 'Ocorreu um erro.');
            } else {
                setDogs(data);
                 setLoading(false);
            }

        } catch (error) {
            console.log(error)
        }
    };
    async function handleLimpar() {
        setDogs(null);
    }

    const selectPetData = async (id) => {
        setLoading(true);  
        getPetData(id);
     
    };   

    async function traduzir(texto){
        var data = await fetch(`https://api.mymemory.translated.net/get?q=${texto}&langpair=en-GB|pt-BR}&de=mototeste33@gmail.com`);       
        return await data.json();       
    }

    const getPetData = (_id) =>
    fetch(`https://api.thedogapi.com/v1/images/${_id}/`)
    .then((res) => res.json())
    .then((res) => {
        petData = res;
        infos = []
            let vida = traduzir(petData.breeds[0].life_span)
            vida.then((message) => {  
              vida = message.responseData.translatedText;
            infos.push(vida)      
            let temperamento = traduzir(petData.breeds[0].temperament)
            temperamento.then((message) => {  
              temperamento = message.responseData.translatedText;
              infos.push(temperamento)   
                toggleModal(); 
                setLoading(false);  
               
          });
        });  
                        
    })
    .catch((err) => console.log(err));

    return (
        <Container onLoad={Dogs ? handleLimpar : handleBuscar()}>
            {loading && (
                <View style={styles.loadingScreen}>
                <ActivityIndicator color="white" size="large"></ActivityIndicator>
                </View>
            )}
            <Image source={require('../../assets/pet.png')}    />
            <Text style={styles.h1} onPress={(event) => {
                setLoading(true)
                handleLimpar();
            handleBuscar();
        }}>WikiPets </Text>
            <View style={styles.line}/>
            {Dogs &&               
                <ScrollView >
                    <View style={styles.flex}>
                        { Dogs.map((dog) =>                        
                            <Card url={dog.url} id={dog.id} key={dog.id} name={dog.breeds} selectPetData={selectPetData} style={styles.row}></Card>                       
                        )}   
                     </View>                      
                </ScrollView>                 
            }
            {isModalVisible  ? (
            <OpenCard
                toggleModal={toggleModal}
                isVisible={isModalVisible}
                petData={petData}
                infos={infos}
            />
            ) : (
            <></>
            )}
        </Container>
    );
}

// https://api.thedogapi.com/v1/images/uMmHj_fAU