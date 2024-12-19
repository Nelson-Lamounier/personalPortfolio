import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import portfolioData from "../../data/portfolioData.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.custom.css"



import {
  OtherProjectsContainer,
  SectionHeading,
  SectionHeadingLine,
  SwiperContainer,
  CardFront,
  CardHeading,
  SubHeadingCard,
  StyledImage,
} from "./carousel.styled.tsx";



const Carousel: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <OtherProjectsContainer id="other-projects">
      <SectionHeading>Other Projects</SectionHeading>
      <SectionHeadingLine></SectionHeadingLine>
      <SwiperContainer>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation]}
        >
          {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <CardFront>
                  <CardHeading>{project.name}</CardHeading>
                  <SubHeadingCard>{project.technologies}</SubHeadingCard>
                  <StyledImage
                    src={project.image}
                    alt={`${project.name} preview`}
                  />
                  {/* <button className={`pricing-card-btn btn-${plan.plan.toLowerCase()}`}>
                  {plan.buttonText}
                </button>
              </div>
              <div className={`pricing-card-back back-${plan.plan.toLowerCase()}`}>
                <a href="#">{plan.linkText}</a> */}
                </CardFront>
              </SwiperSlide>

          ))}
        </Swiper>
      </SwiperContainer>
    </OtherProjectsContainer>
  );
};

export default Carousel;
