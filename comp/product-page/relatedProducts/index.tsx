import KeenSlider from "../../ui/keenSlider";

const RelatedProducts = ({ related }) => {
  return (
    <div>
      <KeenSlider type='related' data={related} title="RELATED PRODUCTS" />
    </div>
  );
};
export default RelatedProducts;
