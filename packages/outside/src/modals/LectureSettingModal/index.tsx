import {
  CancelIcon,
  LectureSession,
  LectureType,
  Portal,
  useModal,
} from '@bitgouel/common'
import { useRecoilState } from 'recoil'
import * as S from './style'

const lectureTypes: ['상호학점인정교육과정', '대학탐방프로그램'] = [
  '상호학점인정교육과정',
  '대학탐방프로그램',
]

const lectureSessions: [
  '1학년 2학기',
  '2학년 1학기',
  '2학년 2학기',
  '3학년 1학기'
] = ['1학년 2학기', '2학년 1학기', '2학년 2학기', '3학년 1학기']

const LectureTypeSelect = () => {
  const [lectureType, setLectureType] = useRecoilState(LectureType)
  return (
    <S.EnumSelectContainer>
      {lectureTypes.map((type) => (
        <S.EnumBox
          key={type}
          current={type}
          selected={lectureType}
          onClick={() => setLectureType(type)}
        >
          <span>{type}</span>
        </S.EnumBox>
      ))}
    </S.EnumSelectContainer>
  )
}

const LectureSessionSelect = () => {
  const [lectureSession, setLectureSession] = useRecoilState(LectureSession)
  return (
    <S.EnumSelectContainer>
      {lectureSessions.map((session) => (
        <S.EnumBox
          key={session}
          current={session}
          selected={lectureSession}
          onClick={() => setLectureSession(session)}
        >
          <span>{session}</span>
        </S.EnumBox>
      ))}
    </S.EnumSelectContainer>
  )
}

const LectureSettingModal = () => {
  const { closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <S.LectureSettingModalWrapper>
        <S.SettingTitleBox>
          <h3>강의 세부 설정</h3>
          <CancelIcon onClick={closeModal} />
        </S.SettingTitleBox>
        <S.SettingContainer>
          <span>강의 유형</span>
          <LectureTypeSelect />
        </S.SettingContainer>
        <S.SettingContainer>
          <span>수강 학기</span>
          <LectureSessionSelect />
        </S.SettingContainer>
      </S.LectureSettingModalWrapper>
    </Portal>
  )
}

export default LectureSettingModal
