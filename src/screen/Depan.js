import { StyleSheet, Text, TouchableOpacity, View, Image, Platform, Alert, ScrollView } from 'react-native'
import { useState, useEffect, React } from "react";
import Paho from "paho-mqtt";



const slide1 = require('../.././img/slide1.webp');
const logo = require('../.././img/iot.png');
const off = require('../.././img/off.png');
const on = require('../.././img/on.png');


const textColor12 = 'red';

client = new Paho.Client(
  "broker.mqtt-dashboard.com",
  Number(8000),
  `mqtt-async-test-${parseInt(Math.random() * 100)}` //ok
);

const DashboardDepan = () => {

  //const [value, setValue] = useState(0); //ok
  const [textKonek, setTextKonek] = useState ('LOADING...');
  const textColor = textKonek === 'LOADING...' ? 'red' : 'green';
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
    <ScrollView showsVerticalScrollIndicator={false} > 
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

      <Image source={slide1} style={styles.slideGambar} />

              <Text style={{ 
                  fontSize : 28,
                  color : "#FFF",
                  marginTop : 40,
                  fontFamily : 'Oswald-Bold',
                  textAlign: "center"
              }} > KELUARGA CANTIK DAN GANTENG </Text>

      <Text style={[styles.textStatus, { color: textColor }]}> {textKonek} </Text>
      

        <View style={ styles.box }>
          <ScrollView> 
            <View style={ styles.containerColumn}>
         
                    <Text style={ styles.title }>Pompa Air</Text>
                      <View style={ styles.containerRow}>
                          <TouchableOpacity style={styles.tombolKlik} onPress={() => { pompaHidup(client); } } >
                              <Image source={on} style={styles.tombolGambar}/>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.tombolKlik} onPress={() => { pompaMati(client); } } >
                            <Image source={off} style={styles.tombolGambar}/>
                          </TouchableOpacity>  
                      </View>  

                    <Text style={ styles.title }> Lampu Dapur </Text>
                      <View style={ styles.containerRow}>
                          <TouchableOpacity style={styles.tombolKlik} onPress={() => { LampuDapurHidup(client); }} >
                              <Image source={on} style={styles.tombolGambar}/>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.tombolKlik} onPress={() => { LampuDapurMati(client);} } >
                              <Image source={off} style={styles.tombolGambar}/>
                          </TouchableOpacity>
                      </View> 

                    <Text style={ styles.title }> Lampu Belakang </Text>
                      <View style={ styles.containerRow}>
                          <TouchableOpacity style={styles.tombolKlik} onPress={() => { LampuBelakangHidup(client); }} >
                              <Image source={on} style={styles.tombolGambar}/>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.tombolKlik} onPress={() => { LampuBelakangMati(client);} } >
                              <Image source={off} style={styles.tombolGambar}/>
                          </TouchableOpacity>
                      </View> 

                    <Text style={ styles.title }> Lampu Belakang </Text>
                      <View style={ styles.containerRow}>
                          <TouchableOpacity style={styles.tombolKlik} onPress={() => { LampuDepanHidup(client); }} >
                              <Image source={on} style={styles.tombolGambar}/>
                          </TouchableOpacity>
                        <TouchableOpacity style={styles.tombolKlik} onPress={() => { LampuDepanMati(client);} } >
                              <Image source={off} style={styles.tombolGambar}/>
                        </TouchableOpacity>
                      </View> 

                    <Text style={ [styles.title, { color: "#066A4E", fontSize: 22 }]}> SEMUA PERALATAN LISTRIK</Text>
                      <View style={styles.containerColumn}>
                          <TouchableOpacity style={styles.tombolKlikTerakhir} onPress={() => { SemuaHidup(client); }} >
                              <Image source={on} style={[styles.tombolGambar, { width: 40, height: 40 }]}/>
                          </TouchableOpacity>
                        <TouchableOpacity style={styles.tombolKlikTerakhir} onPress={() => { SemuaMati(client);} } >
                             <Image source={off} style={[styles.tombolGambar, { width: 40, height: 40 }]}/>
                        </TouchableOpacity>
                      </View> 
            </View>    
          </ScrollView> 
        </View>
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
                width: 340,         // Lebar gambar untuk landscape
                height: 175,        // Tinggi gambar untuk landscape
                borderRadius: 20,   // Membuat pojokan melengkung
                marginLeft: 20,   // Jarak sisi kiri
                marginRight: 20,  // Jarak sisi kanan
                marginTop: 50,    // Jarak dari bagian atas layar
                alignContent: 'center',
                alignItems: 'center'
  },
  tombolGambar: {
                width: 30,          // Sesuaikan ukuran gambar
                height: 30,         // Sesuaikan ukuran gambar
  },
  box: {
                marginTop: 20,
                width: '100%',              // Lebar box
                height: 350,               // Tinggi box
                backgroundColor: 'rgba(240, 240, 240, 0.1)', // Warna latar belakang transparan
                borderRadius: 15,          // Membuat pojok kotak melengkung
                elevation: 5,              // Efek bayangan (untuk Android)
                shadowColor: '#000',       // Warna bayangan (untuk iOS)
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                flexDirection: 'row', 
                justifyContent: 'space-around'
  },
  scrollContent: {
                flexDirection: 'column', // Mengatur konten agar vertikal
                padding: 10,             // Opsional: Memberi padding di dalam ScrollView
  },
  boxKecil:{
                flexDirection: 'row', 
                justifyContent: 'space-around',
                alignSelf: 'flex-start'
  },
  containerRow: {
                flexDirection: 'row',      // Mengatur tombol dalam baris
                justifyContent: 'center', // Memberikan jarak antar tombol
                marginBottom: 10,          // Jarak antar kelompok tombol
                justifyContent: 'space-around'
  },
  containerColumn: {
                flexDirection: 'column',      // Mengatur tombol dalam kolom
                marginLeft:'1%',
                marginRight: '1%'
  },
  title: {
                fontFamily : 'Changa-Regular',
                fontWeight : 300,
                marginTop : 10,
                marginBottom : 10,
                textAlign: "center",
                fontSize: 20,             // Ukuran teks
                fontWeight: 'bold',       // Teks tebal
                color: 'white',            // Warna teks
                marginBottom: 15,         // Jarak bawah
  },
  subtitle: {
                fontFamily : 'Oswald-Bold',
                color: '#fff',               // Warna teks
                fontSize: 10,                // Ukuran teks yang cukup besar dan terbaca
                fontWeight: 'bold',          // Teks tebal
  },
  tombolKlik: {
                backgroundColor: "#314555",
                width: 150,               // Sesuaikan ukuran tombol
                height: 80,               // Sesuaikan ukuran tombol
                borderRadius: 10,         // Setengah dari width/height agar berbentuk lingkaran
                justifyContent: 'center', // Menempatkan konten di tengah secara vertikal
                alignItems: 'center',     // Menempatkan konten di tengah secara horizontal
                marginTop: 10,
  },
  tombolKlikTerakhir: {
              backgroundColor: "#314555",
              width: "auto",              // Sesuaikan ukuran tombol
              height: 100,                 // Sesuaikan ukuran tombol
              borderRadius: 10,           // Setengah dari width/height agar berbentuk lingkaran
              justifyContent: 'center',   // Menempatkan konten di tengah secara vertikal
              alignItems: 'center',       // Menempatkan konten di tengah secara horizontal
              marginTop: 10,
},
  textStatus: {
                fontSize : 20,
                marginTop : 5,
                fontFamily : 'Changa-Regular',
                textAlign: "center"
  },
});

export default DashboardDepan;

