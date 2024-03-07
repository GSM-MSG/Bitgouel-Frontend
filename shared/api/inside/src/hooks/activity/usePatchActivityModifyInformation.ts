import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, patch, activityUrl } from '../../../../common'
import { AxiosResponse } from 'axios'
import { ActivityPayloadTypes } from '@bitgouel/types'

export const usePatchActivityModifyInformation = (activity_id: string) =>
  useMutation<AxiosResponse, Error, ActivityPayloadTypes>(
    activityQueryKeys.patchActivityModifyInformation(activity_id),
    () => patch(activityUrl.activityModifyInformation(activity_id), {}),
    {
      onSuccess: ({ data }) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
