import React, { useState } from 'react'
import './popupTamu.css';
import ringer  from '../../../assets/audio/Ngoni.mp3';

const PopupTamu = ({play,audioRef}) => {
    const [open,setOpen] = useState('flex');
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
        setOpen('100%')
        play()
    }

  return (
    <div className={`thumb`} style={{marginTop:open}}>
            <p className="undang">Undangan Pernikahan</p>
            <p className="pengantin">Dedi Irawan & Rifty</p>
            <p className="tanggal">Minggu, 14 Februari 2023</p>
            <div className="tamu">
                <p>Kepada Yth. <br/>
                    Bpk/Ibu/Saudara/i</p>
                    <p id="nama-tamu">{nama}</p>
                    <span>di Tempat</span>
                </div>
                <button className="button" type="button" onClick={klikUndangan}>Buka Undangan</button>
                <audio src={ringer} ref={audioRef} loop autoPlay={true}></audio>
        </div>
  )
}

export default PopupTamu