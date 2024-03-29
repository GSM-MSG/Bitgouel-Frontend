import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { ApiErrorTypes, DepartmentResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const useGetDepartment = (
  keyword: string,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<DepartmentResponseTypes>, AxiosError<ApiErrorTypes>>(
    lectureQueryKeys.getDepartment(),
    () => get(lectureUrl.lectureDepartment(keyword)),
    options
  )
