import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slidImgage1 from '../../../assets/home/slide1.jpg'
import slidImgage2 from '../../../assets/home/slide2.jpg'
import slidImgage3 from '../../../assets/home/slide3.jpg'
import slidImgage4 from '../../../assets/home/slide4.jpg'
import slidImgage5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../SectionTitle/SectionTitle';



const Category = () => {


    return (

        <div>
            <section>

                <SectionTitle
                subHeading = {'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
                >
              
                </SectionTitle>
                <div className='max-w-screen-xl mx-auto'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mb-24 mt-32"
                    >
                        <SwiperSlide><img src={slidImgage1} alt="" />
                            <h2 className='text-4xl uppercase text-center -mt-16 font-semibold text-[#FFFFFF]'>salads</h2>
                        </SwiperSlide>

                        <SwiperSlide><img src={slidImgage2} alt="" />
                            <h2 className='text-4xl uppercase text-center -mt-16 font-semibold text-[#FFFFFF]'>pizzas</h2>
                        </SwiperSlide>

                        <SwiperSlide><img src={slidImgage3} alt="" />
                            <h2 className='text-4xl uppercase text-center -mt-16 font-semibold text-[#FFFFFF]'>Soups </h2>
                        </SwiperSlide>

                        <SwiperSlide><img src={slidImgage4} alt="" />
                            <h2 className='text-4xl uppercase text-center -mt-16 font-semibold text-[#FFFFFF]'>desserts</h2>
                        </SwiperSlide>

                        <SwiperSlide><img src={slidImgage5} alt="" />
                            <h2 className='text-4xl uppercase text-center -mt-16 font-semibold text-[#FFFFFF]'>salads</h2>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </section>



        </div>
    );
};

export default Category;