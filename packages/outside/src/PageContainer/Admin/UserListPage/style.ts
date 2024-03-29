import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'

export const SlideBg = styled.div<{ url: StaticImageData }>`
  height: 15rem;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  align-items: flex-end;
`

export const BgContainer = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const ClubTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.2);
  height: 2.5rem;
  margin-left: 1rem;
  padding: 0 0.75rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(0.25rem);
  svg {
    fill: ${({ theme }) => theme.color.white};
  }
  span {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.text_md.regular};
    margin-left: 0.25rem;
  }
  &:hover {
    background-color: rgb(255, 255, 255, 0.4);
  }
`

export const UserListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const UserSearchContainer = styled.div`
  margin-top: 2.5rem;
  width: 75rem;
  height: 3.375rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5625rem;
`

export const UserSearchBox = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
  padding: 1.0625rem 1.25rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color.gray['400']};
`

export const UserSearchInput = styled.input`
  width: 64.25rem;
  border: none;
  outline: none;
`

export const UserSearchFilterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 24rem;
  position: relative;
`

export const UserSearchFilter = styled.div`
  width: 5.75rem;
  height: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['400']};
  border-radius: 0.5rem;
  ${({ theme }) => theme.typo.text_md.medium};
  color: ${({ theme }) => theme.color.gray['400']};
  fill: ${({ theme }) => theme.color.gray['400']};
  cursor: pointer;
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    border: 0.0625rem solid ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.main};
    fill: ${({ theme }) => theme.color.main};
  }
`

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75rem;
  height: 32.625rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  div {
    width: 100%;
  }
`

export const DisplayBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.625rem;
  padding-left: 1rem;
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_sm.medium};

  span {
    &:last-child {
      margin-left: 5.2rem;
    }
  }
`
