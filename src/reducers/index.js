import { combineReducers } from "redux";
import UserReducer from './UserReducer';
import FavoriteThingReducer from './FavoriteThingReducer';


export default combineReducers({
    users : UserReducer,
    favorites : FavoriteThingReducer
});
