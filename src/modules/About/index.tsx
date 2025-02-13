import { FlipCard, FlipCardBack, FlipCardFront, FlipCardInner, Image, Link, PageContainer } from "./styles";

const About = () => (
  <div>
    <h3>Here's what I've been up to...</h3>
    <PageContainer>
      <FlipCard>
        <FlipCardInner className="flip-card-inner">
          <FlipCardFront>
            <Image src="touro.png" alt="Avatar" />
          </FlipCardFront>
          <FlipCardBack>
            <Link href="https://www.touro.edu/" target="_blank" rel="noopener noreferrer">
              More about Touro
            </Link>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
      <FlipCard>
        <FlipCardInner className="flip-card-inner">
          <FlipCardFront>
            <Image src="actualize.png" alt="Avatar" />
          </FlipCardFront>
          <FlipCardBack>
            <Link href="https://anyonecanlearntocode.com/" target="_blank" rel="noopener noreferrer">
              More about Actualize
            </Link>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
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
    </PageContainer>
  </div>
);

export default About;
