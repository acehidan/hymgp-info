"use client";

import { ContactCard } from "@/components/contact-card";
import { SiWhatsapp, SiLine, SiWechat } from "@icons-pack/react-simple-icons";

export default function Page() {
  const contacts = [
    {
      icon: <SiWhatsapp size={24} />,
      title: "WhatsApp",
      description: "Get instant support and messages",
      phone: "+1 234 567 8900",
      link: "https://wa.me/12345678900",
      color: "bg-green-500",
    },
    {
      icon: <SiLine size={24} />,
      title: "LINE",
      description: "Connect with us on LINE app",
      phone: "+1 345 678 9000",
      link: "https://line.me/R/ti/p/12345678900",
      color: "bg-green-600",
    },
    {
      icon: <SiWechat size={24} />,
      title: "WeChat",
      description: "Reach us via WeChat",
      phone: "wechat_id_123",
      link: "weixin://dl/business/?t=wechat_id_123",
      color: "bg-[#07C160]",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose your preferred communication method. We&apos;re here to
              help and ready to answer any questions you might have.
            </p>
          </div>
        </div>
      </header>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {contacts.map((contact, index) => (
              <ContactCard
                key={index}
                icon={contact.icon}
                title={contact.title}
                description={contact.description}
                phone={contact.phone}
                link={contact.link}
                color={contact.color}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
