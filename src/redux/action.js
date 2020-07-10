export const ChangeNickname = "ChangeNickname";
export const ChangeAge = "ChangeAge";
export const ResetInfo = "ResetInfo";

export const onChangeNickname = (nickname) => {
    return {
        type: ChangeNickname,
        payload: {
            nickname
        }
    }
}

export const onChangeAge = (age) => {
    return {
        type: ChangeAge,
        payload: {
            age
        }
    }
}

export const onResetInfo = () => {
    return {
        type: ResetInfo,
        payload: {}
    }
}
