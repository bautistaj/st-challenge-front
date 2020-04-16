const cleanData = (data) => {
  const dataCleaned = data.map(r => {
    const ht = {
      id: r._id || r.hashtag,
      hashtag: r.hashtag,
    }

    ht.tweets = r.data.map(tweet => {
      return {
        "id": tweet.id,
        "username": tweet.user.name,
        "text": tweet.text,
        "favs": tweet.retweet_count,
        "retweets": tweet.favorite_count
      }
    })
    return ht;
  });

  const hashtagsFiltered = dataCleaned.filter((ht, i) => {
    return i < 4;
  });

  return hashtagsFiltered;
}

module.exports = {
  cleanData
}