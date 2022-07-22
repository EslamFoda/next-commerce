import {
  ShippingIcon,
  ReturnIcon,
  SupportIcon,
} from "../icons";
import Grid from "../ui/Grid";

const serviceData = [
  {
    icon: <SupportIcon/>,
    title: "SUPPORT 24/7",
    subTitle: "Contact us 24 hours a day, 7 days a week",
  },
  {
    icon: <ReturnIcon/>,
    title: "30 DAYS RETURN",
    subTitle: "Simply return it within 24 days for an exchange.",
  },
  {
    icon: <ShippingIcon/>,
    title: "FREE SHIPPING",
    subTitle: "Free shipping on all US order or order above $99",
  },
];
const Services = () => {
  return (
    <Grid layout='normal'  >
      {serviceData.map((service,i) => {
        return (
          <div key={i} className="flex gap-6 lg:self-center lg:justify-self-center">
            <div>
              {service.icon}
            </div>
            <div>
              <h4 className='text-base font-medium hover:text-blue-600 cursor-pointer'>{service.title}</h4>
              <span className='text-sm text-gray-500'>{service.subTitle}</span>
            </div>
          </div>
        );
      })}
    </Grid>
  );
};

export default Services;
