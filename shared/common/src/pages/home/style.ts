import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const scrollingLeftFirst = keyframes`
  0% {left: 0%;}
  100% {left: -116.5625rem;}
`

const scrollingLeftSecond = keyframes`
  0% {left: 1865px;}

  100% {left: 0%;}
`

const scrollingRightFirst = keyframes`
  0% {right: 2185px;}

  100% {right: 0%;}
`

const scrollingRightSecond = keyframes`
  0% {right: 0%;}

  100% {right: -2185px;}
`

export const HomeWrapper = styled.div`
  background-color: #f6f6f6;
`

export const SlideBg = styled.div<{ url: any }>`
  height: 50rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-image: url(${({ url }) => url.src});
  background-size: cover;
  justify-content: center;
  transition: all 0.5s;
`

export const BgContainer = styled.div`
  width: 75rem;
`

export const HomeTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const ViewContainer = styled.div`
  width: 100%;
  position: absolute;
  top: calc(50rem - 4rem);
`

export const View = styled.div`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  ${({ theme }) => theme.typo.caption.regular}
  svg {
    transform: rotate(90deg);
    margin-bottom: 0.5rem;
  }
`

export const SubTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`

export const SubTitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
`

export const SubTitleSub = styled.span`
  color: ${({ theme }) => theme.color.gray[400]};
  ${({ theme }) => theme.typo.text_lg.medium};
`

export const SubTitleMain = styled.span`
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_lg.semibold}
`

export const FromTextContainer = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.title_sm.regular}
  a {
    ${({ theme }) => theme.typo.title_sm.semibold}
  }
  a:first-child {
    color: #CD2329;
  }
  a:last-child {
    color: #2270C1;
  }
`

export const BoxText = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_sm.semibold}
  margin-left: 0.75rem;
`

export const UnionListContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const UnionListWrapper = styled.div`
  display: flex;
  width: 75rem;
  justify-content: space-between;
`

export const UnionItem = styled.div`
  width: 17.625rem;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  li {
    ${({ theme }) => theme.typo.text_lg.medium}
    color: ${({ theme }) => theme.color.gray['400']};
  }
  div {
    margin-top: 2rem;
    margin-left: 1rem;
  }
`

export const UnionTitle = styled.span`
  ${({ theme }) => theme.typo.title_sm.semibold}
  color: ${({ theme }) => theme.color.black};
  margin-left: 1rem;
`

export const BannerTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12rem;
  margin-top: 7.5rem;
  background: linear-gradient(to right, #288be1, #45dfda);

  div {
    ${({ theme }) => theme.typo.title_sm.semibold}
    color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    line-height: 2rem;
  }
`

export const SchoolListContainer = styled.div`
  margin-top: 7.5rem;
`

export const SemiTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2.5rem;
`

export const SchoolIntroWrapper = styled.div`
  width: 100vw;
  height: 35rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 6rem;
`

export const SchoolIntroListContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 15rem;
  overflow: hidden;
`

const SchoolIntroListExample = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
`

export const SchoolIntroListLeftFirst = styled(SchoolIntroListExample)`
  left: 0;
  height: inherit;
  animation: ${scrollingLeftFirst} 20s linear 0s infinite normal none running;
`

export const SchoolIntroListLeftSecond = styled(SchoolIntroListExample)`
  left: 0;
  height: inherit;
  animation: ${scrollingLeftSecond} 20s linear 0s infinite normal none running;
`

export const SchoolIntroListRightFirst = styled(SchoolIntroListExample)`
  animation: ${scrollingRightFirst} 20s linear 0s infinite normal none running;
`

export const SchoolIntroListRightSecond = styled(SchoolIntroListExample)`
  animation: ${scrollingRightSecond} 20s linear 0s infinite normal none running;
`

export const ClubListContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ClubIntroListWrapper = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  &:last-child {
    margin-top: 4rem;
  }
`

export const ClubIntroList = styled.div`
  margin-top: 5rem;
`

export const ClubIntro = styled.div`
  width: 24rem;
`

export const ClubIntroSubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
`

export const ClubIntroTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_md.medium};
`

export const ClubIntroSubTitle = styled.span`
  color: ${({ theme }) => theme.color.gray[400]};
  ${({ theme }) => theme.typo.text_sm.regular};
`

export const ClubIntroText = styled.div`
  margin: 1rem 1.5rem 0rem;

  li {
    color: ${({ theme }) => theme.color.gray['700']};
    ${({ theme }) => theme.typo.text_sm.regular};
  }
`

export const ClubListWrapper = styled.div`
  margin-top: 10rem;
`

export const ClubListTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_md.semibold};
`

export const ClubListBanner = styled.span<{ url: any }>`
  margin-top: 2.5rem;
  width: 100%;
  height: 37rem;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  display: flex;
  justify-content: center;
`

export const ClubListContents = styled.div`
  margin-top: 2.5rem;
  width: 75rem;
`

export const ClubValueTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_md.semibold};
`

export const ClubMainTextArea = styled.div`
  margin: 2.5rem;
  display: flex;
  height: 26.25rem;
`

export const ClubLeftTextArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 15.125rem;
`

export const ClubLeftText = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_lg.semibold};
  height: 2.25rem;
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`

export const ClubRightTextArea = styled.div`
  width: 100%;
`

export const ClubRightTextLine = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  &:last-child {
    margin-bottom: 0;
  }
`

export const ClubRightText = styled.div`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_sm.medium};
  height: 2.125rem;
  display: flex;
  align-items: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.white};
  border-radius: 2rem;
  padding: 0 1rem;
  width: fit-content;
  margin-right: 1rem;
`

export const UnionUniversityContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const UnionUniversityList = styled.div`
  display: flex;
  height: 32.5rem;
  margin-top: 5rem;
  justify-content: space-between;
`

export const UniversityLeftArea = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  text-align: end;
  div {
    margin-top: 6.25rem;
  }
`

export const UniversityRightArea = styled.div`
  div {
    margin-bottom: 6.25rem;
  }
`

export const UniversityIntro = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

export const WhiteSpace = styled.div`
  width: 5rem;
`

export const UniversityName = styled.span`
  color: ${({ theme }) => theme.color.blue['300']};
  ${({ theme }) => theme.typo.title_sm.semibold};
`

export const UniversityText = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_lg.semibold};
  margin-top: 0.75rem;
`

export const CompanyIntroContainer = styled.div`
  margin-top: 10rem;
`

export const AgencyIntroContainer = styled.div`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AgencyIntroList = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: space-between;
  width: 35rem;
  &:last-child {
    width: 55rem;
    margin-top: 8.125rem;
  }
`

export const AgencyIntroItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`

export const AgencyValueName = styled.div<{ color: string }>`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_lg.semibold};
  position: absolute;
  margin-top: -3.125rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 6.25rem;
  height: 6.25rem;
  background-color: ${({ theme, color }) => theme.color.blue[color]};
`

export const AgencyNameBox = styled.div`
  width: 15rem;
  height: 9.375rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`

export const AgencyName = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_md.regular};
  margin-top: 0.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`
