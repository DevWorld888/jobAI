"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, FileText, Brain } from "lucide-react";
import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen p-6 flex flex-col items-center justify-center">
      {/* Hero Section with SVG */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto py-6 min-h-[40vh] animate-fade-in-fast">
        {/* Left: Title, Subtitle, Buttons */}
        <div className="flex-1 flex flex-col items-start justify-center space-y-6 w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: "#333446" }}>
            Find your dream job. Powered by AI.
          </h1>
          <p className="text-muted-foreground text-lg">
            JobMatch connects job seekers and recruiters using intelligent matching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Button
              className="w-full sm:w-auto bg-black text-white hover:bg-[#7F8CAA] hover:text-[#333446] active:bg-gray-900 transition-transform transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => {
                localStorage.setItem("next_user_role", "seeker");
                router.push("/listJobs");
              }}
            >Get Started</Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto transition-transform transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-blue-500 hover:bg-[#7F8CAA] hover:text-[#333446]"
              onClick={() => {
                localStorage.setItem("next_user_role", "recruiter");
                router.push("/login");
              }}
            >
              Post a Job
            </Button>
          </div>
        </div>
        {/* Right: SVG Image */}
        <div className="flex-1 flex items-center justify-center w-full md:w-1/2 mb-8 md:mb-0 animate-fade-in-fast">
          <Image
            src="/images/home/undraw_in-the-office_e7pg.svg"
            alt="Home Illustration"
            width={350}
            height={250}
            className="w-full max-w-xs md:max-w-md h-auto"
            priority
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-8">
        {[ // Cards
          {
            icon: <Sparkles className="mx-auto mb-2 h-8 w-8" />,
            title: "AI Resume Matching",
            desc: "Get matched instantly with relevant jobs.",
          },
          {
            icon: <Users className="mx-auto mb-2 h-8 w-8" />,
            title: "Smart Hiring",
            desc: "Recruiters see top candidates first.",
          },
          {
            icon: <FileText className="mx-auto mb-2 h-8 w-8" />,
            title: "Track Applications",
            desc: "Keep tabs on job posts and applications.",
          },
          {
            icon: <Brain className="mx-auto mb-2 h-8 w-8" />,
            title: "Built with AI",
            desc: "Powered by OpenAI + your smart brain 🧠",
          },
        ].map((card, i) => (
          <Card
            key={card.title}
            className={`text-center group hover:-translate-y-1 hover:scale-100 hover:bg-[#7F8CAA] hover:text-white transition-transform duration-300 ease-in-out
              animate-fade-in-fast`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <CardContent className="pt-6">
              {card.icon}
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      <style jsx global>{`
        @keyframes fade-in-fast {
          from { opacity: 0; transform: translateY(24px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-fast {
          animation: fade-in-fast 0.5s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </main>
  );
}