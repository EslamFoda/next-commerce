import cn from "clsx";
import { FC, ReactNode, Component } from "react";
import s from "./Grid.module.css";

interface GridProps {
  className?: string;
  children?: ReactNode[] | Component[] | any[] | any;
  layout?: "A" | "B" | "C" | "D" | "normal";
}

const Grid: FC<GridProps> = ({ className, layout = "A", children }) => {
  const rootClassName = cn(
    s.root,
    {
      [s.layoutA]: layout === "A",
      [s.layoutB]: layout === "B",
      [s.layoutC]: layout === "C",
      [s.layoutD]: layout === "D",
      [s.normal]: layout === "normal",
    },
    className
  );
  return <div className={rootClassName}>{children}</div>;
};

export default Grid;
