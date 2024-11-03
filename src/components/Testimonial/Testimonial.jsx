import React from "react";
import Testimonialslider from "./Testimonialslider.jsx";
import blob from "../../assets/blobs.png"
import blobR from "../../assets/blobR.png"


function Testimonial() {
<<<<<<< HEAD
    
    return(
        <div className="glass-morphic lg:m-20 p-4 lg:p-12 m-4 shadow-2xl rounded-2xl my-16">
            <div className="flex flex-row justify-start items-center">
                <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
                <h1 className="text-[25px] ml-[-25px] font-bold">Testimonials</h1>
            </div>
            <div className="mt-12">
                <h1 className="text-[35px] font-bold ">What Our Mentors Say</h1>
            </div>
            <div className="justify-center mt-16 mb-16 md:mx-60 shadow-2xl rounded-lg">
                    <Testimonialslider/>
=======

    return (
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div className="glass-morphic lg:m-20 p-4 lg:p-12 m-4 shadow-2xl rounded-2xl my-16">
                <div className="flex flex-row justify-start items-center">
                    <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
                    <h1 className="text-[25px] ml-[-25px] font-bold">Testimonials</h1>
                </div>
                <div className="mt-6 sm:mt-12">
                    <h1 className="text-[25px] sm:text-[35px] font-bold ">What Our Mentors Say</h1>
                </div>
                <div className="justify-center mt-4 mb-4 md:mx-60 shadow-2xl rounded-lg">
                    <Testimonialslider />
                </div>
>>>>>>> a4eac035d9b46f2ce9460c7950abc255481a7b0a
            </div>
        </div>
    )

}

export default Testimonial
