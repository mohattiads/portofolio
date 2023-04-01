import React from "react";

const Contact = () => {
  return (
    <div id="contact" className=" max-w-[1040px] m-auto sm: p-20 py-16  max-sm:p-4">
      <h1 className="py-4  text-4xl font-bold text-center text-Ipurple hover:text-5xl transition-all ease-in-out  duration-200 hover:text-purple-400 transition-all duration-300 ease-in-out ">
        Contact
      </h1>
      <form action="https://getform.io/f/ecb25794-c57c-49dc-9ab4-2ae61f3b410a" method="POST">
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className=" border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input
              className=" border-2 rounded-lg flex p-3 border-gray-300"
              type="text"
              name="phone"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className=" border-2 rounded-lg flex p-3 flex border-gray-300"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className=" border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
            />
          </div>
          
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea  className=" border-2 flex w-full  rounded-lg   border-gray-300" name="message" rows="10" m ></textarea>
          </div>
          <button className="mb-20 bg-Ipurple text-gray-100  mt-4 w-full p-4 rounded-lg hover:text-2xl transition-all ease-out  duration-300 "> Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
