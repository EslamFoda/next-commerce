import Button from "../../ui/Button";
const Ask = () => {
  return (
    <div>
      <h2 className='text-font-color font-semibold'>Have a question?</h2>
      <textarea
        className="w-full focus:bg-white focus:placeholder:text-white p-3 rounded-md h-24 mt-6 bg-[#f7f8fa] text-gray"
        placeholder="Your Message"
      ></textarea>
      <input
        className="w-full focus:bg-white focus:placeholder:text-white px-3  rounded-md h-10 mt-6 bg-[#f7f8fa] text-gray"
        placeholder="Your Name"
      />
      <input
        className="w-full focus:bg-white focus:placeholder:text-white px-3  rounded-md h-10 my-6 bg-[#f7f8fa] text-gray"
        placeholder="Your Email"
      />
      <input
        className="w-full focus:bg-white focus:placeholder:text-white px-3  rounded-md h-10 mb-6 bg-[#f7f8fa] text-gray"
        placeholder="Your Phone"
      />
      <Button height={40}>SEND MESSAGE</Button>
    </div>
  );
};

export default Ask;
