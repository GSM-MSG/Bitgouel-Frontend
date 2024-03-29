import styled from '@emotion/styled'

export const UserItem = styled.div<{ isCurrent: boolean }>`
  width: 100%;
  height: 3.625rem;
  display: flex;
  align-items: center;
  padding-left: ${({ isCurrent }) => (isCurrent ? '1rem' : '0')};
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  box-sizing: border-box;

  span {
    margin-left: ${({isCurrent}) => !isCurrent && '1.5rem'};
    
    &:last-child {
      margin-left: ${({isCurrent}) => isCurrent && '3rem'};
    }
  }

`

export const UserCheckBox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 1.2rem;
  cursor: pointer;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['400']};
`

export const Name = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_lg.medium}
  margin-right: 0.5rem;
`

export const Role = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_lg.medium}
`
