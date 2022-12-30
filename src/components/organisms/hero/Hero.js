import React from 'react'
import {BungaKecil, Frame2} from '../../../assets/gambar'
import Coutdown from '../../molecules/coutdown/Coutdown';
import './hero.css';

const Hero = () => {
    
  return (
        <div className="hero">
                <img src={Frame2} height="600" width="600" alt='hero'/>
            <div className="set">
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
                <div><img src={BungaKecil} alt='bunga'/></div>
            </div>
            <p className="title">Kami yang berbahagia</p>
            <h1 className="nama-pasangan">Dedi & Rifty</h1>
            <p className="tanggal">Minggu, 14 Februari 2023</p>
            <span className="desc">- Save The Date -</span>
            <Coutdown/>
            <span className="inisial">- D & R -</span>
            
        </div>
  )
}

export default Hero;