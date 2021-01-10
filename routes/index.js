const albumsRoutes =require('./albums');

module.exports = (app) => {
    app.use('/albums',albumsRoutes)
}