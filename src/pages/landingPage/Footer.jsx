import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full mt-8 place-items-center bg-[#245DE1]  bg-gradient-to-b to-white from-245DE1 py-4 sm:px-[1%] md:px-[3%] lg:px-[6%] xl:px-[12.5%]" >
    <div className="p-4 w-full text-[24px] sm:text-2xl md:text-4xl lg:text-[40px] xl:text-[50px] text-white flex items-center justify-center">Connect</div>
      <div className=" w-full flex justify-center text-white py-2 " >
        <div className="w-full flex flex-col md:flex-row text-center md:text-left lg:flex-row justify-center">

          <div className="my-3 md:my-0 w-full md:w-[32%]">
            <span className="text-gray-300">Contact</span>
            <div className="flex flex-col">
              <p>Email : </p>
              <p>devdynamos@proctpro.com</p>
            </div>
            <p>Please call : 8745825488</p>
            <p>for any query</p>
            <p>Available 24-7 </p>
          </div>


          <div className="my-3 md:my-0 w-full md:w-[32%]">
            <span className="text-gray-300">Others</span>
            <p>Resources</p>
            <p>Help & Support</p>
            <p>Rules & Regulations</p>
            <p>Products</p>
            <p>TeamTestimonals</p>
            <p></p>
          </div>


          <div className="my-3 md:my-0 w-full md:w-[32%]">
            <span className="text-gray-300">About</span>
            <p className="line-clamp-3 sm:line-clamp-none">
              Proctpro is an advanced platform for proctoring exams . It is
              developed in such a way that it can be integrated with different
              platforms
            </p>
          </div>

        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-rol justify-between items-center py-1" >
        <span className="text-white">&copy; 2023 PROCTORPRO. All rights reserved</span>
        <div className="flex gap-1 md:gap-5 lg:gap-10">
          <div className="text-white text-4xl cursor-pointer"><AiOutlineYoutube /></div>
          <div className="text-white text-4xl cursor-pointer"><AiFillTwitterCircle /></div>
          <div className="text-white text-4xl cursor-pointer"><FaInstagram /></div>
          <div className="text-white text-4xl cursor-pointer"><RiFacebookCircleLine /></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
