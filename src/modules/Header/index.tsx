import { Link } from "react-router-dom";
import { HeaderWrapper, Logo } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src="/logo.jpeg" alt="Rivki's Website" />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
