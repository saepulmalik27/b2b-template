// Libraries



export class disableScroll {
    static on() {
        document.body.style.overflow = 'hidden'
        document.body.style.top = `-${window.scrollY}px`
    }

    static off() {
        document.body.style.overflow = 'auto'
        const scrollY = document.body.style.top
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
}


// export const scrollTo = scrollerConfig => {
//     const fixedConfig = {
//         duration: 1500,
//         smooth: true
//     }

//     scroller.scrollTo(scrollerConfig.element, { ...fixedConfig, offset: scrollerConfig.offset || 0 })
// }

export const saveToLocalStorage = (data) => {
    // const now = new Date()
    // const ttl = 259200000;
    // data.expiry = now.getTime() + ttl;
    localStorage.setItem("loginData", JSON.stringify(data));
    return true;
}

export const getFromLocalStorage = () => {
	const isLogin = localStorage.getItem("loginData")
	// if the item doesn't exist, return null
	if (!isLogin) {
		return null
	}
	const item = JSON.parse(isLogin)
	const now = new Date()
	// compare the expiry time of the item with the current time
	// if (now.getTime() > item.expiry) {
	// 	// If the item is expired, delete the item from storage
	// 	// and return null
	// 	localStorage.removeItem("loginData")
	// 	return null
	// }
	return item;
}




export const formattingTime = time => {
    let seconds = parseInt(time)
    let minutes = Math.floor(seconds/60)
    
    seconds = seconds%60

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (seconds < 10) {
        seconds = '0' + seconds
    }

    return `${minutes}:${seconds}`
}