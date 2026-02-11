import React from 'react'

function MiniPoll() {
    const [options, setOptions] = useState(["React", "Vue", "Svelte"]);
    const [counters, setCounters] = useState({React: 0, Vue: 0, Svelte: 0})
    const [showResults, setShowResults] = useState(false)
    
  return (
    <div></div>
  )
}

export default MiniPoll