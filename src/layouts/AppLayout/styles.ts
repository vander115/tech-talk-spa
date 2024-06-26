import styled from 'styled-components'

export const LayoutContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  span {
    color: white;
    opacity: 0.8;
  }

  img {
    height: 2.5rem;
    width: auto;
  }
`
