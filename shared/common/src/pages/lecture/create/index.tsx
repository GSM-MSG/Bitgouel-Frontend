import React from 'react'
import * as S from './style'
import { Header } from '../../../components'
import Bg3 from '../../../assets/png/mainBg3.png'
import { Chevron, People } from '../../../assets'

const CreatePage = () => {
  const menuList = [
    { kor: '강의 유형 선택', svg: <Chevron /> },
    { kor: '신청 기간 선택', svg: <Chevron /> },
    { kor: '학점 선택', svg: <Chevron /> },
    { kor: '최대 수강 인원 입력', svg: <People /> },
  ]

  return (
    <S.LectureWrraper>
      <Header />
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 개설</S.LectureTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputWrraper>
        <S.DocumentInput>
          <S.InputTitle placeholder={'강의 제목'} />
          <S.InputMainText
            maxLength={1000}
            placeholder={'강의 설명 작성 (1000자 이내)'}
          />
          <S.LectureSetting>
            <S.SettingTitle>강의 세부 설정</S.SettingTitle>
            <S.SettingSelectionContainer>
              {menuList.map((menu, idx) => (
                <S.SettingSelection key={idx}>
                  {menu.svg}
                  <span>{menu.kor}</span>
                </S.SettingSelection>
              ))}
            </S.SettingSelectionContainer>
          </S.LectureSetting>
          <S.ButtonContainer>
            <S.CreateButton>수강 신청하기</S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputWrraper>
    </S.LectureWrraper>
  )
}

export default CreatePage