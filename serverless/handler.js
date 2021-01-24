'use strict';
const axios = require('axios')
const mongodb = require('./src/mongodb')
const { stripHtml } = require("string-strip-html");
const FEED_COLLECTOR_URL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/"

const normalize = (text)=> stripHtml(text.normalize().replace(/\n/ig, '')).result

module.exports.mediumCollector = async event => {
  const BufferResponse = await axios.get(FEED_COLLECTOR_URL + "@flavioaandres", {
    responseType: 'arraybuffer'
  })

  let BufferResult = Buffer.from(BufferResponse.data, 'utf-8')
  const { items } = JSON.parse(BufferResult)

  if(!items) throw new Error('No postings found in Medium Feed')
  
  const itemsToSave = items.filter(item=>item.categories.length)
  .map(publicaiton=>({
    title: normalize(publicaiton.title), 
    description: normalize(publicaiton.description),
    thumbnail: publicaiton.thumbnail, 
    url: publicaiton.guid,
  }))
  if(!itemsToSave) return console.log('No items to save :) ')

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


module.exports.getMediumPosts =async ()=>{
  const db = (await mongodb.connect()).connection
  const MediumResults = await db.collection('blogposts').find({}).toArray()
  await mongodb.destroy()
  return {
    statusCode: 200, 
    body: JSON.stringify(MediumResults)
  }
}