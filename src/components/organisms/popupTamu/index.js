import React, { useState } from 'react'
import './popupTamu.css';
import Beautiful  from '../../../assets/audio/Beautiful-In-White-Shane-Filan-Lyrics_vYjeg2q2rhU.mp3';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopupTamu = ({play,audioRef,setRelatif}) => {
    const [open,setOpen] = useState('1');
    const [top,setTop] = useState('-1%')
    function GetURLParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) 
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) 
            {
                return sParameterName[1];
            }
        }
    }

    const pengantin = GetURLParameter('nama');
    var nama =decodeURI(pengantin)
    
    const klikUndangan = () => {
        setOpen('0')
        setTop('-110%')
        play()
        AOS.init({
            // offset: 200,
            duration: 2000,
            easing: 'ease',
            // delay: 100,
          });
        setRelatif('app')
    }

  return (
    <div className={`thumb`} style={{opacity:open, top:top}}>
            <p className="undang">Undangan Pernikahan</p>
            <p className="pengantin">Sofia & Sigit</p>
            <p className="tanggal">Minggu, 12 Februari 2023</p>
            <div className="tamu">
                <p>Kepada Yth. <br/>
                    Bpk/Ibu/Saudara/i</p> 
                    <p id="nama-tamu">{nama}</p>
                    <span>di Tempat</span>
                </div>
                <button className="button" type="button" onClick={klikUndangan}>Buka Undangan</button>
                <audio src={Beautiful} ref={audioRef} loop autoPlay={true}></audio>
        </div>
  )
}

export default PopupTamu