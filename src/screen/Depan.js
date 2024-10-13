import { StyleSheet, Text, TouchableOpacity, View, Image, Alert, ScrollView } from 'react-native'
import { useState, useEffect, React } from "react";
import Paho from "paho-mqtt";

import styles from './styles'; // Path sesuai dengan lokasi file styles.js



const slide1 = require('../.././img/slide1.webp');
const logo = require('../.././img/iot.png');
const off = require('../.././img/off.png');
const on = require('../.././img/on.png');


client = new Paho.Client(
  "broker.mqtt-dashboard.com",
  Number(8000),
  `mqtt-async-test-${parseInt(Math.random() * 100)}` //ok
);

const DashboardDepan = () => {

  //const [value, setValue] = useState(0); //ok
  const [textKonek, setTextKonek] = useState ('LOADING...');
  const textColor = textKonek === 'LOADING...' 
  ? 'red' 
  : textKonek === 'TERKONEKSI !!' 
  ? 'green' 
  : 'yellow'; // Warna default atau kondisi tambahan
  
  //const fontFamily1 = Platform.OS === 'ios' ? 'Oswald-Bold' : 'Oswald-SemiBold'; 


  function onMessage(message) {
    if (message.destinationName === "yoas1995/data")
        setValue(parseInt(message.payloadString));
  }

  ////////////////////////////////////////////////////////////////
  useEffect(() => {
    client.connect( {
      onSuccess: () => { 
      setTextKonek('TERKONEKSI !!');
      console.log("Terkoneksi!!!!");
      client.subscribe("yoas1995/data");
      client.onMessageArrived = onMessage;
    },
    onFailure: () => {
      setTextKonek('TIDAK TERKONEKSI !!');
      console.log("Tidak Terkoneksi!!!!");
    }
  });
  }, [])
////////////////////////////////////////////////// PERINTAH //////


function pompaHidup(c) {
  //const message = new Paho.Message((value + 1).toString());
  const message = new Paho.Message("relay1_on");
  // message.destinationName = "yoas30/relays";
  message.destinationName = "yoas30/relays";
  c.send(message);
  Alert.alert('Menghidupkan Pompa Air',  'Perintah terkirim!!');
}
          function pompaMati(c) {
            //const message = new Paho.Message((value + 1).toString());
            const message = new Paho.Message("relay1_off");
            message.destinationName = "yoas30/relays";
            c.send(message);
            Alert.alert('Mematikan Pompa Air',  'Perintah terkirim!!');
          }


function LampuDapurHidup(c) {
  //const message = new Paho.Message((value + 1).toString());
  const message = new Paho.Message("relay2_on");
  // message.destinationName = "yoas30/relays";
  message.destinationName = "yoas30/relays";
  c.send(message);
  Alert.alert('Menghidupkan Lampu Dapur',  'Perintah terkirim!!');
}
          function LampuDapurMati(c) {
            //const message = new Paho.Message((value + 1).toString());
            const message = new Paho.Message("relay2_off");
            message.destinationName = "yoas30/relays";
            c.send(message);
            Alert.alert('Mematikan Lampu Dapur',  'Perintah terkirim!!');
          }


function LampuBelakangHidup(c) {
  //const message = new Paho.Message((value + 1).toString());
  const message = new Paho.Message("relay3_on");
  // message.destinationName = "yoas30/relays";
  message.destinationName = "yoas30/relays";
  c.send(message);
  Alert.alert('Menghidupkan Lampu Belakang',  'Perintah terkirim!!');
}
          function LampuBelakangMati(c) {
            //const message = new Paho.Message((value + 1).toString());
            const message = new Paho.Message("relay3_off");
            message.destinationName = "yoas30/relays";
            c.send(message);
            Alert.alert('Mematikan Lampu Belakang',  'Perintah terkirim!!');
          }

function LampuDepanHidup(c) {
  //const message = new Paho.Message((value + 1).toString());
  const message = new Paho.Message("relay4_on");
  // message.destinationName = "yoas30/relays";
  message.destinationName = "yoas30/relays";
  c.send(message);
  Alert.alert('Menghidupkan Lampu Depan',  'Perintah terkirim!!');
}
          function LampuDepanMati(c) {
            //const message = new Paho.Message((value + 1).toString());
            const message = new Paho.Message("relay4_off");
            message.destinationName = "yoas30/relays";
            c.send(message);
            Alert.alert('Mematikan Lampu Depan',  'Perintah terkirim!!');
          }

function SemuaHidup(c) {
  //const message = new Paho.Message((value + 1).toString());
  const message = new Paho.Message("all_on");
  // message.destinationName = "yoas30/relays";
  message.destinationName = "yoas30/relays";
  c.send(message);
  Alert.alert('Menghidupkan Semua Listrik',  'Perintah terkirim!!');
}
          function SemuaMati(c) {
            //const message = new Paho.Message((value + 1).toString());
            const message = new Paho.Message("all_off");
            message.destinationName = "yoas30/relays";
            c.send(message);
            Alert.alert('Mematikan Semua Listrik',  'Perintah terkirim!!');
          }

///////////////////////////////////////////////// PERINTAH ///////
  return (
    
  <View style={styles.container1}>
        <View style={styles.boxKecil}>
            <Image source={logo} style={{ width: 35, height: 35, marginTop: 20, marginLeft: 20, marginRight: 5 }} />
            <Text style={{ 
              fontSize : 20,
              color : "#FFF",
              marginTop : 20,
              fontFamily : 'Oswald-Bold'
          }}
          > HOME IOT</Text>
      </View>
      <View style={styles.containerRow}>
            <Image source={slide1} style={styles.slideGambar} />
      </View>
              <Text style={{ 
                  fontSize : 28,
                  color : "#FFF",
                  marginTop : 10,
                  fontFamily : 'Oswald-Bold',
                  textAlign: "center"
              }} > KELUARGA CANTIK DAN GANTENG </Text>

      <Text style={[styles.textStatus, { color: textColor }]}> {textKonek} </Text>

        <View style={ styles.box }>
              <ScrollView showsVerticalScrollIndicator={false} > 
                    <View style={ styles.containerColumn}>
                        <Text style={ styles.title }>Pompa Air</Text>
                              <TouchableOpacity style={styles.tombolKlik} onPress={() => { pompaHidup(client); } } >
                                  <Text style={styles.subtitle}>Hidupkan</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.tombolKlikMerah} onPress={() => { pompaMati(client); } } >
                                  <Text style={styles.subtitle}>Matikan</Text>
                              </TouchableOpacity>   

                        <Text style={ styles.title }> Lampu Dapur </Text>
                              <TouchableOpacity style={styles.tombolKlik} onPress={() => { LampuDapurHidup(client); }} >
                                  <Text style={styles.subtitle}>Hidupkan</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.tombolKlikMerah} onPress={() => { LampuDapurMati(client);} } >
                                  <Text style={styles.subtitle}>Matikan</Text>
                              </TouchableOpacity>

                        <Text style={ styles.title }> Lampu Belakang </Text>
                              <TouchableOpacity style={styles.tombolKlik} onPress={() => { LampuBelakangHidup(client); }} >
                                  <Text style={styles.subtitle}>Hidupkan</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.tombolKlikMerah} onPress={() => { LampuBelakangMati(client);} } >
                                  <Text style={styles.subtitle}>Matikan</Text>
                              </TouchableOpacity>

                        <Text style={ styles.title }> Lampu Depan </Text>
                              <TouchableOpacity style={styles.tombolKlik} onPress={() => { LampuDepanHidup(client); }} >
                                  <Text style={styles.subtitle}>Hidupkan</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.tombolKlikMerah} onPress={() => { LampuDepanMati(client);} } >
                                    <Text style={styles.subtitle}>Matikan</Text>
                              </TouchableOpacity>
                                    <View style={styles.containerColumn}>
                                            <Text style={ [styles.title, { color: "#990e11", fontSize: 22, flexWrap: 'wrap', lineHeight: 24, marginTop: 35, marginBottom: 20 }]}
                                        >MATIKAN SEMUA PERALATAN LISTRIK</Text>
                                                    <TouchableOpacity style={[styles.tombolKlik, { height: 60}]} onPress={() => { SemuaHidup(client); }} >
                                                          <Text Text style={styles.subtitle}>Hidupkan</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={[styles.tombolKlikMerah, { height: 60 }]} onPress={() => { SemuaMati(client);} } >
                                                            <Text style={styles.subtitle}>Matikan</Text>
                                                    </TouchableOpacity> 
                                    </View> 
                    </View>    
              </ScrollView>                  
          </View> 
          <Text style={ [styles.title, { color: 'white', fontSize: 17, flexWrap: 'wrap', lineHeight: 24, marginTop: 20, marginBottom: 20, textAlign: 'center', justifyContent: 'flex-end' }]}
                              >🌿🏠💕 Home Controller 💕🏠🌿</Text>
  </View>
  )
}

export default DashboardDepan;

