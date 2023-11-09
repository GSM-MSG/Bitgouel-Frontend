import styled from '@emotion/styled'

export const SlideBg = styled.div<{ url: any }>`
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

export default styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg};
`

export const DocumentInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const DocumentInput = styled.div`
  margin-top: 2.5rem;
  width: 75rem;
`

export const InputTitle = styled.input`
  ${({ theme }) => theme.typo.title_md};
  color: ${({ theme }) => theme.color.black};
  height: 2.6875rem;
  outline: none;
  border: none;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray[700]};
  }
`

export const InputMainText = styled.textarea`
  ${({ theme }) => theme.typo.text_lg};
  color: ${({ theme }) => theme.color.black};
  margin-top: 0.5rem;
  height: 19.25rem;
  outline: none;
  border: none;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray[700]};
  }
`

export const LectureSetting = styled.div`
  margin-top: 1.25rem;
  width: 100%;
`

export const SettingTitle = styled.div`
  ${({ theme }) => theme.typo.text_lg};
  color: ${({ theme }) => theme.color.gray[400]};
`

export const SettingSelectionContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
`

export const SettingSelection = styled.div`
  display: flex;
  margin-right: 2.5rem;
  cursor: pointer;
  span {
    ${({ theme }) => theme.typo.text_md};
    color: ${({ theme }) => theme.color.gray[700]};
    margin-left: 0.5rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CreateButton = styled.div`
  background-color: ${({ theme }) => theme.color.gray[700]};
  color: ${({ theme }) => theme.color.gray[400]};
  ${({ theme }) => theme.typo.text_lg};
  cursor: pointer;
  bottom: 1.5625rem;
  position: fixed;
  padding: 0.8438rem 2.5625rem;
  border-radius: 0.5rem;
`
