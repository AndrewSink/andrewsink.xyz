import { LinkCard } from "./link-card"
import { Youtube, Twitter, Linkedin, Github, Coffee, Globe, Cpu, Instagram } from "lucide-react"

const socialLinks = [
  {
    title: "Subscribe on YouTube",
    subtitle: "17M Views and Counting!",
    href: "http://www.youtube.com/c/andrewsink",
    icon: Youtube,
    color: "from-red-500 to-red-600",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/AndrewASink",
    icon: Twitter,
    color: "from-blue-400 to-blue-500",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/hes_printing_again/",
    icon: Instagram,
    color: "from-pink-500 to-orange-500",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/andrewsink/",
    icon: Linkedin,
    color: "from-blue-600 to-blue-700",
  },
  {
    title: "GitHub",
    href: "https://github.com/AndrewSink",
    icon: Github,
    color: "from-gray-700 to-gray-800",
  },
  {
    title: "Sketchfab",
    href: "https://sketchfab.com/andrewsink/models",
    icon: Globe,
    color: "from-gray-700 to-gray-800",
  },
]

const projectLinks = [
  {
    title: "Low Poly 3D Generator",
    href: "https://lowpoly3d.xyz/",
    icon: Cpu,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "STL TO ASCII Generator",
    href: "https://andrewsink.github.io/STL-to-ASCII-Generator/",
    icon: Globe,
    color: "from-green-500 to-green-600",
  },
  {
    title: "ResinLapse",
    subtitle: "Make resin timelapse videos with your DSLR camera!",
    href: "https://resinlapse.bigcartel.com/product/resinlapse",
    icon: Globe,
    color: "from-orange-500 to-orange-600",
  },
]

const professionalLinks = [
  {
    title: "3D Printer Reviews",
    subtitle: "Tom's Hardware",
    href: "https://www.tomshardware.com/author/andrew-sink",
    icon: Globe,
    color: "from-red-500 to-red-600",
  },
  {
    title: "3D Printer Reviews",
    subtitle: "3DWithUs",
    href: "https://3dwithus.com/author/andrewsink",
    icon: Globe,
    color: "from-teal-500 to-teal-600",
  },
]

const supportLinks = [
  {
    title: "Buy me a coffee!",
    href: "https://ko-fi.com/andrewsink",
    icon: Coffee,
    color: "from-yellow-500 to-yellow-600",
  },
]

export function LinksSection() {
  return (
    <div className="space-y-6">
      <Section title="Social" links={socialLinks} />
      <Section title="Projects" links={projectLinks} />
      <Section title="Professional" links={professionalLinks} />
      <Section title="Support" links={supportLinks} />
    </div>
  )
}

function Section({ title, links }: { title: string; links: any[] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-3 text-center">{title}</h2>
      <div className="space-y-2">
        {links.map((link, index) => (
          <LinkCard key={index} {...link} />
        ))}
      </div>
    </div>
  )
}
