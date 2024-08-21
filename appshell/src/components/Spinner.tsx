import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

type SpinnerProps = {
    effect: "spin" | "spinPulse" | "spinReverse" | "pulse" | "beat" | "fade" | "beatFade" | "bounce" | "shake"
}

const Spinner: React.FC<SpinnerProps> = ({ effect }) => {
    return <FontAwesomeIcon className='text-6xl' icon={faSkullCrossbones} {...{ [effect]: true }} />
}

export default Spinner