import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import Hero from "./components/organisms/hero/Hero";
import PopupTamu from "./components/organisms/popupTamu";
import TanggalPernikahan from "./components/organisms/tanggalPernikahan";
import DetailAcara from "./components/organisms/detailAcara";
import Ucapan from "./components/organisms/ucapan";
import Sound from "./components/atoms/audio/Sound";
import Gift from "./components/organisms/gift";
import Navbar from "./components/atoms/navbar/Navbar";



const App = () => {

  const [tamu, setTamu] = useState([]);
  const [isPlaying,setIsPlaying] = useState(false)
  const [relatif,setRelatif] = useState('fix')
  // const [scrool,setScrool] = useState()
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

  const onContentIndexClick = (value) => {
    const element = document.getElementById(`content${value}`)
    const sec = document.querySelectorAll('section')
    console.log(sec)
    const nav = document.querySelectorAll('div ul li')
    element.scrollIntoView({behavior:'smooth'})
    window.onscroll = () => {
      element.foreach(values => {
         let top = window.scrollY;
         let offset = values.offsetTop;
         let height = values.offsetHeight;
        //  let id = element.getAttribute('id')

         if(top >= offset && top < offset + height){
            nav.foreach(navs => {
              navs.classList.add('active')
            })
         }
       })
     }
  }

  const angka = [1,2,3,4,5]
  // console.log(angka[0])
  

  return (
    <div className={relatif}>
      <Sound play={play} audioRef={audioRef} isPlaying={isPlaying}/>
      <Hero id={1}/>
      <TanggalPernikahan id={2}  />
      <DetailAcara id={3} />
      <Gift blurr={setRelatif} id={4}/>
      <Ucapan tamu={tamu} setTamu={setTamu} id={5}/>
      <PopupTamu play={play} audioRef={audioRef} setRelatif={setRelatif} />
      <Navbar scrool={onContentIndexClick}/>
    </div>
  );
};

export default App;
