import * as S from './style'
import React from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { Page1Obj, Page2Obj } from '../../../../atoms'
import { useRouter } from 'next/navigation'

const SignUpButtonContainer = ({
  page,
  isNext,
  setPage,
}: {
  page: number
  isNext: boolean
  setPage: React.Dispatch<React.SetStateAction<number>>
}) => {
  const router = useRouter()
  const page1Obj = useRecoilValue(Page1Obj)
  const setPage2Obj = useSetRecoilState(Page2Obj)

  const onNext = () => {
    if (isNext) {
      if (page === 1) {
        setPage2Obj((prev) => prev.slice(0, 3))
        if (page1Obj[1].value === '학생') {
          setPage2Obj((prev) => [
            ...prev,
            {
              value: '',
              placeholder: '입학년도 입력',
              type: 'number',
              maxLength: 4,
            },
            {
              value: '',
              placeholder: '학번 입력 (ex:1101)',
              type: 'number',
              maxLength: 5,
            },
          ])
        } else if (
          page1Obj[1].value === '취업동아리 선생님' ||
          page1Obj[1].value === '취업뽀짝 선생님'
        ) {
          setPage2Obj((prev) => prev)
        } else if (page1Obj[1].value === '기업 강사') {
          setPage2Obj((prev) => [
            ...prev,
            { value: '', placeholder: '소속 기업명 입력', type: 'text' },
          ])
        } else if (page1Obj[1].value === '대학 교수') {
          setPage2Obj((prev) => [
            ...prev,
            { value: '', placeholder: '대학명 입력', type: 'text' },
          ])
        } else if (page1Obj[1].value === '유관기관') {
          setPage2Obj((prev) => [
            ...prev,
            { value: '', placeholder: '소속 기관 입력', type: 'text' },
          ])
        }
      }
      setPage((prev) => prev + 1)
    } else return
  }

  return (
    <S.SignUpButtonContainer page={page}>
      <S.PreButton
        onClick={() =>
          page === 1 ? router.push('/auth/login') : setPage((prev) => prev - 1)
        }
      >
        이전으로
      </S.PreButton>
      <S.NextButton isNext={isNext} onClick={onNext}>
        {page !== 3 ? '다음으로' : '가입하기'}
      </S.NextButton>
    </S.SignUpButtonContainer>
  )
}

export default SignUpButtonContainer
