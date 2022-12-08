import React, { useEffect, useState } from "react";

const Discount = () => {
  const [days, setdays] = useState(30);
  const [hour, sethour] = useState(7);
  const [min, setmin] = useState(60);
  const [sec, setsec] = useState(60);

  useEffect(() => {
    let timer = setInterval(() => {
      setsec(sec - 1);
      if (sec === 0) {
        setmin(min - 1);
        setsec(60);
      } else if (min === 0) {
        sethour(hour - 1);
        setmin(0);
      } else if (hour === 0) {
        setdays(days - 1);
        sethour(24);
      }
      
    }, 1000);
    return () => clearInterval(timer);
  }, [sec, hour, min, days]);

  return (
    <div>
      <section className="discount">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="discount__pic">
                <img src="assets/img/discount.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="discount__text">
                <div className="discount__text__title">
                  <span>Discount</span>
                  <h2>Summer 2019</h2>
                  <h5>
                    <span>Sale</span> 50%
                  </h5>
                </div>
                <div className="discount__countdown" id="countdown-time">
                  <div className="countdown__item">
                    <span>{days}</span>
                    <p>Days</p>
                  </div>
                  <div className="countdown__item">
                    <span>{hour}</span>
                    <p>Hour</p>
                  </div>
                  <div className="countdown__item">
                    <span>{min}</span>
                    <p>Min</p>
                  </div>
                  <div className="countdown__item">
                    <span>{sec}</span>
                    <p>Sec</p>
                  </div>
                </div>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discount;
