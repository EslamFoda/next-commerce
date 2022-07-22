import Button from '../ui/Button'
const Slide = ({slide,currentSlide,i}) => {
    const {image,title,subTitle,extraSubTitle,desc} = slide
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      key={i}
      className="keen-slider__slide flex justify-center items-center bg-cover"
    >
      <div
        className={
          currentSlide === i ? "slide-in-blurred-bottom text-center" : "hidden"
        }
      >
        <h3
          style={{
            color: currentSlide === 0 ? "var(--primary)" : "white",
          }}
          className={
            currentSlide === i ? "tracking-in-expand text-4xl" : "hidden"
          }
        >
          {title}
        </h3>
        <h2
          style={{ color: currentSlide === 0 ? null : "white" }}
          className="text-6xl mt-3"
        >
          {subTitle}
        </h2>
        <h2
          style={{ color: currentSlide === 0 ?null : "white" }}
          className="text-6xl mb-8"
        >
          {extraSubTitle}
        </h2>
        <p>{desc}</p>
        <Button
          className="mt-6"
          variant={currentSlide === 0 ? "primary" : "ghost"}
        >
          SHOP NOW!
        </Button>
      </div>
    </div>
  );
};

export default Slide;
