import KeenSlider from "../../ui/keenSlider";

const CustomProducts = ({ custom }) => {
  return (
    <>
      <KeenSlider type='vendor' data={custom} title="VENDOR PRODUCTS" />
    </>
  );
};
export default CustomProducts;
