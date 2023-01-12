import React from "react";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";

const HotelDetails = () => {
  return (
    <div className="m-16 pb-24">
      <div className="px-8 pb-6 border-b-4 border-gray-100 mb-6">
        <div className="grid grid-cols-3 gap-2">
          <div className="row-span-2 relative ">
            <div className="absolute z-10 m-4 bg-white w-[200px] h-[200px] rounded-full bottom-0 left-0">
              <div className="absolute top-[35%] left-[35%] translate-x-[-35%] translate-y-[-35%] bg-green-600 w-[70px] h-[70px] rounded-full flex items-center justify-center text-4xl font-bold text-white">
                V
              </div>
              <div className="absolute top-[65%] left-[65%] translate-x-[-65%] translate-y-[-65%] border-4 border-white bg-yellow-400 w-[70px] h-[70px] rounded-full flex items-center justify-center text-4xl font-bold">
                R
              </div>
            </div>
            <img src={pic3} alt="" className="hotelImg" />
          </div>
          <div className="hotelImgWrapper">
            <img src={pic1} alt="" className="hotelImg" />
          </div>
          <div className="hotelImgWrapper">
            <img src={pic2} alt="" className="hotelImg" />
          </div>
          <div className="hotelImgWrapper">
            <img src={pic4} alt="" className="hotelImg" />
          </div>
          <div className="hotelImgWrapper">
            <img src={pic5} alt="" className="hotelImg" />
          </div>
        </div>
        <div className="py-6">
          <div className="flex justify-between">
            <div className="">
              <h2 className="text-xl font-bold">Hotel Vishal @ Airport</h2>
              <div className="flex p-2 font-medium w-2/4">
                <p className="w-3/4">
                  104/2/2, National Highway 8, Mahipalpur, New Delhi 110037, New
                  Delhi, India
                </p>
                <a href="https://maps.google.com/maps?ll=28.542646,77.11866&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=12925088257093408635" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  View Map
                </a>
              </div>
              <p className="font-semibold">+91-7654564545, 8107344682</p>
            </div>
            <div className="">
              {/* map */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9041703249754!2d77.11651131500695!3d28.54259998245336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x649a6aa4a6f459b!2zMjjCsDMyJzMzLjQiTiA3N8KwMDcnMDcuMyJF!5e0!3m2!1sen!2sin!4v1673542308962!5m2!1sen!2sin" 
                width="300" 
                height="150" 
                style={{border:'0'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <ul className="flex space-x-4 my-2 font-semibold">
            <li className="services">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <p>Free Parking</p>
            </li>
            <li className="services">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <p>Conference Room</p>
            </li>
            <li className="services">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <p>ATM</p>
            </li>
            <li className="services">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <p>Conference Room</p>
            </li>
            <li className="services">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <p>Conference Room</p>
            </li>
          </ul>
          <p className="mt-4">
            Located in New Delhi ,5.5 km from Rashtrapati bhawan,Hotel Vishal
            @Airport provides accomodation with a restaurant,free private
            parking and a fitness centre.This 3 star hotel offers an ATM,a
            conseirge service and free wifi.The accomodation features 24-hour
            front-desk,room service and currency exchange for guests.
          </p>
        </div>
        <div className="px-8 ">
          <h3 className="font-semibold">Property Rules :</h3>
          <h4 className="mb-2">Check-in : 12 AM Check-out : 12 PM</h4>
          <div className="flex">
            <ul className="list-disc ml-8">
              <li>Guest with fever are not allowed.</li>
              <li>Guest from containment zones are not allowed.</li>
              <li>GUest below 18 are not allowed at the property.</li>
              <li>PAN Card and Non-Govt ID are not accespted as proof(s).</li>
              <li>
                Aadhar,Driving License and Govt ID are accepted as ID proof(s).
              </li>
              <li>Property staff is trained on hygiene guideline.</li>
              <li>Pets are not allowed.</li>
              <li>Outside food is not allowed.</li>
              <li>Smoking within the premises is not allowed.</li>
              <li>Does not allow private parties and events.</li>
              <li>
                Quarrantine protocols are being followed as per local government
                authorities.
              </li>
            </ul>
            <ul className="list-disc ml-4">
              <li>Pets are not allowed.</li>
              <li>Outside food is not allowed.</li>
              <li>Smoking within the premises is not allowed.</li>
              <li>Does not allow private parties and events.</li>
              <li>
                Quarrantine protocols are being followed as per local government
                authorities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
