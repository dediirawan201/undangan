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
  const active = 0;

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
    element.scrollIntoView({behavior:'smooth'})
     }


     const element = document.querySelectorAll('section')
    const nav = document.querySelectorAll('.navigation ul li') 
     window.onscroll = () => {
      element.forEach(values => {
         let top = window.scrollY;
         let offset = values.offsetTop - 150;
         let height = values.offsetHeight;
         let id = values.getAttribute('id')
  
         if(top >= offset && top < offset + height){
            nav.forEach(navs => {
              navs.classList.add('active');
              // document.querySelector('.navigation ul li a[href*=' + id + ']').classList.add('active')
              
            })
         }
       })
      }
    
  // document.querySelectorAll('section').onscroll = function() {myFunction()}

  // function myFunction() {
  //   let top = window.scrollY;
  //   let offset = document.querySelectorAll('section').offsetTop;
  //   let height = document.querySelectorAll('section').offsetHeight;

  //   if(top >= offset && top < offset + height){
  //     document.body.classList.add('active')
  //   }
  //   // document.getElementById("demo").innerHTML = "You scrolled in div.";
  // }


  

  return (
    <div className={relatif}>
      <Sound play={play} audioRef={audioRef} isPlaying={isPlaying}/>
      <Hero id={1}/>
      <TanggalPernikahan id={2}  />
      <DetailAcara id={3} />
      <Gift blurr={setRelatif} id={4}/>
      <Ucapan tamu={tamu} setTamu={setTamu} id={5}/>
      <PopupTamu play={play} audioRef={audioRef} setRelatif={setRelatif} />
      <Navbar scrool={onContentIndexClick} />
    </div>
  ); 
};

export default App;
