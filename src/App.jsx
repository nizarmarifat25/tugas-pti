import { useState } from 'react'
import './App.css'
import imgBanner from './assets/img1.png'
import imgUnderstanding from './assets/img2.png'
import data from './data.jsx'

function App() {
  const [dataDetail, setDataDetail] = useState(data[0])

  return (
    <>
      <div className='banner'>
        <img src={imgBanner} alt="" />
        <div className="title">
          <strong>
            Artificial Intelligence
          </strong>
          <br />
          <span>buat semuanya menjadi mudah dan flexibel</span>
        </div>
      </div>
      <div className="understanding container">
        <h1 data-aos-duration="1500" data-aos="zoom-in-down">Pengertian <br /> Artificial Intelligence</h1>
        <div className='column-understanding'>
          <p data-aos-duration="1500" data-aos="fade-right">Artificial Intelligence adalah Kecerdasan Buatan, seperti kepanjangan AI yaitu Artificial Intelligence, AI merupakan teknologi yang dirancang untuk membuat sistem komputer mampu meniru kemampuan intelektual manusia. AI memungkinkan komputer untuk belajar dari pengalaman, mengidentifikasi pola,
            membuat keputusan, dan menyelesaikan tugas-tugas kompleks dengan cepat dan efisien.</p>
          <img data-aos-duration="1500" data-aos="fade-left" src={imgUnderstanding} alt="" />
        </div>
      </div>
      <div className="example-aplication container">
        <h1 data-aos-duration="1500" data-aos="zoom-in-down">Contoh Aplikasi <br />Artificial Intelligence</h1>
        <div className="image-preview "  data-aos="fade-right">
          {data.map((data, index) => {
            return (
              <img  src={data.image} alt="" key={index} onClick={() => setDataDetail(data)}
                className={dataDetail.image === data.image ? 'active' : ''} />
            )
          })}
        </div>
      </div>
      <div className="detail-example-aplication">
        <div>
          <img src={dataDetail.image}  alt=""  data-aos="zoom-in"/>
          <span  data-aos="zoom-in">{dataDetail.understanding}
            <br />
            <br />
            <p>Fungsi :</p>
            <ol>
              {dataDetail.function.map((item, i) => {
                return (
                  <li  key={i}>{item}</li>
                )
              })}
            </ol>
            <br /><br />
            <span  data-aos="zoom-in">Kunjungi <a href={dataDetail.link} target='_blank'>{dataDetail.name}</a></span>
          </span>
        </div>
      </div>
      <footer>&copy;nizarmarifat2023</footer>
    </>
  )
}

export default App
