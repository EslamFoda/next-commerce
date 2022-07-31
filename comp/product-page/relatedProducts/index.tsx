import KeenSlider from "../../ui/keenSlider";

const RelatedProducts = ({ related }) => {
  return (
    <div>
      <KeenSlider data={related} title="RELATED PRODUCTS" />
    </div>
  );
};
export default RelatedProducts;
