'use client'

import { lectureToKor, lectureStatusToKor } from '../../constants'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { LectureItemType } from '@bitgouel/api'

interface LectureItemProps {
  item: LectureItemType
  inside: boolean
}

const LectureItem = ({ item, inside }: LectureItemProps) => {
  const router = useRouter()

  return (
    <S.LectureItemWrapper
      onClick={() => router.push(`/main/lecture/${item.id}`)}
    >
      <S.SubTitle>
        <S.Professor>{item.lecturer}</S.Professor>
        <S.Date>
          {`${item.completeDate.slice(0, 4)}년 ${item.completeDate.slice(
            5,
            7
          )}월 ${item.completeDate.slice(8, 10)}일 ${item.completeDate.slice(
            11,
            16
          )}`}
        </S.Date>
      </S.SubTitle>
      <S.Title>{item.name}</S.Title>
      <S.MainTextContainer>
        <S.MainText>{item.content}</S.MainText>
      </S.MainTextContainer>
      <S.SubMenuContainer>
        <S.From>{lectureToKor[item.lectureType]}</S.From>
        <S.StatusFrom
          status={item.approveStatus}
          display={inside ? 'none' : ''}
        >
          {lectureStatusToKor[item.approveStatus]}
        </S.StatusFrom>
        <S.MenuNum>
          <span>
            {`${item.startDate.slice(0, 4)}년 ${item.startDate.slice(
              5,
              7
            )}월 ${item.startDate.slice(8, 10)}일 ${item.startDate.slice(
              11,
              16
            )}`}{' '}
            ~{' '}
            {`${item.endDate.slice(0, 4)}년 ${item.endDate.slice(
              5,
              7
            )}월 ${item.endDate.slice(8, 10)}일 ${item.endDate.slice(11, 16)}`}
          </span>
          <span>•</span>
          <span>
            {item.headCount}/{item.maxRegisteredUser}명
          </span>
        </S.MenuNum>
      </S.SubMenuContainer>
    </S.LectureItemWrapper>
  )
}
export default LectureItem
