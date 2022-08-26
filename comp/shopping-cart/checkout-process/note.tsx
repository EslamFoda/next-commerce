function Note() {
  return (
    <div className="border-[1px] border-solid border-gray-border lg:pt-[32px] lg:p-[35px] sm:pt-[32px] pt-[22px] p-[25px]  sm:p-[35px]">
      <h2 className="text-xl font-medium">NOTE</h2>
      <p className="my-4 text-sm font-normal text-gray">
        Add special instructions for your order...
      </p>
      <textarea className="w-full p-3 mb-5 bg-light-gray rounded-md focus:placeholder:text-white px-3 outline-none focus:bg-white border border-light-gray border-solid focus:border-primary lg:h-80 sm:h-80 h-60" />
    </div>
  );
}

export default Note;
