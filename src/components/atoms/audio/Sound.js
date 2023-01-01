import ringer  from '../../../assets/audio/Ngoni.mp3';
import Rose from '../../../assets/gambar/piringan.png'
import './sound.css'
const Sound = ({play,audioRef,isPlaying}) => {

    const clickPlay = () => {
      play()
    }

    return (
      <div className='sound'>
        <div className='sound-wrapper'>
        <div className='container-rotasi'>
        <img id='putar' src={Rose} width={50} height={50}
          alt='belajar'
        /> 
        <div className='btn-container'>
      <div onClick={clickPlay} className={isPlaying ? 'btn-stop' : 'btn-play'}></div>
    </div>
        </div>
        <audio src={ringer} ref={audioRef} loop></audio>
        </div>
      </div>
    );
  };

  export default Sound;