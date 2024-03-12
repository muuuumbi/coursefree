import styled from '@emotion/styled'

export const Container = styled.nav`
  width: 100%;

  display: flex;

  margin-top: 15px;
  a.active {
    span {
      border-bottom: 1px solid var(--primary);
      color: black;
      font-weight: bold;
    }
  }
`
