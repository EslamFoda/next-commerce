import React from "react";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
interface Props {
  size?: 16 | 22;
  rate: number;
}
const Rates: React.FC<Props> = ({ rate, size = 16 }) => {
  return (
    <Rate
      value={rate}
      style={{ fontSize: size }}
      count={5}
      allowClear={false}
      disabled={true}
    />
  );
};
export default Rates;
