import Header from '../Header';
import Footer from '../Footer';
import RelatedArticles from '../RelatedArticles';
import {
  imgImage62, imgRectangle, imgEllipsesBg, imgImage55, imgImage56, imgImage60, imgImage64, imgImage93, imgImage94, imgImage98,
  imgIcons8ExternalLink11,
} from '../../lib/images';
import { Tags, AuthorRow, gradLink } from './Shared';

export default function IndexTablet() {
  return (
    <div className="tablet-only hidden md:block lg:hidden bg-white relative"
      style={{ width: '100%', minHeight: '7935px', overflowX: 'hidden' }}>

      <div className="absolute pointer-events-none" style={{ height: '2325.934px', left: '-125px', top: '533px', width: '1564px' }}>
        <div className="absolute" style={{ inset: '-12.19% -1.66% -9.63% -18.13%' }}><img alt="" className="block w-full h-full" src={imgEllipsesBg} /></div>
      </div>

      <div className="absolute pointer-events-none"
        style={{ left: 'calc(40% + 115.13px)', top: '-189.37px', width: '555.52px', height: '683.356px' }}>
        <div style={{ transform: 'rotate(-24.75deg)' }}>
          <div className="relative overflow-hidden"
            style={{ backgroundColor: '#eef3fe', height: '597.442px', width: '336.297px', borderRadius: '278.866px' }}>
            <div className="absolute flex items-center justify-center" style={{ left: '100.85px', top: '387.71px', width: '111.697px', height: '111.697px' }}>
              <div style={{ transform: 'rotate(0.41deg)' }}>
                <div className="relative" style={{ borderRadius: '67.217px', width: '110.908px', height: '110.908px' }}>
                  <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" style={{ borderRadius: '67.217px' }} src={imgImage62} />
                </div>
              </div>
            </div>
            <div className="absolute flex items-center justify-center" style={{ left: '34.49px', top: '168.23px', width: '228.133px', height: '228.133px' }}>
              <div style={{ transform: 'rotate(-71.79deg)' }}>
                <div className="relative" style={{ borderRadius: '205.48px', width: '180.705px', height: '180.705px' }}>
                  <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" style={{ borderRadius: '205.48px' }} src={imgRectangle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute flex flex-col items-start"
        style={{ left: '40px', top: '127px', width: '50%', maxWidth: '465px', zIndex: 1 }}>
        <div className="flex items-center justify-center overflow-hidden px-[41px] py-[12px] rounded-[100px] shrink-0"
          style={{ background: 'linear-gradient(to right, #8f9cd3, #ffcaa4)', width: '189px' }}>
          <p className="font-libre-bodoni font-normal text-[18px] text-white whitespace-nowrap leading-normal">Photo Journey</p>
        </div>
        <div style={{ height: '29px', flexShrink: 0 }} />
        <p className="font-libre-bodoni font-normal text-black w-full"
          style={{ fontSize: 'clamp(40px, 5.5vw, 60px)', lineHeight: '1.1' }}>
          Through the Lens:<br />Morocco's Imperial Cities
        </p>
        <div style={{ height: '16px', flexShrink: 0 }} />
        <p className="font-inter font-normal not-italic text-[#595959] text-[16px] w-full" style={{ lineHeight: '27px' }}>
          Morocco doesn't just look beautiful. It behaves beautifully in a camera. Light slips through cedar lattices like water. Colors sit confidently next to each other—cobalt against chalk-white, saffron against shadow, without ever feeling too loud.
        </p>
        <div style={{ height: '29px', flexShrink: 0 }} />
        <Tags />
        <div style={{ height: '17px', flexShrink: 0 }} />
        <AuthorRow />
      </div>

      <div className="absolute overflow-hidden rounded-[600px]"
        style={{ left: '50%', top: '761px', transform: 'translateX(-50%)', width: '699px', height: '734px', background: 'linear-gradient(to right, #8f9cd3, #ffcaa4)', border: '0.35px solid #8f9cd3' }}>
        <div className="absolute flex flex-col gap-[22px] items-center text-center text-white"
          style={{ left: '50%', top: '100px', transform: 'translateX(-50%)', width: '534px' }}>
          <p className="font-libre-bodoni font-normal text-[40px] text-center text-white" style={{ lineHeight: '50px', width: '466px' }}>Before You Shoot: A Quick Morocco Photography Mindset</p>
          <div className="font-inter font-normal not-italic text-[16px] text-center text-white" style={{ lineHeight: '24px', width: '534px' }}>
             <p className="mb-0">
              Chase soft light, not just golden light. Morocco’s 
              sun can be dramatic. That’s a gift, but it can also
               be unforgiving—especially around midday when shadows 
               get sharp and highlights blow out fast. Your most 
               flattering images usually come from:Early morning, 
               when the medina wakes slowly and you can shoot clean 
               streets before the crowdsLate afternoon to sunset, 
               when warm tones add depth and faces look softe. 
               Blue hour,{" "}
              <span className='rounded-md px-1 font-inter font-medium not-italic text-[17px] text-white'
                style={{
                  background: 'linear-gradient(92.329deg, rgb(173,84,240) 0.236%, rgb(210,77,188) 89.259%)',
                  width: '24.59%',
                  height: '27px',
                }}
              >when lantern starts glowing
              </span>
            </p>
            <p>and tiled courtyards look magical. Shaded alleys, where contrast becomes art and light falls in ribbons. If you only remember one thing, remember this: the best Morocco photos often happen in transitions—between day and night, between indoors and outdoors, between shadow and sunlight.</p>

          </div>
        </div>
        <div className="absolute flex items-center justify-center overflow-hidden px-[9px] py-[18px] rounded-[100px] bg-white"
          style={{ left: '50%', top: '596.65px', transform: 'translateX(-50%)', width: '252px', height: '60px' }}>
          <p className="font-montserrat font-medium text-[16px] text-black text-center whitespace-nowrap leading-[17.234px] opacity-80">Visit Photography Guide</p>
        </div>
      </div>

      <p className="absolute font-libre-bodoni font-medium text-[40px] text-black text-center leading-normal whitespace-nowrap" style={{ top: '1577px', left: '50%', transform: 'translateX(-50%)' }}>Behind The Lens</p>
      <div className="absolute bg-white overflow-hidden rounded-[20px]"
        style={{ left: '50%', top: '1659px', transform: 'translateX(-50%)', width: '690px', height: '258px', border: '0.35px solid #8f9cd3' }}>
        <div className="absolute rounded-[120.518px]" 
           style={{ left: '523px', top: '50%', 
           transform: 'translateY(-50%)', width: '145px', 
           height: '215px' ,
           boxShadow: '0px 4px 8px rgba(0,0,0,0.1),0px 14px 14px rgba(0,0,0,0.09),0px 32px 19px rgba(0,0,0,0.05),0px 57px 23px rgba(0,0,0,0.01),0px 89px 25px rgba(0,0,0,0)'
           }}>
          <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" style={{ borderRadius: '120.518px' }} src={imgImage62} />
        </div>
        <div className="absolute flex items-center" style={{ left: '23px', top: '44px' }}>
          <div className="relative shrink-0 w-[71px] h-[71px]"><img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" src={imgImage55} /></div>
          <p className="font-inter font-normal not-italic text-[22px] text-black text-center whitespace-nowrap leading-normal">YouTube</p>
        </div>
        <p className="absolute font-libre-bodoni font-normal text-[22px] text-black text-center leading-normal whitespace-nowrap" style={{ left: '253px', top: '114px', transform: 'translateX(-50%)' }}>Essential Viewing: Capturing magic moments</p>
        <p className="absolute font-inter font-normal not-italic text-[#afafaf] text-[15px] leading-normal" style={{ left: '30px', top: '162px', width: '420px' }}>
          Experience the tranquil beauty of Santorini sunrise through this calming 20mins video. Perfect for planning your morning routine or simply finding inner peace.
          </p>
      </div>
      <div className="absolute font-inter font-normal not-italic text-[#595959] text-[16px]"
        style={{ left: 'calc(50% - 344px)', top: '1960px', width: '689px', lineHeight: '24px', whiteSpace: 'pre-wrap' }}>
        <p className="mb-0">
                imperial cities are like living museums. Ancient walls and modern sneakers. Donkey carts beside scooters. Centuries-old craft tools next to QR-code payments. Don't try to remove those contrasts. Use them to tell the truth of the place. The most powerful
                {" "}
                <span className="font-inter font-medium italic text-[18px] underline decoration-solid leading-[27px] mt-[2px]" style={gradLink}>This is an internal link.</span>
                {" "}  travel images show time stacked on time.
              </p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-bold mb-0" style={{ fontFamily: 'Inter, sans-serif' }}>Respect comes before the shot</p>
        <p className="mb-0">
          If you want portraits, ask politely. A smile, a greeting, and a short gesture are often enough. In Morocco, some people enjoy being photographed, others don’t—and that’s completely fair. If someone says no (or looks uncomfortable), step away. You’ll still find incredible photos everywhere, and the images you do capture will feel lighter because they were taken with respect.
        </p>
      </div>

      <p className="absolute font-libre-bodoni font-medium text-[40px] text-black text-center leading-normal whitespace-nowrap" style={{ top: '2340px', left: '50%', transform: 'translateX(-50%)' }}>Fez: The City of Detail</p>
      <div className="absolute rounded-[200px]" style={{ left: 'calc(30% + 16.6px)', top: '2927px', transform: 'translateX(-50%)', width: '356px', height: '535px' }}>
        <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[200px]" src={imgImage64} />
      </div>
      <div className="absolute rounded-[300px]" style={{ left: 'calc(70% + 31.9px)', top: '3064px', transform: 'translateX(-50%)', width: '261px', height: '261px' }}>
        <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[300px]" src={imgImage93} />
      </div>
      <div className="absolute flex items-center justify-center overflow-hidden px-[8px] py-[4px]" style={{ left: 'calc(70% + 37.9px)', top: '3235px', transform: 'translateX(-50%)', width: '167px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <p className="font-inter font-medium not-italic text-[16px] text-center text-white leading-[27px] w-[195px]">©MountainViews-Shot-Images</p>
      </div>
      <div className="absolute flex items-center justify-center overflow-hidden px-[8px] py-[4px]" style={{ left: 'calc(30% + 20.1px)', top: '3348px', transform: 'translateX(-50%)', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <p className="font-inter font-medium not-italic text-[16px] text-center text-white leading-[27px] w-[195px]">©MountainViews-Shot-Images</p>
      </div>
      <div className="absolute font-inter font-normal not-italic text-[#595959] text-[16px]" 
      style={{ 
        left: '18%', 
        top: '2415px', width: '600px', whiteSpace: 'pre-wrap' }}>
         <p className="mb-0" style={{ lineHeight: '27px' }}>
                  If Marrakech is a drumbeat, Fez is a whisper—an intricate, intelligent city built for slow looking. It has one of the world's most complex medinas, where narrow alleys twist into tiny squares, workshops spill into streets, and carved doors appear like secret portals.
                  What to photograph in Fez.  Medina geometry. Fez's lanes are a
                  dream for {' '}<span className="inline-flex items-center gap-[5px]">
                    <span className="font-inter font-medium italic text-[18px] underline decoration-solid leading-[27px]"
                      style={{ background: 'linear-gradient(92.159deg, rgb(173,84,240) 0.236%, rgb(210,77,188) 89.259%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>This is an external link</span>
                    <span className="relative shrink-0 w-[18px] h-[18px]"><img alt="" className="absolute block w-full h-full" src={imgIcons8ExternalLink11} /></span>
                  </span>{" "}this composition
                  A simple trick: place your camera at chest height, keep your frame level, and let the city's architecture do the work. Fez is naturally cinematic.Zellige (tilework) and artisan surfaces. Tiles here aren't decoration—they're language. Look for mosaic fountains, courtyard walls, and doorframes. Get close for texture shots and pull back for structure.
                </p>
                <p className="mb-0" style={{ lineHeight: '27px' }}>&nbsp;</p>
                <p style={{ lineHeight: '27px' }}>
                  <span className="font-bold" style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'normal' }}>Tip:</span>
                  <span>
                    the smell can be strong—many visitors use mint sprigs offered nearby. Workshop portraits in dramatic light. Craft workshops often have beautiful lighting: beams through small windows, dust floating in the air, warm tones bouncing off wood and metal. If you're invited in (or given permission), shoot gently. Expose for highlights to keep the "light beam" mood. Capture hands, tools, and faces in partial shadow. Focus on gestures: measuring, cutting, threading, polishing.
                  </span>
                </p>
      </div>

      <p className="absolute font-libre-bodoni font-medium text-[40px] text-black text-center leading-normal whitespace-nowrap" style={{ top: '3560px', left: '50%', transform: 'translateX(-50%)' }}>Marrakech: Heat, Motion, and Magic!</p>
      <div className="absolute font-inter font-normal not-italic text-[#595959] text-[16px]" style={{ left: '40px', top: '3645px', width: '688px', lineHeight: '24px', whiteSpace: 'pre-wrap' }}>
        <p className="font-semibold mb-0" style={{ fontFamily: 'Inter, sans-serif' }}>1)Marrakech is bold:</p>
         
          <p className="mb-0" style={{ lineHeight: '27px' }}>
            terracotta walls, palm shadows, buzzing souks, and the famous energy of Jemaa el-Fnaa. It's the city where photography becomes choreography—your timing matters as much as your framing..  What to photograph in Marrakech. Jemaa el-Fnaa: the heartbeat. This square changes constantly. In daylight, it's open and bright. At sunset, it turns cinematic: smoke from grills rises, lanterns glow, crowds thicken, and the sky shifts into purple-blue. Shoot wide to show scaleShoot tight to isolate gestures: hands serving tea, steam, faces lit by warm bulbs. Try motion blur to show movement (even a slight blur can add energy)
            If you can, find a rooftop café view. From above, the square becomes a living pattern—circles of crowds, lines of movement, pulses of light.
          </p>
          <p className="mb-0" style={{ lineHeight: '27px' }}>&nbsp;</p>
          <p className="font-bold mb-0" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '27px' }}>2)Souks: color with control</p>
          <p style={{ lineHeight: '27px' }}>
            Markets are packed with texture: spices, slippers, textiles, lanterns. Your job is to bring order to the visual overload. Choose one "anchor" subject (like a stack of saffron or a wall of lanterns.
            Use hanging rugs{' '}
            <span
              className="font-inter font-medium not-italic text-white rounded-[6px] inline-flex px-2"
              style={{
                height: '27px',
                lineHeight: '27px',
                background: 'linear-gradient(92.329deg, rgb(173,84,240) 0.236%, rgb(210,77,188) 89.259%)'
              }}
            >
              calm after the storm
            </span>{' '}
            for one person to step into the frame—human + texture = story.  Riads:
            calm after the storm<br />
            Riads are interior gardens with fountains, tiled walls, and symmetry. Perfect for clean, elegant photos. Stand centered for symmetry. Capture reflections in water. Shoot details: carved wood, brass handles, mosaic edges. Gardens and graphic lines (if you visit them).
          </p>
      </div>
      <div className="absolute rounded-[121.925px]" style={{ left: '42px', top: '4202.01px', width: '217.027px', height: '352.973px' }}>
        <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[121.925px]" src={imgImage94} />
      </div>
      {([4222.13, 4391] as number[]).map((top, i) => (
        <div key={i} className="absolute bg-white overflow-hidden"
          style={{ left: 'calc(70% - 35.33px)', top: `${top}px`, transform: 'translateX(-50%)', width: '447.465px', height: '143.872px', borderRadius: '12.193px', border: '0.213px solid #8f9cd3' }}>
          <div className="absolute rounded-[121.925px]" style={{ left: '334.68px', top: '50%', transform: 'translateY(-50%)', width: '90.834px', height: '113.39px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1),0px 14px 14px rgba(0,0,0,0.09),0px 32px 19px rgba(0,0,0,0.05),0px 57px 23px rgba(0,0,0,0.01),0px 89px 25px rgba(0,0,0,0)' }}>
            <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[121.925px]" src={imgImage56} />
          </div>
          <div className="absolute flex gap-[6.096px] items-center" style={{ left: '22.55px', top: '22.55px' }}>
            <div className="relative shrink-0 w-[31.701px] h-[31.701px]"><img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" src={imgImage60} /></div>
            <p className="font-inter font-normal not-italic text-[13.412px] text-black text-center whitespace-nowrap leading-normal">Instagram</p>
          </div>
          <p className="absolute font-libre-bodoni font-normal text-[13.412px] text-black text-center leading-normal whitespace-nowrap" style={{ left: '155.05px', top: '59.74px', transform: 'translateX(-50%)' }}>Sunrise Over Aegean: A peaceful meditation</p>
          <p className="absolute font-inter font-normal not-italic text-[#afafaf] leading-normal" style={{ left: '22.55px', top: '89px', width: '256.043px', fontSize: '9.144px' }}>Experience the tranquil beauty of Santorini sunrise through this calming 20mins video.</p>
        </div>
      ))}

      <p className="absolute font-libre-bodoni font-medium text-[40px] text-black text-center" style={{ top: '4689px', left: '50%', transform: 'translateX(-50%)', width: '581px', lineHeight: '50px' }}>Closing: Morocco as a Photographic Teacher</p>
      <div className="absolute font-inter font-normal not-italic text-[#595959] text-[16px]" style={{ left: 'calc(50% - 268px)', top: '4819px', width: '538px', lineHeight: '24px', whiteSpace: 'pre-wrap' }}>
        <p className="mb-0">
          1)Marrakech is bold: terracotta walls, palm shadows, buzzing souks, and the famous energy of Jemaa el-Fnaa. It’s the city where photography becomes choreography—your timing matters as much as your framing..  What to photograph in Marrakech. Jemaa el-Fnaa: the heartbeat. This square changes constantly. In daylight, it’s open and bright. At sunset, it turns cinematic: smoke from grills rises, lanterns glow, crowds thicken, and the sky shifts into purple-blue. Shoot wide to show scaleShoot tight to isolate gestures: hands serving tea, steam, faces lit by warm bulbs. Try motion blur to show movement (even a slight blur can add energy)
If you can, find a rooftop café view. From above, the square becomes a living pattern—circles of crowds, lines of movement, pulses of light.
        </p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute rounded-[400px]" style={{ left: '50%', top: '5175px', transform: 'translateX(-50%)', width: '568px', height: '430px' }}>
        <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[400px]" src={imgImage98} />
      </div>
      <div className="absolute flex items-center justify-center overflow-hidden px-[8px] py-[4px]" style={{ left: '50%', top: '5548px', transform: 'translateX(-50%)', width: '185px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <p className="font-inter font-medium not-italic text-[16px] text-center text-white leading-[20px] w-[195px]">©MoroccoShots.com</p>
      </div>
      <div className="absolute font-inter font-normal not-italic text-[#595959] text-[16px]" style={{ left: 'calc(50% - 343px)', top: '5669px', width: '686px', whiteSpace: 'pre-wrap' }}>
        <p className="mb-0">
            <span className="font-bold" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '27px', fontStyle: 'normal' }}>2)Souks: color with control</span>
            <span style={{ lineHeight: '27px' }}><br />
           Markets are packed with texture: spices, slippers, textiles, lanterns. Your job is to bring order to the visual overload. Choose one “anchor” subject (like a stack of saffron or a wall of lanterns. Use hanging rugs as a backgroundWait for one person to step into the frame—
             {' '}
            <span
              className="font-inter font-medium not-italic text-white rounded-[6px] inline-flex px-2"
              style={{
                height: '27px',
                lineHeight: '27px',
                background: 'linear-gradient(92.329deg, rgb(173,84,240) 0.236%, rgb(210,77,188) 89.259%)'
              }}
            >
            human + texture = story
            </span>{' '}
              Riads: calm after the storm Riads are interior gardens with fountains, tiled walls, and symmetry. Perfect for clean, elegant photos.Stand centered for symmetry. Capture reflections in water. Shoot details: carved wood, brass handles, mosaic edges. Gardens and graphic lines (if you visit them)
            </span>
          </p>
          <p style={{ lineHeight: '27px' }}><br />
            Places like Jardin Majorelle (or other gardens) are a playground for composition. Focus on color-blocking: blue wall + green plants. Use negative space for minimalist images. Shoot leaves and shadows like abstract art Marrakech photo challenge. Make a 12-shot sequence called “From Noise to Silence.” Start in the busiest place you can find, and end in the quietest courtyard you can access. That sequence alone can become your article’s visual spine. 
          </p>
      </div>
      <div className="absolute" style={{ left: '50%', top: '6142px', transform: 'translateX(-50%)' }}><RelatedArticles /></div>
      <div className="absolute left-0 right-0" style={{ top: '6868px' }}><Footer /></div>
      {/* <Header /> */}
    </div>
  );
}
