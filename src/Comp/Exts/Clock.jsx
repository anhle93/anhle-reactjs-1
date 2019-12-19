import React, { useState} from 'react';

function Clock(props) {
    let curTime = new Date().toLocaleString();
    const [time, setTime] = useState(curTime);

    setInterval(() => {
        setTime(new Date().toLocaleString())
    }, 1000);

    return (
        <p className="Clock">
            {time}
        </p>
    )
}

export default Clock;