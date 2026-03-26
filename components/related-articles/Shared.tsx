import { imgImage62, imgImage68, imgIcons8MoreThan22 } from '../../lib/images';

export const articles = [
  { image: imgImage62, category: 'Experiences', readTime: '12 mins', title: 'Finding Peace in Simple Moments: The Art of Relaxed Family Time.' },
  { image: imgImage68, category: 'Experiences', readTime: '12 mins', title: 'Finding Peace in Simple Moments: The Art of Relaxed Family Time.' },
  { image: imgImage62, category: 'Experiences', readTime: '12 mins', title: 'Finding Peace in Simple Moments: The Art of Relaxed Family Time.' },
  { image: imgImage68, category: 'Experiences', readTime: '12 mins', title: 'Finding Peace in Simple Moments: The Art of Relaxed Family Time.' },
];

export function ArticleCard({ image, category, readTime, title }: {
  image: string; category: string; readTime: string; title: string;
}) {
  return (
    <div className="flex flex-col gap-[31px] items-center w-full shrink-0">
      <div className="relative w-full rounded-[400px] overflow-hidden"
        style={{ aspectRatio: '395/276', boxShadow: '0px 7px 14px rgba(0,0,0,0.1),0px 25px 25px rgba(0,0,0,0.09),0px 58px 35px rgba(0,0,0,0.05)' }}>
        <img alt="" className="absolute inset-0 object-cover w-full h-full rounded-[400px]" src={image} />
      </div>
      <div className="flex flex-col gap-[15px] items-center text-center w-full">
        <p className="font-inter font-medium text-[#afafaf] leading-none">
          <span className="text-[18px] leading-normal">{category}</span>
          <span className="text-[30px] leading-normal"> . </span>
          <span className="text-[18px] leading-normal">{readTime}</span>
        </p>
        <p className="font-libre-bodoni font-medium text-[30px] text-black leading-normal w-full">{title}</p>
      </div>
    </div>
  );
}

export function ArrowButton({ left = false, onClick }: { left?: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-full flex items-center justify-center shrink-0 cursor-pointer"
      style={{
        width: '60px', height: '60px', border: 'none', outline: 'none',
        boxShadow: '0px 7px 14px rgba(0,0,0,0.1),0px 25px 25px rgba(0,0,0,0.09),0px 58px 35px rgba(0,0,0,0.05)'
      }}
    >
      <div style={{ transform: left ? 'rotate(180deg)' : undefined, width: '30px', height: '30px' }}>
        <img alt="" className="block w-full h-full" src={imgIcons8MoreThan22} />
      </div>
    </button>
  );
}
