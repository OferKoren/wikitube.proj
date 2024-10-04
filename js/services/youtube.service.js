'use strict'
const YOUTUBE_KEY = 'AIzaSyBzGfxkRtc4ciq_je7E_2UpA6PDH8Q9Dw8'
const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet
&videoEmbeddable=true&type=video&key=${YOUTUBE_KEY}&q=`

function getYoutube(search) {
    const url1 = URL + search
    return axios
        .get(url1)
        .then((res) => {
            const list = res.data.items
            console.log(list)
            return list.map((videoData) => {
                const url2 = `https://www.googleapis.com/youtube/v3/videos?part=snippet,status,contentDetails&id=${videoData.id.videoId}&key= ${YOUTUBE_KEY} `
                axios.get(url2).then((res) => {
                    console.log(res.data)
                })

                return {
                    title: videoData.snippet.title,
                    videoId: videoData.id.videoId,
                }
            })
        })
        .catch((err) => console.log('err:', err))
}
