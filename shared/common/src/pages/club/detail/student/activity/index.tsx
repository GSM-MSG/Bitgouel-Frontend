'use client'

import * as S from './style'
import Bg2 from '../../../../../assets/png/mainBg2.png'
import { Plus } from '../../../../../assets'
import { useRouter } from 'next/navigation'

const ActivityPage = () => {
  const router = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>학생 정보</S.ClubTitle>
          <S.ButtonContainer>
            <S.ClubButton>
              <Plus />
              <span>활동 추가</span>
            </S.ClubButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
    </div>
  )
}

export default ActivityPage