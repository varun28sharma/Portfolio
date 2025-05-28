import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Award, Users, Coffee, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "About - Varun Sharma",
  description:
    "Learn more about Varun Sharma, a passionate full-stack developer with expertise in React, Next.js, and modern web technologies.",
}

export default function AboutPage() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"] },
  ]

  const experience = [
    {
      title: "Academic Project: Music Streaming Website : Wavv",
      period: "2024/2025",
      description:
        "Developed a music streaming website using React, Next.js, and Node.js. Implemented features like playlist creation, song search, and user authentication. Collaborated with a team of 4 developers to deliver a functional and user-friendly application.",
    },
    {
      title: " Virtual Internship: THE AGNIRVA SPACE INTERNSHIP PROGRAM ",
      period: "2023/2024",
      description:
        "Worked on a project to develop a web application for the AGNIRVA SPACE INTERNSHIP PROGRAM. Implemented features like event registration, resource sharing, and community engagement. Collaborated with a team of 15 developers to deliver a functional and user-friendly application.",
    },
    {
      title: "Volunteer/Extracurricular: FOSS Club / KLGLUG",
      period: "2024/2025",
      description:
        "Contributed to the development of the FOSS Club website using React, Next.js, and Node.js. Implemented features like event registration, resource sharing, and community engagement. Collaborated with a team of 15 developers to deliver a functional and user-friendly application.",
    },
    // Add more entries as needed
  ]

  const achievements = [
    {
      icon: Award,
      title: "Academic Honor/Award",
      description: "Received a Letter of Recommendation from the Entrepreneurial Department in the first year of college",
    },
    {
      icon: Code,
      title: "Hackathon/Coding Competition",
      description: "Participated in multiple college hackathons and finished in SIH with the project 'Legal Adviser'",
    },
    {
      icon: Users,
      title: "Student Club Leadership/Involvement",
      description: "Active Core Member, Developer at KL GLUG",
    },
    {
      icon: Coffee,
      title: "Significant Project Contribution",
      description: "Currently working on an AI PDF Detector that detects fake PDFs",
    },
    // Add more entries as needed
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  I'm a passionate full-stack developer creating digital solutions that
                  drive business growth and enhance user experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/Resume 01.pdf" target="_blank">
                    <Button size="lg" className="px-8 py-3">
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="px-8 py-3">
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/profile.jpg"
                    alt="Varun Sharma"
                    width={500}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                My journey into web development started during my computer science studies, where I discovered my
                passion for creating digital experiences that solve real-world problems. What began as curiosity about
                how websites work evolved into a deep love for crafting elegant, efficient solutions.
              </p>
              <p className="mb-6">
                Over the years, I've had the privilege of working with startups and established companies, helping them
                bring their visions to life through code. I believe in the power of technology to make a positive
                impact, and I'm constantly learning and adapting to new technologies and methodologies.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or
                exploring the latest developments in web technology. I'm also passionate about mentoring aspiring
                developers and sharing knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <p className="text-blue-600 font-medium">{job.period}</p>
                      </div>
                      <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                        {job.period}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl mb-8 opacity-90">
              I'm always excited to take on new challenges and collaborate with passionate teams.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Let's Connect
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
