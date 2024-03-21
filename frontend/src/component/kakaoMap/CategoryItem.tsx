import { css } from '@emotion/react'

import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'

const CategoryItemContainer = css`
  background-color: white;
  border-radius: 30px;
  padding: 5px;
  border: 1px solid var(--primary);
`
/** @jsxImportSource @emotion/react */
export default function CategoryItem() {
  return (
    <FlexBox a="center" j="center" css={CategoryItemContainer}>
      <button>
        <TextBox fontWeight="bold" typography="t6">
          놀이시설
        </TextBox>
      </button>
    </FlexBox>
  )
}
