import {takeEvery, put} from 'redux-saga/effects';
import {GET_ALL_USERS_START,GetAllUsersFinish, SET_AUTH_USER_PROFILE_START, setPageUserFinish} from './auth/actions'
import userService from "../service/UserService";


function* workerLoadData() {
    try {
        const data = yield userService.getAllUsers();
        yield put(GetAllUsersFinish(data))
    } catch (e) {
    }
}

function* getUserProfile() {
    try {
        let user = yield userService.getMyPage();
        yield put(setPageUserFinish(user))
    } catch (e) {
    }
}

export function* watchLoadData (){
    yield takeEvery(GET_ALL_USERS_START,workerLoadData);
    yield takeEvery(SET_AUTH_USER_PROFILE_START,getUserProfile);
}