import muthood from '../../assets/lending/mothoot_logo.webp'
import nfcpl from '../../assets/lending/NFCPL.png'
import kite from '../../assets/lending/kite.jpeg'
import ambit from '../../assets/lending/Ambit logo.jpg'
import chola from '../../assets/lending/chola_logo.svg'

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

const lendingPartners = [
  { src: muthood, alt: "Muthoot", url: "https://www.muthootfinance.com" },
  { src: nfcpl, alt: "NFCPL", url: "https://nfcpl.in" },
  { src: kite, alt: "Kite", url: "https://kite.trade" },
  { src: chola, alt: "Chola", url: "https://www.cholamandalam.com" },
  { src: ambit, alt: "Ambit", url: "https://www.ambit.co" },
]

const servicePartners = [
  { src: gray, alt: "Grayquest", url: "https://grayquest.com" },
  { src: malhotra, alt: "Malhotra", url: "https://malhotragroup.com" },
  { src: circle, alt: "Circle PE", url: "https://circlepe.com" },
]

const pastPartners = [
  { src: unity1, alt: "Unity", url: "https://www.unitysmallfinancebank.in" },
  { src: club, alt: "EMI Club", url: "https://theemiclub.com" },
  { src: paytail, alt: "Paytail", url: "https://paytail.com" },
  { src: sdal, alt: "SDAL", url: "https://www.sdal.in" },
  { src: okcf, alt: "OK Credit Finance", url: "https://okcredit.in" },
  { src: fundfina, alt: "Fundfina", url: "https://fundfina.com" },
  { src: finrm, alt: "FinRM", url: "" },
  { src: financepeer, alt: "FinancePeer", url: "https://financepeer.com" },
  { src: embi, alt: "Embi", url: "https://embifi.in" },
  { src: credin, alt: "Credin", url: "https://credin.in" },
  { src: cashtree, alt: "Cashtree", url: "https://cashtree.in" },
  { src: aldun, alt: "Aldun", url: "https://aldun.in" },
  { src: scholfe, alt: "Scholfe", url: "https://scholfe.com" },
]

const Partners = () => {
  return (
    <div className="flex flex-col items-center my-10 mx-4 md:mx-16">

      {/* Co-lending Partners */}
      <div className='mb-6'>
        <h2 className="text-blue-800 text-3xl font-bold mb-8 text-center">BC & Co-lending Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {lendingPartners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-20 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Service Partners */}
      <div className='mb-6'>
        <h2 className="text-blue-800 text-3xl font-bold my-6 text-center">Service Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {servicePartners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-24 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Past Partners */}
      <div className='mb-6'>
        <h2 className="text-blue-800 text-3xl font-bold my-6 text-center">Past Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 place-items-center">
          {pastPartners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-24 w-40 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Partners
