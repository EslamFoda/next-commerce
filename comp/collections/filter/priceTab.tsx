import MyDisclosure from "../../ui/disclosure";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { MinusIcon } from "@heroicons/react/solid";
import Button from "../../ui/Button";
const PriceTab = ({
  setFilterPrice,
  setIsOpen,
  filterPrice,
  setLowerBound,
  setUpperBound,
  upperBound,
  lowerBound,
}) => {
  // const [value, setValue] = useState([0, 700]);

  const onLowerBoundChange = (e) => {
    setLowerBound(+e.target.value);
  };

  const onUpperBoundChange = (e) => {
    setUpperBound(+e.target.value);
  };

  const onSliderChange = (value) => {
    setLowerBound(value[0]);
    setUpperBound(value[1]);
    // setValue(value);
    setFilterPrice(value);
  };

  const handleApply = () => {
    const lowerAndUpper = [lowerBound, upperBound];
    // setValue(lowerAndUpper);
    setFilterPrice(lowerAndUpper);
    setIsOpen(false);
  };

  return (
    <MyDisclosure title="PRICE">
      <div className="flex items-center gap-3 w-full mb-2">
        <input
          min={0}
          max={700}
          type="number"
          className="w-full px-4  h-10 bg-light-gray hover:bg-white outline-none focus:bg-white focus:border-primary-hover hover:border hover:border-solid border border-solid border-white hover:border-primary-hover flex-1 rounded-md"
          value={lowerBound}
          onChange={onLowerBoundChange}
        />

        <MinusIcon className="text-black  h-4 w-4" />

        <input
          type="number"
          className="w-full px-4  h-10 bg-light-gray hover:bg-white outline-none focus:bg-white focus:border-primary-hover hover:border hover:border-solid border border-solid border-white hover:border-primary-hover flex-1 rounded-md"
          min={0}
          max={700}
          value={upperBound}
          onChange={onUpperBoundChange}
        />
      </div>
      <div className="w-full text-right">
        <Button
          height={40}
          className="w-8 h-full mb-2"
          variant="primary"
          onClick={handleApply}
        >
          Apply
        </Button>
      </div>

      <Slider
        range
        min={0}
        max={700}
        allowCross={false}
        value={filterPrice}
        onChange={onSliderChange}
      />
    </MyDisclosure>
  );
};

export default PriceTab;
