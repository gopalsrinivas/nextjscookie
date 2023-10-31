"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Home",
//   description: "my description",
// };

function setCookies() {
  const oneDay = 24 * 60 * 60 * 1000;
  Cookies.set("userID", "29485", { expires: new Date(Date.now() + oneDay) });
  Cookies.set(
    "Token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    {
      expires: new Date(Date.now() + oneDay),
    }
  );
}

function Home() {
  const [userID, setUserID] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setCookies();

    const userID = Cookies.get("userID");
    const token = Cookies.get("Token");

    setUserID(userID);
    setToken(token);

    if (!userID || !token) {
      router.replace("/");
    }
  }, [router]);

  return (
    <div>
      <h1>Gopal</h1>
      <h3>
        Get UserID: {userID} <br /> Token: {token}
      </h3>
    </div>
  );
}

export default Home;
