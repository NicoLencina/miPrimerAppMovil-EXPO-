import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={[styles.contenedorPrincipal, styles.tarjeta]}>
        {/* Este es el semicirculo del fondo del titulo 
        si lo coloco con el stilo absoluto no respeta el orden */}
        <View style={styles.semicirculo}></View>

        {/* Texto Inicial */}
        <View style={styles.cuadro1}>
          <Text style={styles.textoBus}>Bus</Text>

        </View>
        {/* ubicación */}
        <View style={styles.cuadro2}></View>

        {/*  */}
        <View style={styles.cuadro3}></View>
        
        {/* Este es para el boton */}
        <TouchableOpacity style={styles.botonBuscar} onPress={() => alert('Hola')}>
          <Text style={styles.textoBoton}>Tocame</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
/* Colores sacado de la IA
🟣 Morado principal (Cabecera, botón inferior, icono de flechas): #A574E8
🟢 Verde acento (Icono de origen, usuario, botones de contador): #42C88F
⚪ Blanco (Fondo de las dos tarjetas centrales): #FFFFFF
🌑 Texto oscuro (Nombres de ubicaciones, fechas, valores): #4A4A68
🩶 Texto claro (Etiquetas pequeñas como "FROM", "TO", "PASSENGER"): #A5A5BA */
 
contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#EBE9F3',
    //padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //tamaño de los views
  tarjeta: {                     
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  
  //semicirculo para el fondo del titulo
  semicirculo: {
    position: 'absolute', // Posición absoluta para superponerlo
    top: -100, // Ajusta este valor para moverlo hacia arriba o abajo
    width: 500, // Ancho del semicirculo
    height: 450,// Altura del semicirculo
    backgroundColor: '#7447b8',// Color de fondo
    borderBottomLeftRadius: 175,// Radio para hacer el semicirculo
    borderBottomRightRadius: 175,// Radio para hacer el semicirculo
    
  },

cuadro1:{
    backgroundColor: '#a474e800', // Color de fondo
    padding: 10,                // Espaciado interno
    width: '100%',              // Ancho completo disponible
    maxWidth: 350,
    height: 100,              // Altura fija
    zIndex: 1,
},

textoBus:{
    color: '#FFFFFF', // Color del texto
    fontSize: 50,     // Tamaño del texto
    fontWeight: 'bold', // Negrita
    textAlign: 'left' // Centrado del texto
},

cuadro2:{
    backgroundColor: '#ffffff', // Color de fondo
    padding: 20,                // Espaciado interno
    width: '100%',              // Ancho completo disponible
    maxWidth: 350,
    height: 170,              // Altura fija
    margin:30,
    borderRadius: 20,
    zIndex: 1,
},
cuadro3:{
    backgroundColor: '#ffffff', // Color de fondo
    padding: 20,                // Espaciado interno
    width: '100%',              // Ancho completo disponible
    height: 230,
    maxWidth: 350,
    marginBottom: 30,             // Espacio entre cuadros
    borderRadius: 20,
},
botonBuscar:{
    backgroundColor: '#7447b8', // Color de fondo
    width: '80%',              // Ancho completo disponible
    height: 100,              // Altura fija
    justifyContent: 'center', //Contenido interno centrado verticalmente
    alignItems: 'center',   //Contenido interno centrado horizontalmente    
    borderRadius: 50,              // Bordes redondeados
},
textoBoton: {
    color: '#FFFFFF', // Color del texto
    fontSize: 50,     // Tamaño del texto
    fontWeight: 'bold', // Negrita
    textAlign: 'center', // Centrado del texto
},

});
