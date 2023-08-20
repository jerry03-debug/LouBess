'use client'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {firebaseConfig} from '../firebaseconfig.js'
import { useRouter } from "next/navigation";
export default function Auth() {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const auth = getAuth();



    const handleSubmit = async (e)=>{
      e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("user",user)
          router.push('/chat')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'password') {
        setPassword(value);
      }
      console.log(name, value)
    };
  return (
    <main className="relative bg-[url('/images/moi.jpeg')] bg-cover bg-center h-screen flex flex-col justify-center ">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

      <div className="ml-12 z-10 text-white flex flex-col  gap-4">
        <h3 className="text-gray-200 text-md font-bold">LouBess</h3>
        <h1 className="uppercase font-extrabold text-5xl">
          Créez votre compte <span className="text-red-700 ">.</span>
        </h1>
        <h1>
          Vous avez dèja un compte ?{" "}
          <a href="#" className="text-[#c83420] font-bold">
            Vous connecter
          </a>
        </h1>

        <form className="w-1/2" onSubmit={handleSubmit}>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium ">
              Adresse e-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={handleChange}
              placeholder="johndoe@gmail.com"
              class="mt-1 p-2 w-full text-black border rounded focus:outline-none focus:ring-2 focus:ring-red-800 "
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block text-sm font-medium "
            >
              Login:
            </label>
            <input
              type="text"
              id="login"
              name="login"
              value={login}
              onChange={handleChange}
              placeholder="*********"
              required
              class="mt-1 p-2 w-full border rounded text-black  focus:outline-none focus:ring-2 focus:ring-red-800 "
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block text-sm font-medium "
            >
              Mot de passe:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="*********"
              required
              class="mt-1 p-2 w-full border rounded text-black  focus:outline-none focus:ring-2 focus:ring-red-800 "
            />
          </div>
        
          <button
            type="submit"
            class="bg-[#c83420]  hover:bg-transparent hover:border-[#c83420] hover:border-2 transition-all font-semibold text-white px-4 py-2 rounded-full"
            
          >
            Créez votre compte
          </button>
        </form>
      </div>
    </main>
  );
}
