'use client'

import { TokenManager, useDeleteLogout } from '@bitgouel/api'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState } from 'recoil'
import { match } from 'ts-pattern'
import {
  Filter,
  Message,
  Plus,
  Question,
  Symbol1,
  Symbol2
} from '@bitgouel/common'
import { LectureTypeText } from '../../atoms'
import { LectureTypeModal } from '../../modals'
import { theme } from '../../styles'
import * as S from './style'

const menuList = [
  { kor: '사업소개', link: '/' },
  { kor: '강의', link: '/main/lecture' },
  { kor: '동아리', link: '/main/club' },
  { kor: '게시판', link: '/main/post' },
  { kor: '관리자', link: '/main/admin' },
]

const Header = ({ is_admin }: { is_admin: boolean }) => {
  const tokenManager = new TokenManager()
  const { push } = useRouter()
  const pathname = usePathname()
  const [bgColor, setBgColor] = useState<string>('')
  const [symbolNum, setSymbolNum] = useState<any>(Symbol1)
  const [btnColor, setBtnColor] = useState<string>('rgb(255, 255, 255, 0.2)')
  const [borderColor, setBorderColor] = useState<string>('')
  const [spanColor, setSpanColor] = useState<string>(`${theme.color.white}`)
  const [svgView, setSvgView] = useState<string>('none')
  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [lectureTypeText, setLectureTypeText] =
    useRecoilState<string>(LectureTypeText)
  const [text, setText] = useState<string>('로그인')
  const { mutate } = useDeleteLogout()

  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window
      if (pathname === '/') {
        if (scrollY >= 700) {
          setBgColor(`${theme.color.white}`)
          setSymbolNum(Symbol2)
          setBtnColor('rgb(209, 209, 209, 1)')
          setBorderColor(`0.0625rem solid ${theme.color.gray['900']}`)
          setSpanColor(`${theme.color.main}`)
        } else {
          setBgColor('')
          setSymbolNum(Symbol1)
          setBtnColor('rgb(255, 255, 255, 0.2)')
          setBorderColor('')
          setSpanColor(`${theme.color.white}`)
        }
      } else {
        if (scrollY >= 240) {
          setBgColor(`${theme.color.white}`)
          setSymbolNum(Symbol2)
          setBtnColor('rgb(209, 209, 209, 1)')
          setBorderColor(`0.0625rem solid ${theme.color.gray['900']}`)
          setSpanColor(`${theme.color.main}`)
          setSvgView('flex')
        } else {
          setBgColor('')
          setSymbolNum(Symbol1)
          setBtnColor('rgb(255, 255, 255, 0.2)')
          setBorderColor('')
          setSpanColor(`${theme.color.white}`)
          setSvgView('none')
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (tokenManager.accessToken) {
      if (pathname === '/main/my') setText('로그아웃')
      else if (pathname !== '/main/my') setText('내 정보')
    }
  }, [pathname])

  return (
    <S.HeaderWrapper
      bgColor={bgColor}
      borderColor={borderColor}
      isAuth={match(pathname)
        .with('/auth/login', () => true)
        .with('/auth/signUp', () => true)
        .with('/auth/find', () => true)
        .otherwise(() => false)}
    >
      <S.HeaderContainer>
        <S.SymbolContainer url={symbolNum} onClick={() => push('/')} />
        <S.MenuWrapper is_admin={is_admin}>
          {menuList
            .filter((menu, idx) => (is_admin ? menu : idx !== 4))
            .map((menu, idx) => (
              <S.MenuItem
                key={idx}
                onClick={() =>
                  tokenManager.accessToken
                    ? push(menu.link)
                    : toast.info('로그인 후 이용해 주세요.')
                }
                isSameRoute={match(idx)
                  .with(0, () => pathname === menu.link)
                  .otherwise(() => pathname.includes(menu.link))}
                color={spanColor}
              >
                {menu.kor}
              </S.MenuItem>
            ))}
        </S.MenuWrapper>
        <S.ButtonWrapper view={svgView}>
          {match(pathname)
            .with('/main/lecture', () => (
              <>
                <S.SelectFilterContainer>
                  <Filter onClick={() => setIsLectureType((prev) => !prev)} />
                  {isLectureType && (
                    <LectureTypeModal
                      location='헤더'
                      text={lectureTypeText}
                      setText={setLectureTypeText}
                      setIsLectureType={setIsLectureType}
                    />
                  )}
                </S.SelectFilterContainer>
                {(tokenManager.authority === 'ROLE_PROFESSOR' ||
                  tokenManager.authority === 'ROLE_GOVERNMENT' ||
                  tokenManager.authority === 'ROLE_COMPANY_INSTRUCTOR') && (
                  <Plus
                    onClick={() => {
                      push('/main/lecture/create')
                    }}
                  />
                )}
              </>
            ))
            .with('/main/post', () => (
              <>
                <Message onClick={() => push('/main/post/notice')} />
                <Question onClick={() => push('/main/post/inquiry')} />
              </>
            ))
            .otherwise(() => null)}
        </S.ButtonWrapper>
        <S.LoginButton
          onClick={() =>
            tokenManager.accessToken
              ? match(pathname)
                  .with('/main/my', () => mutate())
                  .otherwise(() => push('/main/my'))
              : push('/auth/login')
          }
          color={btnColor}
        >
          <span>{text}</span>
        </S.LoginButton>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}
export default Header
