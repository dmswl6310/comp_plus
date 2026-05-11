import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description?: string;
};

export const useSEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    // 1. 타이틀 업데이트
    const baseTitle = "Uikki Gallery";
    document.title = title === baseTitle ? title : `${title} | ${baseTitle}`;

    // 2. 메타 태그(description) 업데이트
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
};
