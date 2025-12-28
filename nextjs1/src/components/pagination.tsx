'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { getUsers } from "../app/server/server"; 
import Pagination from './UI/pagination'
import GetList from '../components/getList'; 

const PAGE_SIZE = 3;

export default function PagePagination({ initialData }: { initialData: any }) {
  const [page, setPage] = useState<number>(1)
    
  const { data, error, isLoading } = useSWR(
    ['users', page], 
    () => getUsers(page, PAGE_SIZE), 
    {
      fallbackData: page === 1 ? initialData : undefined,
      keepPreviousData: true 
    }
  )

  if (error) {
    console.error('Ошибка при загрузке данных:', error);
    return <div className="text-red-500 text-center">Ошибка загрузки данных</div>
  }
  const currentUsers = data?.items || data || [];
  const totalPages = data?.totalPages || 1;

  return (
    <div className="w-full py-0">
      <div className="h-6 text-center">
        {isLoading && <span className="text-[#00E4F0] animate-pulse">Обновление данных...</span>}
      </div>
      <GetList users={currentUsers} />
      <div className="px-20 mx-auto mt-8">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  )
}