function Note() {
  return (
    <div className="border-[1px] border-solid border-gray-border pt-[32px] pr-[35px] pb-[35px] pl-[35px]">
      <h2 className="text-xl font-medium">NOTE</h2>
      <p className="my-4 text-sm font-normal text-gray">
        Add special instructions for your order...
      </p>
      <textarea className="w-full p-3 mb-5 bg-light-gray rounded-md focus:placeholder:text-white px-3 outline-none focus:bg-white border border-light-gray border-solid focus:border-primary h-80" />
    </div>
  );
}

export default Note;
