'use strict';
const RssCollector = require('./src/rss_repo')
const mongodb = require('./src/mongodb')
const { stripHtml } = require("string-strip-html");
const normalize = (text)=> stripHtml(text.normalize().replace(/\n/ig, '')).result

module.exports.RSSCollector = async event => {

  const MEDIUM_URL = 'https://medium.com/feed/@flavioaandres'
  const YOUTUBE_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCP4CvAOD2mpAfghyF3IgDVA'

  const [MediumPosts, YoutubeVideos] = await Promise.all([
    RssCollector.GetItemsFromRSS(MEDIUM_URL),
    RssCollector.GetItemsFromRSS(YOUTUBE_URL)
  ])

  if(!MediumPosts && !YoutubeVideos) 
    throw new Error('No postings found in Medium or Youtube Feed')
  
  
  // Map Medium Posts
  const itemsToSave = MediumPosts.filter(item=>item.categories.length)
  .map(publicaiton=>({
    title: normalize(publicaiton.title), 
    description: normalize(publicaiton.description),
    thumbnail: publicaiton.thumbnail, 
    url: publicaiton.guid,
    category: "POSTS"
  }))

  //Youtube posts 
  YoutubeVideos.forEach(video=>{
    itemsToSave.push({
      title: normalize(video.title), 
      description: normalize(video.description),
      thumbnail: video.thumbnail, 
      url: video.link,
      category: "VIDEO"
    })
  })

  const db = (await mongodb.connect()).connection
  const bulk = db.collection('blogposts').initializeUnorderedBulkOp();
  
  itemsToSave.forEach(item=>{
    bulk.find({ url: item.url }).upsert().update( { $set: {...item} })
  })

  const BulkOperationResult = await bulk.execute()
  console.log(JSON.stringify(BulkOperationResult))
  await mongodb.destroy()
  return {}
};


module.exports.getRSSData =async ()=>{
  const db = (await mongodb.connect()).connection
  const MediumResults = await db.collection('blogposts').find({}).toArray()
  await mongodb.destroy()
  return {
    statusCode: 200, 
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(MediumResults)
  }
}