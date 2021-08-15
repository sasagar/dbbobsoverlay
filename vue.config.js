module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/overlay/'   //任意
        : '/'
}