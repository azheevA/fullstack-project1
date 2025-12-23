'use client'

import clsx from 'clsx'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="relative flex  w-full items-center justify-center my-10 ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="absolute left-0 hover:bg-[#00E4F0] w-10 h-10 rounded-full border-white border-2 flex items-center justify-center"
      >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>

      </button>

      <div className="flex gap-3">
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={clsx(
                'w-3 h-3 rounded-full border-[#00E4F0] border-2',
                page === currentPage
                  ? 'bg-[#00E4F0]'
                  : ''
              )}
            />
          )
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="absolute right-0 hover:bg-[#00E4F0] w-10 h-10 rounded-full border-white border-2 flex items-center justify-center"
      >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
      </button>
    </div>
  )
}

export default Pagination
