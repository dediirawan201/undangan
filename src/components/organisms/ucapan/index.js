
import ListUcapan from '../../molecules/listUcapan/ListUcapan'
import TambahUcapan from '../../molecules/tambahUcapan/TambahUcapan'
import './ucapan.css';

const Ucapan = ({tamu,setTamu,id}) => {
  
    const handleTambahTamu = (data) => {
    
        const newTamu = [
          ...tamu, data
        ]; 
        setTamu(newTamu) 
      } 
  return (
    <section className='ucapan' id={`content${id}`}>
      <div className='ucapan-wrapper' data-aos="zoom-in">
        <h1 className='mb-2 judul text-center'>Berikan Ucapan & Doa</h1>
        <TambahUcapan onTambahTamu={handleTambahTamu}/>
        <div className='container-listUcapan'>
        {tamu.map((tamus,i) => {
            return (
                <ListUcapan tamu={tamus} key={i}/>
                )
              })}
              </div>
      </div>
    </section>
  )
}

export default Ucapan