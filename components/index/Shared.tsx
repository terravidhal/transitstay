import {
  imgAdventure, imgSolo, imgIcons8Elephant1,
  imgEllipse73, imgEllipse6, imgEllipse79,
} from '../../lib/images';

export const p = (px: number) => `${(px / 1440) * 100}%`;

export function Tags({ size = 'lg' }: { size?: 'lg' | 'sm' }) {
  const sm = size === 'sm';
  const iconSize = sm ? 'w-[19px] h-[19px]' : 'w-[25px] h-[25px]';
  const fontSize = sm ? 'text-[15px]' : 'text-[20px]';
  const lh = sm ? '32.111px' : '44.482px';
  const h = sm ? '32.485px' : '45px';
  const gap = sm ? '3.609px' : '5px';
  const px = sm ? '16.347px' : '22.645px';
  const py = sm ? '8.757px' : '12.131px';
  return (
    <div className="flex items-center" style={{ gap: sm ? '11.55px' : '16px' }}>
      {[
        { src: imgAdventure, label: 'Adventures', w: sm ? '125.607px' : '174px', bg: '#f2f2f2', color: 'rgba(0,0,0,0.6)', r: '100px' },
        { src: imgSolo, label: 'Solo', w: sm ? '74.354px' : '103px', bg: '#f2f2f2', color: 'rgba(0,0,0,0.6)', r: '100px' },
        { src: imgIcons8Elephant1, label: 'Africa', w: sm ? '89.513px' : '124px', bg: '#ad54f0', color: 'white', r: sm ? '58.383px' : '80.876px' },
      ].map(({ src, label, w, bg, color, r }) => (
        <div key={label} className="flex items-center justify-center overflow-hidden relative shrink-0"
          style={{ backgroundColor: bg, height: h, width: w, padding: `${py} ${px}`, gap, borderRadius: r }}>
          <div className={`relative shrink-0 ${iconSize}`}><img alt="" className="absolute block w-full h-full" src={src} /></div>
          <p className={`font-inter font-normal not-italic ${fontSize} text-center whitespace-nowrap`} style={{ color, lineHeight: lh }}>{label}</p>
        </div>
      ))}
    </div>
  );
}

export function AuthorRow({ scale = 1 }: { scale?: number }) {
  const s = (v: number) => `${v * scale}px`;
  const sm = scale < 1;
  return (
    <div className="flex items-center" style={{ gap: s(28) }}>
      <div className="flex leading-none place-items-start relative shrink-0">
        <div className="inline-grid place-items-start relative">
          <div className="relative" style={{ width: s(50), height: s(50), gridColumn: 1, gridRow: 1 }}><img alt="" className="absolute block w-full h-full" src={imgEllipse73} /></div>
          <div className="relative" style={{ width: s(38), height: s(38), gridColumn: 1, gridRow: 1, marginLeft: s(sm ? 4.33 : 5.98), marginTop: s(sm ? 4.33 : 5.98) }}><img alt="" className="absolute block w-full h-full" src={imgEllipse6} /></div>
        </div>
        <p className="font-inter font-normal not-italic text-center whitespace-nowrap leading-normal"
          style={{ fontSize: s(sm ? 11.55 : 16), color: 'rgba(0,0,0,0.8)', gridColumn: 1, gridRow: 1, marginLeft: s(sm ? 13 : 13), marginTop: s(sm ? 17.28 : 14) }}>TransitStay</p>
      </div>
      <div className="relative shrink-0" style={{ width: s(sm ? 5.053 : 7), height: s(sm ? 5.053 : 7) }}><img alt="" className="absolute block w-full h-full" src={imgEllipse79} /></div>
      <p className="font-inter font-normal not-italic text-center whitespace-nowrap leading-normal" style={{ fontSize: s(sm ? 11.55 : 16), color: 'rgba(0,0,0,0.8)' }}>12 min read</p>
      <div className="relative shrink-0" style={{ width: s(sm ? 5.053 : 7), height: s(sm ? 5.053 : 7) }}><img alt="" className="absolute block w-full h-full" src={imgEllipse79} /></div>
      <p className="font-inter font-normal not-italic text-center whitespace-nowrap leading-normal" style={{ fontSize: s(sm ? 11.55 : 16), color: 'rgba(0,0,0,0.8)' }}>August 20, 2025</p>
    </div>
  );
}

export function Highlight({ text, width, fontSize = '17px' }: { text: string; width: string; fontSize?: string }) {
  return (
    <div className="absolute" style={{ width, height: '27px' }}>
      <div className="absolute rounded-[6px]" style={{ inset: '14.81% 0 3.7% 0', background: 'linear-gradient(92.329deg, rgb(173,84,240) 0.236%, rgb(210,77,188) 89.259%)' }} />
      <p className="absolute font-inter font-medium not-italic text-white whitespace-nowrap" style={{ inset: '0 2.65%', lineHeight: '27px', fontSize }}>{text}</p>
    </div>
  );
}

export const gradLink = {
  background: 'linear-gradient(92.079deg, rgb(173,84,240) 0.236%, rgb(210,77,188) 89.259%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
};
