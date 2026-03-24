"use client";

import { useState } from 'react';
import { articles, ArticleCard, ArrowButton } from './Shared';

export default function RelatedArticlesDesktop() {
  const [index, setIndex] = useState(0);
  const visible = 3;

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(articles.length - visible, i + 1));

  const total = articles.length - visible + 1;

  return (
    <div className="hidden lg:block w-full">
      <div className="flex items-center gap-4">
        <ArrowButton left onClick={prev} />
        <div className="flex-1 overflow-hidden">
          <div
            className="flex gap-[48px] transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${index} * (100% / 3 + 16px)))` }}
          >
            {articles.map((a, i) => (
              <div key={i} className="shrink-0" style={{ width: 'calc((100% - 96px) / 3)' }}>
                <ArticleCard {...a} />
              </div>
            ))}
          </div>
        </div>
        <ArrowButton onClick={next} />
      </div>
      <div className="mt-4 flex gap-[14px] items-center justify-center">
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
