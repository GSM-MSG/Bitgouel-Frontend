'use client'

import {
  TokenManager,
  useGetDetailLecture,
  usePostEnrolment,
} from '@bitgouel/api'
import { useEffect, useState } from 'react'
import { Bg3 } from '../../../assets'
import { lectureToKor } from '../../../constants'
import { useModal } from '../../../hooks'
import { AppropriationModal } from '../../../modals'
import * as S from './style'

const LectureDetailPage = ({ lectureId }: { lectureId: string }) => {
  const { data } = useGetDetailLecture(lectureId)
  const { mutate } = usePostEnrolment(lectureId)
  const { openModal } = useModal()
  const [lectureButtonText, setLectureButtonText] =
    useState<string>('수강 신청 하기')
  const [isAble, setIsAble] = useState<boolean>(true)
  const tokenManager = new TokenManager()

  useEffect(() => {
    if (
      tokenManager.authority !== 'ROLE_STUDENT' ||
      data?.data.lectureStatus === 'CLOSED' ||
      data?.data.headCount === data?.data.maxRegisteredUser
    ) {
      setLectureButtonText('수강 신청 불가')
      setIsAble(false)
    } else if (data?.data.isRegistered) setLectureButtonText('수강 신청 완료')
  }, [data])

  const handleModalOpen = () => {
    if (
      data?.data.isRegistered ||
      tokenManager.authority !== 'ROLE_STUDENT' ||
      data?.data.lectureStatus === 'CLOSED' ||
      data?.data.headCount === data?.data.maxRegisteredUser
    )
      return
    openModal(
      <AppropriationModal
        isApprove={true}
        question='수강 신청하시겠습니까?'
        title={data?.data.name}
        purpose='신청하기'
        onAppropriation={() => mutate()}
      />
    )
  }

  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 상세</S.LectureTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.SubTitle>
              <S.Professor>{data?.data.lecturer} 교수</S.Professor>
              <S.Date>{`${data?.data.createAt.slice(
                0,
                4
              )}년 ${data?.data.createAt.slice(
                5,
                7
              )}월 ${data?.data.createAt.slice(
                8,
                10
              )}일 ${data?.data.createAt.slice(11, 16)}`}</S.Date>
            </S.SubTitle>
            <S.Title>{data?.data.name}</S.Title>
            <S.SubMenuContainer>
              <S.From>
                {
                  lectureToKor[
                    data?.data.lectureType ||
                      'MUTUAL_CREDIT_RECOGNITION_PROGRAM'
                  ]
                }
              </S.From>
              <S.MenuNum>
                <div>
                  <span>신청기간: </span>
                  <span>
                    {`${data?.data.startDate.slice(
                      0,
                      4
                    )}년 ${data?.data.startDate.slice(
                      5,
                      7
                    )}월 ${data?.data.startDate.slice(
                      8,
                      10
                    )}일 ${data?.data.startDate.slice(11, 16)}`}{' '}
                    ~{' '}
                    {`${data?.data.endDate.slice(
                      0,
                      4
                    )}년 ${data?.data.endDate.slice(
                      5,
                      7
                    )}월 ${data?.data.endDate.slice(
                      8,
                      10
                    )}일 ${data?.data.endDate.slice(11, 16)}`}
                  </span>
                </div>
                <div>
                  <span>수강정원: </span>
                  <span>
                    {data?.data.headCount}/{data?.data.maxRegisteredUser}명
                  </span>
                </div>
                <div>
                  <span>강의 시작: </span>
                  <span>
                    {`${data?.data.completeDate.slice(
                      0,
                      4
                    )}년 ${data?.data.completeDate.slice(
                      5,
                      7
                    )}월 ${data?.data.completeDate.slice(
                      8,
                      10
                    )}일 ${data?.data.completeDate.slice(11, 16)}`}
                  </span>
                </div>
                <div>
                  <span>학점: </span>
                  <span>{data?.data.credit}점</span>
                </div>
              </S.MenuNum>
            </S.SubMenuContainer>
          </S.TitleContainer>
          <S.MainText>{data?.data.content}</S.MainText>
          <S.ButtonContainer>
            <S.LectureButton
              isRegistered={data?.data.isRegistered}
              isAble={isAble}
              onClick={handleModalOpen}
            >
              {lectureButtonText}
            </S.LectureButton>
          </S.ButtonContainer>
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default LectureDetailPage
