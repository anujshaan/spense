import React, { useState } from "react";
import {
  HiOutlineCalendar,
  HiOutlineChevronDown,
  HiOutlineMinusCircle,
  HiOutlineUserGroup,
  HiPlusCircle,
} from "react-icons/hi";

import Calendar from "react-calendar";
import { dateFormatter } from "../utils/dateFormater";

const BookingWrapper = () => {
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isMembers, setIsMembers] = useState(false);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [roomsCount, setRoomCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleDateChange = (value, type) => {
    if (type === "checkIn") {
      setCheckIn(dateFormatter(value));
      setIsCheckIn(false);
      console.log("hello");
    }
    if (type === "checkOut") {
      console.log("first");
      setCheckOut(dateFormatter(value));
      setIsCheckOut(false);
    }
  };

  return (
    <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] flex w-full justify-center">
      <div className="relative">
        <div
          className={`inputButton py-4 rounded-tl-lg rounded-bl-lg ${isCheckIn ? 'w-96' : ''} transition ease-linear delay-150`}
          onClick={() => {
            isCheckIn ? setIsCheckIn(false) : setIsCheckIn(true);
            setIsCheckOut(false);
            setIsMembers(false)
          }}
        >
          {checkIn ? (
            <>
              <HiOutlineCalendar className="w-5 h-5 text-gray-600" />
              <p>{checkIn}</p>
              <HiOutlineChevronDown className="text-sm" />
            </>
          ) : (
            <>
              <HiOutlineCalendar className="w-5 h-5 text-gray-600" />
              <p>Check in</p>
              <HiOutlineChevronDown className="text-sm" />
            </>
          )}
        </div>
        <div className={`${isCheckIn ? 'w-96' : ''} absolute top-12 left-0`}>
          {isCheckIn && (
            <div className=" bg-white p-4 rounded-xl w-96 ">
              <Calendar
                onChange={(value) => handleDateChange(value, "checkIn")}
              />
            </div>
          )}
        </div>
      </div>
      <div className="relative">
        <div
          className={`inputButton h-14 border ${isCheckOut ? 'w-96' : ''}`}
          onClick={() => {
            isCheckOut ? setIsCheckOut(false) : setIsCheckOut(true);
            setIsCheckIn(false);
            setIsMembers(false)
          }}
        >
          {checkOut ? (
            <>
              <HiOutlineCalendar className="w-5 h-5 text-gray-600" />
              <p>{checkOut}</p>
              <HiOutlineChevronDown className="text-sm" />
            </>
          ) : (
            <>
              <HiOutlineCalendar className="w-5 h-5 text-gray-600" />
              <p>Check out</p>
              <HiOutlineChevronDown className="text-sm" />
            </>
          )}
          </div>
          <div className="absolute top-12 left-0">
            {isCheckOut && (
              <div className=" bg-white p-4 rounded-xl w-96 ">
                <Calendar
                  onChange={(value) => handleDateChange(value, "checkOut")}
                />
              </div>
            )}
          </div>
      </div>
      <div className="relative">
        <div
          className="inputButton h-14 rounded-tr-lg rounded-br-lg"
          onClick={() => {isMembers ? setIsMembers(false) : setIsMembers(true); setIsCheckIn(false); setIsCheckOut(false)}}
        >
          {roomsCount ? (
            <di className="flex items-center space-x-4 w-64">
              <p>{adultCount} adults</p>
              <p>{childrenCount} children</p>
              <p>{roomsCount} rooms</p>
            </di>
          ) : (
            <div className="w-64 flex items-center justify-around">
              <HiOutlineUserGroup className="w-5 h-5 text-gray-600" />
              <p>select members</p>
              <HiOutlineChevronDown className="text-sm" />
            </div>
          )}
        </div>
        <div className="absolute top-10 left-0 w-full ">
          {isMembers && (
            <div className="bg-white p-5 w-full">
              <p>Maximum 8 Slots per room</p>
              <div className="flex items-center justify-between my-2">
                <div>
                  <p>Rooms</p>
                  <p className="text-gray-500 text-xs font-thin">
                    (Max: 8 total guest/room)
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <HiOutlineMinusCircle
                    className="w-5 h-5 text-gray-400 cursor-pointer"
                    onClick={() => setRoomCount(roomsCount-1)}
                  />
                  <p>{roomsCount}</p>
                  <HiPlusCircle
                    className="w-5 h-5 text-gray-400 cursor-pointer"
                    onClick={() => setRoomCount(roomsCount+1)}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center my-2">
                <div>
                  <p>Adults</p>
                  <p className="text-gray-500 text-xs font-thin">
                    (Max: 8 total guest/room)
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <HiOutlineMinusCircle
                    className="w-5 h-5 text-gray-400 cursor-pointer"
                    onClick={() => setAdultCount(adultCount-1)}
                  />
                  <p>{adultCount}</p>
                  <HiPlusCircle
                    className="w-5 h-5 text-gray-400 cursor-pointer"
                    onClick={() => setAdultCount(adultCount+1)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between my-2">
                <div>
                  <p>Children</p>
                  <p className="text-gray-500 text-xs font-thin">
                    (Max: 8 total guest/room)
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <HiOutlineMinusCircle
                    className="w-5 h-5 text-gray-400 cursor-pointer"
                    onClick={() => setChildrenCount(childrenCount-1)}
                  />
                  <p>{childrenCount}</p>
                  <HiPlusCircle
                    className="w-5 h-5 text-gray-400 cursor-pointer"
                    onClick={() => setChildrenCount(childrenCount+1)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center cursor-pointer mt-4">
                <button className="border-2 text-blue-700 rounded-lg px-12 py-1 border-blue-700"
                  onClick={()=> setIsMembers(false)}>
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="inputButton bg-yellow-500 rounded-lg ml-4 text-gray-600 hover:text-black ">
        <p>Check Avalability</p>
      </div>
    </div>
  );
};

export default BookingWrapper;
