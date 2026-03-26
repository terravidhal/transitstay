"use client";

import { useState } from 'react';
import { articles, ArticleCard, ArrowButton, ArrowButton2 } from './Shared';

export default function RelatedArticlesMobile() {
  const [index, setIndex] = useState(0);
  const visible = 1;

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(articles.length - visible, i + 1));

  const total = articles.length - visible + 1;

  return (
    <div className="md:hidden flex flex-col gap-6 w-full">
      <div className="relative flex items-center justify-center">
        <div className="absolute left-[55px] top-[55px] z-10">
          <ArrowButton2 left onClick={prev} />
        </div>
        <div className="overflow-hidden" style={{ width: 'calc(100% - 144px)' }}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${index} * 100%))` }}
          >
            {articles.map((a, i) => (
              <div key={i} className="shrink-0 w-full">
                <ArticleCard {...a} />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-[55px] top-[55px] z-10">
          <ArrowButton2 onClick={next} />
        </div>
      </div>
      <div className="flex gap-[14px] items-center justify-center">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="rounded-full transition-all"
            style={{
              width: '15px', height: '15px', border: 'none', padding: 0, cursor: 'pointer',
              background: i === index
                ? 'linear-gradient(92deg, #ad54f0, #d24dbc)'
                : '#d9d9d9',
            }}
          />
        ))}
      </div>
    </div>
  );
}
