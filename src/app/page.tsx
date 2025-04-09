import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, FileText, Brain } from "lucide-react";

export default function Home() {
  
  return (
    <main className="min-h-screen p-6 flex flex-col items-center justify-center bg-gray-50">
      <section className="text-center w-full  min-h-[40vh] md:min-h-[40vh] py-6 flex flex-col  items-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find your dream job. Powered by AI.</h1>
        <p className="text-muted-foreground text-lg ">
          JobMatch connects job seekers and recruiters using intelligent matching.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 active:bg-gray-900 transition-transform transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Get Started</Button>
          <Button variant="outline" className="w-full sm:w-auto transition-transform transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-blue-500">Post a Job</Button>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        
        <Card className="text-center group hover:animate-shake">
          <CardContent className="pt-6">
            <Sparkles className="mx-auto mb-2 h-8 w-8" />
            <h3 className="font-semibold text-lg">AI Resume Matching</h3>
            <p className="text-sm text-muted-foreground">Get matched instantly with relevant jobs.</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="mx-auto mb-2 h-8 w-8" />
            <h3 className="font-semibold text-lg">Smart Hiring</h3>
            <p className="text-sm text-muted-foreground">Recruiters see top candidates first.</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <FileText className="mx-auto mb-2 h-8 w-8" />
            <h3 className="font-semibold text-lg">Track Applications</h3>
            <p className="text-sm text-muted-foreground">Keep tabs on job posts and applications.</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <Brain className="mx-auto mb-2 h-8 w-8" />
            <h3 className="font-semibold text-lg">Built with AI</h3>
            <p className="text-sm text-muted-foreground">Powered by OpenAI + your smart brain 🧠</p>
          </CardContent>
        </Card>
      </section>
    </main>

  );
}
