const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 1) {
    return blogs[0].likes
  } else {
    const reducer = (accumulator, currentValueValue) => accumulator + currentValueValue.likes
    return blogs.reduce(reducer, 0) 
  }
}

const favoriteBlog = (blogs) => {
  return blogs.reduce((max, curr) => max.likes > curr.likes ? max : curr)
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}