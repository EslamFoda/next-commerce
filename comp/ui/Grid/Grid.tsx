import cn from "clsx";
import { FC, ReactNode, Component } from "react";
import s from "./Grid.module.css";

interface GridProps {
  className?: string;
  children?: ReactNode[] | Component[] | any[] | any;
  layout?: "A" | "B" | "C" | "D" | "E" | "normal" | 1 | 2 | 3 | 4 ;
  el?: HTMLElement;
  style?: any;
}

const Grid: FC<GridProps> = ({
  className,
  layout = "A",
  children,
  el = "div",
  style = {},
  ...rest
}) => {
  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any;
  const rootClassName = cn(
    s.root,
    {
      [s.layoutA]: layout === "A",
      [s.layoutB]: layout === "B",
      [s.layoutC]: layout === "C",
      [s.layoutD]: layout === "D",
      [s.layoutE]: layout === "E",
      [s.normal]: layout === "normal",
      [s.oneCol]: layout === 1,
      [s.twoCol]: layout === 2,
      [s.threeCol]: layout === 3,
      [s.fourCol]: layout === 4,
    },
    className
  );
  return (
    <Component {...rest} style={style} className={rootClassName}>
      {children}
    </Component>
  );
};

export default Grid;
