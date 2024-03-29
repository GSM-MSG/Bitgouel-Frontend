import { ActivityInformationTypes, ActivityOptionsTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { activityQueryKeys, activityUrl, get } from '../../../../common'

export const useGetActivityList = (
  studentId: string,
  queryString: ActivityOptionsTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<ActivityInformationTypes>>(
    activityQueryKeys.getActivityList(studentId),
    () => get(activityUrl.activityList(studentId, queryString)),
    options
  )
