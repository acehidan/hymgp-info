import { MessageCircle } from 'lucide-react'

interface ContactCardProps {
  icon: React.ReactNode
  title: string
  description: string
  phone: string
  link: string
  color: string
}

export function ContactCard({ icon, title, description, phone, link, color }: ContactCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-accent"
    >
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5 ${color}`} />
      
      <div className="relative z-10">
        <div className={`mb-4 inline-flex rounded-lg p-3 ${color} text-primary-foreground`}>
          {icon}
        </div>

        <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>

        <p className="mb-4 text-sm text-muted-foreground">{description}</p>

        <div className="flex items-center gap-2">
          <span className="font-mono font-medium text-foreground">{phone}</span>
          <MessageCircle className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-accent" />
        </div>

        <p className="mt-4 text-xs font-medium text-accent uppercase tracking-wider opacity-0 transition-opacity group-hover:opacity-100">
          Click to open →
        </p>
      </div>
    </a>
  )
}
