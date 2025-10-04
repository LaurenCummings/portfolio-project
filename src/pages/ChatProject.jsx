import "../css/Project.css";
import cookbookProjectCollage from "../assets/cookbookProjectCollage.png";

function ChatProject() {
  return (
    <div className="selected-project">
      <h1>Demo Real-Time Chat Project</h1>
      <div className="project-info">
        <a href="https://chat-project-rkax.onrender.com">
          <img src={cookbookProjectCollage} alt="Collage of cookbook project" />
        </a>
        <div className="project-details">
          <ul>
            <li>
              A real-time chat application where users can send each other messages
            </li>
            <li>Users can choose from 32 different themes</li>
            <li>Online users are denoted by a green circle</li>
            <li>Uses TailwindCSS and DaisyUI for styling</li>
            <li>Users and messages are stored in a MongoDB database</li>
            <li>Socket.io is used to update chat instantly with new messages</li>
            <li>Cloudinary used to allow users to send each other images</li>
            <li>
              View the code on{" "}
              <a href="https://github.com/LaurenCummings/chat-project">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChatProject;
