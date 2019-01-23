import {getLogin, getUser} from "../services";

export default {
    namespace: 'index',
    state: {
        list: [],
        value2: '程浩',
        respone: '',
        pagination:{
            current:1,
            size:10
        }
    },
    subscriptions: {
        setup({dispatch, history}) {  // eslint-disable-line
            return history.listen((location) => {
                let that = this;
                let start = 0;
                let limit = 1000;
                let type = "7ad2c8db-ff04-4736-81c9-1b7c6fb276b3";
                // dispatch({type: "getLogin", payload: {start, limit, type}});
                // dispatch({type: "getUser"},payload:action);
            })
        },
    },

    effects: {
        * fetch({payload}, {call, put}) {  // eslint-disable-line
            yield put({type: 'save'});
        },
        * getLogin({payload}, {call, put}) {
            const {obj} = payload;
            const data = yield call(getLogin, obj);
            if (data) {
                yield put({type: 'save', payload: {respone: data.data}})
            }
        },
        * getUser({payload}, {call, put}) {
            const {pagination} = payload;
            console.info(pagination)
            const data = yield call(getUser, pagination);
            if (data) {
                yield put({
                    type: 'saveList',
                    payload: {list: data.data.results}
                })
            }
        }
    },

    reducers: {
        save(state, action) {
            return {...state, ...action.payload};
        },
        saveList(state, action) {
            const { list } = action.payload;
            return {
                ...state,
                list
            };
        }
    },

};
