import { FaReact } from "react-icons/fa";
import {
  CardContainer,
  FlipCard,
  FlipCardBack,
  FlipCardFront,
  FlipCardInner,
  Header,
  Image,
  Li,
  Link,
  PageContainer,
  Text,
} from "./styles";

const Cards = () => (
  <div>
    <PageContainer>
      <CardContainer>
        <Header>Hebrew Theological College, Touro University</Header>
        <FlipCard>
          <FlipCardInner className="flip-card-inner">
            <FlipCardFront>
              <FaReact size={200} color="#c6605c" />
            </FlipCardFront>
            <FlipCardBack>
              <Text>Completed a Bachelor's degree in Computer Information Science.</Text>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>

        <FlipCard>
          <FlipCardInner className="flip-card-inner">
            <FlipCardFront>
              <Image src="actualize.png" alt="Actualize Bootcamp" />
            </FlipCardFront>
            <FlipCardBack>
              Developed a strong foundation in programming, software engineering, and problem-solving
              <Li> Focused on building knowledge in various computer science principles.</Li>
              <h2>Actualize Bootcamp</h2>
              <ul>
                <Li> Completed a Full Stack Web Development Bootcamp.</Li>
                <Li> Gained hands-on experience with Ruby on Rails and React.</Li>
                <Li> Built web applications from scratch with both front-end and back-end technologies.</Li>
              </ul>
              <Link href="https://anyonecanlearntocode.com/" target="_blank" rel="noopener noreferrer">
                Learn more Cards Actualize
              </Link>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>

        <FlipCard>
          <FlipCardInner className="flip-card-inner">
            <FlipCardFront>
              <Image src="trackmatic.png" alt="Trackmatic" />
            </FlipCardFront>
            <FlipCardBack>
              <h2>Trackmatic</h2>
              <ul>
                <Li> Full Stack Developer at Trackmatic, focusing on web application development.</Li>
                <Li> Building the frontend with React and the backend with Node.js and Fastify.</Li>
                <Li> Creating efficient and scalable solutions for Trackmatic's clients.</Li>
              </ul>
              <Link href="https://trackmatic.co.za/" target="_blank" rel="noopener noreferrer">
                Learn more Cards Trackmatic
              </Link>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
        <FlipCard>
          <FlipCardInner className="flip-card-inner">
            <FlipCardFront>
              <Image src="trackmatic.png" alt="Trackmatic" />
            </FlipCardFront>
            <FlipCardBack>
              <h2>Trackmatic</h2>
              <ul>
                <Li> Full Stack Developer at Trackmatic, focusing on web application development.</Li>
                <Li> Building the frontend with React and the backend with Node.js and Fastify.</Li>
                <Li> Creating efficient and scalable solutions for Trackmatic's clients.</Li>
              </ul>
              <Link href="https://trackmatic.co.za/" target="_blank" rel="noopener noreferrer">
                Learn more about Trackmatic
              </Link>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
      </CardContainer>
    </PageContainer>
  </div>
);

export default Cards;
