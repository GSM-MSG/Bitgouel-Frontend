'use client'

import { useModal } from '@bitgouel/common/src/hooks'
import React from 'react'
import Portal from '@bitgouel/common/src/portal'
import * as S from './style'
import { usePostApplicationLecture } from '@bitgouel/api'

const LectureApplyModal = ({
  title,
  lectureId,
}: LectureApplyModalProps) => {
  const { closeModal } = useModal()
  const { mutate } = usePostApplicationLecture(lectureId)

  return (
    <Portal onClose={closeModal}>
      <S.LectureApplyModalWrapper>
        <S.LectureLetterContainer>
          <S.LectureApplyQuestion>
            강의를 신청하시겠습니까?
          </S.LectureApplyQuestion>
          <S.LectureApplyTitle>{title}</S.LectureApplyTitle>
        </S.LectureLetterContainer>
        <S.LectureApplyButtonWrapper>
          <S.CancleButton onClick={closeModal}>취소</S.CancleButton>
          <S.CreateButton onClick={() => mutate()}>
            수강 신청하기
          </S.CreateButton>
        </S.LectureApplyButtonWrapper>
      </S.LectureApplyModalWrapper>
    </Portal>
  )
}

export default LectureApplyModal
