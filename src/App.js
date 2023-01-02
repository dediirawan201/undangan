import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import RowMahasiswa from "./components/molecules/listUcapan/ListUcapan";
import RowTambahMahasiswa from "./components/molecules/tambahUcapan/TambahUcapan";
import axios from "axios";
import Hero from "./components/organisms/hero/Hero";
import PopupTamu from "./components/organisms/popupTamu";
import TanggalPernikahan from "./components/organisms/tanggalPernikahan";
import DetailAcara from "./components/organisms/detailAcara";
import Ucapan from "./components/organisms/ucapan";
import Sound from "./components/atoms/audio/Sound";
import Gift from "./components/organisms/gift";
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease',
      anchorPlacement: 'top-bottom',
      throttleDelay: 99,
      offset: 120,
    });
},[])
  const [tamu, setTamu] = useState([]);
  const [isPlaying,setIsPlaying] = useState(false)
  useEffect(() => {
    getTamus();
  }, []);


  const getTamus = async () => {
    const response = await axios.get("http://localhost:4000/user");
    setTamu(response.data.data);
    console.log(response.data.data);
  };

  const audioRef = useRef();
  const play = () => {
    const audio = audioRef.current

    if(!isPlaying){
      setIsPlaying(true)
      audio.play()
      
    }

    if(isPlaying){
      setIsPlaying(false)
      audio.pause()
    }
  }

  return (
    <div className="app">
      <Sound play={play} audioRef={audioRef} isPlaying={isPlaying}/>
      <Hero/>
      <TanggalPernikahan />
      <DetailAcara />
      <Gift/>
      <Ucapan tamu={tamu} setTamu={setTamu} />
      <PopupTamu play={play} audioRef={audioRef} />
    </div>
  );
};

export default App;
