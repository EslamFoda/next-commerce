const ContactUs = ({ footerTitle = false }) => {
  return (
    <div className="flex flex-col gap-y-2">
      {footerTitle ? <h5 className="mb-2 font-semibold">CONTACT US</h5> : null}
      <span className="text-font-color text-sm">
        ADDRESS:{" "}
        <span className="text-gray">
          7895 Piermont Dr NE Albuquerque, NM 198866, United States of America
        </span>
      </span>
      <span className="text-font-color text-sm">
        PHONE: <span className="text-gray">+566 4774 9930; +566 4774 9940</span>
      </span>
      <span className="text-font-color text-sm">
        HOURS: <span className="text-gray">all week from 9 am to 9 pm</span>
      </span>
      <span className="text-font-color text-sm">
        E-MAIL: <span className="text-primary ">info@mydomain.com</span>
      </span>
    </div>
  );
};

export default ContactUs;
