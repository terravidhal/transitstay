import { imgSocialMedia } from '../../lib/images';
import { LogoVectors, langSelector2, storeAppBtn, storePlayBtn } from './Shared';

export default function FooterDesktop() {
  return (
    <div
      className="hidden lg:block relative overflow-hidden"
      style={{
        minHeight: '959px',
        width: '100%',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(-37.8066deg, rgb(0,0,0) 28.248%, rgb(142,151,180) 87.818%)',
      }}
    >
      <div
        className="relative mx-auto"
        style={{ maxWidth: '1440px', padding: '0 75px', minHeight: '959px' }}
      >
        <div className="absolute flex items-start justify-between" style={{ top: '146px', left: '75px', right: '75px' }}>
          <div className="flex flex-col items-start" style={{ width: '220px' }}>
            <div className="relative overflow-hidden" style={{ width: '220px', height: '48px' }}>
              <LogoVectors />
            </div>
            <p
              className="font-inter  opacity-[0.8] font-light not-italic text-[14px] leading-normal tracking-[0.28px] mt-[24px]"
              style={{ color: 'rgba(255,255,255,0.8)', width: '220px' }}
            >
              Your trusted companion for personalized travel suggestions. You can also get the mobile application
            </p>
            <div className="flex lg:flex-col gap-[8px] mt-[24px]">
              {storeAppBtn}
              {storePlayBtn}
            </div>
          </div>

          <div className="flex flex-col gap-[19px] items-start leading-normal" style={{ width: '142px' }}>
            <p className="font-libre-bodoni font-normal text-[22px] text-white">Quick Links</p>
            <div className="flex opacity-[0.7] flex-col gap-[32px] items-start font-inter font-light not-italic text-[16px] tracking-[0.32px] w-full" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <p>My Moodboards</p><p>Search Discovery</p><p>Magazine</p><p>About Us</p>
            </div>
          </div>

          <div className="flex  flex-col gap-[19px] items-start" style={{ width: '220px' }}>
            <p className="font-libre-bodoni font-normal text-[22px] text-white leading-normal">Contact &amp; Legal</p>
            <div className="flex opacity-[0.7] flex-col gap-[32px] items-start w-full font-inter font-light leading-normal not-italic text-[16px] tracking-[0.32px]" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <p>Contact Us</p><p>Security</p><p>Data Deletion</p><p>Privacy Policy</p>
            </div>
          </div>

          <div className="flex flex-col gap-[20px] items-start" style={{ width: '365px' }}>
            <p className="font-libre-bodoni text-start font-normal text-[22px] text-white text-center leading-normal w-full">
              Subscribe To Our Newsletter
            </p>
            <p className="font-inter opacity-[0.7] font-light not-italic text-[16px] leading-normal tracking-[0.32px] w-[330px]" style={{ color: 'rgba(255,255,255,0.8)', height: '38px' }}>
              Get travel tips and exclusive offers delivered to your inbox.
            </p>
            <div className="relative overflow-hidden rounded-[100px] h-[45px] w-full" style={{ border: '1px solid rgba(255,255,255,0.5)' }}>
              <div
                className="absolute flex items-center justify-center overflow-hidden rounded-[100px]"
                style={{ right: 0, top: '50%', transform: 'translateY(-50%)', width: '100px', height: '35px', background: 'linear-gradient(to right, #8f9cd3, #ffcaa4)' }}
              >
                <p className="font-montserrat font-normal text-[12px] text-white tracking-[0.24px] leading-normal whitespace-nowrap">Subscribe</p>
              </div>
            </div>
            <p className="font-inter opacity-[0.8] font-light not-italic text-[16px] leading-none tracking-[0.32px] w-full" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <span className="leading-normal">{`By subscribing, you agree to receive marketing emails from TransitStay. You can unsubscribe at any time. Read our `}</span>
              <span className="font-inter font-medium leading-normal underline">Privacy Policy</span>
              <span className="leading-normal">{` to learn how we handle your data.`}</span>
            </p>
            <div className="relative h-[26px] w-[211px] ml-[150px] mt-[70px]">
              <img alt="" className="absolute block w-full h-full" src={imgSocialMedia} />
            </div>
          </div>
        </div>

        <div className="absolute left-[75px] right-[75px]" style={{ top: '623px', height: 0 }}>
          <hr className="border-t border-white mb-[30px]" />
        </div>

        <div
          className="absolute flex items-center justify-between"
          style={{ left: '75px', right: '75px', top: '718px' }}
        >
          <div className="flex opacity-[0.8] items-center gap-[55px] font-inter font-light not-italic text-[16px] tracking-[0.32px] whitespace-nowrap leading-normal" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <p>© 2025 TransitStay. All rights reserved.</p>
            <p>Terms of Service</p>
          </div>
          {langSelector2}
        </div>
      </div>
    </div>
  );
}
