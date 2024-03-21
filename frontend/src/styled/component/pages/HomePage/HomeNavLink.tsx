import styled from '@emotion/styled'

export const Container = styled.nav`
  width: 100%;
  padding: 15px;
  display: flex;

  a.active {
    span {
      border-bottom: 1px solid var(--primary);
      color: black;
      font-weight: bold;
    }
  }
`
