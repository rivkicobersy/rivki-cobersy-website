import { Image, ImageWrapper, Text } from "./styles";

const Contact = () => (
  <div>
    <ImageWrapper>
      <Image src="/me.jpeg" alt="Profile pic" />
      <Text>
        I'm Rivki — the web developer and designer behind this website. Here you'll find plenty of creative web design
        inspiration, coding tips, and development resources. I hope you enjoy exploring and building with me!
      </Text>
    </ImageWrapper>
  </div>
);

export default Contact;
