import { clubQueryKeys, clubUrl, get } from '../../../../common'
import { MyClubResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { ApiError } from 'next/dist/server/api-utils'

export const useGetMyClub = (options?: UseQueryOptions<AxiosResponse>) =>
  useQuery<AxiosResponse<MyClubResponseTypes>, AxiosError<ApiError>>(
    clubQueryKeys.getMyClub(),
    () => get(clubUrl.myClub()),
    options
  )
