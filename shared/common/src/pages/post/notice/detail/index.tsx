'use client'

import { TokenManager, useDeletePost, useGetPostDetail } from '@bitgouel/api'
import { AppropriationModal, Bg1, useModal } from '@bitgouel/common'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LinkTextBox, LinkTitle, LinkWrapper } from '../../detail/style'
import * as S from './style'
import { RoleEnumTypes } from '@bitgouel/types'
import { useEffect, useState } from 'react'

const roleArray: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_COMPANY_INSTRUCTOR',
  'ROLE_PROFESSOR',
  'ROLE_GOVERNMENT',
]

const NoticeDetailPage = ({ noticeId }: { noticeId: string }) => {
  const { data } = useGetPostDetail(noticeId)
  const { mutate } = useDeletePost(noticeId, '공지사항')
  const { openModal } = useModal()
  const { push } = useRouter()
  const tokenManager = new TokenManager()
  const [isRole, setIsRole] = useState<boolean>(false)

  useEffect(() => {
    setIsRole(roleArray.includes(tokenManager.authority || 'ROLE_STUDENT'))
  }, [])

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.ClubTitle>공지사항 상세</S.ClubTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.Title>{data?.data.title}</S.Title>
            <S.SubTitle>
              <S.NumberBox>
                <S.SubTitleBox>게시일</S.SubTitleBox>
                <span>{data?.data.modifiedAt}</span>
              </S.NumberBox>
            </S.SubTitle>
          </S.TitleContainer>
          <S.MainText>{data?.data.content}</S.MainText>
          <S.SharedLine />
          <LinkTextBox>
            <div>
              <LinkTitle>관련 링크 보기</LinkTitle>
            </div>
            <LinkWrapper>
              {data?.data.links.map((link) => (
                <Link href={link} passHref legacyBehavior>
                  <a target='_blank' rel='noopener noreferrer'>
                    {link}
                  </a>
                </Link>
              ))}
            </LinkWrapper>
          </LinkTextBox>
          <S.ButtonWrapper>
            <S.ButtonContainer>
              {isRole && (
                <S.DeleteNoticeButton
                  onClick={() =>
                    openModal(
                      <AppropriationModal
                        isApprove={false}
                        question='공지사항을 삭제하시겠습니까?'
                        purpose='삭제하기'
                        title={data?.data.title as ''}
                        onAppropriation={() => mutate()}
                      />
                    )
                  }
                >
                  삭제하기
                </S.DeleteNoticeButton>
              )}
              <S.ModifyNoticeButton
                onClick={() => push(`/main/post/notice/${noticeId}/modify`)}
              >
                수정하기
              </S.ModifyNoticeButton>
            </S.ButtonContainer>
          </S.ButtonWrapper>
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default NoticeDetailPage
