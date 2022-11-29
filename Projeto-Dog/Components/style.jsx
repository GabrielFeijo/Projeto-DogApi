import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    textAlign: "center",
    backgroundColor: "#ffb426",
    padding: 5,
    borderRadius: 25,
    margin:6,
    maxWidth:130,
    alignItems: "center", 
    textAlign: "center",
  },
  cardName: {
    textAlign: "center",
    color:"#FFF",
    fontSize: 12,
    fontWeight: "bold",
    maxWidth: "90%",
    paddingBottom:2
  },
  image: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 15,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 10,
    
  },
  
  modal: {
  
    flex:1,
    justifyContent:"center",
   alignItems:"center",
    elevation: 5,
    padding:20,
    borderRadius: 20,
    margin:"auto",
    
  
  },
  right:{
    alignSelf: "flex-end"
  },
  text:{
    color:"#FFF",
    display: "block",
    textAlign:"center"
  
  },
  desc:{
    backgroundColor:"#ffb426",

    borderRadius: 20,
    paddingVertical:10,
    paddingHorizontal:20,
  }

  
  

 



});
