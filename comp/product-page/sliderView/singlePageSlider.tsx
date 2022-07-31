import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
// import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import ProductSlider from "../../ui/ProductSlider";
function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}

const SinglePageSlider = ({ product }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const [thumbnailRef] = useKeenSlider(
    {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 3, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: "auto", spacing: 10 },
        },
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      //   slides: {
      //     perView: 4,
      //     spacing: 10,
      //   },
    },

    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      {" "}
      {/* <div ref={sliderRef} className={`keen-slider ${loaded ? "opacity-100" : "opacity-0"}`}>
        {product.prodImages.map((image) => {
          return (
            <div
              key={image.id}
              className="keen-slider__slide max-w-[500px] max-h-[500px] relative"
            >
              <InnerImageZoom className='max-w-[400px]' hideHint={true} src={image.url} />
            </div>
          );
        })}
        {loaded && instanceRef.current && (
          <>
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
          </>
        )}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-3">
        {product.prodImages.map((image) => {
          return (
            <div
              key={image.id}
              className="keen-slider__slide  relative h-[140px]"
            >
              <Image src={image.url} layout="fill" objectFit="cover" />
            </div>
          );
        })}
        {loaded && instanceRef.current && (
          <>
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
          </>
        )}
      </div> */}
      <div className={"flex items-center justify-center overflow-x-hidden"}>
        <ProductSlider key={product.id}>
          {product.prodImages.map((image, i) => (
            <div key={image.url} className={"text-center h-full relative"}>
              <Image
                className={"w-full h-full max-h-full object-cover"}
                src={image.url!}
                alt={"Product Image"}
                width={620}
                height={550}
                priority={i === 0}
                quality="85"
              />
            </div>
          ))}
        </ProductSlider>
      </div>
    </>
  );
};

export default SinglePageSlider;

// function Arrow(props) {
//   const disabeld = props.disabled ? " arrow--disabled" : "";
//   return (
//     <svg
//       onClick={props.onClick}
//       className={`arrow ${
//         props.left ? "arrow--left" : "arrow--right"
//       } ${disabeld}`}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       {props.left && (
//         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//       )}
//       {!props.left && (
//         <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//       )}
//     </svg>
//   );
// }
