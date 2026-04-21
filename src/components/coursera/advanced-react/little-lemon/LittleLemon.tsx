import React from 'react'
import TrackExpenses from './hooks/useReducer/TrackExpenses'

const LittleLemon = () => {
  return (
    <section className='container'>
        <div>
            <h2>Little Lemon</h2>
        </div>
       <TrackExpenses/>
    </section>
  )
}

export default LittleLemon