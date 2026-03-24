import FooterDesktop from './footer/FooterDesktop';
import FooterTablet from './footer/FooterTablet';
import FooterMobile from './footer/FooterMobile';

export default function Footer() {
  return (
    <>
      <FooterDesktop />
      <FooterTablet />
      <FooterMobile />
    </>
  );
}