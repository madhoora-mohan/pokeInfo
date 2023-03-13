import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
export const Logout = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="log-out">
        {authUser ? (
          <>
            <h4>{`Signed In as ${authUser.email}`}</h4>
            <button className="log-out-btn" onClick={userLogOut}>
              Log Out
            </button>
          </>
        ) : (
          <h4>Signed Out</h4>
        )}
      </div>
    </>
  );
};
