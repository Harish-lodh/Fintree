import muthood from '../../assets/lending/mothoot_logo.webp'
import nfcpl from '../../assets/lending/NFCPL.png'
import mdai from '../../assets/lending/SDAl.jpg'
import circle from '../../assets/lending/circlepe-club-logo.png'
import gray from '../../assets/lending/grayquest-logo-300x144.png'
import malhotra from '../../assets/lending/malhotra.png'

// Past partners
import unity1 from '../../assets/lending/Past_partners/Unity (1).png'
import club from '../../assets/lending/Past_partners/The-EMI-Club-300x101 (1).png'
import paytail from '../../assets/lending/Past_partners/Paytail-150x59.png'
import sdal from '../../assets/lending/Past_partners/SDAL.jpg'
import okcf from '../../assets/lending/Past_partners/okcf-300x67.jpg'
import fundfina from '../../assets/lending/Past_partners/Fundfina_fina-300x91 (2).jpg'
import finrm from '../../assets/lending/Past_partners/finrm-logo-300x147 (1).png'
import financepeer from '../../assets/lending/Past_partners/FinancePeer-Logo-300x62 (1).png'
import embi from '../../assets/lending/Past_partners/embi.png'
import credin from '../../assets/lending/Past_partners/Credin-Logo.png'
import cashtree from '../../assets/lending/Past_partners/Cashtree-logo.png'
import aldun from '../../assets/lending/Past_partners/aldun-300x158.jpg'
import scholfe from '../../assets/lending/Past_partners/scholfe.jpg'

const Partners = () => {
  const pastPartners = [
    unity1, club, paytail, sdal, okcf, fundfina, finrm,
    financepeer, embi, credin, cashtree, aldun, scholfe
  ]

  return (
    <div className="flex flex-col items-center my-10 mx-4 md:mx-16">
      {/* Co-lending Partners */}
      <div className='mb-6'>
      <h2 className="text-blue-800 text-3xl font-bold my-6 text-center">Co-lending Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        <img src={muthood} alt="Muthoot" className="h-20 object-contain" />
        <img src={nfcpl} alt="NFCPL" className="h-20 w-20 object-contain" />
        <img src={mdai} alt="MDAI" className="h-20 object-contain" />
      </div>
</div>
      {/* Service Partners */}
      <div className='mb-6'>
      <h2 className="text-blue-800 text-3xl font-bold my-6 text-center">Service Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        <img src={gray} alt="Grayquest" className="h-30 w-40 object-contain" />
        <img src={malhotra} alt="Malhotra" className="h-30 w-40 object-contain" />
        <img src={circle} alt="Circle PE" className="h-20 w-20object-contain" />
      </div>
</div>
      {/* Past Partners */}
      <div  className='mb-6'>
      <h2 className="text-blue-800 text-3xl font-bold my-6 text-center">Past Partners</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 place-items-center">
        {pastPartners.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Past partner ${idx + 1}`}
            className="h-30 w-40 object-contain"
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Partners
