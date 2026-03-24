import { LogoVectors, langSelector2 } from './Shared';
import { imgIcon, imgIcon1 } from '../../lib/images';

export default function FooterMobile() {
  return (
    <div 
      className="md:hidden relative overflow-hidden"
      style={{
        height: '1003px',
        width: '100%',
        maxWidth: '379px',
        margin: '0 auto',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(-72.053deg, rgb(0,0,0) 28.248%, rgb(142,151,180) 87.818%)',
      }}
    >
      <div 
      className="absolute flex flex-col gap-[50px] items-start" style={{ left: '50%', top: '63px', transform: 'translateX(-50%)', width: '335px' }}>
        <div className="flex flex-col items-start">
          <div className="relative overflow-hidden" style={{ width: '143px', height: '32px', marginLeft: '8px' }}><LogoVectors /></div>
          <p className="font-inter font-light not-italic text-[12px] leading-normal tracking-[0.24px] w-[315.736px] mt-[47.16px]" style={{ color: 'rgba(255,255,255,0.8)' }}>Your trusted companion for personalized travel suggestions. You can also get the mobile application</p>
          <div className="flex items-center justify-between w-[332px] mt-[105px]">
            <div className="relative overflow-hidden rounded-[10px] flex items-center" style={{ width: '155px', height: '60px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
              <div className="absolute" style={{ left: '9px', top: '17px', width: '22px', height: '26px' }}><img alt="" className="block w-full h-full" src={imgIcon} /></div>
              <div className="absolute" style={{ left: '39px', top: '13px' }}>
                <p className="font-libre-bodoni font-normal text-[10px] leading-normal tracking-[0.2px]" style={{ color: 'rgba(255,255,255,0.8)' }}>Download On</p>
                <p className="font-libre-bodoni font-normal text-[14px] leading-normal tracking-[0.28px] text-white mt-1">App Store</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[10px] flex items-center" style={{ width: '155px', height: '60px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
              <div className="absolute" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', width: '19.943px', height: '22.286px' }}>
                <img alt="" className="block w-full h-full" src={imgIcon1} style={{ transform: 'scaleY(-1)' }} />
              </div>
              <div className="absolute" style={{ left: '36.78px', top: '13px' }}>
                <p className="font-libre-bodoni font-normal text-[10px] leading-normal tracking-[0.2px]" style={{ color: 'rgba(255,255,255,0.8)' }}>Get It On</p>
                <p className="font-libre-bodoni font-normal text-[14px] leading-normal tracking-[0.28px] text-white mt-1">Google Play</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[30px] items-start leading-normal w-full">
          <div className="flex flex-col gap-[14px] items-start" style={{ width: '142px' }}>
            <p className="font-libre-bodoni font-normal text-[16px] text-white" style={{ width: '128px' }}>Quick Links</p>
            <div className="flex flex-col gap-[15px] items-start font-inter font-light not-italic text-[12px] tracking-[0.24px] w-full" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <p>My Moodboards</p><p>Search Discovery</p><p>Magazine</p><p>About Us</p>
            </div>
          </div>
          <div className="flex flex-col gap-[14px] items-start" style={{ width: '142px' }}>
            <p className="font-libre-bodoni font-normal text-[16px] text-white" style={{ width: '128px' }}>Contact &amp; Legal</p>
            <div className="flex flex-col gap-[15px] items-start font-inter font-light not-italic text-[12px] tracking-[0.24px] w-full" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <p>Contact Us</p><p>Security</p><p>Data Deletion</p><p>Privacy Policy</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          <p className="font-libre-bodoni font-normal text-[16px] text-white" style={{ width: '67.46%' }}>Subscribe To Our Newsletter</p>
          <p className="font-inter font-light not-italic text-[12px] leading-normal tracking-[0.24px] w-[293px] mt-[10.99px]" style={{ color: 'rgba(255,255,255,0.8)' }}>Get travel tips and exclusive offers delivered to your inbox.</p>
          <div className="relative overflow-hidden h-[30px] w-[335px] mt-[24px]" style={{ borderRadius: '66.417px', border: '0.664px solid rgba(255,255,255,0.5)' }}>
            <div className="absolute flex items-center justify-center overflow-hidden" style={{ right: 0, top: '50%', transform: 'translateY(-50%)', width: '66.417px', height: '23.246px', borderRadius: '66.417px', background: 'linear-gradient(to right, #8f9cd3, #ffcaa4)' }}>
              <p className="font-montserrat font-normal text-[10px] text-white tracking-[0.2px] leading-normal whitespace-nowrap">Subscribe</p>
            </div>
            <p className="absolute font-inter font-normal not-italic text-[10px] tracking-[0.2px] whitespace-nowrap" style={{ left: '15.78px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }}>Enter Email</p>
          </div>
          <p className="font-inter font-light not-italic text-[12px] leading-normal tracking-[0.24px] w-[335px] mt-[19px]" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 0 }}>
            <span className="text-[12px] leading-normal">{`By subscribing, you agree to receive marketing emails from TransitStay. You can unsubscribe at any time. Read our `}</span>
            <span className="text-[12px] font-inter font-medium leading-normal underline">Privacy Policy</span>
            <span className="text-[12px] leading-normal">{` to learn how we handle your data.`}</span>
          </p>
        </div>
      </div>

      <div className="absolute flex items-center justify-center" style={{ left: '50%', top: '804px', transform: 'translateX(-50%)', width: '306px' }}>
        <div className="flex flex-col gap-[20px] items-center font-inter font-light not-italic text-[12px] leading-normal tracking-[0.24px] whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.6)' }}>
          <p>© 2025 TransitStay. All rights reserved.</p>
          <p>Terms Of Service</p>
        </div>
      </div>
      <div className="absolute" style={{ left: '50%', top: '949px', transform: 'translateX(-50%)' }}>{langSelector2}</div>
    </div>
  );
}
