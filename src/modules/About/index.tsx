import { FlipCard, FlipCardBack, FlipCardFront, FlipCardInner, Image, PageContainer } from "./styles";

const About = () => (
  <PageContainer>
    <FlipCard>
      <FlipCardInner className="flip-card-inner">
        <FlipCardFront>
          <img src="img_avatar.png" alt="Avatar" />
        </FlipCardFront>
        <FlipCardBack>
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
    <FlipCard>
      <FlipCardInner className="flip-card-inner">
        <FlipCardFront>
          <Image src="actualize.png" alt="Avatar" />
        </FlipCardFront>
        <FlipCardBack>
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
    <FlipCard>
      <FlipCardInner className="flip-card-inner">
        <FlipCardFront>
          <Image src="touro.png" alt="Avatar" />
        </FlipCardFront>
        <FlipCardBack>
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  </PageContainer>
);

export default About;
