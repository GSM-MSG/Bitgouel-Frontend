'use client'

import { LectureTypeModal } from '@bitgouel/common'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import * as S from './style'
import Bg3 from '@bitgouel/common/src/assets/png/mainBg3.png'
import { Chevron, People } from '@bitgouel/common'
import { useModal } from '@bitgouel/common/src/hooks'
import { CreateModal } from '@bitgouel/common/src/modals'
import { lectureToEnum } from '@bitgouel/common/src/constants'
import { SelectCalendarTimeModal, SelectScoreModal } from '@bitgouel/common'
import { usePostCreateLecture } from '@/../../../shared/api'

const LectureCreatePage = () => {
  const MAXLENGTH: number = 1000 as const

  const [lectureTitle, setLectureTitle] = useState<string>('')
  const [lectureContent, setLectureContent] = useState<string>('')

  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [lectureTypeText, setLectureTypeText] =
    useState<string>('강의 유형 선택')

  const [isStart, setIsStart] = useState<boolean>(false)
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [startDateText, setStartDateText] = useState<string>('신청 시작일 선택')

  const [isEnd, setIsEnd] = useState<boolean>(false)
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [endDateText, setEndDateText] = useState<string>('신청 마감일 선택')

  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [completeDate, setCompleteDate] = useState<Date>(new Date())
  const [completeDateText, setCompleteDateText] =
    useState<string>('강의 시작일 선택')

  const [isScore, setIsScore] = useState<boolean>(false)
  const [scoreText, setScoreText] = useState<string>('학점 선택')

  const [isInput, setIsInput] = useState<boolean>(true)
  const [people, setPeople] = useState<number>(0)

  const saveLectureTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLectureTitle(event.target.value)
  }

  const saveLectureMainText = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setLectureContent(event.target.value)
  }

  const openSelectModal = (type: string) => {
    if (type === '신청 시작') {
      setIsStart((prev) => !prev)
      setIsEnd(false)
      setIsComplete(false)
      setIsLectureType(false)
      setIsScore(false)
    } else if (type === '신청 마감') {
      setIsStart(false)
      setIsEnd((prev) => !prev)
      setIsComplete(false)
      setIsLectureType(false)
      setIsScore(false)
    } else if (type === '강의 시작') {
      setIsStart(false)
      setIsEnd(false)
      setIsComplete((prev) => !prev)
      setIsScore(false)
      setIsLectureType(false)
    } else if (type === '학점') {
      setIsScore((prev) => !prev)
      setIsStart(false)
      setIsEnd(false)
      setIsComplete(false)
      setIsLectureType(false)
    } else {
      setIsLectureType((prev) => !prev)
      setIsStart(false)
      setIsEnd(false)
      setIsComplete(false)
      setIsScore(false)
    }
  }

  const onPeopleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsInput(false)
  }

  const { openModal } = useModal()
  const { mutate } = usePostCreateLecture()

  const handleLocalDateTime = (date: Date, dateText: string): string => {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date
      .getDate()
      .toString()
      .padStart(2, '0')}T${dateText.replace(/\s/g, '').slice(11, 13)}:${dateText
      .replace(/\s/g, '')
      .slice(14, 16)}:00`
  }

  const onCreate = () =>
    mutate({
      name: lectureTitle,
      content: lectureContent,
      startDate: handleLocalDateTime(startDate, startDateText),
      endDate: handleLocalDateTime(endDate, endDateText),
      completeDate: handleLocalDateTime(completeDate, completeDateText),
      lectureType: lectureToEnum[lectureTypeText],
      credit:
        lectureTypeText === '대학탐방프로그램' ? 0 : +scoreText.slice(0, 1),
      maxRegisteredUser: people,
    })

  const onCreateModal = () => {
    if (
      lectureTitle !== '' &&
      lectureContent !== '' &&
      lectureTypeText !== '강의 유형 선택' &&
      startDateText !== '신청 시작일 선택' &&
      endDateText !== '신청 마감일 선택' &&
      completeDateText !== '강의 시작일 선택' &&
      lectureTypeText !== '대학탐방프로그램'
        ? scoreText !== '학점 선택'
        : true && people !== 0
    )
      openModal(
        <CreateModal
          question='강의를 개설하시겠습니까?'
          title={lectureTitle}
          onCreate={onCreate}
          createText='개설하기'
        />
      )
  }

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
            maxLength={100}
            placeholder='강의 제목 (100자 이내)'
            onChange={saveLectureTitle}
          />
          <S.InputMainText
            maxLength={MAXLENGTH}
            placeholder='강의 설명 작성 (1000자 이내)'
            onChange={saveLectureMainText}
          />
          <S.LectureSetting>
            <S.SettingTitle>강의 세부 설정</S.SettingTitle>
            <S.SettingSelectionContainer>
              <S.SelectModalContainer>
                {isLectureType && (
                  <LectureTypeModal
                    location='개설'
                    text={lectureTypeText}
                    setText={setLectureTypeText}
                    setIsLectureType={setIsLectureType}
                  />
                )}
                <S.SettingSelection
                  onClick={() => openSelectModal('')}
                  isOpen={isLectureType}
                >
                  <Chevron />
                  <S.SettingButton>{lectureTypeText}</S.SettingButton>
                </S.SettingSelection>
              </S.SelectModalContainer>
              <S.SettingSelection>
                <S.SelectModalContainer>
                  {isStart && (
                    <SelectCalendarTimeModal
                      date={startDate}
                      setDate={setStartDate}
                      setText={setStartDateText}
                    />
                  )}
                  <S.SettingDateBox
                    onClick={() => openSelectModal('신청 시작')}
                    isOpen={isStart}
                  >
                    <Chevron />
                    <S.SettingButton>{startDateText}</S.SettingButton>
                  </S.SettingDateBox>
                </S.SelectModalContainer>
                <S.DateRange> ~ </S.DateRange>
                <S.SelectModalContainer>
                  {isEnd && (
                    <SelectCalendarTimeModal
                      date={endDate}
                      setDate={setEndDate}
                      setText={setEndDateText}
                    />
                  )}
                  <S.SettingDateBox
                    onClick={() => openSelectModal('신청 마감')}
                    isOpen={isEnd}
                  >
                    <Chevron />
                    <S.SettingButton>{endDateText}</S.SettingButton>
                  </S.SettingDateBox>
                </S.SelectModalContainer>
              </S.SettingSelection>
              <S.SettingSelection>
                <S.SelectModalContainer>
                  {isComplete && (
                    <SelectCalendarTimeModal
                      date={completeDate}
                      setDate={setCompleteDate}
                      setText={setCompleteDateText}
                    />
                  )}
                  <S.SettingDateBox
                    onClick={() => openSelectModal('강의 시작')}
                    isOpen={isComplete}
                  >
                    <Chevron />
                    <S.SettingButton>{completeDateText}</S.SettingButton>
                  </S.SettingDateBox>
                </S.SelectModalContainer>
              </S.SettingSelection>
              {lectureTypeText === '상호학점인정교육과정' && (
                <S.SettingSelection isOpen={isScore}>
                  <S.SelectModalContainer>
                    {isScore && (
                      <SelectScoreModal
                        score={scoreText}
                        setScore={setScoreText}
                        setIsScore={setIsScore}
                      />
                    )}
                    <S.SettingScoreBox onClick={() => openSelectModal('학점')}>
                      <Chevron />
                      <S.SettingButton>{scoreText}</S.SettingButton>
                    </S.SettingScoreBox>
                  </S.SelectModalContainer>
                </S.SettingSelection>
              )}
              <S.SettingForm
                onSubmit={onPeopleSubmit}
                onBlur={() => setIsInput(false)}
              >
                <People />
                {isInput ? (
                  <S.SettingInput
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setPeople(+e.target.value)
                    }
                    type='number'
                    placeholder='최대 수강 인원 입력'
                  />
                ) : (
                  <S.ShowPeople onClick={() => setIsInput(true)}>
                    {people}명
                  </S.ShowPeople>
                )}
              </S.SettingForm>
            </S.SettingSelectionContainer>
          </S.LectureSetting>
          <S.ButtonContainer>
            <S.CreateButton
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
            </S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default LectureCreatePage
