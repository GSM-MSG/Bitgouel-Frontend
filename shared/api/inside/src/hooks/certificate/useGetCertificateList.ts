import { CertificateTypes } from '@bitgouel/types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { certificateQueryKeys, certificateUrl, get } from '../../../../common'

export const useGetCertificateList = (
  options?: UseQueryOptions<AxiosResponse<CertificateTypes>>
) =>
  useQuery<AxiosResponse<CertificateTypes>>(
    certificateQueryKeys.getCertificateListStudent(),
    () => get(certificateUrl.certificate()),
    options
  )
