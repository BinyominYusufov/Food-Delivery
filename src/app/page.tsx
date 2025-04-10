"use client"

import Image from "next/image";
import { FaClock, FaMotorcycle, FaHeart } from "react-icons/fa";
import logo from "../../src/images/Logo.png"
import food1 from "../../src/images/Photo.png"
import { useTranslation } from 'react-i18next';
import map from "../../src/images/Map.png"
import kitchen from "../../src/images/bg.png"
import slide1 from "../../src/images/Rectangle 10.png"
import slide2 from "../../src/images/Rectangle 11.png"
import slide3 from "../../src/images/Rectangle 12.png"
import slide4 from "../../src/images/Rectangle 13.png"

import slide11 from "../../src/images/restaurant.png"
import slide22 from "../../src/images/restaurant2.png"
import slide33 from "../../src/images/restaurant3.png"
import slide44 from "../../src/images/restaurant4.png"

import { Swiper, SwiperSlide } from 'swiper/react';

import "./globals.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function Home() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="max-w-[1200px] mx-auto">

      <header className="flex justify-between items-center p-4">
        <Image src={logo.src} alt="logo" width={200} height={100} />
        <div className="flex gap-[15px] items-center">
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg> Log in
          </p>
          <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg> 0
          </p>
          <select onChange={(e) => changeLanguage(e.target.value)} className="px-4 py-2 rounded-xl border-2 border-blue-500 bg-white text-gray-800 shadow-md hover:bg-blue-50 transition">
            <option value="en">En</option>
            <option value="ru">Ru</option>
          </select>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </div>
      </header>


      <section className="flex justify-between">
        <div className="flex flex-col gap-[30px]">
          <p className="text-[55px] w-[410px]">{t("yourFood")}</p>
          <div className="flex gap-[40px]">
            <p className="border border-[#FFE145] w-[80px] text-center p-[5px]">{t("delivery")}</p>
            <p className="border border-[#FFE145] w-[80px] text-center p-[5px]">{t("takeout")}</p>
          </div>
        </div>
        <Image src={food1} alt="" width={600} height={500} />
      </section>


      <div className="flex justify-around bg-gray-50 p-6 rounded-xl shadow-md max-w-3xl">
        <div className="flex items-center space-x-3">
          <FaClock className="text-yellow-500 text-2xl" />
          <div>
            <p className="text-sm font-semibold text-gray-700">{t("deliveryAll")}</p>
            <p className="text-xs text-gray-500">{t("minutes")}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaMotorcycle className="text-yellow-500 text-2xl" />
          <div>
            <p className="text-sm font-semibold text-gray-700">{t("freeDel")}</p>
            <p className="text-xs text-gray-500">{t("min")}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaHeart className="text-yellow-500 text-2xl" />
          <div>
            <p className="text-sm font-semibold text-gray-700">{t("fresh")}</p>
            <p className="text-xs text-gray-500">{t("prod")}</p>
          </div>
        </div>
      </div>

      <Swiper
        style={{display:"flex", justifyContent:"center"}}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiper"
      >
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide11.src} alt='' /></SwiperSlide>
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide22.src} alt='' /></SwiperSlide>
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide33.src} alt='' /></SwiperSlide>
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide44.src} alt='' /></SwiperSlide>
      </Swiper>


      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl font-medium text-gray-800 mb-2">{t("restoran")}</h1>
            <p className="text-gray-600">
              {t("zone")}
            </p>
          </div>

          <div className="w-full md:w-auto flex">
            <div className="relative flex-grow md:w-80">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <span className="text-gray-400">📍</span>
              </div>
              <input
                type="text"
                placeholder={t("adres")}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded-r-lg transition-colors">
              {t("send")}
            </button>
          </div>
        </div>

        <div className="border-t border-blue-300 my-8"></div>

        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-3xl font-medium text-gray-800">{t("specialities")}</h2>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm transition-colors">
            {t("showAll")}
          </button>
        </div>

        <div className="relative flex justify-center gap-[50px]">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
            <span className="text-gray-500 text-xl">←</span>
          </button>

          <div className="flex overflow-x-auto gap-4 py-4 px-8 scrollbar-hide">
            <div className="flex flex-col items-center min-w-[100px]">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">○</span>
              </div>
              <span className="text-gray-800">Bagel</span>
            </div>

            <div className="flex flex-col items-center min-w-[100px]">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">≡</span>
              </div>
              <span className="text-gray-800">Burger</span>
            </div>

            <div className="flex flex-col items-center min-w-[100px]">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🍗</span>
              </div>
              <span className="text-gray-800">Chicken</span>
            </div>

            <div className="flex flex-col items-center min-w-[100px]">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🐟</span>
              </div>
              <span className="text-gray-800">Fish</span>
            </div>

            <div className="flex flex-col items-center min-w-[100px]">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🍟</span>
              </div>
              <span className="text-gray-800">Fish Chips</span>
            </div>

            <div className="flex flex-col items-center min-w-[100px]">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🥗</span>
              </div>
              <span className="text-gray-800">Salads</span>
            </div>

            <div className="flex flex-col items-center min-w-[100px]">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🍕</span>
              </div>
              <span className="text-gray-800">Pizza</span>
            </div>

            <div className="flex flex-col items-center min-w-[100px]">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🍝</span>
              </div>
              <span className="text-gray-800">Pasta</span>
            </div>
          </div>

          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
            <span className="text-gray-500 text-xl">→</span>
          </button>
        </div>
      </div>
      <section className='relative w-full h-[300px] overflow-hidden'>
        <Image
          src={kitchen}
          alt='Yellow Kitchen USP'
          fill
          style={{backgroundRepeat:"no-repeat"}}
          className='object-cover'
          priority
        />

        <div className='absolute inset-0 flex items-center justify-end pr-[300px]'>
          <div className='flex space-x-12 md:space-x-16 lg:space-x-24'>
            <div className='flex flex-col items-center'>
              <div className='w-20 h-20 rounded-full bg-yellow-300 border border-yellow-400 flex items-center justify-center mb-3'>
                <span className='text-3xl font-bold text-slate-700'>1</span>
              </div>
              <span className='text-slate-700 font-medium'>kitchen</span>
            </div>

            <div className='flex flex-col items-center'>
              <div className='w-20 h-20 rounded-full bg-yellow-300 border border-yellow-400 flex items-center justify-center mb-3'>
                <span className='text-3xl font-bold text-slate-700'>11</span>
              </div>
              <span className='text-slate-700 font-medium'>specialties</span>
            </div>

            <div className='flex flex-col items-center'>
              <div className='w-20 h-20 rounded-full bg-yellow-300 border border-yellow-400 flex items-center justify-center mb-3'>
                <span className='text-3xl font-bold text-slate-700'>11</span>
              </div>
              <span className='text-slate-700 font-medium'>restaurants</span>
            </div>

            <div className='flex flex-col items-center'>
              <div className='w-20 h-20 rounded-full bg-yellow-300 border border-yellow-400 flex items-center justify-center mb-3'>
                <span className='text-3xl font-bold text-slate-700'>1</span>
              </div>
              <span className='text-slate-700 font-medium'>
                transport costs
              </span>
            </div>
          </div>
        </div>
      </section>    
        <Image src={map} alt="map" width={1100} height={500} className="mx-auto" />





      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiper"
      >
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide1.src} alt='' /></SwiperSlide>
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide2.src} alt='' /></SwiperSlide>
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide3.src} alt='' /></SwiperSlide>
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide4.src} alt='' /></SwiperSlide>
      </Swiper>


      <footer className="bg-slate-700 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mb-8 md:mb-0">
              <div className="mb-4">
                <h2 className="text-xl font-bold">
                  <span className="text-yellow-400">yellow</span>kitchen
                </h2>
              </div>
              <div className="border-t border-slate-600 my-6 w-full"></div>
              <div className="flex space-x-2 mt-4">
                <a href="#" className="block">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="App Store"
                    className="h-10"
                    width={120}
                    height={100}
                  />
                </a>
                <a href="#" className="block">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Google Play"
                    className="h-10"
                    width={120}
                    height={100}
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">About us</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white">Concept</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Franchise</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Business</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Restaurant signup</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">For Investors</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Get help</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white">Read FAQs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Restaurants</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Specialities</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Sign up to deliver</a></li>
                <li>
                  <div className="flex items-center text-gray-300">
                    <span>English</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Contact us</h3>
              <p className="text-gray-300 mb-1">Yellow kitchen Paris 11</p>
              <p className="text-gray-300 mb-4">69 avenue de la République 75011 Paris</p>
              <p className="text-gray-300 mb-1">0800 111 126</p>
              <p className="text-gray-300">contact@yellowkitchens.com</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">Terms</a>
              <span className="text-gray-300 text-sm">© 2020 Yellow kitchen</span>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}
