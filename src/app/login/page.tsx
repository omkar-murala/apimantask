"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function Page() {
  const [email, setEmail] = useState<string>(""); 
  const [error, setError] = useState<string>(""); 
  const [success, setSuccess] = useState<boolean>(false); 

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasComDomain = email.endsWith(".com");
    
    return regex.test(email) && hasComDomain;
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email ID with a .com domain.");
      return;
    }

    setError("");
    setSuccess(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-md p-4 rounded-lg shadow-lg bg-white">
        <CardHeader className="text-center font-bold text-lg text-black">Log In</CardHeader>
        <CardContent>
          <label className="block mb-2">
            <span className="font-extralight text-sm text-black">Enter Your Email</span>
            <Input
              placeholder="Email"
              type="email"
              className="mb-3 border border-gray-300 rounded-md px-3 py-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block mb-2 font-extralight text-sm text-black"> Enter OTP</label>
          <InputOTP maxLength={4} className="w-full flex justify-between mb-3">
            <InputOTPGroup className="gap-2">
              <InputOTPSlot index={0} className="w-12 h-12 text-center border border-gray-300 rounded-md" />
              <InputOTPSlot index={1} className="w-12 h-12 text-center border border-gray-300 rounded-md" />
              <InputOTPSlot index={2} className="w-12 h-12 text-center border border-gray-300 rounded-md" />
              <InputOTPSlot index={3} className="w-12 h-12 text-center border border-gray-300 rounded-md" />
            </InputOTPGroup>
          </InputOTP>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && (
            <div className="mt-4 text-green-500 text-sm">
              Welcome {email}! You have successfully logged in.
              <div className="flex justify-center mt-2">
                <Button onClick={() => setSuccess(false)}>OK</Button>
              </div>
            </div>
          )}
          {!success && (
            <Button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={handleLogin}>
              Log In
            </Button>
          )}
        </CardContent>

        <CardFooter className="flex flex-col items-center mt-4">
          <Link
            className="text-center text-blue-500 font-medium hover:underline"
            href={"/signup"}
          >
            Don&apos;t have an account?
          </Link>
        </CardFooter>
      </Card>

      {/* Media query for mobile screens */}
      <style jsx>{`
        @media (max-width: 640px) {
          input,
          .w-12 {
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Page;
