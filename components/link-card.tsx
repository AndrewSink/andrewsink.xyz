import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface LinkCardProps {
  title: string
  subtitle?: string
  href: string
  icon: LucideIcon
  color: string
}

export function LinkCard({ title, subtitle, href, icon: Icon, color }: LinkCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
      <div
        className={cn(
          "relative overflow-hidden rounded-xl p-4 transition-all duration-300",
          "bg-gradient-to-r",
          color,
          "hover:scale-[1.02] hover:shadow-2xl",
          "border border-white/10 backdrop-blur-sm",
        )}
      >
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-white group-hover:text-white/90 transition-colors">{title}</h3>
            {subtitle && <p className="text-xs text-white/80 mt-0.5">{subtitle}</p>}
          </div>

          <div className="flex-shrink-0">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </a>
  )
}
