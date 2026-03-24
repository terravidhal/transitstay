import { imgIcons8Share1, imgArrow2 } from '../../lib/images';

export default function HeaderMobile() {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 h-[80px] pointer-events-none">
      <div
        className="relative h-full pointer-events-auto"
        style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(101, 70, 114, 0.25)' }}
      >
        <div
          className="absolute flex items-center justify-between"
          style={{ left: '50%', top: '20px', transform: 'translateX(-50%)', width: '336px' }}
        >
          <div className="flex gap-[5px] items-center relative shrink-0">
            <div className="flex items-center justify-center relative shrink-0">
              <div style={{ transform: 'rotate(180deg)' }}>
                <div style={{ position: 'relative', width: '21px', height: 0 }}>
                  <div className="absolute" style={{ inset: '-7.36px -4.76% -7.36px 0' }}>
                    <img alt="" className="block w-full h-full" src={imgArrow2} />
                  </div>
                </div>
              </div>
            </div>
            <p className="font-inter font-normal text-[16px] text-black whitespace-nowrap leading-normal">Back</p>
          </div>
          <div
            className="relative overflow-hidden rounded-[100px] shrink-0"
            style={{ width: '130px', height: '40px', backdropFilter: 'blur(45px)', backgroundColor: 'black' }}
          >
            <div
              className="absolute flex gap-[2px] items-center"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '103px' }}
            >
              <div className="relative shrink-0 w-[17px] h-[17px]">
                <img alt="" className="absolute block w-full h-full" src={imgIcons8Share1} />
              </div>
              <p className="font-montserrat font-medium text-[13px] text-center text-white whitespace-nowrap leading-normal">
                Share Article
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
