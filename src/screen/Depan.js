import { StyleSheet, Text, TouchableOpacity, View, Image, Platform, Alert, ScrollView } from 'react-native'
import { useState, useEffect, React } from "react";
import Paho from "paho-mqtt";



const logoImg = require ('../.././img/della.png');
const slide1 = require('../.././img/slide1.webp');
const logo = require('../.././img/iot.png');


client = new Paho.Client(
  "broker.mqtt-dashboard.com",
  Number(8000),
  `mqtt-async-test-${parseInt(Math.random() * 100)}` //ok
);

const DashboardDepan = () => {

  //const [value, setValue] = useState(0); //ok
  const [textKonek, setTextKonek] = useState('LOADING...');
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
      client.subscribe("yoas1995/data");
      client.onMessageArrived = onMessage;
    },
    onFailure: () => {
      setTextKonek('TIDAK TERKONEKSI !!');
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
  Alert.alert('Menghidupkan Lampu Dapur',  'Perintah terkirim!!');
}

          function LampuBelakangMati(c) {
            //const message = new Paho.Message((value + 1).toString());
            const message = new Paho.Message("relay3_off");
            message.destinationName = "yoas30/relays";
            c.send(message);
            Alert.alert('Mematikan Lampu Dapur',  'Perintah terkirim!!');
          }


///////////////////////////////////////////////// PERINTAH ///////
  return (
    
  <View style={styles.container1}>
    <ScrollView>
        <View style={styles.boxKecil}>
            <Image source={logo} style={{ width: 35, height: 35, marginTop: 20, marginLeft: 20, marginRight: 5 }} />
            <Text style={{ 
              fontSize : 20,
              color : "#FFF",
              marginTop : 20,
              fontFamily : 'Oswald-Bold'
          }}
          > HOME IOT </Text>
      </View>

      <Image source={slide1} style={styles.slideGambar} />

              <Text style={{ 
                  fontSize : 28,
                  color : "#FFF",
                  marginTop : 40,
                  fontFamily : 'Oswald-Bold',
                  textAlign: "center"
              }} > KELUARGA CANTIK DAN GANTENG </Text>
              <Text style={{ 
                  fontSize : 20,
                  color : "#FFF",
                  fontWeight : 500,
                  marginTop : 10,
                  fontFamily : 'PoetsenOne-Regular',
                  textAlign: "center"
              }}> == Home Controller ==</Text>

{/* Tombol Pertama */}

        <View style={ styles.box }>
          <View  style={styles.containerRow}>
            
            <View style={ styles.containerColumn}>
                    <Text style={ styles.title }>Pompa Air</Text>
                        <TouchableOpacity style={styles.tombolHijau} onPress={() => { pompaHidup(client); } } >
                            <Text style={ styles.subtitle }>HIDUPKAN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tombolMerah} onPress={() => { pompaMati(client); } } >
                            <Text style={styles.subtitle}>MATIKAN</Text>
                        </TouchableOpacity>  
            </View>  

            <View style={ styles.containerColumn}>
                <Text style={ styles.title }> Lampu Dapur </Text>
                        <TouchableOpacity style={styles.tombolHijau} onPress={() => { LampuDapurHidup(client); }} >
                            <Text style={styles.subtitle}>HIDUPKAN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tombolMerah} onPress={() => { LampuDapurMati(client);} } >
                            <Text style={styles.subtitle}>MATIKAN</Text>
                        </TouchableOpacity>
            </View> 

            <View style={ styles.containerColumn}>
                <Text style={ styles.title }> Lampu Belakang </Text>
                        <TouchableOpacity style={styles.tombolHijau} onPress={() => { LampuBelakangHidup(client); }} >
                            <Text style={styles.subtitle}>HIDUPKAN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tombolMerah} onPress={() => { LampuBelakangMati(client);} } >
                            <Text style={styles.subtitle}>MATIKAN</Text>
                        </TouchableOpacity>
            </View> 

          </View>       
        </View>
          <Text style={styles.textStatus}> {textKonek} </Text>
    </ScrollView>
  </View>
  )
}


const styles = StyleSheet.create({

  container1: {
                flex:1,
                backgroundColor:"black"
  },
  slideGambar:{
                width: 380,         // Lebar gambar untuk landscape
                height: 175,        // Tinggi gambar untuk landscape
                borderRadius: 20,   // Membuat pojokan melengkung
                marginLeft: 20,   // Jarak sisi kiri
                marginRight: 20,  // Jarak sisi kanan
                marginTop: 50,    // Jarak dari bagian atas layar
  },
  box: {
                marginTop: 20,
                width: 400,                // Lebar box
                height: 200,               // Tinggi box
                backgroundColor: 'rgba(240, 240, 240, 0.5)', // Warna latar belakang transparan
                borderRadius: 10,          // Membuat pojok kotak melengkung
                elevation: 5,              // Efek bayangan (untuk Android)
                shadowColor: '#000',       // Warna bayangan (untuk iOS)
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                flexDirection: 'row', 
                justifyContent: 'space-around'
  },
  boxKecil:{
                flexDirection: 'row', 
                justifyContent: 'space-around',
                alignSelf: 'flex-start'
  },
  containerRow: {
                flexDirection: 'row',      // Mengatur tombol dalam baris
                justifyContent: 'space-between', // Memberikan jarak antar tombol
                marginBottom: 10,          // Jarak antar kelompok tombol
  },
  containerColumn: {
                flexDirection: 'column',      // Mengatur tombol dalam kolom
                marginLeft:'1%',
                marginRight: '1%'
  },

  title: {
                fontWeight : 300,
                marginTop : 10,
                fontFamily : 'Oswald-Bold',
                marginBottom : 10,
                textAlign: "center",
                fontSize: 12,             // Ukuran teks
                fontWeight: 'bold',       // Teks tebal
                color: 'white',            // Warna teks
                marginBottom: 20,         // Jarak bawah
  },
  subtitle: {
                fontFamily : 'Oswald-Bold',
                color: '#fff',               // Warna teks
                fontSize: 10,                // Ukuran teks yang cukup besar dan terbaca
                fontWeight: 'bold',          // Teks tebal
                textAlign: 'center',         // Teks rata tengah di dalam tombol
  },
  tombolHijau: {
                backgroundColor: "#1abc9c",
                padding: 15,
                borderRadius: 10,
                alignItems: 'center',
                marginBottom : 10,
                paddingVertical: 15,         // Padding atas-bawah tombol
                paddingHorizontal: 30,       // Padding kiri-kanan tombol
  },
  tombolMerah: {
                backgroundColor: "#dc3549",
                padding: 15,
                borderRadius: 10,
                alignItems: 'center',
                marginBottom : 10,
                paddingVertical: 15,         // Padding atas-bawah tombol
                paddingHorizontal: 30,       // Padding kiri-kanan tombol
                marginBottom : 10,
  },
  textStatus: {
                fontSize : 20,
                color : "#FFF",
                marginTop : 10,
                fontFamily : 'Changa-Regular',
                textAlign: "center"
  },
});

export default DashboardDepan;

