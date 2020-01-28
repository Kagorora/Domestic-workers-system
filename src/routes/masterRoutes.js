import userRoutes from './userRoutes';

export default (app) =>{
    app.use('/api/v1',userRoutes);
}