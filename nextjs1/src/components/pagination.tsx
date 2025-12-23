'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { getUsers } from "../app/server/data.service"; 
import Pagination from './UI/pagination'
import GetList from '../components/getList'; 

const PAGE_SIZE = 3;
export default function PagePagination({ initialData }: { initialData: any }) {
  const [page, setPage] = useState<number>(1)
    
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/data?page=${page}&limit=${PAGE_SIZE}`,
    () => getUsers(page, PAGE_SIZE),
    {
      fallbackData: page === 1 ? initialData : undefined,
      keepPreviousData: true 
    }
  )

  if (error) return <div>Ошибка загрузки</div>


  const currentUsers = data?.items || data || [];

  return (
    <div className="w-full">

      <div className="h-6 text-center">
        {isLoading && <span className="text-[#00E4F0] animate-pulse">Обновление данных...</span>}
      </div>

  
      <GetList users={currentUsers} />

      <div className="px-20 mx-auto mt-8">
        <Pagination
          currentPage={page}
          totalPages={data?.totalPages || 1}
          onPageChange={setPage}
        />
      </div>
    </div>
  )
}