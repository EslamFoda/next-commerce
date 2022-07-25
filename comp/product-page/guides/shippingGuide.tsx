const ShippingGuide = () => {
  return (
    <>
      <h2 className="text-[#191919] font-semibold mb-2">SHIPPING</h2>
      <ul className="list-disc list-inside text-[#777777] text-sm leading-[22px]">
        <li>Complimentary ground shipping within 1 to 7 business days</li>
        <li>In-store collection available within 1 to 7 business days</li>
        <li>Next-day and Express delivery options also available</li>
        <li>
          Purchases are delivered in an orange box tied with a Bolduc ribbon,
          with the exception of certain items
        </li>
        <li>
          See the delivery FAQs for details on shipping methods, costs and
          delivery times
        </li>
      </ul>
      <h2 className="text-[#191919] font-semibold mb-2 mt-5">
        RETURNS AND EXCHANGES
      </h2>
      <ul className="list-disc list-inside text-[#777777] text-sm leading-[22px]">
        <li>Easy and complimentary, within 14 days</li>
        <li>See conditions and procedure in our return FAQs</li>
      </ul>
    </>
  );
};
export default ShippingGuide;
