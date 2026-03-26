import { imgSocialMedia, imgLine21 } from '../../lib/images';
import { LogoVectors, langSelector2, langSelector3, storeAppBtn, storePlayBtn } from './Shared';

export default function FooterTablet() {
  return (
    <div
      className="hidden md:block lg:hidden relative overflow-hidden"
      style={{
        height: '1067px',
        width: '100%',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(-56.146deg, rgb(0,0,0) 28.248%, rgb(142,151,180) 87.818%)',
      }}
    >
      <div className="absolute flex flex-col gap-[64px] items-start" style={{ left: '50%', top: '106px', transform: 'translateX(-50%)', width: '667px' }}>
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col items-start">
            <div className="relative overflow-hidden" style={{ width: '220px', height: '47.736px', marginLeft: '7px' }}><LogoVectors /></div>
            <p className="font-inter opacity-[0.7] font-light not-italic text-[14px] leading-normal tracking-[0.28px] w-[279px] mt-[71px]" style={{ color: 'rgba(255,255,255,0.8)' }}>Your trusted companion for personalized travel suggestions. You can also get the mobile application</p>
            <div className="flex items-center mt-[24px] gap-[18px]">{storeAppBtn}{storePlayBtn}</div>
          </div>
          <div className="flex flex-col gap-[19px] items-start justify-center leading-normal" style={{ width: '142px' }}>
            <p className="font-libre-bodoni font-normal text-[22px] text-center text-white" style={{ width: '128px' }}>Quick Links</p>
            <div className="flex flex-col opacity-[0.7] gap-[32px] items-start font-inter font-light not-italic text-[16px] tracking-[0.32px] w-full" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <p>Account</p><p>Search Discovery</p><p>Get Mobile App</p><p>FAQs</p><p>Contact Us</p>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between" style={{ width: '653px' }}>
          <div className="flex flex-col gap-0 items-start">
            <p className="font-libre-bodoni font-normal text-[22px] text-center text-white whitespace-nowrap">Subscribe To Our Newsletter</p>
            <p className="font-inter font-light not-italic text-[17px] opacity-[0.7] leading-normal tracking-[0.24px] w-[330px] mt-[47px]" style={{ color: 'rgba(255,255,255,0.8)' }}>Enter your email address to stay updated.</p>
            <div className="relative overflow-hidden rounded-[100px] h-[45px] w-[365px] mt-[49px]" style={{ border: '1px solid rgba(255,255,255,0.5)' }}>
              <div className="absolute flex items-center justify-center overflow-hidden rounded-[100px]" style={{ left: '259px', top: '50%', transform: 'translateY(-50%)', width: '100px', height: '35px', background: 'linear-gradient(to right, #8f9cd3, #ffcaa4)' }}>
                <p className="font-montserrat font-normal text-[12px] text-white tracking-[0.24px] leading-normal whitespace-nowrap">Subscribe</p>
              </div>
            </div>
            <div className="relative h-[24px] w-[192px] mt-[24px]"><img alt="" className="absolute block w-full h-full" src={imgSocialMedia} /></div>
          </div>
          <div className="flex flex-col gap-[19px] items-start leading-normal" style={{ width: '128px' }}>
            <p className="font-libre-bodoni font-normal text-[22px] text-white" style={{ width: '128px' }}>More</p>
            <div className="flex flex-col opacity-[0.7] gap-[32px] items-start font-inter font-light not-italic text-[18px] tracking-[0.36px] w-full" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <p>Careers</p><p>Press</p><p>Affiliates</p><p>How we work</p><p>Security</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute" style={{ left: '50%', top: '824.5px', transform: 'translateX(-50%)', width: '667.001px', height: 0 }}>
        <div className="absolute" style={{ inset: '-1px 0 0 0' }}><img alt="" className="block w-full h-full" src={imgLine21} /></div>
      </div>
      <div className="absolute flex flex-col gap-[30px] items-center" style={{ left: '50%', top: '884px', transform: 'translateX(-50%)', width: '675px' }}>
        <div className="font-inter opacity-[0.8] font-light not-italic text-[16px] leading-normal tracking-[0.32px] whitespace-nowrap relative w-full" style={{ color: 'rgba(255,255,255,0.6)', height: '20px' }}>
          <span style={{ position: 'absolute', left: 0 }}>© 2025 TransitStay. All rights reserved.</span>
          <span style={{ position: 'absolute', left: '362px' }}>Terms &amp; Conditions</span>
          <span style={{ position: 'absolute', left: '568px' }}>Privacy Policy</span>
        </div>
        <div style={{ marginTop: '20px' }}>{langSelector3}</div>
      </div>
    </div>
  );
}
