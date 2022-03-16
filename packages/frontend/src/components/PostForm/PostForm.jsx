import "./PostForm.css";

const PostForm = ({ setPostTitle, setPostBody, handleSubmit }) => {
  return (
    <form className="formWrapper">
      <input
        onChange={e => setPostTitle(e.target.value)}
        type="text"
        placeholder="Name your post"
        className="postName"
      />
      <textarea
        onChange={e => setPostBody(e.target.value)}
        rows="4"
        cols="40"
        placeholder="What do you want to share?"
      />
      <button onClick={handleSubmit} type="submit" className="submitPost">
        Submit Post
      </button>
    </form>
  );
};

export default PostForm;
