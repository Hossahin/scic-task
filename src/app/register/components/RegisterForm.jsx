"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Loading from "./loading";

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const result = await registerUser({ name, email, password });
    if (result.acknowledged) {
      form.reset();
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Registration successful",
          text: "Thank you for registering!",
          timer: 1500,
        });
        router.push("/");
        setLoading(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration failed",
          text: "Please check your credentials",
          timer: 1500,
        });
        setLoading(false);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Registration failed",
        text: "An error occurred while registering. Please try again.",
        timer: 1500,
      });
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-4">
      <label
        htmlFor="name"
        className="text-gray-700 font-medium text-sm sm:text-base"
      >
        Name
      </label>
      <input
        name="name"
        type="text"
        placeholder="Enter your name"
        className="border border-gray-300 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
      />

      <label
        htmlFor="email"
        className="text-gray-700 font-medium text-sm sm:text-base"
      >
        Email
      </label>
      <input
        name="email"
        type="email"
        id="email"
        placeholder="Enter your email"
        className="border border-gray-300 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
      />

      <label
        htmlFor="password"
        className="text-gray-700 font-medium text-sm sm:text-base"
      >
        Password
      </label>
      <input
        name="password"
        type="password"
        id="password"
        placeholder="Enter your password"
        className="border border-gray-300 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
      />

      <button
        disabled={loading}
        type="submit"
        className={`mt-4 cursor-pointer bg-blue-500 text-white p-3 sm:p-4 rounded hover:bg-blue-600 transition text-sm sm:text-base ${
          loading ? "cursor-not-allowed" : ""
        }`}
      >
        Register
      </button>
    </form>
  );
}
