import React, { useState } from "react";
import ProdCard from "../../common/prodCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const MutationPlugin = (slider) => {
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      slider.update();
    });
  });
  const config = { childList: true };

  slider.on("created", () => {
    observer.observe(slider.container, config);
  });
  slider.on("destroyed", () => {
    observer.disconnect();
  });
};
const RecentlyView = ({ seenProducts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 1,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 4, spacing: 10 },
        },
      },
    },
    [MutationPlugin]
  );
  return (
    <>
      <div>
        {" "}
        {seenProducts?.length ? (
          <div className="p-4 relative">
            <div className="flex items-center justify-between my-9">
              <h1>related -rod</h1>
              <div>
                {loaded && instanceRef.current && (
                  <div className="flex items-center gap-4">
                    <Arrow
                      left
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                      }
                      disabled={currentSlide === 0}
                    />

                    <Arrow
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                      }
                      disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                      }
                    />
                  </div>
                )}
              </div>
            </div>
            <div
              ref={sliderRef}
              style={{ position: "unset" }}
              className="keen-slider"
            >
              {seenProducts?.map((prod, i) => {
                return (
                  <div key={i} className="keen-slider__slide">
                    <ProdCard
                      title={prod.title}
                      price={prod.price}
                      image={prod?.image?.url}
                      vendor={prod.vendor}
                      rate={prod.rate}
                      prodImages={prod?.prodImages}
                      slug={prod.slug}
                      type={prod.type}
                      prod={prod}
                      id={prod.id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default RecentlyView;
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow2 ${
        props.left ? "arrow--left2" : "arrow--right2"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
