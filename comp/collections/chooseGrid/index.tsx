import { FilterIcon } from "@heroicons/react/outline";
import { Grid2, Grid3, List } from "../../icons";
let gridLayout = [
  { icon: List, id: 0, layout: 1, active: false },
  { icon: Grid2, id: 1, layout: 2, active: false },
  { icon: Grid3, id: 2, layout: 3, active: true },
];
const ChooseGrid = ({
  type,
  typeAmount,
  amount,
  setIsOpen,
  isOpen,
  setGrid,
}) => {
  const handleChangeGrid = (grid, i) => {
    setGrid(grid.layout);
    const updateActive = gridLayout.map((obj) =>
      obj.id === i ? { ...obj, active: true } : { ...obj, active: false }
    );
    gridLayout = updateActive;
  };
  return (
    <>
      <h1 className="text-2xl block text-center mb-5 lg:hidden">
        {type} ({typeAmount?.length || amount?.length || 0})
      </h1>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl hidden lg:block">
          {type} ({typeAmount?.length || amount?.length || 0})
        </h1>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex  lg:hidden items-center gap-2 hover:text-font-color cursor-pointer transition-colors text-primary"
        >
          <FilterIcon className="w-4 h-4" />
          <span>FILTER</span>
        </div>

        <div className="flex items-center gap-2">
          {gridLayout.map((grid, i) => {
            return (
              <div
                key={grid.id}
                onClick={() => {
                  handleChangeGrid(grid, i);
                }}
                className={`cursor-pointer ${grid.active ? "active" : ""}`}
              >
                {grid.icon()}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChooseGrid;
