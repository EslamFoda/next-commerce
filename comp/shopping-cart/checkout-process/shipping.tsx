import Button from "../../ui/Button";

const Shipping = () => {
  return (
    <div className="border-[1px] self-start border-solid border-gray-border pt-[32px] pr-[35px] pb-[35px] pl-[35px]">
      <h2 className="text-xl font-medium">ESTIMATE SHIPPING AND TAX</h2>
      <p className="my-4 text-sm font-normal text-gray">
        Enter your destination to get a shipping estimate
      </p>
      <label className="block text-font-color text-sm font-semibold mb-1">
        COUNTRY *
      </label>
      <select
        className="block w-full mb-5 p-3 rounded-md border border-light-gray border-solid bg-light-gray active:bg-white focus:bg-white text-gray focus:border-primary"
        name="cars"
        id="cars"
      >
        <option value="Afghanistan">Afghanistan</option>
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="Andora">Andora</option>
        <option value="Angola">Angola</option>
        <option value="Argentina">Argentina</option>
        <option value="Armenia">Armenia</option>
      </select>

      <label className="block text-font-color text-sm font-semibold mb-1">
        ZIP/POSTAL CODE
      </label>
      <input
        placeholder="ZIP/POSTAL CODE"
        className="w-full p-3 mb-5 bg-light-gray rounded-md focus:placeholder:text-white px-3 outline-none focus:bg-white border border-light-gray border-solid focus:border-primary"
      />
      <Button variant="outline" full>
        calculate shipping
      </Button>
    </div>
  );
};

export default Shipping;
