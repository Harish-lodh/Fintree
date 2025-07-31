
import img1 from "../../assets/img/award1.jpg"
import img2 from '../../assets/img/award2.jpg'
import img3 from '../../assets/img/award3.jpg'
import img4 from '../../assets/img/award-2019.jpg'
import img5 from '../../assets/img/award5.jpg'
import img6 from '../../assets/img/award.png'


const Awards = () => {
  const awards = [
    {
      img: img1,
      caption: "", // You can update if known
    },
    {
      img: img2,
      caption: "Sharad Agarwal received Honorary Award in recognition of exemplary technology initiative and innovation",
    },
    {
      img: img3,
      caption: "ZEE Business Best HR Strategy Award at Taj Mahal Hotel, Mansingh Road, New Delhi",
    },
    {
      img: img4,
      caption: "2nd Leadership Summit & Awards 2019 for Startup Business Award",
    },
    {
      img: img5,
      caption: "CEO of the Year — Rajesh Harichandran dubey (BFSI Leadership Awards 2022)",
    },
    {
      img: img6,
      caption: "", // You can update if known
    },
  ]

  return (
    <div className="px-4 py-8 max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Awards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {awards.map((award, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-full aspect-square overflow-hidden rounded shadow">
              <img
                src={award.img}
                alt={`Award ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 font-semibold text-sm text-gray-700 px-2">{award.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Awards
