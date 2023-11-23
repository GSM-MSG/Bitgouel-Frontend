'use client'

import { useMutation } from '@tanstack/react-query'
import { post } from '../../libs/api/method'
import { authQueryKeys } from '../../libs/queryKeys'
import { authUrl } from '../../libs/urlController'
import { AxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'
import { Page } from '../../../../../common/src/atoms'
import { GovernmentPayloadTypes } from '@bitgouel/types'

export const usePostSignUpGovernment = () => {
  const setPage = useSetRecoilState(Page)

  return useMutation<void, AxiosError, GovernmentPayloadTypes>(
    authQueryKeys.postSignUpGoverment(),
    (signUpValues) => post(authUrl.signUpGovernment(), signUpValues),
    {
      onSuccess: (data) => {
        return setPage(4)
      },
      onError: (error) => {
        return console.log(error)
      },
    }
  )
}
