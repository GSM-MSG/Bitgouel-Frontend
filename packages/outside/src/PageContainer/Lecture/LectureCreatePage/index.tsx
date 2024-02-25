'use client'

import { usePostCreateLecture } from '@bitgouel/api'
import {
  AppropriationModal,
  Bg3,
  Chevron,
  LectureTypeModal,
  People,
  lectureToEnum,
  useModal,
} from '@bitgouel/common'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import * as S from './style'

const LectureCreatePage = () => {
  const MAXLENGTH: number = 1000 as const

  const [lectureTitle, setLectureTitle] = useState<string>('')
  const [lectureContent, setLectureContent] = useState<string>('')

  const { openModal } = useModal()
  const { mutate } = usePostCreateLecture()

  // const handleLocalDateTime = (date: Date, dateText: string): string => {
  //   return `${date.getFullYear()}-${(date.getMonth() + 1)
  //     .toString()
  //     .padStart(2, '0')}-${date
  //     .getDate()
  //     .toString()
  //     .padStart(2, '0')}T${dateText.replace(/\s/g, '').slice(11, 13)}:${dateText
  //     .replace(/\s/g, '')
  //     .slice(14, 16)}:00`
  // }

  // const onCreate = () =>
  //   mutate({
  //     name: lectureTitle,
  //     content: lectureContent,
  //     startDate: handleLocalDateTime(startDate, startDateText),
  //     endDate: handleLocalDateTime(endDate, endDateText),
  //     completeDate: handleLocalDateTime(completeDate, completeDateText),
  //     lectureType: lectureToEnum[lectureTypeText],
  //     credit:
  //       lectureTypeText === '대학탐방프로그램' ? 0 : +scoreText.slice(0, 1),
  //     maxRegisteredUser: people,
  //   })

  // const onCreateModal = () => {
  //   if (
  //     lectureTitle !== '' &&
  //     lectureContent !== '' &&
  //     lectureTypeText !== '강의 유형 선택' &&
  //     startDateText !== '신청 시작일 선택' &&
  //     endDateText !== '신청 마감일 선택' &&
  //     completeDateText !== '강의 시작일 선택' &&
  //     lectureTypeText !== '대학탐방프로그램'
  //       ? scoreText !== '학점 선택'
  //       : true && people !== 0
  //   )
  //     openModal(
  //       <AppropriationModal
  //         isApprove={true}
  //         question='강의를 개설하시겠습니까?'
  //         title={lectureTitle}
  //         purpose='개설하기'
  //         onAppropriation={() => onCreate()}
  //       />
  //     )
  // }

  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.CreateTitle>강의 개설</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            value={lectureTitle}
            maxLength={100}
            placeholder='강의 제목 (100자 이내)'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLectureTitle(e.target.value)
            }
          />
          <S.InputMainText
            value={lectureContent}
            maxLength={MAXLENGTH}
            placeholder='강의 설명 작성 (1000자 이내)'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setLectureContent(e.target.value)
            }
          />

          <S.ButtonContainer>
            {/* <S.CreateButton
              onClick={onCreateModal}
              isAble={
                lectureTitle !== '' &&
                lectureContent !== '' &&
                lectureTypeText !== '강의 유형 선택' &&
                startDateText !== '신청 시작일 선택' &&
                endDateText !== '신청 마감일 선택' &&
                completeDateText !== '강의 시작일 선택' &&
                lectureTypeText !== '대학탐방프로그램'
                  ? scoreText !== '학점 선택'
                  : true && people !== 0
              }
            >
              개설 신청하기
            </S.CreateButton> */}
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default LectureCreatePage
