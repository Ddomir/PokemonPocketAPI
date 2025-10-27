import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [signUp, isSignUp] = useState(false);

  function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      try {
        const res = await fetch("http://localhost:4000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }), // send user input
        });

        const data = await res.json();
        if (!res.ok) {
          console.error(data.error);
          alert(data.error || "Sign up failed");
          return;
        }

        alert("Sign up successful!");
        // Switch to sign-in form
        isSignUp(false);
      } catch (err) {
        console.error(err);
        alert("Something went wrong!");
      }
    }

    return (
      <div>
        <h2 className="text-4xl font-bold mb-10 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <input
              className="pl-5 mt-1 mb-5 p-2 block w-full border bg-gray-50 font-semibold border-gray-50 text-xs tracking-wider rounded-full inset-shadow-sm inset-shadow-gray-400"
              type="text"
              name="name"
              placeholder="Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="block mb-2">
            <input
              className="pl-5 mt-1 mb-5 p-2 block w-full border bg-gray-50 font-semibold border-gray-50 text-xs tracking-wider rounded-full inset-shadow-sm inset-shadow-gray-400"
              type="email"
              name="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block mb-4">
            <input
              className="pl-5 mt-1 mb-5 p-2 block w-full border bg-gray-50 font-semibold border-gray-50 text-xs tracking-wider rounded-full inset-shadow-sm inset-shadow-gray-400"
              type="password"
              name="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            className="px-5 py-2 shadow-lg pb-2 pt-1 mb-5 mt-8 bg-sky-300 text-white font-semibold tracking-tight text-xl rounded block mx-auto rounded-full px-8"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <div className="block mx-auto text-xs mt-2 tracking-wide text-center text-black underline hover:text-blue-600 cursor-pointer">
          <p onClick={() => isSignUp(!signUp)}>
            Already have an account? Sign in.
          </p>
        </div>
      </div>
    );
  }

  function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      try {
        const res = await fetch("http://localhost:4000/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }), // send user input
          credentials: "include"
        });

        const data = await res.json();
        if (!res.ok) {
          console.error(data.error);
          alert(data.error || "Sign in failed");
          return;
        }

        // Redirect to dashboard
        navigate("/dashboard");
      } catch (err) {
        console.error(err);
        alert("Something went wrong!");
      }
    }

    return (
      <div>
        <h2 className="text-4xl font-bold mb-10 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <input
              className="pl-5 mt-1 mb-5 p-2 block w-full border bg-gray-50 font-semibold border-gray-50 text-xs tracking-wider rounded-full inset-shadow-sm inset-shadow-gray-400"
              type="email"
              name="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block mb-4">
            <input
              className="pl-5 mt-1 p-2 block w-full border bg-gray-50 font-semibold border-gray-50 text-xs tracking-wider rounded-full inset-shadow-sm inset-shadow-gray-400"
              type="password"
              name="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            className="px-5 py-2 shadow-lg pb-2 pt-1 mb-0 mt-8 bg-sky-300 text-white font-semibold tracking-tight text-xl rounded block mx-auto rounded-full px-8"
            type="submit"
          >
            OK
          </button>
        </form>

        <div className="block mx-auto text-xs mt-2 tracking-wide text-center text-black underline hover:text-blue-600 cursor-pointer">
          <p onClick={() => isSignUp(!signUp)}>
            Dont have an account? Sign up.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-indigo-200 to-red-50 overflow-hidden">
        <div className="w-screen h-screen flex items-center justify-center">
        <div className="max-w-60 mx-auto p-6 shadow rounded-3xl bg-white height-full w-1/2">
          {signUp ? <SignUp /> : <SignIn />}
        </div>
      </div>
    </div>
  );
}
