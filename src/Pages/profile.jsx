import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div className="text-center">
      <h1>Profile</h1>
      username : {username}
    </div>
  );
};

export default ProfilePage;
