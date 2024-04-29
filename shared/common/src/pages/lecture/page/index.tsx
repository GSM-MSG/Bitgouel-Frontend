'use client'

import { useGetLectureList } from '@bitgouel/api'
import {
  Bg3,
  Filter,
  FilterComponent,
  LectureFilterType,
  LectureItem,
  PaginationPages,
  Plus,
  PrintIcon,
  useDownload,
} from '@bitgouel/common'
import { LectureTypeEnum, LectureTypesFilterListTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './style'

const LecturePage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [lectureTypes, setLectureTypes] = useState<
    LectureTypesFilterListTypes[]
  >([
    { text: '전체', item: 'all', checked: true },
    {
      text: '상호학점인정교육과정',
      item: 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
      checked: false,
    },
    {
      text: '대학탐방프로그램',
      item: 'UNIVERSITY_EXPLORATION_PROGRAM',
      checked: false,
    },
  ])
  const [lectureType, setLectureType] =
    useRecoilState<string>(LectureFilterType)
  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [isClick, setIsClick] = useState<boolean>(false)
  const { push } = useRouter()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLectureTypes((prev) =>
      prev.map((type) =>
        type.item === e.target.id
          ? { ...type, checked: true }
          : { ...type, checked: false }
      )
    )

    if (e.target.checked && e.target.id === 'all') setLectureType('')
    else if (e.target.checked) setLectureType(e.target.id as LectureTypeEnum)
  }

  const { excelDown } = useDownload({
    fileName: '강의 신청 결과',
    fileTypes: 'xlsx',
    isClick,
  })

  const [currentPage, setCurrentPage] = useState(0)
  const { data, refetch, isLoading } = useGetLectureList({
    page: currentPage,
    size: 10,
    type: lectureType || 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
  })
  const pages = Array.from({ length: data?.lectures.totalPages || 0 }).map(
    (_, i) => i
  )

  const onDownload = () => {
    setIsClick(true)
    excelDown()
  }

  useEffect(() => {
    refetch()
  }, [lectureType, currentPage])

  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 목록</S.LectureTitle>
          <S.ButtonContainer>
            {isAdmin && (
              <>
                <S.LectureButton onClick={onDownload}>
                  <PrintIcon />
                  <span>신청 명단 출력</span>
                </S.LectureButton>
                <S.LectureButton onClick={() => push('/main/lecture/create')}>
                  <Plus />
                  <span>강의 개설하기</span>
                </S.LectureButton>
              </>
            )}
            <S.SelectFilterContainer>
              <S.LectureButton
                onClick={() => setIsLectureType((prev) => !prev)}
              >
                <Filter />
                <span>필터</span>
              </S.LectureButton>
              {isLectureType && (
                <FilterComponent
                  title='강의 유형'
                  filterList={lectureTypes}
                  onChange={onChange}
                />
              )}
            </S.SelectFilterContainer>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.ListWrapper>
        <S.ListContainer>
          {data?.lectures.content.map((item) => (
            <LectureItem key={item.id} item={item} />
          ))}
        </S.ListContainer>
        {data?.lectures.content?.length && !isLoading && (
          <PaginationPages
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </S.ListWrapper>
    </div>
  )
}

export default LecturePage
