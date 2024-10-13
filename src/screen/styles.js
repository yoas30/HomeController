import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container1: {
                  flex:1,
                  backgroundColor:'black'
    },
    slideGambar:{
                  width: 420,         // Lebar gambar untuk landscape
                  height: 185,        // Tinggi gambar untuk landscape
                  borderRadius: 20,   // Membuat pojokan melengkung
                  marginTop: 50,    // Jarak dari bagian atas layar
                  alignContent: 'center',
                  alignItems: 'center',
                  resizeMode: 'repeat'
    },
    tombolGambar: {
                  width: 30,          // Sesuaikan ukuran gambar
                  height: 30,         // Sesuaikan ukuran gambar
    },
    box: {        
                  flex: 1,                    // Tinggi box
                  flexDirection: 'column',
                  marginTop: 20,
                  width: '100%',              // Lebar box
                  backgroundColor: 'rgba(240, 240, 240, 0)', // Warna latar belakang transparan
                  borderRadius: 15,          // Membuat pojok kotak melengkung
                //   elevation: 5,              // Efek bayangan (untuk Android)
                //   shadowColor: '#000',       // Warna bayangan (untuk iOS)
                //   shadowOffset: { width: 0, height: 2 },
                //   shadowOpacity: 0.3,
                //   shadowRadius: 4,
                  justifyContent: 'space-around',
                  overflow: 'hidden',
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
                  justifyContent: 'space-evenly'
    },
    containerColumn: {
                  flexDirection: 'column',      // Mengatur tombol dalam kolom
                  marginLeft:'1%',
                  marginRight: '1%'
    },
    title: {
                  fontFamily : 'Oswald-Bold',
                  fontWeight : 300,
                  marginTop : 10,
                  marginBottom : 10,
                  textAlign: 'center',
                  fontSize: 20,                 // Ukuran teks
                  fontWeight: 'bold',           // Teks tebal
                  color: 'white',               // Warna teks
                  marginBottom: 15,             // Jarak bawah
                  textTransform: 'uppercase'    // Mengubah teks menjadi huruf besar semua
    },
    subtitle: {
                  fontFamily : 'Oswald-Bold',
                  color: '#fff',               // Warna teks
                  fontSize: 20,                // Ukuran teks yang cukup besar dan terbaca
                  fontWeight: 'bold',          // Teks tebal
    },
    tombolKlik: {
                  backgroundColor: '#018b7c',
                  width: 400,               // Sesuaikan ukuran tombol
                  height: 70,               // Sesuaikan ukuran tombol
                  borderRadius: 30,         // Setengah dari width/height agar berbentuk lingkaran
                  justifyContent: 'center', // Menempatkan konten di tengah secara vertikal
                  alignItems: 'center',     // Menempatkan konten di tengah secara horizontal
                  marginTop: 0,
                  marginBottom: 10,
                  alignSelf: 'center'
    },
    tombolKlikMerah: {
                 backgroundColor: '#990e11',
                 width: 400,               // Sesuaikan ukuran tombol
                 height: 50,               // Sesuaikan ukuran tombol
                 borderRadius: 30,         // Setengah dari width/height agar berbentuk lingkaran
                 justifyContent: 'center', // Menempatkan konten di tengah secara vertikal
                 alignItems: 'center',     // Menempatkan konten di tengah secara horizontal
                 marginTop: 0,
                 marginBottom: 10,
                 alignSelf: 'center'
},
    tombolKlikTerakhir: {
                backgroundColor: '#314555',
                width: 'auto',              // Sesuaikan ukuran tombol
                height: 100,                // Sesuaikan ukuran tombol
                borderRadius: 20,           // Setengah dari width/height agar berbentuk lingkaran
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
  

export default styles;