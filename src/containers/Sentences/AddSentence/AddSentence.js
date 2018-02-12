import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './AddSentence.scss';
import { addSentence } from '../../../store/actions/index';

class Sentences extends Component {
    state = {
        sentence: {
            content: '',
            date: null,
            displayDate: null
        }
    }
    
    textareaHandler = (event) => {
        const date = new Date();
        const displayDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
        this.setState({
            sentence:{
                content: event.target.value,
                date: date,
                displayDate: displayDate
            }
        })
    }
    textareaSubmitHandler = (event) => {
        event.preventDefault();
        const sentence = {
            ...this.state.sentence,
            userId: this.props.userId
        };
        this.props.onSaveSentence(sentence, this.props.userId, this.props.token)
    }
    render() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return (
            <form onSubmit={this.textareaSubmitHandler} className={classes.Sentences}>
                <h2 className={classes.Date}>{new Date().toLocaleDateString('ko-KR', options)}</h2>
                <textarea className={classes.TextArea} placeholder="잘한일을 입력해주세요" value={this.state.sentence.content}
                onChange={this.textareaHandler}></textarea>
                <button type="submit" className={classes.Button}>저장</button>
            </form>
        )
    }
};

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveSentence: (sentence, userId, token) => dispatch(addSentence(sentence, userId, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sentences);