
export const delay = (cb, time)=> {
	 return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(cb());
        }, time);
    });
};