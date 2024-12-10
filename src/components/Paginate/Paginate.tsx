import clsx from 'clsx';

import ChevronRight from '~/assets/icons/chevron-right.svg?react';
import ChevronLeft from '~/assets/icons/chevron-left.svg?react';

export default function Paginate({
  page,
  offset,
  limit,
}: {
  page: number;
  offset: number;
  limit: number;
}) {
  return (
    <div className='flex items-center justify-center gap-4 text-blue-primary'>
      <button disabled={page === 1}>
        <ChevronLeft className={clsx(page === 1 && 'opacity-50', 'h-3 w-3')} />
      </button>
      <div className='flex justify-center gap-2'>
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <span
              key={idx}
              className={clsx(
                page === idx + 1 && 'bg-blue-lighter font-semibold',
                'rounded-md px-2.5 py-0.5'
              )}
            >
              {idx + 1}
            </span>
          ))}
      </div>
      <button disabled={page === offset}>
        <ChevronRight className='h-3 w-3' />
      </button>
    </div>
  );
}
