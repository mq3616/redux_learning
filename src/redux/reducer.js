import { ChangeNickname, ChangeAge, ResetInfo } from "./action";

const defaultState = {
    nickname: '小明',
    age: 18
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case ChangeNickname:
            const { nickname } = action.payload;
            return {
                ...state,
                nickname
            }
        case ChangeAge:
            const { age } = action.payload;
            return {
                ...state,
                age
            }
        case ResetInfo:
            return defaultState
        default:
            return state
    }
}