export const formatTime = (timer, type) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    // const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
  
	if(type === 'digital') {
		return `${getMinutes}:${getSeconds}`
	} else {
		return `${minutes % 60 > 0 ? `${minutes % 60} ${minutes % 60 > 1 ? 'minutes' : 'minute'}` : ''} ${timer % 60} ${timer % 60 > 1 ? 'seconds' : 'second'}`
	}
}