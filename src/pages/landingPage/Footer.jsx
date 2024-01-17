import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full mt-8 place-items-center  bg-blue-800" >
    <div className="text-4xl text-white  flex items-center justify-center">ClassRoomConnect</div>
      <div className=" flex justify-center mx-5 text-white " style={{padding:"1% 12.5%"}} >
        <div className="flex flex-col md:flex-row lg:flex-row justify-center">
          <div className="mx-3 mt-3">
            <span className="text-gray-300">Contact</span>
            <div className="flex flex-col">
              <p>Email : </p>
              <p>devdynamos@proctpro.com</p>
            </div>
            <p>Please call : 8745825488</p>
            <p>for any query</p>
            <p>Available 24-7 </p>
          </div>
          <div className="m-3">
            <span className="text-gray-300">Others</span>
            <p>Resources</p>
            <p>Help & Support</p>
            <p>Rules & Regulations</p>
            <p>Products</p>
            <p>TeamTestimonals</p>
            <p></p>
          </div>
          <div className="m-3">
            <span className="text-gray-300">About</span>
            <p>
              Proctpro is an advanced platform for proctoring exams . It is
              developed in such a way that it can be integrated with different
              platforms
            </p>
          </div>

        </div>
      </div>
      <div
        className="flex justify-center items-center" style={{padding:"0.5% 12.5%"}}
      >
        <div className="flex gap-2">
        <span className="text-white">&copy; 2023 PROCTORPRO. All rights reserved</span>
            <div className="text-white text-4xl"><AiOutlineYoutube /></div>
            <div className="text-white text-4xl"><AiFillTwitterCircle /></div>
            <div className="text-white text-4xl"><FaInstagram /></div>
            <div className="text-white text-4xl"><RiFacebookCircleLine /></div>
      </div>
        </div>
    </div>
  );
}

export default Footer;
