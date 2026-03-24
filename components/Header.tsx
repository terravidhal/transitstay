import HeaderDesktop from './header/HeaderDesktop';
import HeaderTablet from './header/HeaderTablet';
import HeaderMobile from './header/HeaderMobile';

export default function Header() {
  return (
    <>
      <HeaderDesktop />
      <HeaderTablet />
      <HeaderMobile />
    </>
  );
}