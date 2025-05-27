import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Blog - Varun Sharma",
  description: "Read my latest thoughts on web development, technology trends, and programming insights.",
}

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Next.js 14",
      excerpt:
        "Explore the latest features in Next.js 14 and learn how to build performant, scalable React applications with the new App Router.",
      content: "In this comprehensive guide, we'll dive deep into Next.js 14's revolutionary features...",
      image: "/placeholder.svg?height=300&width=500",
      category: "React",
      date: "2024-01-15",
      readTime: "8 min read",
      slug: "building-scalable-react-applications-nextjs-14",
    },
    {
      id: 2,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Discover the emerging technologies and trends that will shape web development in 2024, from AI integration to new frameworks.",
      content: "As we move through 2024, the web development landscape continues to evolve...",
      image: "/placeholder.svg?height=300&width=500",
      category: "Technology",
      date: "2024-01-10",
      readTime: "6 min read",
      slug: "future-web-development-trends-2024",
    },
    {
      id: 3,
      title: "Mastering TypeScript: Advanced Patterns and Best Practices",
      excerpt:
        "Level up your TypeScript skills with advanced patterns, utility types, and best practices for large-scale applications.",
      content: "TypeScript has become an essential tool for modern web development...",
      image: "/placeholder.svg?height=300&width=500",
      category: "TypeScript",
      date: "2024-01-05",
      readTime: "12 min read",
      slug: "mastering-typescript-advanced-patterns",
    },
    {
      id: 4,
      title: "Optimizing Web Performance: A Complete Guide",
      excerpt:
        "Learn proven strategies to optimize your web applications for speed, including code splitting, lazy loading, and caching techniques.",
      content: "Web performance is crucial for user experience and SEO...",
      image: "/placeholder.svg?height=300&width=500",
      category: "Performance",
      date: "2023-12-28",
      readTime: "10 min read",
      slug: "optimizing-web-performance-complete-guide",
    },
    {
      id: 5,
      title: "Building Accessible Web Applications",
      excerpt:
        "A comprehensive guide to creating inclusive web experiences that work for everyone, covering WCAG guidelines and practical implementation.",
      content: "Accessibility is not just a nice-to-have feature; it's a fundamental requirement...",
      image: "/placeholder.svg?height=300&width=500",
      category: "Accessibility",
      date: "2023-12-20",
      readTime: "9 min read",
      slug: "building-accessible-web-applications",
    },
    {
      id: 6,
      title: "State Management in React: Redux vs Zustand vs Context",
      excerpt:
        "Compare different state management solutions for React applications and learn when to use each approach.",
      content: "Choosing the right state management solution is crucial for React applications...",
      image: "/placeholder.svg?height=300&width=500",
      category: "React",
      date: "2023-12-15",
      readTime: "7 min read",
      slug: "state-management-react-comparison",
    },
  ]

  const categories = ["All", "React", "TypeScript", "Technology", "Performance", "Accessibility"]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">My Blog</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thoughts, insights, and tutorials on web development, technology trends, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button key={category} variant={category === "All" ? "default" : "outline"} className="px-6 py-2">
                  {category}
                </Button>
              ))}
            </div>

            {/* Featured Post */}
            <div className="mb-16">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={posts[0].image || "/placeholder.svg"}
                      alt={posts[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(posts[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {posts[0].readTime}
                      </div>
                      <Badge variant="outline">{posts[0].category}</Badge>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{posts[0].title}</h2>
                    <p className="text-gray-600 mb-6">{posts[0].excerpt}</p>
                    <Link href={`/blog/${posts[0].slug}`}>
                      <Button className="w-fit">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to my newsletter to get the latest posts and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="px-8 py-3">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
