import styled from '@emotion/styled'

const Section = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 5rem;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--primary) !important;
  }
`

export default Section
