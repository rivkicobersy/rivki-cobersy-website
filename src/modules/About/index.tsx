import { FlipCard, FlipCardBack, FlipCardFront, FlipCardInner, Image, Li, Link, PageContainer } from "./styles";

const About = () => (
  <div>
    <h1>Here's what I've been up to...</h1>
    <PageContainer>
      <FlipCard>
        <FlipCardInner className="flip-card-inner">
          <FlipCardFront>
            <Image src="touro.png" alt="Touro College" />
          </FlipCardFront>
          <FlipCardBack>
            <h2>Touro College</h2>
            <ul>
              <Li> Completed a Bachelor's degree in Computer Information Science.</Li>
              <Li> Developed a strong foundation in programming, software engineering, and problem-solving.</Li>
              <Li> Focused on building knowledge in various computer science principles.</Li>
            </ul>
            <Link href="https://www.touro.edu/" target="_blank" rel="noopener noreferrer">
              Learn more about Touro College
            </Link>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>

      <FlipCard>
        <FlipCardInner className="flip-card-inner">
          <FlipCardFront>
            <Image src="actualize.png" alt="Actualize Bootcamp" />
          </FlipCardFront>
          <FlipCardBack>
            <h2>Actualize Bootcamp</h2>
            <ul>
              <Li> Completed a Full Stack Web Development Bootcamp.</Li>
              <Li> Gained hands-on experience with Ruby on Rails and React.</Li>
              <Li> Built web applications from scratch with both front-end and back-end technologies.</Li>
            </ul>
            <Link href="https://anyonecanlearntocode.com/" target="_blank" rel="noopener noreferrer">
              Learn more about Actualize
            </Link>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>

      <FlipCard>
        <FlipCardInner className="flip-card-inner">
          <FlipCardFront>
            <Image src="trackmatic.jpeg" alt="Trackmatic" />
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
    </PageContainer>
  </div>
);

export default About;
