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



const App = () => {

  const [tamu, setTamu] = useState([]);
  const [isPlaying,setIsPlaying] = useState(false)
  const [relatif,setRelatif] = useState('fix')
  const [blurr,setBlurr] = useState('app')
  useEffect(() => {
    getTamus();
    // getTamu()
  }, [tamu]);


  const getTamus = async () => {
    const response = await axios.get("http://undangan.pejuangquran.org/user")
    
    setTamu(response.data.data.sort((a,b) => b.id-a.id));
    // console.log(response.data.data.sort((a,b) => b.id-a.id));
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
    <div className={relatif}>
      <Sound play={play} audioRef={audioRef} isPlaying={isPlaying}/>
      <Hero/>
      <TanggalPernikahan />
      <DetailAcara />
      <Gift blurr={setRelatif}/>
      <Ucapan tamu={tamu} setTamu={setTamu} />
      <PopupTamu play={play} audioRef={audioRef} setRelatif={setRelatif} />
    </div>
  );
};

export default App;
