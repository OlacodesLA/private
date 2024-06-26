import Link from "next/link";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col mt-10 justify-center items-center">
      <Link href="/product-card" className="text-6xl border-b-4">
        Product Cards Page
      </Link>
      <Link href="/user-profile" className="text-6xl border-b-4">
        User Profile
      </Link>
    </div>
  );
};

export default App;
