import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar, Star, Zap, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Projects - Varun Sharma",
  description:
    "Explore my portfolio of web development projects, showcasing expertise in React, Next.js, and modern web technologies.",
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution built with Next.js and Stripe integration. Features include product management, shopping cart, secure checkout, order tracking, and admin dashboard.",
      longDescription:
        "This full-stack e-commerce platform demonstrates modern web development practices with server-side rendering, optimistic UI updates, and seamless payment processing. The admin panel includes inventory management, sales analytics, and customer management features.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024-01",
      category: "Full-Stack",
      gradient: "from-blue-500 to-purple-600",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      longDescription:
        "Built with React and Socket.io for real-time collaboration. Features include Kanban boards, time tracking, file attachments, team chat, and project analytics. The app supports multiple workspaces and role-based permissions.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023-11",
      category: "Full-Stack",
      gradient: "from-purple-500 to-pink-600",
      featured: false,
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description:
        "An intelligent dashboard that provides insights and predictions using machine learning algorithms and data visualization.",
      longDescription:
        "This dashboard integrates with multiple data sources to provide comprehensive business intelligence. Features include predictive analytics, custom report generation, real-time data streaming, and interactive visualizations.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023-09",
      category: "Data Science",
      gradient: "from-pink-500 to-orange-600",
      featured: true,
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media management platform for scheduling posts, analyzing engagement, and managing multiple accounts.",
      longDescription:
        "This platform allows users to manage multiple social media accounts from a single interface. Features include post scheduling, engagement analytics, hashtag suggestions, and team collaboration tools.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023-07",
      category: "Frontend",
      gradient: "from-green-500 to-blue-600",
      featured: false,
    },
    {
      id: 5,
      title: "Real-Time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, and video calling capabilities.",
      longDescription:
        "Built with modern web technologies to provide seamless real-time communication. Features include group chats, file sharing, emoji reactions, message encryption, and WebRTC video calls.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023-05",
      category: "Full-Stack",
      gradient: "from-indigo-500 to-purple-600",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website Builder",
      description:
        "A drag-and-drop website builder specifically designed for creating professional portfolio websites.",
      longDescription:
        "This no-code solution allows users to create stunning portfolio websites without technical knowledge. Features include customizable templates, drag-and-drop editor, SEO optimization, and hosting integration.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "AWS S3", "Cloudfront", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023-03",
      category: "SaaS",
      gradient: "from-yellow-500 to-red-600",
      featured: true,
    },
  ]

  const categories = ["All", "Full-Stack", "Frontend", "Data Science", "SaaS"]

  return (
    <div className="min-h-screen pt-16">
      {/* Enhanced Hero Section */}
      <section className="py-20 gradient-cosmic relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl font-bold mb-6 text-glow">
                My <span className="text-gradient-rainbow">Projects</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                A collection of projects that showcase my skills in web development, from simple websites to complex
                full-stack applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in-up ${
                    category === "All"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                      : "border-2 hover:border-blue-500 hover:text-blue-600"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Featured Projects Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                <Star className="inline-block mr-2 h-8 w-8 text-yellow-500" />
                Featured Projects
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {projects
                  .filter((p) => p.featured)
                  .map((project, index) => (
                    <Card
                      key={project.id}
                      className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-hover animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-500 text-black font-semibold">
                            <Star className="mr-1 h-3 w-3" />
                            Featured
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex gap-2">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <ExternalLink className="h-4 w-4 text-white" />
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <Github className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(project.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                            })}
                          </div>
                          <Badge variant="outline" className="border-blue-200 text-blue-600">
                            {project.category}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gradient transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{project.longDescription}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 hover:shadow-md transition-all duration-300 animate-scale-in"
                              style={{ animationDelay: `${techIndex * 0.05}s` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <Link href={project.liveUrl} className="flex-1">
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </Button>
                          </Link>
                          <Link href={project.githubUrl}>
                            <Button
                              variant="outline"
                              className="border-2 hover:border-gray-400 transition-all duration-300"
                            >
                              <Github className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Regular Projects Grid */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                <Zap className="inline-block mr-2 h-8 w-8 text-blue-500" />
                All Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group hover:shadow-xl transition-all duration-500 transform hover:scale-105 card-hover animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-500 text-black text-xs">
                            <Star className="mr-1 h-3 w-3" />
                            Featured
                          </Badge>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge variant="secondary" className="bg-white/90 text-gray-900">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4" />
                        {new Date(project.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-gray-200 hover:border-blue-300 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs border-gray-200">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <Link href={project.liveUrl} className="flex-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </Link>
                        <Link href={project.githubUrl}>
                          <Button variant="outline" size="sm" className="hover:bg-gray-50 transition-all duration-300">
                            <Github className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 gradient-neon text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-glow">
              Interested in <span className="text-gradient-rainbow">Working Together</span>?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
