import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, editPost } from '../../redux/actions/post';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Post.css';

function Post({ postContents }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(postContents.title);
  const [body, setBody] = useState(postContents.body);
  const user = useSelector((state) => state.user);

  const getName = () => {
    let firstName;

    if (user && postContents.poster === user.sub) {
      firstName = user.nickname;
    } else {
      firstName = postContents.name;
    }
    // eslint-disable-next-line no-unsafe-optional-chaining
    firstName = firstName?.charAt(0).toUpperCase() + firstName?.slice(1);

    return firstName;
  };

  let time = new Date(postContents.time);
  time = time.toString().slice(0, 24);

  const onDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  const onEditPost = (id) => {
    if (!editing) {
      setEditing(true);
    } else if (editing) {
      setEditing(!editing);
      dispatch(editPost(title, body, id));
    }
  };

  // Checks if logged in user is the poster of a post
  const isPoster = () => {
    if (user && user.sub === postContents.poster) {
      return true;
    }
    return false;
  };

  // If the user clicks on their own name take them to their profile
  const getLink = () => {
    if (postContents.poster === user.sub) {
      return '/profile';
    }
    return `/connect/${postContents.name}/${postContents.poster}`;
  };

  const handleTitleChange = (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z 0-9]/g, '');
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z 0-9]/g, '');
    setBody(e.target.value);
  };

  return (
    <div className="postContainer">
      <section>
        {isPoster() && (
          <>
            <div className="deletePost">
              <Button onClick={() => onDeletePost(postContents.id)}>
                Delete
              </Button>
            </div>
            <div className="editPost">
              <Button onClick={() => onEditPost(postContents.id)}>
                {editing ? 'Stop editing' : 'Edit'}
              </Button>
            </div>
          </>
        )}
        <NavLink
          to={window.location.href.includes(postContents.name) ? '' : getLink()}
          className="poster"
        >
          {getName()}
        </NavLink>
        <p className="postTime">{time}</p>
        <hr />
      </section>

      {/* Body of post */}
      <section>
        {editing ? (
          <>
            <div className="title">
              <Input
                onChange={handleTitleChange}
                value={title}
                block
              />
            </div>
            <textarea
              onChange={handleBodyChange}
              maxLength="250"
              rows="4"
              cols="40"
              value={body}
            />
          </>
        ) : (
          <>
            <h1>{postContents.title}</h1>
            <p>{postContents.body}</p>
          </>
        )}
      </section>
    </div>
  );
}

export default Post;
