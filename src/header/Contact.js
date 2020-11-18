import React from "react";

function Contact() {
  return (
    <>
      <span className="header--svg">
        <svg className="emblem--contact" viewBox="0 0 74.9 100">
          <path
            fill="#ffffff"
            d="M16.6,99.9c-2.8,0.5-6.5-0.4-8.7-1.9C1.3,93.7-0.4,88.4,0.1,87c0.5-1.4,3-6.5,5.9-10.8c2.8-4.3,5.1-6.8,7.1-9.1
    					c2-2.3,10.5,4.9,14.4,1.9c2.7-2.1,8.7-10.9,12.9-16.9l0,0c4.1-7,9.5-15.5,10.3-18.8c1.2-4.8-8.8-9.8-7.5-12.5s2.6-5.9,5.4-10.2
    					c2.8-4.3,6.4-8.7,7.5-9.8c1.1-1,6.6-1.6,13.2,2.7c3,1.9,6.1,6.5,5.4,9.7c-2.5,11.3-10.5,28.9-22,47l0,0
    					c-10.3,15-21.5,28.8-30.4,36.4"
          ></path>
        </svg>
      </span>
      <div className="text--contact">
      <div className="number--contact">063-***-**-**</div>
      <div className="number--contact">097-***-**-**</div>
      <div className="number--contact">044-***-**-**</div>
      </div>
      <div className="text--contact">
      <div className="info--contact">Call center opening hours:</div>
      <div className="info--contact">Weekdays: 8:00 to 21:00</div>
      <div className="info--contact"> Saturday: 9:00 to 20:00 </div>
      <div className="info--contact">Sunday: 10:00 to 19:00</div>
      </div>
    </>
  );
}

export default Contact;
