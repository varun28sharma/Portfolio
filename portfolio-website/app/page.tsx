import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Github, ExternalLink, Sparkles, Zap, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "AI-Powered PDF Dectector",
      description:
        "An intelligent dashboard that provides insights and predictions using machine learning algorithms and data visualization.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-pink-500 to-orange-600",
    },
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Enhanced Visuals */}
      <section className="relative min-h-screen flex items-center justify-center gradient-cosmic overflow-hidden">
        {/* Animated Background Particles */}
        <div className="particles">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-lg rotate-45 animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="absolute bottom-20 right-10 w-12 h-12 bg-white/10 rounded-lg animate-float"
            style={{ animationDelay: "6s" }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            {/* Enhanced Name with Glow Effect */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white text-glow">
              <span className="inline-block animate-scale-in">Varun</span>{" "}
              <span className="inline-block animate-scale-in text-gradient-rainbow" style={{ animationDelay: "0.2s" }}>
                Sharma
              </span>
            </h1>

            {/* Animated Subtitle */}
            <div className="relative mb-8">
              <p className="text-2xl md:text-3xl text-white/90 font-light">
                 <span className="text-gradient-rainbow font-semibold">Full-Stack Developer </span>
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
            </div>

            {/* Enhanced Description */}
            <p className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences that blend <span className="text-white font-semibold">beautiful design</span>{" "}
              with <span className="text-white font-semibold">powerful functionality</span>. Passionate about creating
              solutions that make a difference.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-neon"
                >
                  <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:shadow-neon"
                >
                  <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: "10+", label: "Projects Completed" },
                { number: "1+", label: "Years Experience" },
                { number: "100%", label: "Working Projct" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <div>
                  <h2 className="text-5xl font-bold text-gray-900 mb-6">
                    About <span className="text-gradient">Me</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8" />
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  I'm a passionate full-stack developer creating digital solutions that
                  drive business growth. My expertise spans modern web technologies, from React and Next.js to Node.js
                  and cloud platforms.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge through technical writing and mentoring.
                </p>

                {/* Enhanced Skills */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Core Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "AWS", "Docker"].map(
                      (skill, index) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-4 py-2 text-sm bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 hover:shadow-lg transition-all duration-300 animate-scale-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Link href="/Resume 01.pdf" target="_blank">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="relative z-10 hover-tilt">
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Varun Sharma"
                    width={500}
                    height={600}
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
                </div>
                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl -z-10 animate-pulse-glow" />

                {/* Floating Achievement Badges */}
                <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-float">
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
                <div
                  className="absolute top-1/2 -right-4 bg-white rounded-full p-3 shadow-lg animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-5xl font-bold mb-6">
                Featured <span className="text-gradient-rainbow">Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A showcase of my recent work, demonstrating expertise in modern web development and innovative
                problem-solving.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-gray-200 text-gray-700 hover:border-blue-300 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link href={project.liveUrl} className="flex-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                      <Link href={project.githubUrl}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-neon"
                >
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 gradient-neon text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 text-glow">
              Let's Build Something <span className="text-gradient-rainbow">Amazing</span> Together
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with
              passionate teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start a Project
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:shadow-neon"
                >
                  <Star className="mr-2 h-5 w-5" />
                  Read My Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
