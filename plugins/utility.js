

export default ({ app,store }, inject) => {


    async function postData(url = '', data = {}) {
        if (!url.startsWith('http'))url=process.env.BASE_URL+(url.startsWith('/')?url:('/'+url))
        // Default options are marked with *
        const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            }
        );
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const post=async (url,payload)=>{
        try {
            if (!url.startsWith('http'))url=process.env.BASE_URL+(url.startsWith('/')?url:('/'+url))
            const result=await postData(url, payload);
            // console.log(result);
            if (result.error!==undefined) {
                result.data=null;
                return result;
            }
            return {data:result};
        }catch (err) {
            console.log(err);
            return {error:(err.response.data.error||err.response.data)};
        }
    }
    const get=async (url)=>{
        try {
            if (!url.startsWith('http'))url=process.env.BASE_URL+(url.startsWith('/')?url:('/'+url))
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                // body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }catch (err) {
            console.log(err);
            return {error:(err.response.data.error||err.response.data)};
        }
    }
const mapFa={};
  const moment = (date,format= 'YYYY/MM/DD') =>{
      // console.log(this,app);
    // const locale=localStorage.getItem('locale');
    if (!date) return '';
    if (app.$locale().code !== 'fa') return app.$moment(date).format(format);
    if (!mapFa[format]){
        mapFa[format] = format.replace(/[YMD]+/g, function (key) {
            return 'j' + key;
        });
    }
    return app.$moment(date).format(mapFa[format]);
  }
  const overlay=(show)=>{
      $nuxt.$store.commit('layout/setLoading', show);
  }
  inject( 'overlay', overlay);
  inject( 'post', post);
  inject( 'get', get);
  inject( '$moment', moment);

}
