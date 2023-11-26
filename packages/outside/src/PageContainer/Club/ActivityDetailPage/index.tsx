'use client'

import * as S from './style'
import Bg2 from '@bitgouel/common/src/assets/png/mainBg2.png'
import { Pen, RejectModal, TrashCan, useModal } from '@bitgouel/common'
import {
  useDeleteRejectActivity,
  useGetActivityDetail,
  usePatchActivityApprove,
} from '@bitgouel/api'
import { useRouter } from 'next/navigation'
import { ApproveStatusEnum } from '@bitgouel/types'
import { lectureStatusToKor } from '@bitgouel/common/src/constants'
import { match } from 'ts-pattern'

const ActivityDetailPage = ({ activity_id }: { activity_id: string }) => {
  const { data } = useGetActivityDetail(activity_id)

  const router = useRouter()

  const { openModal } = useModal()

  const { mutate: approve } = usePatchActivityApprove(activity_id)

  const onReject = () => {
    const { mutate: reject } = useDeleteRejectActivity(activity_id)
  }

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ActivityTitle>게시글</S.ActivityTitle>
          <S.TitleButtonContainer>
            <S.LectureButton
              onClick={() =>
                router.push('/main/club/student/activity/detail/modify')
              }
            >
              <Pen />
              <span>활동 수정</span>
            </S.LectureButton>
            <S.LectureButton>
              <TrashCan />
              <span
                onClick={() =>
                  openModal(
                    <RejectModal
                      type='활동을 삭제하시겠습니까?'
                      title={data?.data.title}
                      onReject={onReject}
                      onAppropriation={approve}
                    />
                  )
                }
              >
                활동 삭제
              </span>
            </S.LectureButton>
          </S.TitleButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.Title>{data?.data.title}</S.Title>
            <S.SubTitle>
              <S.ApproveStatus
                approveColor={match(data?.data.approveStatus)
                  .with('APPROVED', () => true)
                  .otherwise(() => false)}
              >
                {lectureStatusToKor[data?.data.approveStatus]}
              </S.ApproveStatus>
              <S.NumberBox>
                <S.SubTitleBox>학점</S.SubTitleBox>
                <span>{data?.data.credit}점 수여</span>
              </S.NumberBox>
              <S.NumberBox>
                <S.SubTitleBox>활동 날짜</S.SubTitleBox>
                <span>
                  {`${data?.data.activityDate.slice(
                    0,
                    4
                  )}년 ${data?.data.activityDate.slice(
                    5,
                    7
                  )}월 ${data?.data.activityDate.slice(8, 10)}일`}
                </span>
              </S.NumberBox>
              <S.NumberBox>
                <S.SubTitleBox>최근 수정일</S.SubTitleBox>
                <span>
                  {`${data?.data.modifiedAt.slice(
                    0,
                    4
                  )}년 ${data?.data.modifiedAt.slice(
                    5,
                    7
                  )}월 ${data?.data.modifiedAt.slice(8, 10)}일
                  ${data?.data.modifiedAt.slice(
                    13,
                    15
                  )}:${data?.data.modifiedAt.slice(16, 18)}
                  `}
                </span>
              </S.NumberBox>
            </S.SubTitle>
          </S.TitleContainer>
          <S.MainText>{data?.data.content}</S.MainText>
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default ActivityDetailPage
