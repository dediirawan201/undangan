import './listUcapan.css'
const ListUcapan = ({tamu}) => {
  // let countDate = new Date()
  const getTanggal = (tanggal) => {
    let dateObj = new Date(tanggal)

    const arrBulan = ["Januari", "Febuary", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    
    let bulan = arrBulan[dateObj.getMonth()];
    return `${dateObj.getDate()} ${bulan} ${dateObj.getFullYear()}`;

  }
  return (
<div className="list-ucapan">
  <div className='wrapper-listUcapan'>
  <span className='nama'>{tamu.nama}</span>
  <span className='kehadiran'>{tamu.kehadiran}</span>  
   <span>
{tamu.kehadiran === 'hadir' && <span className="ikon material-symbols-outlined">
check_circle</span> } 
{tamu.kehadiran === 'tidak hadir' && <span className="ikon-2 material-symbols-outlined">
cancel
</span> } 
{tamu.kehadiran === 'ragu' && <span className="ikon-3 material-symbols-outlined">
help
</span> } 
</span>
  </div>
  <span className='pesan'>{tamu.pesan}</span>
<small>{getTanggal(tamu.create_time)}</small>
</div>

  )
}

export default ListUcapan