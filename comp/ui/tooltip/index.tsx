import * as React from "react";
import { useLayer, useHover, Arrow } from "react-laag";
import cn from "clsx";

interface Props {
  placement?:
    | "top-center"
    | "top-end"
    | "top-start"
    | "bottom-center"
    | "bottom-end"
    | "bottom-start"
    | "center"
    | "left-center"
    | "left-end"
    | "left-start"
    | "right-center"
    | "right-end"
    | "right-start";
  children: any;
  text: any;
  className?: string;
}
const Tooltip: React.FC<Props> = ({
  children,
  text,
  placement = "top-center",
  className,
}) => {
  // We use `useHover()` to determine whether we should show the tooltip.
  // Notice how we're configuring a small delay on enter / leave.
  const [isOver, hoverProps] = useHover({ delayEnter: 100, delayLeave: 300 });

  // Tell `useLayer()` how we would like to position our tooltip
  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    placement: placement,
    triggerOffset: 8, // small gap between wrapped content and the tooltip
  });

  // when children equals text (string | number), we need to wrap it in an
  // extra span-element in order to attach props
  let trigger;
  if (isReactText(children)) {
    trigger = (
      <span
        className="tooltip-text-wrapper z-50"
        {...triggerProps}
        {...hoverProps}
      >
        {children}
      </span>
    );
  } else {
    // In case of an react-element, we need to clone it in order to attach our own props
    trigger = React.cloneElement(children, {
      ...triggerProps,
      ...hoverProps,
    });
  }

  const rootClassName = cn(
    "tooltip-box text-xs bg-white shadow-md rounded-sm z-50 text-black px-2 py-[3px]",
    className
  );

  return (
    <>
      {trigger}
      {renderLayer(
        <>
          {isOver && (
            <div className={rootClassName} {...layerProps}>
              {text}
              <Arrow
                {...arrowProps}
                backgroundColor={"white"}
                borderColor={"white"}
                borderWidth={2}
                size={6}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Tooltip;

function isReactText(children) {
  return ["string", "number"].includes(typeof children);
}
