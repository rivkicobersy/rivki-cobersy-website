import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Description, Image, SliderContainer, Title } from "./styles";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  home?: boolean;
}

const exampleProjects: Project[] = [
  {
    id: 1,
    title: "Personal Website",
    description: "My Personal Website",
    imageUrl: "/website.png",
    home: true,
  },
  {
    id: 2,
    title: "Recipe Finder",
    description: "Create and view the best recipes",
    imageUrl: "/recipes.jpeg",
  },
  {
    id: 3,
    title: "My Todos",
    description: "Keep track of all your tasks in one place",
    imageUrl: "/todo.jpeg",
  },
  {
    id: 4,
    title: "Movie Finder",
    description: "Finally see why that actor looks familiar",
    imageUrl: "/movies.jpeg",
  },
  {
    id: 5,
    title: "Taskify",
    description: "Organise all of your tasks and projects",
    imageUrl: "/tasks.jpeg",
  },
];

const Portfolio = () => {
  const handleClick = () => {
    window.open("/error", "_blank");
  };

  const handleClicktoHome = () => {
    window.history.pushState({}, "", "/");
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <SliderContainer>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          720: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
      >
        {exampleProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <Card onClick={project.home ? handleClicktoHome : handleClick}>
              <Title>{project.title}</Title>
              <Image src={project.imageUrl} alt={project.title} />
              <Description>{project.description}</Description>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Portfolio;
