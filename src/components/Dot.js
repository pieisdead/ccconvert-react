import React from 'react';
import {useSpring, animated} from 'react-spring'

const Dot = () => {
 const props = useSpring({transform: 'scale(1)', from: {transform: 'scale(0)'}, config: {duration: 500}})
  return <animated.span style={props}></animated.span>
}
  
export default Dot
