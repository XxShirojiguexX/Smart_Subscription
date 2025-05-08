import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";

const MyProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleSave = (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    // const photoUrl = event.target.photoUrl.value;

    updateUser({ displayName: name, photoURL })
      .then(() => {
        // toast.success("Profile updated successfully!");
        setName("");
        setPhotoURL("");
      })
      .catch((error) => {
        // toast.error(`Failed to update profile: ${error.message}`);
      });
  };

  return (
    <div>
      <Helmet>
        <title>My Profile</title>
      </Helmet>
      <div className="max-w-md mx-auto bg-white p-6 shadow-2xl mb-10 rounded mt-16">
        <h2 className="text-xl font-bold text-center mb-4">Edit Profile</h2>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="text-center">
            <img
              src={user?.photoURL || "/user.png"}
              alt="User"
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <p className="text-sm text-gray-600">Name : {user?.displayName}</p>
            <p className="text-sm text-gray-600">Email : {user?.email}</p>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={name}
              onChange={(event) => setName(event.target.value)}
              // name="name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={photoURL}
              // name="photoUrl"
              onChange={(event) => setPhotoURL(event.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
