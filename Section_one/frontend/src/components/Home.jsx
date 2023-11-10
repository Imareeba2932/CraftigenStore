import React from 'react';
import Fade from 'react-reveal/Fade';
// import required modules
import Browse from './Browse';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Home = () => {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide className="slide1 slide"></SwiperSlide>
        <SwiperSlide className="slide2 slide"></SwiperSlide>
        <SwiperSlide className="slide3 slide"></SwiperSlide>
        <SwiperSlide className="slide4 slide"></SwiperSlide>
        <SwiperSlide className="slide5 slide"></SwiperSlide>
        <SwiperSlide className="slide6 slide"></SwiperSlide>
        {/* <SwiperSlide className="slide7 slide">Slide 7</SwiperSlide> */}
        {/* <SwiperSlide className="slide8 slide">Slide 8</SwiperSlide> */}
        {/* <SwiperSlide className="slide9 slide">Slide 9</SwiperSlide> */}
      </Swiper>


      <div className='container-fluid homebg'>
        <Fade left>
          <h1 className='text-center p-4'>Feature Categories</h1>
        </Fade>
        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-6'>
            <div className='card rounded-5 mx-5  '>
              <div className='card-body rounded-5 homeimg1 '>
                <div className='homeimg2ds'>
                  <Fade bottom>
                    <h4>Brass</h4>
                    <p className='text-white'>Add elegance and charm to  <br />your home with these <br />beautiful masterpieces</p>
                    <button className='btn btn-warning border border-white   mb-5 rounded-0 '>Shop Now</button>
                  </Fade>

                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card  rounded-5 mx-5 '>
              <div className='card-body rounded-5  homeimg2 '>
                <div className='homeimg2ds'>
                  <Fade bottom>
                    <h4>Copper</h4>
                    <p className='text-white'>Add elegance and charm to <br /> your home with these <br /> beautiful masterpieces</p>
                    <button className='btn btn-warning border border-white mb-5  rounded-0 mb-5 '>Shop Now</button>
                  </Fade>

                </div>

              </div>
            </div>
          </div>
        </div>

        <Fade right>
          <h1 className='text-dark text-center pt-5'>Collections</h1>
        </Fade>


        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0' >
              <div className='card-head'>
                <img className='img-fluid ' src="https://thebombaystore.com/cdn/shop/files/Collection_Ajrakh.jpg?v=1664781166" alt="" />
              </div>
              <div className='card-body cardbg p-3  '>
                <Fade bottom>
                  <h3>Ajrakh</h3>
                  <p> With origins from thousands of years ago, Ajrakh hails from the desert regions of Kutch, Gujarat. The printing is done by hand with  hand carved wooden blocks. It is distinguished by its color - Indigo &amp; Maroon.</p>
                  <button className='btn btn-warning border-white mt-3 rounded-0'>Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/files/Collection_Kalamkari.jpg?v=1664781209" alt="" />
              </div>
              <div className='card-body cardbg p-3 '>
                <Fade bottom>
                  <h3>Kalamkari</h3>
                  <p> Kalamkari’ is an ancient style of hand painting. The term Kalamkari comes from the words ‘kalam’ meaning pen and ‘kari’ meaning craftsmanship. It was done with a tamarind pen &amp; natural dyes, using interlacing patterns of leaves, flowers and birds design!.</p>
                  <button className='btn btn-warning border-white mt-3 rounded-0'>Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/files/Collection_Sui-Dhagga.jpg?v=1664781222" alt="" />
              </div>
              <div className='card-body cardbg  p-3 '>
                <Fade bottom>
                  <h3 >Sui Dhaga</h3>
                  <p> Sui Dhaaga is a representation of different embroideries of India, like Kantha, Aari and Sheesha. The Design is inspired by Ornate patterns and stitches, amalgamated into beautiful collage.</p>
                  <button className='btn btn-warning border-white mt-3 rounded-0'   > Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
        </div>

        <div className=''>
          <Fade right>
            <h1 className='text-dark text-center pt-5'>Trending Products</h1>
          </Fade>
          <br /> <a className='float-end text-warning' style={{ textDecoration: 'none' }} href="/browse"> View All</a>
        </div>


        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0' >
              <div className='card-head'>
                <img className='img-fluid ' src="https://thebombaystore.com/cdn/shop/products/TBS13795_2_500x.jpg?v=1634206681" alt="" />
              </div>
              <div className='card-body cardbg p-3  '>
                <Fade bottom>
                  <h5>Brass BookMark Peacock</h5>
                  <p>Rs450</p>
                  <button className='btn btn-warning border-white mt-3 rounded-3'>Buy Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/products/20221123_142146_500x.jpg?v=1669379050" alt="" />
              </div>
              <div className='card-body cardbg p-3 '>
                <Fade bottom>
                  <h5>Kanmani Triball Doll</h5>
                  <p>Rs1145</p>
                  <button className='btn btn-warning border-white mt-3 rounded-3'>Buy Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4  p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0 '>
              <div className='card-head '>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/products/001_25e65e8b-a10d-4c40-b664-95cd80cb2e2b_500x.jpg?v=1646042732" alt="" />
              </div>
              <div className='card-body cardbg   p-3 '>
                <Fade bottom>
                  <h5 >Iron Music Design</h5>
                  <p>Rs1950</p>
                  <button className='btn btn-warning border-white mt-3 rounded-3'> Buy Now</button>
                </Fade>

              </div>
            </div>
          </div>
        </div>

        <div className='m-0'>
          <Fade right>
            <h1 className='text-dark text-center pt-5'>Best Seller</h1>
          </Fade>
          <br /> <a className='float-end text-warning' style={{ textDecoration: 'none' }} href="/browse"> View All</a>
        </div>
        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0' >
              <div className='card-head'>
                <img className='img-fluid ' src="https://thebombaystore.com/cdn/shop/products/04_a2d52f24-a4a1-49e8-b9e3-241026207918_500x.jpg?v=1648648942" alt="" />
              </div>
              <div className='card-body cardbg p-3  '>
                <Fade bottom>
                  <h6>Elephant Procesesion Kullads (180ml each)</h6>
                  <p>Rs900</p>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/products/3_19aeda55-c7de-4301-9361-085ac1a2e888_500x.jpg?v=1626637109" alt="" />
              </div>
              <div className='card-body cardbg p-3 '>
                <Fade bottom>
                  <h6>Shatranj Leather Case</h6>
                  <p>Rs950</p>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4  p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0 '>
              <div className='card-head '>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/products/1_881997f8-b973-4597-821c-5ae258eac5c5_500x.jpg?v=1649941581" alt="" />
              </div>
              <div className='card-body cardbg   p-3 '>
                <Fade bottom>
                  <h6 >Brass Singing Bowl</h6>
                  <p>Rs2,100</p>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div className='m-0'>
          <Fade right>
            <h1 className='text-dark text-center pt-5'>Shop By Price</h1>
            <p className='text-secondary text-center m-3'>Buy The Most Exclusive Gift In Your Budget</p>
          </Fade>
          <br /> <a className='float-end text-warning' style={{ textDecoration: 'none' }} href="/browse"> View All</a>
        </div>
        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0' >
              <div className='card-head'>
                <img className='img-fluid ' src="https://thebombaystore.com/cdn/shop/collections/1_8933990a-5285-4978-8088-ae79854b4116_640x.jpg?v=1668410893" alt="" />
              </div>
              <div className='card-body cardbg p-3  '>
                <Fade bottom>
                  <h4>Below Rs500</h4>
                  <button className='btn btn-warning border-white mt-3 rounded-0 text-white fs-7' style={{ backgroundColor: 'orange' }}>Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/collections/8_640x.jpg?v=1669266148" alt="" />
              </div>
              <div className='card-body cardbg p-3 '>
                <Fade bottom>
                  <h4>From Rs. 501 To Rs. 1000</h4>
                  <button className='btn btn-warning border-white mt-3 rounded-0 text-white fs-7' style={{ backgroundColor: 'orange' }}>Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4  p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0 '>
              <div className='card-head '>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/collections/02_640x.jpg?v=1669266003" alt="" />
              </div>
              <div className='card-body cardbg   p-3 '>
                <Fade bottom>
                  <h4 >From Rs. 1001 To Rs. 2500</h4>
                  <button className='btn btn-warning border-white mt-3 rounded-0 text-white fs-7' style={{ backgroundColor: 'orange' }}>Shop Now</button>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div className='m-0'>
          <Fade top>
            <h1 className='text-dark text-center pt-5'>Shop By Occasion</h1>
            <p className='text-secondary text-center m-3'>Hand picked product for all your gifting needs!!</p>
          </Fade>
          <br /> <a className='float-end text-warning' style={{ textDecoration: 'none' }} href="/browse"> View All</a>
        </div>
        <div className='row justify-content-evenly justify-content-center'>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0' >
              <div className='card-head'>
                <img className='img-fluid ' src="https://thebombaystore.com/cdn/shop/collections/For_him_640x.jpg?v=1664780591" alt="" />
              </div>
              <div className='card-body cardbg p-3  '>
                <Fade bottom>
                  <h4>For Him</h4>
                  <button className='btn btn- border border-dark mt-3 rounded-0 text-white fw-bold  px-3 py-2' style={{ backgroundColor: 'orange' }}>Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4 p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0'>
              <div className='card-head'>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/collections/For_her_640x.jpg?v=1660973778" alt="" />
              </div>
              <div className='card-body cardbg p-3 '>
                <Fade bottom>
                  <h4>For Her</h4>
                  <button className='btn btn-warning border border-dark mt-3 rounded-0 text-white fw-bold px-3 py-2' style={{ backgroundColor: 'orange' }}>Shop Now</button>
                </Fade>

              </div>
            </div>
          </div>
          <div className='col-md-4  p-5 justify-content-evenly justify-content-center'>
            <div className='card border-0 '>
              <div className='card-head '>
                <img className='img-fluid' src="https://thebombaystore.com/cdn/shop/collections/House_Warming_640x.jpg?v=1660973976" alt="" />
              </div>
              <div className='card-body cardbg   p-3 '>
                <Fade bottom>
                  <h4 >House Warming</h4>
                  <button className='btn btn-warning border border-dark mt-3 rounded-0 text-white fw-bold px-3 py-2' style={{ backgroundColor: 'orange' }}>Shop Now</button>
                </Fade>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;