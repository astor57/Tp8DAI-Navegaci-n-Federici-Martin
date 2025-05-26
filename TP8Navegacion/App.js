import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const img = require('./assets/chango.png')
const feli = require('./assets/feli.png')

// Pantalla de Inicio
function ScreenA1({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#cce5ff' }]}>
      <Button
        title="Ver"
        onPress={() => navigation.navigate('ScreenA2')}
      />
    </View>
  );
}
function ScreenA2({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#cce5ff' }]}>
      <Image
        source={img} 
        style={styles.imagen}
        resizeMode="contain"
      />
    </View>
  );
}

// Pantalla de Contador
function ScreenB1({navigation}) {
  return (
    <View style={[styles.container, { backgroundColor: '#d4edda' }]}>
      <Text>Este boton no se toca</Text>
      <Button
        title="Ver"
        onPress={() => navigation.navigate('ScreenB2')}
      />
    </View>
  );
}
function ScreenB2() {
  const [count, setCount] = useState(0);
  const handlePress = ()=> setCount(count+1);
  
  return (
    <View style={[styles.container, { backgroundColor: '#d4edda' }]}>
      <Text style={styles.titulo}>Contador:{count}</Text>
      <TouchableOpacity style = {styles.button} onPress={handlePress}><Text>Presiona</Text></TouchableOpacity>
    </View>

  );
}

// Pantalla de Contacto
function ScreenC1({navigation}) {
  

  return (
    <View style={[styles.container, { backgroundColor: '#cce5ff' }]}>
      <Text style={styles.titulo}>Pantalla de contacto</Text>
      <TextInput
        placeholder="Nombre"
        style={styles.input}
      />
      <TextInput
        placeholder="Teléfono"
        style={styles.input}
        keyboardType="phone-pad"
      />
      <Button
        title="Siguiente"
        onPress={() => navigation.navigate('ScreenC2')}
      />
    </View>
  );
}
function ScreenC2() {
  return (
    <View style={[styles.container, { backgroundColor: '#d4edda' }]}>
      <Text> Te deseo salud y la mejor de las suertes</Text>
    </View>

  );
}

// Pantalla de Perfil
function ScreenD1({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#f8d7da' }]}>
      <TextInput
        placeholder="Nombre Completo"
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}  onPress={() => navigation.navigate('ScreenD2')}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
function ScreenD2() {
  return (
    <View style={[styles.container, { backgroundColor: '#d4edda' }]}>
      <Text> Inicio de sesión exitoso</Text>
      <Image
        source={feli} 
        style={styles.imagen}
        resizeMode="contain"
      />
    </View>

  );
}

// Stack Navigators
function StackANavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={ScreenA1} />
      <Stack.Screen name="ScreenA2" component={ScreenA2} />
    </Stack.Navigator>
  );
}

function StackBNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contador" component={ScreenB1} />
      <Stack.Screen name="ScreenB2" component={ScreenB2}/>
    </Stack.Navigator>
  );
}

function StackCNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Telefono" component={ScreenC1} />
      <Stack.Screen name="ScreenC2" component={ScreenC2} />
    </Stack.Navigator>
  );
}

function StackDNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacto" component={ScreenD1} />
      <Stack.Screen name="ScreenD2" component={ScreenD2} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"     component={StackANavigator} 
       options={{
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={24} color="black" />
         ),
      }}
      />
      <Tab.Screen name="Notificaciones" component={StackBNavigator} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen name="Contacto"   component={StackCNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="phone" size={24} color="black" />
           ),
        }}
      />
      <Tab.Screen name="Perfil"   component={StackDNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
           ),
        }}
      />
    </Tab.Navigator>
  );
}



// App principal
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  texto: {
    fontSize: 18,
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    width: '80%',
    borderRadius: 5,
    marginBottom: 10
  },
  button: {
    width: '80%',
    height: 55,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  imagen: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
