'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

const Pagination: FC<{ totalPages: number; currentPage: number }> = ({ totalPages, currentPage }) => {
  const router = useRouter();

  const navigateToPage = (targetPage: string | number) => {
    if (targetPage == 1) return router.push('/blog');

    router.push(`/blog/page/${targetPage}`);
  };

  return (
    <label className="text-center font-semibold text-md bg-ww-accent px-4 py-2 rounded-md text-ww-accent-text">
      <span>Page </span>

      <select className="bg-transparent mx-1" value={currentPage} onChange={(e) => navigateToPage(e.target.value)}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <option value={index + 1} key={index}>
            {index + 1}
          </option>
        ))}
      </select>

      <span>of {totalPages}</span>
    </label>
  );
};

export default Pagination;
