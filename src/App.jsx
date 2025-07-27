import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Users, 
  Calendar, 
  Plane, 
  Heart,
  Clock,
  Award,
  Camera,
  Globe,
  Coffee,
  ChevronRight,
  Quote
} from 'lucide-react'
import './App.css'

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [happyTravelers, setHappyTravelers] = useState(1247)

  const testimonials = [
    {
      name: "Anna Kowalska",
      location: "Grodzisk Mazowiecki",
      trip: "Grecja - Kreta, lipiec 2024",
      rating: 5,
      text: "Najlepsze wakacje w życiu! Sylwia z biura załatwiła wszystko idealnie. Egipt był dokładnie taki, jak obiecywała. Już planujemy kolejną podróż!",
      image: "👩‍💼"
    },
    {
      name: "Marcin Nowak",
      location: "Grodzisk Mazowiecki", 
      trip: "Tajlandia - Phuket, marzec 2024",
      rating: 5,
      text: "Profesjonalna obsługa od A do Z. Andrzej pomógł nam wybrać idealny hotel. Tajlandia przerosła nasze oczekiwania!",
      image: "👨‍💻"
    },
    {
      name: "Rodzina Wiśniewskich",
      location: "Grodzisk Mazowiecki",
      trip: "Chorwacja - Dubrownik, sierpień 2024", 
      rating: 5,
      text: "Z dziećmi zawsze jest trudno, ale dzięki Agnieszce wszystko było perfekcyjnie zorganizowane. Dzieci do dziś mówią o tej podróży!",
      image: "👨‍👩‍👧‍👦"
    }
  ]

  const blogPosts = [
    {
      category: "Odkrywcy tygodnia",
      title: "Jak Ania z Grodziska zakochała się w Grecji",
      excerpt: "32-letnia mieszkanka Grodziska zawsze marzyła o podróży do Grecji. Ale jak to w życiu bywa, zawsze było coś ważniejszego...",
      readTime: "5 min",
      image: "🏖️",
      badge: "Nowe"
    },
    {
      category: "Wakacyjna ciekawostka",
      title: "Dlaczego w Japonii nie ma koszy na śmieci?",
      excerpt: "Krótka historia o tym, jak atak terrorystyczny zmienił japońską kulturę i co to mówi o ich społeczeństwie...",
      readTime: "3 min", 
      image: "🗾",
      badge: "Popularne"
    },
    {
      category: "Z pamiętnika doradcy",
      title: "Klient, który chciał jechać 'tam, gdzie jest ciepło'",
      excerpt: "Zabawna anegdota o jednej z najtrudniejszych rezerwacji i jak w końcu znaleźliśmy idealne miejsce...",
      readTime: "4 min",
      image: "☀️",
      badge: "Śmieszne"
    }
  ]

  const curiosities = [
    "W Islandii 85% energii pochodzi ze źródeł odnawialnych",
    "Grecja ma ponad 6000 wysp, ale tylko 227 jest zamieszkanych", 
    "W Tajlandii uśmiech ma 13 różnych znaczeń",
    "Dubaj ma największy na świecie sztuczny archipelag"
  ]

  const [currentCuriosity, setCurrentCuriosity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      setCurrentCuriosity((prev) => (prev + 1) % curiosities.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-blue-900">
                Wakacje<span className="text-yellow-500">.pl</span>
              </div>
              <div className="hidden md:block text-sm text-gray-600">
                <MapPin className="inline w-4 h-4 mr-1" />
                Grodzisk Mazowiecki, ul. Żyrardowska 31
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-blue-900">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">518 337 064</span>
              </div>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
                <Coffee className="w-4 h-4 mr-2" />
                Wpadnij na kawę!
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Gdzie zabierze Cię 
              <span className="text-yellow-400"> następna podróż?</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Nie jesteśmy katalogiem - jesteśmy przewodnikami po świecie marzeń
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 text-lg">
                <Heart className="w-5 h-5 mr-2" />
                Opowiedz nam o swoich marzeniach
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń: 518 337 064
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">✈️</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-pulse">🏖️</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce delay-1000">🗺️</div>
      </section>

      {/* Happy Travelers Counter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-full px-8 py-4">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-3xl font-bold text-blue-900">{happyTravelers.toLocaleString()}</div>
                <div className="text-sm text-gray-600">mieszkańców Grodziska już spełniło swoje marzenia</div>
              </div>
              <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Najnowsze historie z podróży</h2>
            <p className="text-xl text-gray-600">Poznaj prawdziwe historie naszych podróżników</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {post.badge}
                    </Badge>
                  </div>
                  <div className="text-4xl mb-3">{post.image}</div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Zobacz wszystkie historie
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Curiosity */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
              <Globe className="w-6 h-6 mr-2" />
              Wakacyjna ciekawostka dnia
            </h3>
            <div className="text-lg bg-blue-800 rounded-lg p-6 max-w-2xl mx-auto">
              <Quote className="w-6 h-6 text-yellow-400 mb-2 mx-auto" />
              <p className="italic">{curiosities[currentCuriosity]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Co mówią nasi podróżnicy</h2>
            <p className="text-xl text-gray-600">Prawdziwe opinie, prawdziwe emocje</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-200 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{testimonials[currentTestimonial].image}</div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                    <p className="text-sm text-blue-600">{testimonials[currentTestimonial].trip}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Dlaczego mieszkańcy Grodziska wybierają nas?</h2>
            <p className="text-xl text-gray-600">5 powodów, które sprawiają, że jesteśmy wyjątkowi</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Jesteśmy Waszymi sąsiadami</h3>
                <p className="text-gray-600">Znamy Grodzisk, rozumiemy Wasze potrzeby i mówimy tym samym językiem</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">15 lat doświadczenia</h3>
                <p className="text-gray-600">Ponad 1200 szczęśliwych podróżników z Grodziska i okolic</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Osobiste podejście</h3>
                <p className="text-gray-600">Każda podróż to indywidualna historia, nie katalogowa oferta</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Zawsze na telefon</h3>
                <p className="text-gray-600">Problemy? Pytania? Dzwońcie o każdej porze - zawsze pomożemy</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Camera className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Sprawdzone miejsca</h3>
                <p className="text-gray-600">Polecamy tylko te miejsca, w których sami byliśmy</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Plane className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">Pełna obsługa</h3>
                <p className="text-gray-600">Od marzeń do wspomnień - zajmujemy się wszystkim</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Gotowi na swoją przygodę?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nie czekajcie na "kiedyś". Wasze marzenia o podróży mogą się spełnić już dziś. 
            Wpadnijcie do nas na kawę i porozmawiajmy o tym, gdzie chcielibyście się znaleźć za miesiąc.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              Żyrardowska 31, Grodzisk Mazowiecki
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Umów spotkanie
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Wakacje<span className="text-yellow-400">.pl</span>
              </h3>
              <p className="text-blue-200 mb-4">
                Twoi przewodnicy po świecie marzeń w sercu Grodziska Mazowieckiego
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                  📘
                </div>
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                  📷
                </div>
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                  📧
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-blue-200">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  ul. Żyrardowska 31, lok. 92
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  05-825 Grodzisk Mazowiecki
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  518 337 064
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  grodzisk@wakacje.pl
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Godziny otwarcia</h4>
              <div className="space-y-2 text-blue-200">
                <div>Poniedziałek - Piątek: 10:00 - 20:00</div>
                <div>Sobota: 10:00 - 16:00</div>
                <div>Niedziela: Zamknięte</div>
                <div className="mt-4 text-yellow-400 font-semibold">
                  ☕ Kawa zawsze gotowa!
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Wakacje.pl Grodzisk Mazowiecki. Wszystkie prawa zastrzeżone.</p>
            <p className="mt-2">Licencja organizatora turystyki nr 123/2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

