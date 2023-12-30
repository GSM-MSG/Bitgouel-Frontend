import { CertificateTypes } from '@bitgouel/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { certificateQueryKeys, certificateUrl, patch } from '../../../../common'

export const usePatchCertificate = (student_id: string, id: string) => {
  return useMutation<void, AxiosError, CertificateTypes>(
    certificateQueryKeys.patchCertificateModify(student_id, id),
    (modifyValue) =>
      patch(certificateUrl.certificateModify(student_id, id), modifyValue)
  )
}
