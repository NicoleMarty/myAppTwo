import React from 'react'
import './TabOneContainer.css'

interface ContainerProps {
  name: string
}

const TabOneContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className='container'>
      <strong>{name}</strong>
      <p>
        Explore{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://ionicframework.com/docs/components'
        >
          UI Components
        </a>
      </p>
    </div>
  )
}

export default TabOneContainer
