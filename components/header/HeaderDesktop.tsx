import { imgIcons8Share1, imgArrow2 } from '../../lib/images';

export default function HeaderDesktop() {
  return (
    <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 h-[95px] pointer-events-none">
      <div
        className="relative h-full pointer-events-auto"
        style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(101, 70, 114, 0.25)' }}
      >
        <div
          className="absolute flex items-center justify-between"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '1440px',
            paddingLeft: '77px',
            paddingRight: '77px',
          }}
        >
          {/* Back to articles */}
          <div className="flex gap-[5px] items-center">
            <div className="flex items-center justify-center relative shrink-0">
              <div style={{ transform: 'rotate(180deg)' }}>
                <div style={{ position: 'relative', width: '21px', height: 0 }}>
                  <div className="absolute" style={{ inset: '-7.36px -4.76% -7.36px 0' }}>
                    <img alt="" className="block w-full h-full" src={imgArrow2} />
                  </div>
                </div>
              </div>
            </div>
            <p className="font-inter font-normal text-[16px] text-black whitespace-nowrap leading-normal">
              Back To All Articles
            </p>
          </div>

          {/* Share button */}
          <div
            className="flex items-center overflow-hidden rounded-[100px]"
            style={{
              width: '157px',
              height: '45px',
              backdropFilter: 'blur(45px)',
              backgroundColor: 'black',
            }}
          >
            <div
              className="flex items-center gap-[5px] mx-auto"
              style={{ width: '129px' }}
            >
              <div className="relative shrink-0 w-[20px] h-[20px]">
                <img alt="" className="absolute block w-full h-full" src={imgIcons8Share1} />
              </div>
              <p className="font-montserrat font-medium text-[16px] text-center text-white whitespace-nowrap leading-normal">
                Share Article
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
