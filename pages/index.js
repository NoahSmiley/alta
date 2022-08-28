// DOCUMENTATION: http://styletron.org

import { styled, useStyletron } from 'styletron-react'

// statically styled component
const Title = styled('h1', {
  color: 'red',
  fontSize: '82px',
})

// dynamically styled component
const SubTitle = styled('h2', ({ $size }) => ({
  color: 'blue',
  fontSize: `${$size}px`,
}))

export default function Home() {
  // an alternative hook based API
  const [css] = useStyletron()
  return (
    <div>
    </div>
  )
}
