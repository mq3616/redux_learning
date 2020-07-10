import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeNickname, onChangeAge, onResetInfo } from './redux/action';

class User extends Component {
    render() {
        const { nickname, age } = this.props;

        return (
            <div style={{}}>
                <h1>
                    昵称:{nickname}
                </h1>
                <h1>
                    年龄:{age}
                </h1>
                <br/>
                <button onClick={this.clickedChangeNicknameButton}>
                    修改昵称
                </button>
                <button style={{marginLeft: 10}} onClick={this.clickedChangeAgeButton}>
                    修改年龄
                </button>
                <button style={{marginLeft: 10}} onClick={this.clickedResetButton}>
                    重置
                </button>
            </div>
        )
    }

    clickedChangeNicknameButton = () => {
        this.props.onChangeNickname('小小明');
    }

    clickedChangeAgeButton = () => {
        this.props.onChangeAge(20);
    }

    clickedResetButton = () => {
        this.props.onResetInfo();
    }
}

const mapStateToProps = (state) => {
    return {
        nickname: state.nickname,
        age: state.age
    };
};

const mapDispatchToProps = {
    onChangeNickname,
    onChangeAge,
    onResetInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(User);