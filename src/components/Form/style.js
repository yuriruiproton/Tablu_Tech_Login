import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   form:{
    width: "100%",
    height: "auto",
    marginTop: 10,
    padding: 40,
    

   },
    input:{
        padding:15,
        margin:10,
        backgroundColor:"#465881",
        borderRadius:40,
        color:"#2D4E73",
        fontWeight:"bold",
   },
   
   forgot:{
    textAlign:"center",
    color:"#fff",
    padding:20,
    fontSize:12,
   },

   signup:{
    textAlign:"center",
    color:"#810A18",
    padding:20,
    fontSize:15,
    fontWeight:"bold"
   },

   formButton:{
    width:"100%",
    height:"auto",
    backgroundColor:"#FB5B5A",
    color:"#fff",
    marginTop:10,
    padding:15,
    textAlign:"center",
    borderRadius:40,
   }
})

export default styles