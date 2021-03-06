import { useState, useEffect } from 'react';

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
       <div>
           <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
       </div>
    );
}