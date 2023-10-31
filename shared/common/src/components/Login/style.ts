import styled from '@emotion/styled'

export const LoginWrapper = styled.div`
  position: sticky;
  width: 27rem;
  height: 34.6875rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #b8b8b8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0.75rem;
`

export const TitleWrapper = styled.div`
  width: 100%;
  height: 11.0625rem;
`
export const TitleItemWrapper = styled.div`
  padding: 1.5rem 0 0 1.5rem;
  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  width: 13.5rem;
  height: 11.0625rem;
`

export const TitleItem = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_md};
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  flex-direction: column;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const PasswordContainer = styled.div`
  width: 88%;
  display: flex;
  gap: 13.125rem;
  margin-top: 0.25rem;
`

export const MenuItem = styled.span`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.gray['400']};
`

export const PasswordSearch = styled.span`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.main};
  cursor: pointer;
`

export const LoginButtonWrapper = styled.div`
  width: 100%;
  height: 6.625rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_lg};
  width: 24rem;
  height: 3.25rem;
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;
`

export const JoinWrapper = styled.div`
  width: 100%;
  height: 5.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const JoinContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`

export const NoAccountItem = styled.span`
  ${({ theme }) => theme.typo.text_md};
  color: ${({ theme }) => theme.color.black};
`

export const UserJoinItem = styled.span`
  ${({ theme }) => theme.typo.text_md};
  color: ${({ theme }) => theme.color.main};
  margin-left: 0.25rem;
  cursor: pointer;
`
