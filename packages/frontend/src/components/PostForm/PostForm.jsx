import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PostForm.css';
import dayjs from 'dayjs';
import Button from '../Button/Button';
import { addNewPost } from '../../redux/actions/post';
import Input from '../Input/Input';

function PostForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [contentError, setContentError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContentError(false);

    // Error handling empty title or body
    if (!title || !body) {
      setContentError(true);
      setTimeout(() => {
        setContentError(false);
      }, 5000);
      return;
    }

    const time = dayjs(Date()).format('YYYY-MM-DD HH:mm:ss');

    const postContents = {
      title,
      body,
      time,
      poster: user.sub,
    };
    setBody('');
    setTitle('');
    dispatch(addNewPost(postContents));
  };

  // Protecting against SQL injection
  const handleInputChange = (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z 0-9]/g, '');
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z 0-9]/g, '');
    setBody(e.target.value);
  };

  return (
    <form className="formWrapper">
      <Input
        onChange={handleInputChange}
        value={title}
        placeholder="Name your post"
      />
      <textarea
        onChange={handleTextChange}
        value={body}
        rows="4"
        maxLength="250"
        cols="40"
        placeholder="What do you want to share?"
      />
      <div className="bottomRow">
        {contentError && (
          <p className="error">Please add content to your post!</p>
        )}
        <div className="submit">
          <Button onClick={handleSubmit}>Submit Post</Button>
        </div>
      </div>
    </form>
  );
}

export default PostForm;
