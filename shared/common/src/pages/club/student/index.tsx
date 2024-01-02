'use client'

import * as S from './style'
import { useRouter } from 'next/navigation'
import {
  CalendarIcon,
  PlusCertificate,
  PersonOut,
  AddCertificate,
} from '../../../assets'
import Bg2 from '../../../assets/png/mainBg2.png'
import { ChangeEvent, use, useState } from 'react'
import { SelectCalendarModal } from '../../../modals'
import { useRecoilValue } from 'recoil'

import {
  useGetCertificateList,
  useGetCertificateListTeacher,
  usePostCertificate,
  usePatchModifyCertificate,
} from '@bitgouel/api'
import { CertificateRequest } from '@bitgouel/types'
import { Role } from '../../../atoms/index'

const StudentPage = (student_id: string) => {
  const { push } = useRouter()
  // const [certificateList, setCertificateList] = useState<Certificate[]>([
  //   {
  //     id: 1,
  //     name: '정보처리기능사',
  //     acquisitionDate: '2023-02-16',
  //     isModify: false,
  //   },
  //   {
  //     id: 2,
  //     name: '정보처리기능사',
  //     acquisitionDate: '2023-02-17',
  //     isModify: false,
  //   },
  //   {
  //     id: 3,
  //     name: '정보처리기능사',
  //     acquisitionDate: '2023-02-16',
  //     isModify: false,
  //   },
  // ])
  const [isAddCertificate, setIsAddCertificate] = useState<boolean>(false)
  const [certificateText, setCertificateText] = useState<string>('')
  const [certificateIndex, setCertificateIndex] = useState<number>(-1)
  const [certificateDate, setCertificateDate] = useState<Date>(new Date())
  const [certificateDateText, setCertificateDateText] = useState<string>('')

  const role = useRecoilValue(Role)
  const { data: certificateList } =
    role === 'ROLE_STUDENT'
      ? useGetCertificateList()
      : useGetCertificateListTeacher(student_id)

  const { mutate } = usePostCertificate()

  console.log(certificateList)

  const onCreate = () => {
    const payload: CertificateRequest = {
      name: certificateText,
      acquisitionDate: `${certificateDate.getFullYear()}-${(
        certificateDate.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${certificateDate
        .getDate()
        .toString()
        .padStart(2, '0')}`,
    }
    mutate(payload)

    setCertificateText('')
    setCertificateDateText('')
  }

  // const handleModify = (id: number) => {
  //   setCertificateList((prev) => {
  //     const changedModify = prev.map((certificate) =>
  //       certificate.id === id
  //         ? { ...certificate, isModify: true }
  //         : certificate
  //     )
  //     return changedModify
  //   })
  // }

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>학생 정보</S.ClubTitle>
          <S.ButtonContainer>
            <S.ClubButton onClick={() => push('/main/club/student/activity')}>
              <PersonOut />
              <span>학생 활동</span>
            </S.ClubButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.CertificateWrapper>
        <S.CertificateContainer>
          <S.ProfileBox>
            <h3>홍길동</h3>
            <S.ProfileInfoBox>
              <span>010-1234-5678</span>
              <span>a12345679@gmail.com</span>
              <span>
                총 학점 <b>300</b>
              </span>
            </S.ProfileInfoBox>
          </S.ProfileBox>
          <S.CertificateBox>
            <S.CertificatePlusBox>
              <h3>자격증</h3>
              <S.PlusCertificateIcon
                onClick={() => setIsAddCertificate((prev) => !prev)}
              >
                <PlusCertificate />
              </S.PlusCertificateIcon>
            </S.CertificatePlusBox>
            <S.CertificateListBox>
              {certificateList?.data?.certifications.map((certificate, idx) =>
                certificate.name ? (
                  <S.AddCertificateBox key={idx}>
                    <S.ListToggle list='추가' />
                    <S.AddCertificateInput
                      type='text'
                      value={certificate.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setCertificateText(e.target.value)
                      }
                    />
                    <S.AddCertificateDateBox>
                      <S.SelectDateContainer>
                        {certificateIndex === idx && (
                          <SelectCalendarModal
                            date={certificateDate}
                            setDate={setCertificateDate}
                            setText={setCertificateDateText}
                          />
                        )}
                        <div
                          onClick={() =>
                            setCertificateIndex(
                              certificateIndex === idx ? -1 : idx
                            )
                          }
                        >
                          <CalendarIcon />
                        </div>
                      </S.SelectDateContainer>
                      <S.ShowDateText>
                        {certificate.acquisitionDate}
                      </S.ShowDateText>
                    </S.AddCertificateDateBox>
                    {certificateText !== '' && certificateDateText !== '' && (
                      <S.AddCertificateIcon onClick={onCreate}>
                        <AddCertificate />
                      </S.AddCertificateIcon>
                    )}
                  </S.AddCertificateBox>
                ) : (
                  <S.CertificateItemBox key={idx}>
                    <S.ListToggle list='추가됨' />
                    <span>{certificate.name}</span>
                    <span>
                      {certificate.acquisitionDate
                        .split('')
                        .map((v) => (v === '-' ? '.' : v))
                        .join('')}
                    </span>
                    <S.ModifyText
                    // onClick={() =>
                    //   handleModify(certificate.id)
                    // }
                    >
                      수정하기
                    </S.ModifyText>
                  </S.CertificateItemBox>
                )
              )}
              {isAddCertificate && (
                <S.AddCertificateBox>
                  <S.ListToggle list='추가' />
                  <S.AddCertificateInput
                    type='text'
                    value={certificateText}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCertificateText(e.target.value)
                    }
                  />
                  <S.AddCertificateDateBox>
                    <S.SelectDateContainer>
                      {certificateIndex ===
                        certificateList?.data?.certifications.length && (
                        <SelectCalendarModal
                          date={certificateDate}
                          setDate={setCertificateDate}
                          setText={setCertificateDateText}
                        />
                      )}
                      <div
                        onClick={() =>
                          setCertificateIndex(
                            certificateIndex ===
                              certificateList?.data?.certifications.length
                              ? -1
                              : certificateList?.data?.certifications.length
                          )
                        }
                      >
                        <CalendarIcon />
                      </div>
                    </S.SelectDateContainer>
                    <S.ShowDateText>{certificateDateText}</S.ShowDateText>
                  </S.AddCertificateDateBox>
                  {certificateText !== '' && certificateDateText !== '' && (
                    <S.AddCertificateIcon onClick={onCreate}>
                      <AddCertificate />
                    </S.AddCertificateIcon>
                  )}
                </S.AddCertificateBox>
              )}
            </S.CertificateListBox>
          </S.CertificateBox>
        </S.CertificateContainer>
      </S.CertificateWrapper>
    </div>
  )
}

export default StudentPage
