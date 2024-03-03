import { useMutation } from '@tanstack/react-query'
import { activityQueryKeys, patch, activityUrl } from '../../libs'
import { AxiosResponse } from 'axios'

export const usePatchModifyInformation = (activity_id: string) =>
  useMutation<
    AxiosResponse,
    Error,
    {
      title: string
      content: string
      credit: number
      activityDate: string
    }
  >(
    activityQueryKeys.patchActivityModifyInformations(activity_id),
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
