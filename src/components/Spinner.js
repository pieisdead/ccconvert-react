import React from 'react'
import Dot from './Dot'

class Spinner extends React.Component {
    
    render() {
        const dotLength = this.props.dots
        const dotsOutput = []
        for (var d = 0; d < dotLength; d++) {
            dotsOutput.push(<Dot key={d} />)
        }
        
        return (
            <div className="spinner">
                {dotsOutput}
            </div>
        )
        
    }
    
}

export default Spinner