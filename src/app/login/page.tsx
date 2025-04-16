"use client";

// import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { SiRefinedgithub } from "react-icons/si";
import { RiHomeHeartFill } from "react-icons/ri";
import Link from "next/link";
export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f8fd] px-4">
            <Link
                href="/"
                className="absolute top-6 left-6 text-3xl font-bold text-purple-700 hover:underline"
            >
                <RiHomeHeartFill/>Back to Home
            </Link>
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
                <h1 className="text-3xl font-bold text-center mb-6">Log in</h1>

                <div className="flex gap-4 justify-center mb-6">
                    <Button variant="outline" onClick={() => signIn("google")}>
                    <FcGoogle className="w-5 h-5 mr-2" />  Google
                    </Button>
                    <Button variant="outline" onClick={() => signIn("facebook")}>
                        <BiLogoFacebookSquare className="w-5 h-5 mr-2" /> Facebook
                    </Button>
                    <Button variant="outline" onClick={() => signIn("github")}>
                        <SiRefinedgithub className="w-5 h-5 mr-2" /> GitHub
                    </Button>
                </div>

                <div className="flex items-center justify-center mb-4">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="mx-2 text-sm text-gray-500">or</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>

                <form className="space-y-4">
                    <div>
                        <Label htmlFor="email">Email address</Label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                        <Mail className="absolute right-3 top-3 h-4 w-4 text-gray-400 cursor-pointer" />
                    </div>

                    <div>
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Input id="password" type="password" placeholder="••••••••" />
                            <Eye className="absolute right-3 top-3 h-4 w-4 text-gray-400 cursor-pointer" />
                        </div>
                    </div>

                    <div className="text-right text-sm">
                        <a href="#" className=" hover:underline">Forgot password?</a>
                    </div>

                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 active:bg-gray-900 transition-transform transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ">
                        Log in
                    </Button>
                </form>

                <div className="text-center text-sm text-gray-500 mt-6">
                    <p className="mb-2">Can’t Access Your Account?</p>
                    <p>
                        Don’t have an account?{' '}
                        <a href="/register" className="text-purple-700 hover:underline font-medium">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
