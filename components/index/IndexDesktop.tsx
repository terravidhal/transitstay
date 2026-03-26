import Header from '../Header';
import Footer from '../Footer';
import RelatedArticles from '../RelatedArticles';
import {
  imgImage62, imgImage64, imgImage68, imgImage93, imgImage94, imgImage98,
  imgImage55, imgImage56, imgImage60,
  imgEllipsesBg, imgRectangle, imgEllipse6, imgEllipse73, imgEllipse79,
  imgAdventure, imgSolo, imgIcons8Elephant1,
  imgIcons8ExternalLink11,
} from '../../lib/images';
import { p, Tags, AuthorRow, Highlight, gradLink } from './Shared';


boxShadow:'0px 1px 2px rgba(0,0,0,0.04),0px 5px 6px rgba(0,0,0,0.03),0px 12px 8px rgba(0,0,0,0.02),0px 20px 10px rgba(0,0,0,0.01),0px 35px 12px rgba(0,0,0,0)'

export default function IndexDesktop() {
  return (
    <div className="desktop-only hidden lg:block bg-white" style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', overflowX: 'hidden' }}>

      {/* ── SECTION HERO (flux normal) ── */}
      <section className="relative" style={{ paddingTop: '176px', paddingBottom: '169px' }}>

        {/* Ellipses bg */}
        <div className="absolute pointer-events-none" style={{ height: '3281.33px', left: '-0.9%', top: '418px', width: '153.2%' }}>
          <div className="absolute" style={{ inset: '-12.19% -1.66% -9.63% -18.13%' }}>
            <img alt="" className="block w-full h-full" src={imgEllipsesBg} />
          </div>
        </div>

        {/* Blob hero */}
        <div className="absolute pointer-events-none"
          style={{ left: 'calc(50% + 19.54px)', top: '-352.39px', width: '907.578px', height: '1205.995px', zIndex: 0 }}>
          <div style={{ transform: 'rotate(-18.21deg)' }}>
            <div className="relative overflow-hidden"
              style={{ backgroundColor: '#eef3fe', height: '1071.198px', width: '602.972px', borderRadius: '500px' }}>
              <div className="absolute flex items-center justify-center"
                style={{ left: '180.82px', top: '695.15px', width: '200.27px', height: '200.27px' }}>
                <div style={{ transform: 'rotate(0.41deg)' }}>
                  <div className="relative" style={{ borderRadius: '120.518px', width: '198.855px', height: '198.855px', boxShadow: '0px 4.419px 8.838px rgba(0,0,0,0.1),0px 15.467px 15.467px rgba(0,0,0,0.09),0px 35.352px 20.99px rgba(0,0,0,0.05),0px 62.971px 25.409px rgba(0,0,0,0.01),0px 98.323px 27.619px rgba(0,0,0,0)' }}>
                    <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" style={{ borderRadius: '120.518px' }} src={imgImage62} />
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center"
                style={{ left: '62.07px', top: '301.7px', width: '409.037px', height: '409.037px' }}>
                <div style={{ transform: 'rotate(-71.79deg)' }}>
                  <div className="relative" style={{ borderRadius: '368.421px', width: '324px', height: '324px' }}>
                    <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" style={{ borderRadius: '368.421px' }} src={imgRectangle} />
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center"
                style={{ left: 'calc(50% - 161.91px)', top: '522.16px', width: '194.099px', height: '129.091px' }}>
                <div style={{ transform: 'rotate(18.21deg)' }}>
                  <div className="flex items-center justify-center overflow-hidden px-[8px] py-[4px]"
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '179px', height: '77px' }}>
                    <p className="font-inter font-medium text-[16px] text-center text-white leading-[20px] not-italic w-[195px]">©This is a random copyrighted image source</p>
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center"
                style={{ left: 'calc(50% - 110.71px)', top: '779.85px', width: '152.894px', height: '101.686px' }}>
                <div style={{ transform: 'rotate(18.21deg)' }}>
                  <div className="flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '141px', height: '60.654px', padding: '3.151px 6.302px' }}>
                    <p className="font-inter font-medium text-center text-white not-italic w-[153.603px]" style={{ fontSize: '12.603px', lineHeight: '15.754px' }}>©This is a random copyrighted image source</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu héro gauche */}
        <div className="relative flex flex-col items-start" style={{ marginLeft: p(75), maxWidth: '46%', zIndex: 1 }}>
          {/* Badge */}
          <div className="flex items-center justify-center overflow-hidden px-[41px]! py-[12px]! rounded-[100px] shrink-0"
            style={{ background: 'linear-gradient(to right, #8f9cd3, #ffcaa4)', width: '189px' }}>
            <p className="font-libre-bodoni font-normal text-[20px] text-white whitespace-nowrap leading-normal">Photo Journey</p>
          </div>
          <div style={{ height: '34px', flexShrink: 0 }} />
          <p className="font-libre-bodoni font-normal text-black text-[70px] w-full" style={{ lineHeight: '80px' }}>
            Through the Lens:<br />Morocco's Imperial Cities
          </p>
          <div style={{ height: '16px', flexShrink: 0 }} />
          <p className="font-inter font-normal not-italic text-[#595959] text-[18px] w-full" style={{ lineHeight: '27px' }}>
            Morocco doesn't just look beautiful. It behaves beautifully in a camera. Light slips through cedar lattices like water. Colors sit confidently next to each other—cobalt against chalk-white, saffron against shadow, without ever feeling too loud.
          </p>
          <div style={{ height: '54px', flexShrink: 0 }} />
          <Tags />
          <div style={{ height: '17px', flexShrink: 0 }} />
          <AuthorRow />
        </div>
      </section>

      {/* ── GRADIENT CARD (flux normal, centré) ── */}
      <section className="flex justify-center px-4" style={{ paddingBottom: '128px' }}>
        <div className="overflow-hidden rounded-[600px] w-full"
          style={{ maxWidth: '968px', height: '581px', background: 'linear-gradient(to right, #8f9cd3, #ffcaa4)', border: '0.35px solid #8f9cd3', boxShadow: '0px 229px 64px rgba(224,224,224,0),0px 146px 59px rgba(224,224,224,0.01),0px 82px 49px rgba(224,224,224,0.05),0px 37px 37px rgba(224,224,224,0.09),0px 9px 20px rgba(224,224,224,0.1)', position: 'relative' }}>
          <p className="absolute font-libre-bodoni font-normal text-[45px] text-center text-white"
            style={{ left: '50%', top: '44px', transform: 'translateX(-50%)', width: '73.14%', lineHeight: '50px' }}>
            Before You Shoot: A Quick Morocco Photography Mindset
          </p>
          <div className="absolute font-inter font-normal not-italic text-[18px] text-center text-white"
            style={{ left: '50%', top: '168px', transform: 'translateX(-50%)', width: '70.14%', lineHeight: '27px' }}>
            <p className="mb-0">
              Chase soft light, not just golden light.
              Morocco's sun can be dramatic.
              That's a gift, but it can also
              be unforgiving—especially
              around midday when shadows
              get sharp and highlights blow out fast.
              Your most flattering images usually come
              from: Early morning, when the medina wakes slowly
              and you can shoot clean streets before the crowds.
              Late afternoon to sunset, when warm tones add depth and
              faces look softer.{" "}
              <span className='rounded-md px-2! py-0.5! font-inter font-medium not-italic text-[17px] text-white'
                style={{
                  background: 'linear-gradient(92.329deg, rgb(173,84,240) 0.236%, rgb(210,77,188) 89.259%)',
                  width: '24.59%',
                  height: '27px',
                }}
              >when lantern starts glowing
              </span>{" "}
            <span>and tiled courtyards look magical. Shaded alleys, where contrast becomes art and light falls in ribbons. If you only remember one thing, remember this: the best Morocco photos often happen in transitions—between day and night, between indoors and outdoors, between shadow and sunlight.</span>
            </p>
          </div>
          <div className="absolute flex items-center justify-center overflow-hidden px-[9px] py-[18px] rounded-[100px] bg-white"
            style={{ left: '50%', top: '477px', transform: 'translateX(-50%)', width: '290px', height: '60px' }}>
            <p className="font-montserrat font-medium text-[16px] text-black text-center whitespace-nowrap leading-[17.234px] opacity-80">Visit Photography Guide</p>
          </div>
        </div>
      </section>

      {/* ── SECTION CONTENU ── */}
      <section className="relative" style={{ minHeight: '6100px' }}>

        {/* BEHIND THE LENS */}
        <p className="absolute font-libre-bodoni font-medium text-[50px] text-black text-center leading-normal whitespace-nowrap"
          style={{ top: '151px', left: '50%', transform: 'translateX(-50%)' }}>Behind The Lens</p>

        {/* YouTube card + Body right */}
        <div className="absolute flex items-start gap-[2%]"
          style={{ left: p(75), right: p(75), top: '286px' }}>

          {/* YouTube card */}
          <div className="bg-white overflow-hidden rounded-[20px] shrink-0"
            style={{ flexBasis: '44%', minWidth: 0, height: '258px', border: '0.35px solid #8f9cd3', boxShadow: '0px 9px 20px rgba(224,224,224,0.1)', position: 'relative' }}>
            <div className="mr-4 shadow-[0_4px_9px_rgba(0,0,0,0.3)] absolute rounded-[120.518px]" style={{ right: 0, top: '50%', transform: 'translateY(-50%)', width: '22%', height: '215px' }}>
              <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" style={{ borderRadius: '120.518px' }} src={imgImage62} />
            </div>
            <div className="absolute flex items-center" style={{ left: '16px', top: '39px' }}>
              <div className="relative shrink-0 w-[71px] h-[71px]"><img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" src={imgImage55} /></div>
              <p className="font-inter font-normal not-italic text-[22px] text-black text-center whitespace-nowrap leading-normal">YouTube</p>
            </div>
            <p className="absolute font-libre-bodoni font-normal text-[22px] text-black leading-normal" style={{ left: '24.01px', top: '109px', right: '25%' }}>Essential Viewing: Capturing magic moments</p>
            <p className="absolute font-inter font-normal not-italic text-[#afafaf] text-[15px] leading-normal mt-2" style={{ left: '25px', top: '166px', right: '25%' }}>Experience the tranquil beauty of Santorini sunrise through this calming 20mins video.</p>
          </div>

          {/* Body right */}
          <div className="flex-1 min-w-0">
            <div className="font-inter font-normal not-italic text-[#595959] text-[18px]"
              style={{ lineHeight: '27px', whiteSpace: 'pre-wrap' }}>
              <p className="mb-0">
                imperial cities are like living museums. Ancient walls and modern sneakers. Donkey carts beside scooters. Centuries-old craft tools next to QR-code payments. Don't try to remove those contrasts. Use them to tell the truth of the place. The most powerful
                {" "}
                <span className="font-inter font-medium italic text-[18px] underline decoration-solid leading-[27px] mt-[2px]" style={gradLink}>This is an internal link.</span>
                {" "}  travel images show time stacked on time.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p className="font-bold mb-0" style={{ fontFamily: 'Inter, sans-serif' }}>Respect comes before the shot</p>
              <p className="mb-0">
                If you want portraits, ask politely. A smile, a greeting, and a short gesture are often enough. In Morocco, some people enjoy being photographed, others don't—and that's completely fair. If someone says no (or looks uncomfortable), step away. You'll still find incredible photos everywhere, and the images you do capture will feel lighter because they were taken with respect.
              </p>
            </div>
          </div>
        </div>

        {/* FEZ */}
        <div className="absolute flex flex-col" style={{ left: p(75), right: p(75), top: '632px' }}>
          <p className="font-libre-bodoni font-medium text-[50px] text-black leading-normal whitespace-nowrap mb-[30px] mt-28">
            Fez: The City of Detail
          </p>
          <div className="flex items-start gap-[3%]">
            {/* Colonne gauche — texte */}
            <div className="flex-1 min-w-0">
              <div className="font-inter font-normal not-italic text-[#595959] text-[18px]"
                style={{ whiteSpace: 'pre-wrap' }}>
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
            </div>

            {/* Colonne droite — images */}
            <div className="relative shrink-0" style={{ flexBasis: '42%', minWidth: 0, height: '600px' }}>
              <div className="absolute rounded-[200px]"
                style={{ left: 0, top: 0, width: '356px', height: '535px', 
               boxShadow:'0px 4px 8px rgba(0,0,0,0.1),0px 14px 14px rgba(0,0,0,0.09),0px 32px 19px rgba(0,0,0,0.05),0px 57px 23px rgba(0,0,0,0.01),0px 89px 25px rgba(0,0,0,0)'
                }}>
                <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[200px]" src={imgImage64} />
              </div>
              <div className="absolute flex items-center justify-center overflow-hidden px-[8px] py-[4px]"
                style={{ left: '178px', top: '438px', width: '167px', transform: 'translateX(-50%)', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <p className="font-inter font-medium not-italic text-[16px] text-center text-white leading-[27px] w-[195px]">©MountainViews-Shot-Images</p>
              </div>
              <div className="absolute rounded-[300px]"
                style={{ left: '170px', top: '275px', width: '261px', height: '261px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1),0px 14px 14px rgba(0,0,0,0.09),0px 32px 19px rgba(0,0,0,0.05),0px 57px 23px rgba(0,0,0,0.01),0px 89px 25px rgba(0,0,0,0)' }}>
                <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[300px]" src={imgImage93} />
              </div>
              <div className="absolute flex items-center justify-center overflow-hidden px-[8px] py-[4px]"
                style={{ left: '301px', top: '408px', width: '167px', transform: 'translateX(-50%)', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <p className="font-inter font-medium not-italic text-[16px] text-center text-white leading-[27px] w-[195px]">©MountainViews-Shot-Images</p>
              </div>
            </div>
          </div>
        </div>{/* fin conteneur Fez */}

        {/* MARRAKECH */}
        <p className="absolute mt-40 font-libre-bodoni font-medium text-[50px] text-black text-center leading-normal whitespace-nowrap"
          style={{ top: '1479px', left: '50%', transform: 'translateX(-50%)' }}>Marrakech: Heat, Motion, and Magic!</p>

        <div className="absolute mt-40 font-inter font-normal not-italic text-[#595959] text-[18px]"
          style={{ left: 'calc(50% - 415px)', top: '1574px', width: '831px', whiteSpace: 'pre-wrap' }}>
          <p className="font-semibold mb-0" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '27px' }}>1)Marrakech is bold:</p>
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
              className="font-inter font-medium not-italic text-white rounded-[6px] inline-flex px-2! py-0.5!"
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

        {/* ── IMAGE PILL MARRAKECH + INSTAGRAM CARDS — flex row ── */}
        <div className="absolute mt-40 flex items-start gap-[3%]"
          style={{ left: p(75), right: p(75), top: '2241px' }}>

          {/* Colonne gauche — image pill + copyright */}
          <div className="relative shrink-0" style={{ flexBasis: '28%', minWidth: 0, height: '620px' }}>
            <div className="absolute rounded-[200px] w-full"
              style={{ top: 0, height: '579px', boxShadow: '0px 7.368px 14.737px rgba(0,0,0,0.1),0px 25.789px 25.789px rgba(0,0,0,0.09),0px 58.947px 35px rgba(0,0,0,0.05),0px 105px 42.368px rgba(0,0,0,0.01),0px 163.947px 46.053px rgba(0,0,0,0)' }}>
              <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[200px]" src={imgImage94} />
            </div>
            <div className="absolute flex items-center justify-center overflow-hidden px-[8px] py-[4px]"
              style={{ left: '50%', top: '460px', transform: 'translateX(-50%)', width: '179px', height: '77px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <p className="font-inter font-medium not-italic text-[16px] text-center text-white leading-[20px] w-[195px]">©This is a random copyrighted image source</p>
            </div>
          </div>

          {/* Colonne droite — 2 Instagram cards empilées */}
          <div className="flex-1 min-w-0 flex flex-col gap-[41px] pt-[33px]">
            {[0, 1].map((i) => (
              <div key={i} className="bg-white overflow-hidden rounded-[20px] relative"
                style={{ width: '100%', height: '236px', 
               // border: '0.35px solid #8f9cd3', 
                boxShadow:'0px 1px 2px rgba(0,0,0,0.04),0px 5px 6px rgba(0,0,0,0.03),0px 12px 8px rgba(0,0,0,0.02),0px 20px 10px rgba(0,0,0,0.01),0px 35px 12px rgba(0,0,0,0)'
                }}
                >
                <div className="absolute rounded-[200px]" 
                style={{ right: '16px', top: '50%', 
                transform: 'translateY(-50%)', width: '149px', 
                height: '186px',
                boxShadow:'0px 4px 8px rgba(0,0,0,0.1),0px 14px 14px rgba(0,0,0,0.09),0px 32px 19px rgba(0,0,0,0.05),0px 57px 23px rgba(0,0,0,0.01),0px 89px 25px rgba(0,0,0,0)'
                 }}>
                  <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[200px]" src={imgImage56} />
                </div>
                <div className="absolute flex gap-[10px] items-center" style={{ left: '37px', top: '37px' }}>
                  <div className="relative shrink-0 w-[52px] h-[52px]"><img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full" src={imgImage60} /></div>
                  <p className="font-inter font-normal not-italic text-[22px] text-black text-center whitespace-nowrap leading-normal">Instagram</p>
                </div>
                <p className="absolute font-libre-bodoni font-normal text-[22px] text-black leading-normal"
                  style={{ left: '37px', top: '98px' }}>Sunrise Over Aegean: A peaceful meditation</p>
                <p className="absolute font-inter font-normal not-italic text-[#afafaf] text-[15px] leading-normal"
                  style={{ left: '37px', top: '146px', right: '180px' }}>Experience the tranquil beauty of Santorini sunrise through this calming 20mins video. Perfect for planning your morning routine or simply finding inner peace.</p>
              </div>
            ))}
          </div>

        </div>

        {/* CLOSING */}
        <p className="absolute mt-24 font-libre-bodoni font-medium text-[50px] text-black text-center"
          style={{ top: '3017px', left: '50%', transform: 'translateX(-50%)', width: '765px', lineHeight: '55px' }}>
          Closing: Morocco as a Photographic Teacher
        </p>

        <div className="absolute mt-24 font-inter font-normal not-italic text-[#595959] text-[18px]"
          style={{ left: 'calc(50% - 405px)', top: '3155px', width: '811px', whiteSpace: 'pre-wrap' }}>
          <p className="mb-0" style={{ lineHeight: '27px' }}>
            1)Marrakech is bold: terracotta walls, palm shadows, buzzing souks, and the famous energy of Jemaa el-Fnaa. It’s the city where photography becomes choreography—your timing matters as much as your framing..  What to photograph in Marrakech. Jemaa el-Fnaa: the heartbeat. This square changes constantly. In daylight, it’s open and bright. At sunset, it turns cinematic: smoke from grills rises, lanterns glow, crowds thicken, and the sky shifts into purple-blue. Shoot wide to show scaleShoot tight to isolate gestures: hands serving tea, steam, faces lit by warm bulbs. Try motion blur to show movement (even a slight blur can add energy)
If you can, find a rooftop café view. From above, the square becomes a living pattern—circles of crowds, lines of movement, pulses of light.
            </p>
          <p style={{ lineHeight: '27px' }}>&nbsp;</p>
        </div>

        <div className="absolute mt-24 rounded-[400px]"
          style={{ left: '50%', top: '3457px', transform: 'translateX(-50%)', width: '568px', height: '430px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1),0px 14px 14px rgba(0,0,0,0.09),0px 32px 19px rgba(0,0,0,0.05),0px 57px 23px rgba(0,0,0,0.01),0px 89px 25px rgba(0,0,0,0)' }}>
          <img alt="" className="absolute inset-0 object-cover pointer-events-none w-full h-full rounded-[400px]" src={imgImage98} />
        </div>

        <div className="absolute flex items-center justify-center overflow-hidden px-[8px] py-[4px]"
          style={{ left: '50%', top: '3930px', transform: 'translateX(-50%)', width: '185px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <p className="font-inter font-medium not-italic text-[16px] text-center text-white leading-[20px] w-[195px]">©MoroccoShots.com</p>
        </div>

        <div className="absolute mt-24 font-inter font-normal not-italic text-[#595959] text-[18px]"
          style={{ left: 'calc(50% - 398px)', top: '3941px', width: '797px', whiteSpace: 'pre-wrap' }}>
          <p className="mb-0">
            <span className="font-bold" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '27px', fontStyle: 'normal' }}>2)Souks: color with control</span>
            <span style={{ lineHeight: '27px' }}><br />
           Markets are packed with texture: spices, slippers, textiles, lanterns. Your job is to bring order to the visual overload. Choose one “anchor” subject (like a stack of saffron or a wall of lanterns. Use hanging rugs as a backgroundWait for one person to step into the frame—
            <span
              className="font-inter font-medium not-italic text-white rounded-[6px] inline-flex px-2! py-0.5!"
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

        <div className="absolute" style={{ left: '5.2%', right: '5.2%', top: '4450px' }}>
          <RelatedArticles />
        </div>

        <div className="bottom-0 absolute left-0 right-0">
          <Footer />
        </div>

      </section>

      {/* <Header /> */}
    </div>
  );
}
