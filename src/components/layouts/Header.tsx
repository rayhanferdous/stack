import DropDown from "../utils/DropDown";
import Logo from "./Logo";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-center justify-between py-7 main-container">
      <Logo />
      <DropDown />
    </header>
  );
};

export default Header;
