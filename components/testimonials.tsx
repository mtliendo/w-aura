import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent of two Gen Alpha kids",
    content: "W Aura has helped me understand my kids better. Now I can actually participate in their conversations!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Elementary School Teacher",
    content: "This platform is a game-changer for educators. It helps us stay relevant and connect with our students.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Family Counselor",
    content: "I recommend W Aura to all parents who want to maintain a strong connection with their children.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop",
  },
]

export function Testimonials() {
  return (
    <section className="container py-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Loved by parents and educators
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Hear from our community about how W Aura has helped them connect with Gen Alpha.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}