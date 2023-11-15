import SectionTitle from "../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


import '@smastrom/react-rating/style.css'






const Testimonials = () => {

    const [reviews, setReviews] = useState([])


    useEffect(() => {

        fetch("Reviews.json")
            .then(res => res.json())
            .then(data => {

                setReviews(data)
            })

    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={"---What Our Clients Say---"}
                heading={"TESTIMONIALS"}


            >

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                {
                    reviews.map(review => <SwiperSlide

                        key={review._id}
                        rev

                    >

                        <div className="m-24 p-4 flex flex-col items-center mx-24 py-8">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <p>{review.details}</p>
                            <h3 className=" text-3xl text-orange-300">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>


        </section>
    );
};

export default Testimonials;