'use client'

import { RoleEnumTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { match } from 'ts-pattern'
import { Bg5, Pen, TrashCan } from '../../../assets'
import * as S from './style'
import { RejectModal } from '../../../modals'
import {
  useDeleteInquiryReject,
  useDeleteMyInquiry,
  useGetInquiryDetail,
} from '@bitgouel/api'
import { useModal } from '../../../hooks'
import { sliceDateTime } from '../../../utils'

const InquiryDetailPage = ({ inquiryId }: { inquiryId: string }) => {
  const { push } = useRouter()
  const role =
    typeof window !== 'undefined'
      ? (localStorage.getItem('Authority') as RoleEnumTypes)
      : null
  const { data } = useGetInquiryDetail(inquiryId)
  const {
    question,
    questionDetail,
    questioner,
    questionDate,
    answerStatus,
    createdAt,
    answer,
    answeredDate,
  } = data?.data || {}
  const { mutate: inquiryReject } = useDeleteInquiryReject(inquiryId)
  const { mutate: myInquiryReject } = useDeleteMyInquiry(inquiryId)
  const { openModal } = useModal()

  return (
    <div>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.InquiryTitle>문의 상세</S.InquiryTitle>
          <S.TitleButtonContainer>
            <S.InquiryButton
              onClick={() => push(`/main/inquiry/modify/${inquiryId}`)}
            >
              <Pen />
              <span>문의 수정</span>
            </S.InquiryButton>
            <S.InquiryButton
              onClick={() =>
                openModal(
                  <RejectModal
                    type='문의'
                    purpose='삭제'
                    title={question}
                    onAppropriation={() => myInquiryReject()}
                  />
                )
              }
            >
              <TrashCan />
              <span>문의 삭제</span>
            </S.InquiryButton>
          </S.TitleButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.Title>{question}</S.Title>
            <S.SubTitle>
              <S.ApproveStatus
                approveColor={match(answerStatus)
                  .with('ANSWERED', () => true)
                  .otherwise(() => false)}
              >
                {answerStatus === 'ANSWERED'
                  ? '답변 완료됨'
                  : '답변 대기 중'}
              </S.ApproveStatus>
              <S.SemiTitleBox>
                <S.SubTitleBox>게시일</S.SubTitleBox>
                <span>{sliceDateTime(createdAt)}</span>
              </S.SemiTitleBox>
              <S.SemiTitleBox>
                <S.SubTitleBox>게시자</S.SubTitleBox>
                <span>{questioner}</span>
              </S.SemiTitleBox>
            </S.SubTitle>
          </S.TitleContainer>
          <S.MainText>{questionDetail}</S.MainText>
          <S.AnswerBox
            displayType={match(answerStatus)
              .with('ANSWERED', () => true)
              .otherwise(() => false)}
          >
            <S.AnswerTitleBox>
              <S.AnswerTitle>문의 답변</S.AnswerTitle>
              <S.AnswerDate>{sliceDateTime(answeredDate)}</S.AnswerDate>
            </S.AnswerTitleBox>
            <S.AnswerText>{answer}</S.AnswerText>
          </S.AnswerBox>
          {role === 'ROLE_ADMIN' && (
            <S.ButtonWrapper>
              <S.ButtonContainer>
                <S.DeleteNoticeButton
                  onClick={() => (
                    <RejectModal
                      type='문의'
                      purpose='삭제'
                      title={question}
                      onAppropriation={() => inquiryReject()}
                    />
                  )}
                >
                  삭제하기
                </S.DeleteNoticeButton>
                <S.ModifyNoticeButton>답변하기</S.ModifyNoticeButton>
              </S.ButtonContainer>
            </S.ButtonWrapper>
          )}
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default InquiryDetailPage
