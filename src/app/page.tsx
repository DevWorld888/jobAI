"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, FileText, Brain } from "lucide-react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <>
      
      <main className="min-h-screen p-6 flex flex-col items-center justify-center bg-gray-50">
        <section className="text-center w-full  min-h-[40vh] md:min-h-[40vh] py-6 flex flex-col  items-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find your dream job. Powered by AI.</h1>
          {/* <form
            className="w-full max-w-3xl mx-auto flex items-center bg-white rounded-xl shadow-md border border-gray-200 px-4 py-2 mt-4 gap-2"
            
          >
          
            <span className="text-gray-400 pl-1 pr-2">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Job title, keywords or company"
              className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400 text-base"
            />
           
            <span className="h-6 w-px bg-gray-200 mx-3 hidden sm:inline-block"></span>
           
            <span className="flex items-center gap-1 text-gray-700">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 21c-4.418 0-8-7.163-8-10a8 8 0 1 1 16 0c0 2.837-3.582 10-8 10z" />
                <circle cx="12" cy="11" r="3" />
              </svg>
              <span className="text-base">Sydney NSW</span>
            </span>
            
            <button
              type="submit"
              className="ml-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg transition-colors text-base"
              onClick={(e) => {
                e.preventDefault();
                router.push("/listJobs");
              }
              }
            >
              Find jobs
            </button>
          </form> */}
          <p className="text-muted-foreground text-lg motion-preset-focus">
            JobMatch connects job seekers and recruiters using intelligent matching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 active:bg-gray-900 transition-transform transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => {
                router.push("/listJobs");
              }}
            >Get Started</Button>
            <Button variant="outline" className="w-full sm:w-auto transition-transform transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-blue-500">Post a Job</Button>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">

          <Card className="text-center group  hover:-translate-y-1 hover:scale-100 hover:bg-black hover:text-white transition-transform duration-300 ease-in-out ">
            <CardContent className="pt-6">
              <Sparkles className="mx-auto mb-2 h-8 w-8" />
              <h3 className="font-semibold text-lg">AI Resume Matching</h3>
              <p className="text-sm text-muted-foreground">Get matched instantly with relevant jobs.</p>
            </CardContent>
          </Card>

          <Card className="text-center group  hover:-translate-y-1 hover:scale-100 hover:bg-black hover:text-white transition-transform duration-300 ease-in-out">
            <CardContent className="pt-6">
              <Users className="mx-auto mb-2 h-8 w-8" />
              <h3 className="font-semibold text-lg">Smart Hiring</h3>
              <p className="text-sm text-muted-foreground">Recruiters see top candidates first.</p>
            </CardContent>
          </Card>

          <Card className="text-center group  hover:-translate-y-1 hover:scale-100 hover:bg-black hover:text-white transition-transform duration-300 ease-in-out">
            <CardContent className="pt-6">
              <FileText className="mx-auto mb-2 h-8 w-8" />
              <h3 className="font-semibold text-lg">Track Applications</h3>
              <p className="text-sm text-muted-foreground">Keep tabs on job posts and applications.</p>
            </CardContent>
          </Card>

          <Card className="text-center group  hover:-translate-y-1 hover:scale-100 hover:bg-black hover:text-white transition-transform duration-300 ease-in-out">
            <CardContent className="pt-6">
              <Brain className="mx-auto mb-2 h-8 w-8" />
              <h3 className="font-semibold text-lg">Built with AI</h3>
              <p className="text-sm text-muted-foreground">Powered by OpenAI + your smart brain 🧠</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </>

  );
}
