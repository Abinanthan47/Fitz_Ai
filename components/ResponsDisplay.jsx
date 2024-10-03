// components/ResponseDisplay.js

import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const ResponseDisplay = () => {
  const [response, setResponse] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchResponse = async () => {
      if (user) {
        const docRef = doc(db, "aiResponses", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setResponse(docSnap.data().response);
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchResponse();
  }, [user]);

  return (
    <div>
      <h1>AI Response</h1>
      {response ? <p>{response}</p> : <p>Loading...</p>}
    </div>
  );
};

export default ResponseDisplay;
