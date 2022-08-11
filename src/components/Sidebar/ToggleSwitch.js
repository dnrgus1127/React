import React from 'react'
import styled from 'styled-components'

const Switch = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    /* absolute 부모 엘리먼트에 속박되지 않고 자유로운 배치 가능 */
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: ${({theme}) => theme.switchWidth};
    height: ${({theme}) => theme.switchHeight};
    border-radius: 50em;
    padding: ${({theme}) => theme.switchPadding} 0;
`



const ToggleSwitch = () => {
  return (
    <Switch>
        <input className='switch_input' type="checkbox" id="switchCheckbox1" onClick={() =>{}}/>
        <label aria-hidden="true" className='switch__label' htmlFor="switchCheckbox1">On</label>
        <div aria-hidden="true" className='switch__marker'></div>
    </Switch>
  )
}

export default ToggleSwitch