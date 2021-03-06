import React, {Component} from 'react';
import PropTypes from 'prop-types';

//引入其他组件
import CommentItem from '../comment-item';
//引入样式
import './index.css';

export default class CommentsList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    delComment: PropTypes.func.isRequired
  }
  
  render () {
    const {comments, delComment} = this.props;
    
    const display = comments.length ? 'none' : 'block';
    
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => <CommentItem comment={comment} key={index} index={index} delComment={delComment}/>)
          }
        </ul>
      </div>
    )
  }
}