import Header from '../Header';
import Footer from '../Footer';
import RelatedArticles from '../RelatedArticles';
import {
  imgImage62, imgRectangle, imgEllipsesBg, imgImage55, imgImage56, imgImage60, imgImage64, imgImage93, imgImage94, imgImage98,
  imgIcons8ExternalLink11,
} from '../../lib/images';
import { Tags, AuthorRow, gradLink } from './Shared';

export default function IndexMobile() {
  return (
    <div className="md:hidden  bg-white w-full overflow-x-hidden">
      <div className="relative !mx-auto overflow-hidden"
        style={{ width: '100%', 
        maxWidth: '375px', 
       // minHeight: '8530px' ,
       minHeight: '8530px',
        overflow: 'hidden',  //adddd
        }}>

        <div className="absolute pointer-events-none" 
         style={{ height: '2325.934px', 
         left: '-125px', top: '527px', 
         width: '1564px' ,
         overflow: 'hidden',  //adddd
         }}>
          <div className="absolute" style={{ inset: '-12.19% -1.66% -9.63% -18.13%' }}><img alt="" className="block w-full h-full" src={imgEllipsesBg} /></div>
        </div>
        <div className="absolute flex items-center justify-center" 
        style={{ left: '-74px', top: '-171.83px', 
        width: '588.115px', 
        height: '477.937px' ,
        overflow: 'hidden',  //adddd
        }}>
          <div style={{ transform: 'rotate(-62.98deg)' }}>
            <div className="relative overflow-hidden" style={{ backgroundColor: '#eef3fe', height: '522.448px', width: '270.069px', borderRadius: '243.862px' }}>
              <div className="absolute flex items-center justify-center" style={{ left: '70.37px', top: '348.13px', width: '97.677px', height: '97.677px' }}>
                <div style={{ transform: 'rotate(0.41deg)' }}>
                  <div className="relative" style={{ borderRadius: '58.78px', width: '96.986px', height: '96.986px' }}>
                    <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" style={{ borderRadius: '58.78px' }} src={imgImage62} />
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center" style={{ left: '12.35px', top: '156.2px', width: '199.497px', height: '199.497px' }}>
                <div style={{ transform: 'rotate(-71.79deg)' }}>
                  <div className="relative" style={{ borderRadius: '179.688px', width: '158.022px', height: '158.022px' }}>
                    <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" style={{ borderRadius: '179.688px' }} src={imgRectangle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute flex flex-col items-start" style={{ left: '50%', top: '273px', transform: 'translateX(-50%)', width: '343px' }}>
          <div className="flex flex-col gap-[25px] items-start w-full">
            <div className="flex flex-col gap-[29px] items-start w-full">
              <div className="flex items-center justify-center overflow-hidden px-[41px] py-[12px] rounded-[100px] shrink-0"
                style={{ background: 'linear-gradient(to right, #8f9cd3, #ffcaa4)', width: '155px', height: '40px' }}>
                <p className="font-libre-bodoni font-normal text-[14px] text-white whitespace-nowrap leading-normal">Photo Journey</p>
              </div>
              <div className="flex flex-col gap-[17px] items-start w-full">
                <p className="font-libre-bodoni font-normal text-black" style={{ fontSize: '40px', lineHeight: '40px', width: '342px' }}>Through the Lens:<br />Morocco's Imperial Cities</p>
                <p className="font-inter font-normal not-italic text-[#595959] text-[14px]" style={{ lineHeight: '24px' }}>Morocco doesn't just look beautiful. It behaves beautifully in a camera. Light slips through cedar lattices like water. Colors sit confidently next to each other—cobalt against chalk-white, saffron against shadow, without ever feeling too loud.</p>
              </div>
            </div>
            <div className="flex flex-col gap-[17px] items-start">
              <Tags size="sm" />
              <AuthorRow scale={0.72} />
            </div>
          </div>
        </div>

        <div className="absolute overflow-hidden"
          style={{ left: '50%', top: '795px', transform: 'translateX(-50%)', width: '342px', height: '794px', background: 'linear-gradient(to right, #8f9cd3, #ffcaa4)', border: '0.162px solid #8f9cd3', borderRadius: '230px' }}>
          <div className="absolute flex flex-col gap-[20px] items-center text-center text-white"
            style={{ left: '50%', top: '80.84px', transform: 'translateX(-50%)', width: '296px', height: '572px' }}>
            <p className="font-libre-bodoni font-normal text-[30px] text-center text-white relative shrink-0" style={{ lineHeight: '37px', width: '286px' }}>Before You Shoot: A Quick Morocco Photography Mindset</p>
            <div className="font-inter font-normal not-italic text-[14px] text-center text-white relative shrink-0" style={{ lineHeight: '21px', width: '280px', whiteSpace: 'pre-wrap' }}>
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
          <div className="absolute flex items-center justify-center overflow-hidden bg-white"
            style={{ left: '50%', top: '706.84px', transform: 'translateX(-50%)', width: '176px', height: '40px', borderRadius: '46.144px' }}>
            <p className="font-montserrat font-medium text-[12px] text-black text-center whitespace-nowrap opacity-80" style={{ lineHeight: '7.952px' }}>Visit Photography Guide</p>
          </div>
        </div>

        <p className="absolute font-libre-bodoni font-medium text-[30px] text-black text-center leading-normal whitespace-nowrap" style={{ top: '1682px', left: '50%', transform: 'translateX(-50%)' }}>Behind The Lens</p>
        <div className="absolute bg-white overflow-hidden" style={{ left: '50%', top: '1759px', transform: 'translateX(-50%)', width: '335px', height: '170px', borderRadius: '9.564px', border: '0.167px solid #8f9cd3' }}>
          <div className="absolute rounded-[120.518px]" style={{ left: '238.61px', top: '50%', transform: 'translateY(-50%)', width: '84px', height: '131px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1),0px 14px 14px rgba(0,0,0,0.09),0px 32px 19px rgba(0,0,0,0.05),0px 57px 23px rgba(0,0,0,0.01),0px 89px 25px rgba(0,0,0,0)' }}>
            <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" style={{ borderRadius: '120.518px' }} src={imgImage62} />
          </div>
          <div className="absolute flex items-center" style={{ left: '12px', top: '25px' }}>
            <div className="relative shrink-0 w-[30.272px] h-[30.272px]"><img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" src={imgImage55} /></div>
            <p className="font-inter font-normal not-italic text-[9.38px] text-black text-center whitespace-nowrap leading-normal">YouTube</p>
          </div>
          <p className="absolute font-libre-bodoni font-normal text-[12px] text-black leading-normal" style={{ left: '15.61px', top: '59.81px', width: '212px' }}>Essential Viewing: Capturing magic moments</p>
          <p className="absolute font-inter font-normal not-italic text-[#afafaf] text-[10px] leading-normal" style={{ left: '15.61px', top: '97.81px', width: '212px' }}>Experience the tranquil beauty of Santorini sunrise through this calming 20mins video.</p>
        </div>
        <div className="absolute font-inter font-normal not-italic text-[#595959] text-[14px]" style={{ left: 'calc(50% - 165.5px)', top: '1967px', width: '339px', lineHeight: '21px', whiteSpace: 'pre-wrap' }}>
           <p className="mb-0">
                imperial cities are like living museums. Ancient walls and modern sneakers. Donkey carts beside scooters. Centuries-old craft tools next to QR-code payments. Don't try to remove those contrasts. Use them to tell the truth of the place. The most powerful
                {" "}
                <span className="font-inter font-medium italic text-[15px] underline decoration-solid leading-[27px] mt-[2px]" style={gradLink}>This is an internal link.</span>
                {" "}  travel images show time stacked on time.
              </p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-bold mb-0" style={{ fontFamily: 'Inter, sans-serif' }}>Respect comes before the shot</p>
        <p className="mb-0">
          If you want portraits, ask politely. A smile, a greeting, and a short gesture are often enough. In Morocco, some people enjoy being photographed, others don’t—and that’s completely fair. If someone says no (or looks uncomfortable), step away. You’ll still find incredible photos everywhere, and the images you do capture will feel lighter because they were taken with respect.
        </p>
        </div>

        <p className="absolute font-libre-bodoni font-medium text-[30px] text-black text-center leading-normal" style={{ top: '2411px', left: '50%', transform: 'translateX(-50%)', width: '333px' }}>Fez: The City of Detail</p>
        <div className="absolute font-inter font-normal not-italic text-[#595959]" style={{ left: 'calc(50% - 151.5px)', top: '2473px', width: '303px', whiteSpace: 'pre-wrap', fontSize: 0 }}>
           <p className="mb-0" style={{ lineHeight: '24px',fontSize: '14px' }}>
                  If Marrakech is a drumbeat, Fez is a whisper—an intricate, intelligent city built for slow looking. It has one of the world's most complex medinas, where narrow alleys twist into tiny squares, workshops spill into streets, and carved doors appear like secret portals.
                  What to photograph in Fez.  Medina geometry. Fez's lanes are a
                  dream for {' '}<span className="inline-flex items-center gap-[5px]">
                    <span className="font-inter font-medium italic text-[15px] underline decoration-solid leading-[27px]"
                      style={{ background: 'linear-gradient(92.159deg, rgb(173,84,240) 0.236%, rgb(210,77,188) 89.259%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>This is an external link</span>
                    <span className="relative shrink-0 w-[18px] h-[18px]"><img alt="" className="absolute block w-full h-full" src={imgIcons8ExternalLink11} /></span>
                  </span>{" "}this composition
                  A simple trick: place your camera at chest height, keep your frame level, and let the city's architecture do the work. Fez is naturally cinematic.Zellige (tilework) and artisan surfaces. Tiles here aren't decoration—they're language. Look for mosaic fountains, courtyard walls, and doorframes. Get close for texture shots and pull back for structure.
            </p>
                <p className="mb-0" style={{ lineHeight: '24px',fontSize: '14px' }}>&nbsp;</p>
                <p style={{ lineHeight: '27px' }}>
                  <span className="font-bold" style={{ fontFamily: 'Inter, sans-serif',lineHeight: '24px', fontSize: '14px', fontStyle: 'normal' }}>Tip:</span>
                  <span style={{ fontFamily: 'Inter, sans-serif',lineHeight: '24px', fontSize: '14px', fontStyle: 'normal' }}>
                    the smell can be strong—many visitors use mint sprigs offered nearby. Workshop portraits in dramatic light. Craft workshops often have beautiful lighting: beams through small windows, dust floating in the air, warm tones bouncing off wood and metal. If you're invited in (or given permission), shoot gently. Expose for highlights to keep the "light beam" mood. Capture hands, tools, and faces in partial shadow. Focus on gestures: measuring, cutting, threading, polishing.
                  </span>
                </p>
        </div>
        <div className="absolute rounded-[109.35px]" style={{ left: 'calc(30% - 0.18px)', top: '3386.25px', transform: 'translateX(-50%)', width: '194.643px', height: '292.511px' }}>
          <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[109.35px]" src={imgImage64} />
        </div>
        <div className="absolute rounded-[164.025px]" style={{ left: 'calc(80% - 11.35px)', top: '3461.15px', transform: 'translateX(-50%)', width: '142.702px', height: '142.702px' }}>
          <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[164.025px]" src={imgImage93} />
        </div>
        <div className="absolute flex items-center justify-center overflow-hidden" style={{ left: 'calc(80% - 8.07px)', top: '3554.65px', transform: 'translateX(-50%)', width: '91.307px', height: '33.898px', padding: '2.187px 4.374px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <p className="font-inter font-medium not-italic text-center text-white w-[106.616px]" style={{ fontSize: '12px', lineHeight: '14.762px' }}>©MountainViews-Shot-Images</p>
        </div>
        <div className="absolute flex items-center justify-center overflow-hidden" style={{ left: 'calc(30% + 1.73px)', top: '3616.43px', transform: 'translateX(-50%)', width: '115.364px', height: '33.898px', padding: '2.187px 4.374px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <p className="font-inter font-medium not-italic text-center text-white w-[106.616px]" style={{ fontSize: '12px', lineHeight: '14.762px' }}>©MountainViews-Shot-Images</p>
        </div>

        <p className="absolute font-libre-bodoni font-medium text-[30px] text-black" style={{ top: '3774px', left: '20px', width: '331px', lineHeight: '37px' }}>Marrakech: Heat, Motion, and Magic!</p>
        <div className="absolute font-inter font-normal not-italic text-[#595959] text-[14px]" style={{ left: '20px', top: '3878px', width: '340px', lineHeight: '21px', whiteSpace: 'pre-wrap' }}>
          <p className="font-semibold mb-0" style={{ fontFamily: 'Inter, sans-serif' }}>1)Marrakech is bold:</p>

           <p className="mb-0" style={{ lineHeight: '27px' }}>
            terracotta walls, palm shadows, buzzing souks, and the famous energy of Jemaa el-Fnaa. It's the city where photography becomes choreography—your timing matters as much as your framing..  What to photograph in Marrakech. Jemaa el-Fnaa: the heartbeat. This square changes constantly. 
            In daylight, it's open and bright. At sunset, 
            it turns cinematic: smoke from grills rises, 
            lanterns glow, crowds thicken, and the sky 
            shifts into purple-blue. Shoot wide to show scale
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

        <div className="absolute rounded-[121.925px]" style={{ left: 'calc(20% + 4px)', top: '4621px', width: '217.027px', height: '352.973px' }}>
          <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[121.925px]" src={imgImage94} />
        </div>
        <div className="absolute flex items-center justify-center overflow-hidden" style={{ left: '50%', top: '4901.43px', transform: 'translateX(-50%)', width: '109.123px', height: '46.941px', padding: '2.439px 4.877px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <p className="font-inter font-medium not-italic text-center text-white w-[118.877px]" style={{ fontSize: '9.754px', lineHeight: '12.193px' }}>©This is a random copyrighted image source</p>
        </div>
        {([5014, 5154] as number[]).map((top, i) => (
          <div key={i} className="absolute bg-white overflow-hidden"
            style={{ left: i === 0 ? 'calc(50% - 3px)' : 'calc(50% + 2px)', top: `${top}px`, transform: 'translateX(-50%)', width: '341px', height: '119px', borderRadius: '10.109px', border: '0.177px solid #8f9cd3' }}>
            <div className="absolute rounded-[101.09px]" style={{ left: '265px', top: '50%', transform: 'translateY(-50%)', width: '65px', height: '94px', boxShadow:'0 9px 20px rgba(224,224,224,0.10), 0 37px 37px rgba(224,224,224,0.09)' }}>
              <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[101.09px]" src={imgImage56} />
            </div>
            <div className="absolute flex gap-[5.054px] items-center" style={{ left: '12px', top: '18.7px' }}>
              <div className="relative shrink-0 w-[26.283px] h-[26.283px]"><img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" src={imgImage60} /></div>
              <p className="font-inter font-normal not-italic text-[11.12px] text-black text-center whitespace-nowrap leading-normal">Instagram</p>
            </div>
            <p className="absolute font-libre-bodoni font-normal text-[12px] text-black text-center leading-normal whitespace-nowrap" style={{ left: '130.5px', top: '51.53px', transform: 'translateX(-50%)' }}>Sunrise Over Aegean: A peaceful meditation</p>
            <p className="absolute font-inter font-normal not-italic text-[#afafaf] leading-normal" style={{ left: '12px', top: '73.79px', width: '212.289px', fontSize: '8px' }}>Experience the tranquil beauty of Santorini sunrise through this calming 20mins video.</p>
          </div>
        ))}

        <p className="absolute font-libre-bodoni font-medium text-[30px] text-black text-center" style={{ top: '5353px', left: '50%', transform: 'translateX(-50%)', width: '341px', lineHeight: '37px' }}>Closing: Morocco as a Photographic Teacher</p>
        <div className="absolute font-inter font-normal not-italic text-[#595959] text-[14px]" style={{ left: 'calc(50% - 144.5px)', top: '5450px', width: '289px', lineHeight: '21px', whiteSpace: 'pre-wrap' }}>
          <p className="mb-0">
              1)Marrakech is bold: terracotta walls, palm shadows, buzzing souks, and the famous energy of Jemaa el-Fnaa. It’s the city where photography becomes choreography—your timing matters as much as your framing..  What to photograph in Marrakech. Jemaa el-Fnaa: the heartbeat. This square changes constantly. In daylight, it’s open and bright. At sunset, it turns cinematic: smoke from grills rises, lanterns glow, crowds thicken, and the sky shifts into purple-blue. Shoot wide to show scaleShoot tight to isolate gestures: hands serving tea, steam, faces lit by warm bulbs. Try motion blur to show movement (even a slight blur can add energy)
If you can, find a rooftop café view. From above, the square becomes a living pattern—circles of crowds, lines of movement, pulses of light.
            </p>
          <p>&nbsp;</p>
        </div>
        <div className="absolute rounded-[244.366px]" style={{ left: '50%', top: '5931px', transform: 'translateX(-50%)', width: '347px', height: '262.694px' }}>
          <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[244.366px]" src={imgImage98} />
        </div>
        <div className="absolute flex items-center justify-center overflow-hidden" style={{ left: '50%', top: '6147px', transform: 'translateX(-50%)', padding: '3.604px 7.208px', width: '166.695px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <p className="font-inter font-medium not-italic text-center text-white w-[175.706px]" style={{ fontSize: '14.417px', lineHeight: '18.021px' }}>©MoroccoShots.com</p>
        </div>
        <div className="absolute font-inter font-normal not-italic text-[#595959] text-[14px]" style={{ left: 'calc(50% - 170.5px)', top: '6248px', width: '338px', whiteSpace: 'pre-wrap' }}>
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
              Riads: calm after the storm 
              Riads are interior gardens 
              with fountains, tiled walls,
               and symmetry. Perfect for 
               clean, elegant photos.Stand centered 
            </span>
          </p>
          <p style={{ lineHeight: '27px' }}><br />
            Places like Jardin Majorelle (or other gardens) 
            are a playground for composition. Focus 
            on color-blocking: blue wall + green plants. 
            Use negative space for minimalist images. 
            Shoot leaves and shadows like abstract art 
             Marrakech photo challenge. Make a 12-shot 
            sequence called “From Noise to Silence.” 
          </p>
        </div>

        <div className="absolute" 
          style={{ 
            left: '50%', 
            top: '6800px', 
            transform: 'translateX(-50%)' 
            }}>
          <RelatedArticles />
        </div>
        <div 
        className="z-[999px] absolute left-0 right-0" 
            style={{ 
              top: '7527px' 
            }}>
          <Footer />
        </div>
        {/* <Header /> */}
      </div>
    </div>
  );
}
