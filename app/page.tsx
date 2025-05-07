"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronDown,
  Code,
  Layers,
  Lightbulb,
  Shield,
  LinkIcon,
  Smartphone,
  Lock,
  Cloud,
  Bot,
  Rocket,
  GraduationCap,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState, useRef } from "react"
import { ContactForm } from "@/components/contact-form"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { ParticlesBackground } from "@/components/particles-background"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const aboutSectionRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      quote:
        "Santo Request transformó nuestra operación digital. Su enfoque ágil y soluciones a medida nos permitieron aumentar la eficiencia en un 40%.",
      author: "María González",
      role: "CEO, Innovatech",
    },
    {
      quote:
        "Su equipo entendió perfectamente nuestras necesidades y entregó una solución que superó todas nuestras expectativas. Verdaderos héroes digitales.",
      author: "Carlos Rodríguez",
      role: "CTO, DataFuture",
    },
    {
      quote:
        "La implementación de IA que desarrollaron para nosotros revolucionó nuestra forma de trabajar. Resultados concretos desde el primer mes.",
      author: "Laura Martínez",
      role: "COO, TechSolutions",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">Santo Request</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-yellow-400 transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-yellow-400 transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium text-muted-foreground hover:text-yellow-400 transition-colors"
            >
              Equipo
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-yellow-400 transition-colors"
            >
              Testimonios
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-yellow-400 transition-colors"
            >
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              className="md:hidden border-border text-muted-foreground hover:text-yellow-400 hover:bg-secondary"
            >
              Menú
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Updated with subtle particles */}
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden bg-background dark:bg-gray-950">
          {/* Partículas animadas sutiles */}
          <ParticlesBackground color="rgba(204, 170, 0, 0.08)" particleCount={100} />

          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background dark:from-black dark:via-gray-900 dark:to-black"></div>
            {/* Dots pattern - más sutil */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,222,0,0.15) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-8 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-10 md:space-y-0 md:space-x-8">
              <div className="flex flex-col items-start text-left max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                  Tu revolución digital está a punto de comenzar. <span className="text-yellow-400">Santo Request</span>{" "}
                  responde al llamado.
                </h1>
                <div className="h-16 md:h-24 mt-6">
                  <TypewriterEffect
                    text="Creamos soluciones de software con superpoderes. Tecnología y creatividad para mejorar el mundo."
                    className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
                    speed={40}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black w-full md:w-auto">
                  <a href="#services">Descubre cómo podemos ayudarte</a>
                </Button>
              </div>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            aria-label="Desplazarse hacia abajo"
          >
            <ChevronDown className="h-8 w-8 text-yellow-500" />
          </button>
        </section>

        {/* About Us Section */}
        <section
          ref={aboutSectionRef}
          id="about"
          className="py-20 md:py-32 bg-secondary dark:bg-gray-950 border-t border-border"
        >
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Quiénes somos</h2>
                <p className="text-xl md:text-2xl font-medium text-muted-foreground">
                  Somos <span className="font-bold text-yellow-400">Santo Request</span>, una consultora de tecnología y
                  creatividad AI-First formada por especialistas con superpoderes digitales. Unidos por la misión de
                  transformar el mundo.
                </p>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <p>
                  Desde nuestra base en la nube (y con servidores bien seguros), respondemos a los llamados de empresas
                  e instituciones que enfrentan desafíos tecnológicos, sociales o creativos. Si tu organización tiene
                  una causa justa, nuestro escuadrón está listo para intervenir.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-yellow-400">Expertise</h3>
                  <p className="text-muted-foreground">
                    Expertos en desarrollo de software y UX/UI, impulsando eficiencia y crecimiento.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-yellow-400">Metodología</h3>
                  <p className="text-muted-foreground">
                    Metodologías ágiles, soluciones a medida y pasión por la colaboración.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-yellow-400">Inspiración</h3>
                  <p className="text-muted-foreground">
                    Inspirados en héroes icónicos, superamos cualquier desafío tecnológico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 md:py-32 bg-background dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-16">
              <div className="grid gap-12 md:grid-cols-3">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-yellow-400">Misión</h3>
                  <p className="text-muted-foreground">
                    Impulsar a organizaciones, equipos y empresas hacia su transformación digital, combinando
                    creatividad, estrategia y software hecho a medida. Somos los aliados que necesitás para enfrentar al
                    caos del mundo tech con precisión y estilo.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-yellow-400">Visión</h3>
                  <p className="text-muted-foreground">
                    Liderar una nueva era de consultoría AI-First: cercana, ágil, innovadora y profundamente humana.
                    Queremos que la tecnología deje de ser un problema y se convierta en tu mejor arma secreta.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-yellow-400">Valores</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Compromiso valiente: No le tememos a los desafíos.</li>
                    <li>• Responsabilidad de héroe: Lo que prometemos, lo cumplimos.</li>
                    <li>• Innovación sin capa pero con propósito.</li>
                    <li>• Colaboración total: Vos sos parte del equipo.</li>
                    <li>• Integridad invencible.</li>
                    <li>• Orientación al impacto: Cada línea de código cuenta.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 md:py-32 bg-secondary dark:bg-gray-950 border-t border-border">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Nuestro Escuadrón Experto</h2>
                <p className="text-xl text-muted-foreground">
                  Un equipo de especialistas listos para enfrentar cualquier desafío digital.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">FS</span>
                  </div>
                  <h3 className="font-medium">Desarrolladores Full-Stack</h3>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">UX</span>
                  </div>
                  <h3 className="font-medium">Diseñadores UX/UI</h3>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">PM</span>
                  </div>
                  <h3 className="font-medium">Estrategas de producto</h3>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">AI</span>
                  </div>
                  <h3 className="font-medium">Especialistas en IA</h3>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">TC</span>
                  </div>
                  <h3 className="font-medium">Consultores tech</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Heroic Oath - Updated capitalization */}
        <section className="py-20 md:py-32 bg-background dark:bg-black">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Nuestro juramento heroico</h2>
              <p className="text-xl md:text-2xl italic text-muted-foreground">
                Enfrentamos cada proyecto como una misión épica: navegamos la incertidumbre, derrotamos la burocracia y
                vencemos la ineficiencia con código limpio e inteligencia.
              </p>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 md:py-32 bg-secondary dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex items-center justify-center">
                <Heart className="h-12 w-12 text-yellow-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center">
                Un compromiso con lo que importa
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  En Santo Request creemos que la tecnología puede (y debe) estar al servicio del bien común. Por eso,
                  acompañamos a organizaciones sociales, colectivos, fundaciones y equipos de causas reales a superar
                  sus desafíos digitales, con soluciones accesibles, creativas y efectivas.
                </p>
                <p>
                  Nos mueve la justicia social, la igualdad y el impacto. Si tu misión es mejorar el mundo, la nuestra
                  es darte las herramientas para lograrlo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Updated to carousel style */}
        <section id="testimonials" className="py-20 md:py-32 bg-secondary dark:bg-gray-950 border-t border-border">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Testimonios</h2>
                <p className="text-xl text-muted-foreground">Lo que dicen nuestros clientes sobre nosotros</p>
              </div>

              <div className="relative flex items-center justify-center">
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 md:left-4 z-10 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="h-6 w-6 text-yellow-400" />
                </button>

                <div className="max-w-3xl mx-auto px-10 md:px-16">
                  <div className="text-center space-y-6">
                    <p className="text-xl md:text-2xl italic text-muted-foreground">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">{testimonials[currentTestimonial].author}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 md:right-4 z-10 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="h-6 w-6 text-yellow-400" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Updated titles and removed arrows */}
        <section id="services" className="py-20 md:py-32 bg-background dark:bg-black">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Nuestros Superpoderes</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Soluciones tecnológicas que transforman organizaciones y potencian su impacto
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-card border-border hover:border-yellow-500 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Code className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold">Fábrica digital</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Creamos soluciones únicas como tus ideas, con el código justo para que tu proyecto funcione como
                      necesitas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-yellow-500 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Layers className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold">Visión UX</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Diseñamos interfaces que encantan, fluyen y funcionan. Queremos que tu audiencia disfrute usar tus
                      soluciones.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-yellow-500 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Lightbulb className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold">Guía tech estratégica</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Te acompañamos en la toma de decisiones y trazamos juntos el mapa de ruta más eficiente para tu
                      misión.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-yellow-500 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold">Vigilancia continua</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Nuestros héroes no desaparecen cuando termina la entrega. Te acompañamos para que todo siga
                      funcionando.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-yellow-500 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <LinkIcon className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold">Conexión total</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Unificamos tus sistemas, apps y plataformas para que trabajen en armonía. Reducimos fricciones y
                      multiplicamos impacto.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-yellow-500 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold">Presencia en tu bolsillo</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Tus usuarios están en movimiento. Creamos apps ágiles, intuitivas y con alma para acompañarlos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-yellow-500 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Lock className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold">Escudo de datos</h3>
                    </div>
                    <p className="text-muted-foreground">
                      La seguridad no es opcional. Protegemos tu información con barreras invisibles pero invencibles.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-yellow-500 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Cloud className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold">Poder desde la nube</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Subí tus datos al cielo (pero bien guardados). Te ayudamos a migrar, escalar y administrar tu
                      infraestructura.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-yellow-500 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold">IA con propósito</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Usamos IA para que tomes mejores decisiones, llegues más lejos y trabajes más inteligentemente.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-yellow-500 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Rocket className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold">Transformación digital</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Repensamos procesos, diseñamos soluciones y te acompañamos en el salto al mundo digital con
                      sentido.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-yellow-500 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold">Entrenamiento para la misión</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Capacitamos a tu equipo en IA, diseño, agilidad y todo lo que haga falta para que te empoderes
                      tecnológicamente.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 md:py-32 bg-secondary dark:bg-gray-950 border-t border-border">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Contáctanos</h2>
                <p className="text-xl text-muted-foreground">
                  ¿Necesitás un superpoder para potenciar tu negocio? ¡Contactá a Santo Request hoy!
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Información de contacto</h3>
                    <p className="text-muted-foreground">Estamos listos para responder a tu llamado</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                        <span className="text-black font-bold">@</span>
                      </div>
                      <p>contacto@santorequest.com</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                        <span className="text-black font-bold">T</span>
                      </div>
                      <p>+54 11 5606-2690</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer with quick links */}
      <footer className="w-full py-12 bg-background dark:bg-black text-foreground border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-yellow-400">Santo Request</h3>
              <p className="text-sm text-muted-foreground">
                Consultora de tecnología y creatividad AI-First formada por especialistas con superpoderes digitales.
              </p>
              <p className="text-sm text-muted-foreground">© 2023 Santo Request. Todos los derechos reservados.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-yellow-400">Enlaces rápidos</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#about" className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors">
                  Nosotros
                </Link>
                <Link
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors"
                >
                  Servicios
                </Link>
                <Link href="#team" className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors">
                  Equipo
                </Link>
                <Link
                  href="#testimonials"
                  className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors"
                >
                  Testimonios
                </Link>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors">
                  Contacto
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-yellow-400">Nuestros servicios</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors">
                  Fábrica Digital
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors">
                  Visión UX
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors">
                  Guía Tech Estratégica
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors">
                  IA con Propósito
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors">
                  Transformación Digital
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-yellow-400">Contacto</h3>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Email: contacto@santorequest.com</p>
                <p className="text-sm text-muted-foreground">Teléfono: +54 11 5606-2690</p>
              </div>
              <div className="flex space-x-4 pt-2">
                <Link href="#" className="text-muted-foreground hover:text-yellow-400">
                  Políticas de Privacidad
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-yellow-400">
                  Términos de Servicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
