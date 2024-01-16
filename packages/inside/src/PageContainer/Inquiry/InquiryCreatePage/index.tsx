'use client'

import * as S from './style'
import { Bg5 } from '@bitgouel/common'

const InquiryCreatePage = () => {
  const MAXLENGTH: number = 1000 as const

  return (
    <div>
      <S.SlideBg url={Bg5}>
        <S.BgContainer>
          <S.CreateTitle>문의하기</S.CreateTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle placeholder='문의 제목(100자 이내)' maxLength={100} />
          <S.InputMainText
            maxLength={MAXLENGTH}
            placeholder='본문 입력 (1000자 이내)'
          />
          <S.ButtonContainer>
            <S.CreateButton>문의하기</S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default InquiryCreatePage
