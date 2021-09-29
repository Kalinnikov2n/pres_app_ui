import React from 'react'
import Scrollbars, { ScrollbarProps } from 'react-scrollbars-custom'

interface ScrollbarCustomProps extends ScrollbarProps {
  scrollbarEnabled?: boolean
  innerRef?: React.RefObject<Scrollbars>
  noScrollX?: boolean
  noScrollY?: boolean
  translateContentSizeYToHolder?: boolean
}

const Scrollbar = React.memo<ScrollbarCustomProps>((props) => {
  const {
    scrollbarEnabled = true,
    innerRef,
    noScrollX = true,
    noScrollY = false,
    translateContentSizeYToHolder = false,
    ...scrollbarProps
  } = props
  if (!scrollbarEnabled) return <>{props.children}</>

  return (
    <Scrollbars
      translateContentSizeYToHolder={translateContentSizeYToHolder}
      noScrollX={noScrollX}
      noScrollY={noScrollY}
      {...scrollbarProps}
      className={`custom-scrollbar`}
      ref={innerRef as any}
    />
  )
})
Scrollbar.displayName = 'Scrollbar'
export default Scrollbar
