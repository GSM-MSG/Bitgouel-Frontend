'use client'

import {
  useGetActivityDetail,
  usePatchActivityModifyInformation,
} from '@bitgouel/api'
import {
  AppropriationModal,
  Bg2,
  Chevron,
  SelectCalendarModal,
  SelectScoreModal,
  useModal,
} from '@bitgouel/common'
import {
  ActivityDetailProps,
  ActivityDetailTypes,
  ActivityPayloadTypes,
} from '@bitgouel/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'

const MAXLENGTH: number = 1000 as const

const ActivityModifyPage: React.FC<ActivityDetailProps> = ({
  studentIdProps,
  activityId,
}) => {
  const { studentId, clubId } = studentIdProps

  const { openModal, closeModal } = useModal()
  const { push } = useRouter()

  const { data, refetch } = useGetActivityDetail(activityId)
  const { mutate } = usePatchActivityModifyInformation(activityId, {
    onSuccess: () => {
      closeModal()
      push(`/main/club/${clubId}/student/${studentId}/activity`)
      toast.success('수정하였습니다.')
      refetch()
    },
  })

  const [isActivityDate, setIsActivityDate] = useState<boolean>(false)
  const [activityDate, setActivityDate] = useState<Date>(new Date())
  const [activityDateText, setActivityDateText] = useState<string>(
    data?.data.activityDate
  )

  const [isScore, setIsScore] = useState<boolean>(false)
  const [scoreText, setScoreText] = useState<string | any>(data?.data.credit)

  const [modifyData, setModifyData] = useState<ActivityDetailTypes | any>(data)

  const openSelectModal = (type: string) => {
    if (type === '학점 선택') {
      setIsActivityDate(false)
      setIsScore((prev) => !prev)
    } else {
      setIsActivityDate((prev) => !prev)
      setIsScore(false)
    }
  }

  const params = useSearchParams()

  const onModifyData = () => {
    if (modifyData) {
      const payload: ActivityPayloadTypes = {
        title: modifyData.title,
        content: modifyData.content,
        credit: Number(scoreText?.slice(0, 1)),
        activityDate: `${activityDate.getFullYear()}-${(
          activityDate.getMonth() + 1
        )
          .toString()
          .padStart(2, '0')}-${activityDate
          .getDate()
          .toString()
          .padStart(2, '0')}`,
      }

      mutate(payload)
    }
  }

  useEffect(() => {
    if (data) {
      setModifyData(data.data)
      setScoreText(data.data.credit.toString())
      setActivityDateText(
        `${data.data.activityDate?.slice(
          0,
          4
        )}년 ${data.data.activityDate?.slice(
          5,
          7
        )}월 ${data.data.activityDate?.slice(8)}일`
      )
    }
  }, [data])

  return (
    <>
      {modifyData && (
        <div>
          <S.SlideBg url={Bg2}>
            <S.BgContainer>
              <S.ModifyTitle>활동 수정</S.ModifyTitle>
              <S.ButtonContainer></S.ButtonContainer>
            </S.BgContainer>
          </S.SlideBg>
          <S.DocumentInputContainer>
            <S.DocumentInput>
              <S.InputTitle
                placeholder='활동 제목(100자 이내)'
                maxLength={100}
                value={modifyData.title}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setModifyData((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
              />
              <S.InputMainText
                maxLength={MAXLENGTH}
                placeholder='활동 내용 작성 (1000자 이내)'
                value={modifyData.content}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setModifyData((prev) => ({
                    ...prev,
                    content: e.target.value,
                  }))
                }
              />
              <S.ActivitySetting>
                <S.SettingTitle>활동 세부 설정</S.SettingTitle>
                <S.SettingSelectionContainer>
                  <S.SettingSelection>
                    <S.SelectModalContainer>
                      {isActivityDate && (
                        <SelectCalendarModal
                          date={activityDate}
                          setDate={setActivityDate}
                          setText={setActivityDateText}
                        />
                      )}
                      <S.SettingDateBox onClick={() => openSelectModal('')}>
                        <Chevron />
                        <S.SettingButton>{activityDateText}</S.SettingButton>
                      </S.SettingDateBox>
                    </S.SelectModalContainer>
                  </S.SettingSelection>
                  <S.SettingSelection>
                    <S.SelectModalContainer>
                      {isScore && (
                        <SelectScoreModal
                          score={
                            Number.isInteger(Number(scoreText))
                              ? scoreText + '점'
                              : scoreText
                          }
                          setScore={setScoreText}
                          setIsScore={setIsScore}
                        />
                      )}
                      <S.SettingScoreBox
                        onClick={() => openSelectModal('학점 선택')}
                      >
                        <Chevron />
                        <S.SettingButton>
                          {scoreText}
                          {Number.isInteger(Number(scoreText)) ? '점' : ''}
                        </S.SettingButton>
                      </S.SettingScoreBox>
                    </S.SelectModalContainer>
                  </S.SettingSelection>
                </S.SettingSelectionContainer>
              </S.ActivitySetting>
              <S.ButtonContainer>
                <S.ModifyButton
                  onClick={() =>
                    openModal(
                      <AppropriationModal
                        isApprove={true}
                        question='활동을 수정하시겠습니까?'
                        title={modifyData.title}
                        onAppropriation={onModifyData}
                        purpose='수정하기'
                      />
                    )
                  }
                  isAble={
                    modifyData.title !== '' &&
                    modifyData.content !== '' &&
                    activityDateText !== '활동 날짜 선택' &&
                    scoreText !== '학점 선택'
                  }
                >
                  활동 수정하기
                </S.ModifyButton>
              </S.ButtonContainer>
            </S.DocumentInput>
          </S.DocumentInputContainer>
        </div>
      )}
    </>
  )
}

export default ActivityModifyPage
