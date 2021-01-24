const axios = require('axios')

const FEED_COLLECTOR_URL = "https://api.rss2json.com/v1/api.json?rss_url="

module.exports.GetItemsFromRSS =  async (RSS_URL)=>{
    const BufferResponse = await axios.get(FEED_COLLECTOR_URL + RSS_URL, {
        responseType: 'arraybuffer'
    })
    
    let BufferResult = Buffer.from(BufferResponse.data, 'utf-8')
    const { items } = JSON.parse(BufferResult)
    return items
}