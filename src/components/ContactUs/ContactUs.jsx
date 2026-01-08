import React from "react";
import SectionHeading from "../ui/SectionHeading";
import LocationIcon from "../../assets/icons/location.png";
import Group2Copy2 from "../../assets/Group-2-Copy-2.png";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <section className="">
      <div className="px-20 py-12 relative overflow-hidden">
        <figure className="absolute top-5 right-50 w-[310.99981689453125px] h-[73.72344970703125px] z-110">
          <img
            src={Group2Copy2}
            alt="Icon"
            className="w-full h-full object-contain"
          />
        </figure>

        <div className="flex items-start justify-between gap-14">
          <div className="w-1/2">
            <header className="w-full mx-auto">
              <SectionHeading
                classname="text-5xl font-bold leading-15.25 font-raleway text-dark -tracking-[1px] text-left"
                title="Contact Us"
                subtitleClassname="mt-2 text-[24px] text-left font-normal btn-linear-gradient"
                subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
              />
            </header>
            <div>
              <ul className="mt-10 space-y-4">
                <li>
                  <div className="flex items-center gap-2">
                    <img
                      src={LocationIcon}
                      alt="Location Icon"
                      className="w-[11.01px] h-4 object-contain"
                    />
                    <h3 className="text-[16px] font-bold font-raleway underline w-fit">
                      U.S. Office
                    </h3>
                  </div>
                  <p className="text-sm font-normal mt-1">
                    Aadrila Technologies INC,
                  </p>
                  <p className="text-sm font-normal">
                    8 The Green, Ste R, in the City of Dover County of Kent Zip
                    Code 19901.
                  </p>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <img
                      src={LocationIcon}
                      alt="Location Icon"
                      className="w-[11.01px] h-4 object-contain"
                    />
                    <h3 className="text-[16px] font-bold font-raleway underline w-fit">
                      India Office
                    </h3>
                  </div>
                  <p className="text-sm font-normal mt-1">
                    Aadrila Technologies Private Limited,
                  </p>
                  <p className="text-sm font-normal">
                    Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road,
                    Near D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="pb-20"></div>
    </section>
  );
}

export default ContactUs;
