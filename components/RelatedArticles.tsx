import RelatedArticlesDesktop from './related-articles/RelatedArticlesDesktop';
import RelatedArticlesTablet from './related-articles/RelatedArticlesTablet';
import RelatedArticlesMobile from './related-articles/RelatedArticlesMobile';

export default function RelatedArticles() {
  return (
    <div className="w-full">
      <p className="font-libre-bodoni font-medium text-black text-center mb-8"
        style={{ fontSize: 'clamp(26px, 3vw, 45px)', lineHeight: '1.2' }}>
        Related Articles
      </p>

      <RelatedArticlesDesktop />
      <RelatedArticlesTablet />
      <RelatedArticlesMobile />
    </div>
  );
}