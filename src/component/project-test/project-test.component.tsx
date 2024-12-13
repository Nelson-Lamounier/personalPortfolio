import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pricingData from "../../data/testData.json"
import "./project.test.styled.css"; // Include your custom styles

interface PricingPlan {
    plan: string;
    price: string;
    features: string[];
    available: boolean[];
    buttonText: string;
    linkText: string;
  }

  
  const Pricing: React.FC = () => {
    const typedPricingData = pricingData as PricingPlan[];
  
    return (
      <section className="section-3" id="pricing">
        <h1 className="section-heading">Pricing</h1>
        <div className="section-heading-line"></div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="swiper-container"
        >
          {typedPricingData.map((plan: PricingPlan, index: number) => (
            <SwiperSlide key={index} className="pricing-card">
              <div className="pricing-card-front">
                <h1 className={`pricing-card-heading heading-${plan.plan.toLowerCase()}`}>
                  {plan.plan}
                </h1>
                <h3 className="pricing-card-price">{plan.price}</h3>
                <ul className={`pricing-card-list list-${plan.plan.toLowerCase()}`}>
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i}>
                      <i className={`fas fa-${plan.available[i] ? "check" : "times"}`}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`pricing-card-btn btn-${plan.plan.toLowerCase()}`}>
                  {plan.buttonText}
                </button>
              </div>
              <div className={`pricing-card-back back-${plan.plan.toLowerCase()}`}>
                <a href="#">{plan.linkText}</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };
  
  export default Pricing;