"use client"

import { Search, MapPin, Coffee, TreesIcon as Tree, ShoppingBag, Camera, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function LocalHiddenGems() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#f8f5f0]/90 backdrop-blur-sm border-b border-[#e0d8c7] px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-serif text-xl font-bold text-[#5a4a3f]">Local Hidden Gems</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link href="#featured" className="text-[#5a4a3f] hover:text-[#8b6e5c] text-sm font-medium">
              Featured
            </Link>
            <Link href="#map" className="text-[#5a4a3f] hover:text-[#8b6e5c] text-sm font-medium">
              Map
            </Link>
            <Link href="#submit" className="text-[#5a4a3f] hover:text-[#8b6e5c] text-sm font-medium">
              Submit
            </Link>
            <Link href="#newsletter" className="text-[#5a4a3f] hover:text-[#8b6e5c] text-sm font-medium">
              Newsletter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#5a4a3f]"
              aria-label="Toggle menu"
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu")
                if (mobileMenu) {
                  mobileMenu.classList.toggle("hidden")
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div id="mobile-menu" className="hidden md:hidden bg-white shadow-md absolute left-0 right-0 top-full z-50">
          <div className="container mx-auto py-2 px-4">
            <Link href="#featured" className="block py-2 text-[#5a4a3f] hover:text-[#8b6e5c] text-sm font-medium">
              Featured
            </Link>
            <Link href="#map" className="block py-2 text-[#5a4a3f] hover:text-[#8b6e5c] text-sm font-medium">
              Map
            </Link>
            <Link href="#submit" className="block py-2 text-[#5a4a3f] hover:text-[#8b6e5c] text-sm font-medium">
              Submit
            </Link>
            <Link href="#newsletter" className="block py-2 text-[#5a4a3f] hover:text-[#8b6e5c] text-sm font-medium">
              Newsletter
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-[#e0d8c7]">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#3c2f27] mb-4">
            Discover London's Best-Kept Secrets!
          </h1>
          <p className="text-lg md:text-xl text-[#5a4a3f] max-w-2xl mx-auto mb-8">
            Explore the hidden corners of London that even locals might have missed. From secret cafés to tucked-away
            parks and unique shops.
          </p>

          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-2 flex items-center">
            <Search className="h-5 w-5 text-[#8b6e5c] ml-2" />
            <Input
              type="text"
              placeholder="Search for hidden gems..."
              className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              aria-label="Search for hidden gems"
            />
            <Select>
              <SelectTrigger className="w-[140px] border-none focus:ring-0" aria-label="Select category">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="food">Food & Drink</SelectItem>
                <SelectItem value="nature">Parks & Nature</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
                <SelectItem value="culture">Arts & Culture</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <img
            src="/london-skyline-illustration.png"
            alt="London background"
            className="w-full h-full object-cover"
            width="1200"
            height="800"
            loading="eager"
            onError={(e) => (e.currentTarget.src = "/placeholder-1kaue.png")}
          />
        </div>
      </section>

      {/* Featured Gems Section */}
      <section id="featured" className="py-16 px-4 bg-[#f8f5f0]">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#3c2f27] text-center mb-2">Featured Hidden Gems</h2>
          <p className="text-[#5a4a3f] text-center mb-12 max-w-2xl mx-auto">
            These special spots are loved by locals but often missed by visitors. Each has a unique story to tell.
          </p>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mx-auto flex justify-center bg-[#e0d8c7]" aria-label="Category filters">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#8b6e5c] data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger value="food" className="data-[state=active]:bg-[#8b6e5c] data-[state=active]:text-white">
                Food & Drink
              </TabsTrigger>
              <TabsTrigger value="nature" className="data-[state=active]:bg-[#8b6e5c] data-[state=active]:text-white">
                Parks & Nature
              </TabsTrigger>
              <TabsTrigger value="shopping" className="data-[state=active]:bg-[#8b6e5c] data-[state=active]:text-white">
                Shopping
              </TabsTrigger>
              <TabsTrigger value="culture" className="data-[state=active]:bg-[#8b6e5c] data-[state=active]:text-white">
                Arts & Culture
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Gem 1 */}
                <Card className="overflow-hidden bg-white border-[#e0d8c7] hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src="/cozy-bookstore-cafe-tunnels.png"
                      alt="The Book Tunnel Café"
                      className="w-full h-full object-cover"
                      width="400"
                      height="300"
                      loading="lazy"
                      onError={(e) => (e.currentTarget.src = "/placeholder-1kaue.png")}
                    />
                    <div className="absolute top-2 right-2 bg-[#8b6e5c] text-white px-2 py-1 rounded text-xs font-medium">
                      Food & Drink
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-[#8b6e5c]" />
                      <CardTitle className="font-serif text-xl text-[#3c2f27]">The Book Tunnel Café</CardTitle>
                    </div>
                    <CardDescription className="text-[#5a4a3f]">Bloomsbury</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5a4a3f]">
                      A café with secret book tunnels connecting to a hidden library. Order the "Reader's Choice" coffee
                      and get access to the tunnel entrance.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-[#e0d8c7] pt-4 text-sm text-[#8b6e5c]">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>5 min walk from Russell Square Station</span>
                    </div>
                  </CardFooter>
                </Card>

                {/* Gem 2 */}
                <Card className="overflow-hidden bg-white border-[#e0d8c7] hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src="/london-japanese-garden.png"
                      alt="Kyoto Corner"
                      className="w-full h-full object-cover"
                      width="400"
                      height="300"
                      loading="lazy"
                      onError={(e) => (e.currentTarget.src = "/placeholder-1kaue.png")}
                    />
                    <div className="absolute top-2 right-2 bg-[#8b6e5c] text-white px-2 py-1 rounded text-xs font-medium">
                      Parks & Nature
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Tree className="h-4 w-4 text-[#8b6e5c]" />
                      <CardTitle className="font-serif text-xl text-[#3c2f27]">Kyoto Corner</CardTitle>
                    </div>
                    <CardDescription className="text-[#5a4a3f]">Holland Park</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5a4a3f]">
                      A tranquil Japanese garden hidden within Holland Park. Features an authentic koi pond and
                      traditional tea house open on weekends.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-[#e0d8c7] pt-4 text-sm text-[#8b6e5c]">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Enter through the north gate of Holland Park</span>
                    </div>
                  </CardFooter>
                </Card>

                {/* Gem 3 */}
                <Card className="overflow-hidden bg-white border-[#e0d8c7] hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src="/vintage-record-shop.png"
                      alt="Vinyl Vault"
                      className="w-full h-full object-cover"
                      width="400"
                      height="300"
                      loading="lazy"
                      onError={(e) => {
                        console.log("Image failed to load:", e.currentTarget.alt)
                        e.currentTarget.src = "/placeholder-1kaue.png"
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-[#8b6e5c] text-white px-2 py-1 rounded text-xs font-medium">
                      Shopping
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4 text-[#8b6e5c]" />
                      <CardTitle className="font-serif text-xl text-[#3c2f27]">Vinyl Vault</CardTitle>
                    </div>
                    <CardDescription className="text-[#5a4a3f]">Hackney</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5a4a3f]">
                      A basement record shop with rare vinyl collections. The owner hosts listening parties every
                      Thursday evening with complimentary local craft beer.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-[#e0d8c7] pt-4 text-sm text-[#8b6e5c]">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Look for the blue door with a small vinyl sign</span>
                    </div>
                  </CardFooter>
                </Card>

                {/* Gem 4 */}
                <Card className="overflow-hidden bg-white border-[#e0d8c7] hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src="/london-rooftop-garden.png"
                      alt="Sky Garden Hideaway"
                      className="w-full h-full object-cover"
                      width="400"
                      height="300"
                      loading="lazy"
                      onError={(e) => {
                        console.log("Image failed to load:", e.currentTarget.alt)
                        e.currentTarget.src = "/placeholder-1kaue.png"
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-[#8b6e5c] text-white px-2 py-1 rounded text-xs font-medium">
                      Food & Drink
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-[#8b6e5c]" />
                      <CardTitle className="font-serif text-xl text-[#3c2f27]">Sky Garden Hideaway</CardTitle>
                    </div>
                    <CardDescription className="text-[#5a4a3f]">Peckham</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5a4a3f]">
                      A rooftop café hidden above an old warehouse. Offers spectacular views of the London skyline and
                      botanical-inspired cocktails.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-[#e0d8c7] pt-4 text-sm text-[#8b6e5c]">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Enter through the freight elevator at the back</span>
                    </div>
                  </CardFooter>
                </Card>

                {/* Gem 5 */}
                <Card className="overflow-hidden bg-white border-[#e0d8c7] hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src="/underground-art-gallery-neon.png"
                      alt="The Underground Gallery"
                      className="w-full h-full object-cover"
                      width="400"
                      height="300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-[#8b6e5c] text-white px-2 py-1 rounded text-xs font-medium">
                      Arts & Culture
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Camera className="h-4 w-4 text-[#8b6e5c]" />
                      <CardTitle className="font-serif text-xl text-[#3c2f27]">The Underground Gallery</CardTitle>
                    </div>
                    <CardDescription className="text-[#5a4a3f]">Shoreditch</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5a4a3f]">
                      An art gallery in a former tube station. Features rotating exhibitions from emerging London
                      artists and late-night events on the first Friday of each month.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-[#e0d8c7] pt-4 text-sm text-[#8b6e5c]">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Look for the disused station entrance with a red light</span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="food" className="mt-6">
              {/* Food & Drink content would go here - simplified for brevity */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Just showing the food-related cards */}
                <Card className="overflow-hidden bg-white border-[#e0d8c7] hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src="/cozy-bookstore-cafe-tunnels.png"
                      alt="The Book Tunnel Café"
                      className="w-full h-full object-cover"
                      width="400"
                      height="300"
                      loading="lazy"
                      onError={(e) => (e.currentTarget.src = "/placeholder-1kaue.png")}
                    />
                    <div className="absolute top-2 right-2 bg-[#8b6e5c] text-white px-2 py-1 rounded text-xs font-medium">
                      Food & Drink
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-[#8b6e5c]" />
                      <CardTitle className="font-serif text-xl text-[#3c2f27]">The Book Tunnel Café</CardTitle>
                    </div>
                    <CardDescription className="text-[#5a4a3f]">Bloomsbury</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5a4a3f]">
                      A café with secret book tunnels connecting to a hidden library. Order the "Reader's Choice" coffee
                      and get access to the tunnel entrance.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-[#e0d8c7] pt-4 text-sm text-[#8b6e5c]">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>5 min walk from Russell Square Station</span>
                    </div>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden bg-white border-[#e0d8c7] hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src="/london-rooftop-garden.png"
                      alt="Sky Garden Hideaway"
                      className="w-full h-full object-cover"
                      width="400"
                      height="300"
                      loading="lazy"
                      onError={(e) => {
                        console.log("Image failed to load:", e.currentTarget.alt)
                        e.currentTarget.src = "/placeholder-1kaue.png"
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-[#8b6e5c] text-white px-2 py-1 rounded text-xs font-medium">
                      Food & Drink
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-[#8b6e5c]" />
                      <CardTitle className="font-serif text-xl text-[#3c2f27]">Sky Garden Hideaway</CardTitle>
                    </div>
                    <CardDescription className="text-[#5a4a3f]">Peckham</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5a4a3f]">
                      A rooftop café hidden above an old warehouse. Offers spectacular views of the London skyline and
                      botanical-inspired cocktails.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-[#e0d8c7] pt-4 text-sm text-[#8b6e5c]">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Enter through the freight elevator at the back</span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Other tab contents would follow the same pattern */}
            <TabsContent value="nature" className="mt-6">
              {/* Nature content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden bg-white border-[#e0d8c7] hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src="/london-japanese-garden.png"
                      alt="Kyoto Corner"
                      className="w-full h-full object-cover"
                      width="400"
                      height="300"
                      loading="lazy"
                      onError={(e) => (e.currentTarget.src = "/placeholder-1kaue.png")}
                    />
                    <div className="absolute top-2 right-2 bg-[#8b6e5c] text-white px-2 py-1 rounded text-xs font-medium">
                      Parks & Nature
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Tree className="h-4 w-4 text-[#8b6e5c]" />
                      <CardTitle className="font-serif text-xl text-[#3c2f27]">Kyoto Corner</CardTitle>
                    </div>
                    <CardDescription className="text-[#5a4a3f]">Holland Park</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5a4a3f]">
                      A tranquil Japanese garden hidden within Holland Park. Features an authentic koi pond and
                      traditional tea house open on weekends.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-[#e0d8c7] pt-4 text-sm text-[#8b6e5c]">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Enter through the north gate of Holland Park</span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="shopping" className="mt-6">
              {/* Shopping content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden bg-white border-[#e0d8c7] hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src="/vintage-record-shop.png"
                      alt="Vinyl Vault"
                      className="w-full h-full object-cover"
                      width="400"
                      height="300"
                      loading="lazy"
                      onError={(e) => {
                        console.log("Image failed to load:", e.currentTarget.alt)
                        e.currentTarget.src = "/placeholder-1kaue.png"
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-[#8b6e5c] text-white px-2 py-1 rounded text-xs font-medium">
                      Shopping
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4 text-[#8b6e5c]" />
                      <CardTitle className="font-serif text-xl text-[#3c2f27]">Vinyl Vault</CardTitle>
                    </div>
                    <CardDescription className="text-[#5a4a3f]">Hackney</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5a4a3f]">
                      A basement record shop with rare vinyl collections. The owner hosts listening parties every
                      Thursday evening with complimentary local craft beer.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-[#e0d8c7] pt-4 text-sm text-[#8b6e5c]">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Look for the blue door with a small vinyl sign</span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="culture" className="mt-6">
              {/* Culture content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden bg-white border-[#e0d8c7] hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src="/underground-art-gallery-neon.png"
                      alt="The Underground Gallery"
                      className="w-full h-full object-cover"
                      width="400"
                      height="300"
                    />
                    <div className="absolute top-2 right-2 bg-[#8b6e5c] text-white px-2 py-1 rounded text-xs font-medium">
                      Arts & Culture
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Camera className="h-4 w-4 text-[#8b6e5c]" />
                      <CardTitle className="font-serif text-xl text-[#3c2f27]">The Underground Gallery</CardTitle>
                    </div>
                    <CardDescription className="text-[#5a4a3f]">Shoreditch</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#5a4a3f]">
                      An art gallery in a former tube station. Features rotating exhibitions from emerging London
                      artists and late-night events on the first Friday of each month.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-[#e0d8c7] pt-4 text-sm text-[#8b6e5c]">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Look for the disused station entrance with a red light</span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="map" className="py-16 px-4 bg-[#e0d8c7]">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#3c2f27] text-center mb-2">Find Hidden Gems</h2>
          <p className="text-[#5a4a3f] text-center mb-12 max-w-2xl mx-auto">
            Explore our interactive map to discover all the hidden gems across London.
          </p>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border-4 border-white shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120642536509!3d51.52855824164916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1653308888619!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="London Hidden Gems Map"
                className="absolute inset-0"
                aria-label="Map of London showing hidden gems locations"
              ></iframe>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant="outline"
                className="bg-white text-[#8b6e5c] border-[#8b6e5c] hover:bg-[#8b6e5c] hover:text-white"
                aria-label="Filter by Food & Drink"
              >
                <Coffee className="h-4 w-4 mr-2" />
                Food & Drink
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[#8b6e5c] border-[#8b6e5c] hover:bg-[#8b6e5c] hover:text-white"
                aria-label="Filter by Parks & Nature"
              >
                <Tree className="h-4 w-4 mr-2" />
                Parks & Nature
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[#8b6e5c] border-[#8b6e5c] hover:bg-[#8b6e5c] hover:text-white"
                aria-label="Filter by Shopping"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Shopping
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[#8b6e5c] border-[#8b6e5c] hover:bg-[#8b6e5c] hover:text-white"
                aria-label="Filter by Arts & Culture"
              >
                <Camera className="h-4 w-4 mr-2" />
                Arts & Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* User Submission Section */}
      <section id="submit" className="py-16 px-4 bg-[#f8f5f0]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-[#3c2f27] text-center mb-2">Submit Your Hidden Gem</h2>
          <p className="text-[#5a4a3f] text-center mb-12 max-w-2xl mx-auto">
            Know a special spot that deserves to be shared? Tell us about your favorite hidden gem in London.
          </p>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#3c2f27]">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Smith" className="border-[#e0d8c7] focus-visible:ring-[#8b6e5c]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#3c2f27]">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="border-[#e0d8c7] focus-visible:ring-[#8b6e5c]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="place-name" className="text-sm font-medium text-[#3c2f27]">
                  Name of the Hidden Gem
                </label>
                <Input
                  id="place-name"
                  placeholder="e.g. The Secret Garden Café"
                  className="border-[#e0d8c7] focus-visible:ring-[#8b6e5c]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-[#3c2f27]">
                    Location/Address
                  </label>
                  <Input
                    id="location"
                    placeholder="123 Hidden Lane, London"
                    className="border-[#e0d8c7] focus-visible:ring-[#8b6e5c]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium text-[#3c2f27]">
                    Category
                  </label>
                  <Select>
                    <SelectTrigger id="category" className="border-[#e0d8c7] focus:ring-[#8b6e5c]">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="food">Food & Drink</SelectItem>
                      <SelectItem value="nature">Parks & Nature</SelectItem>
                      <SelectItem value="shopping">Shopping</SelectItem>
                      <SelectItem value="culture">Arts & Culture</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="why-special" className="text-sm font-medium text-[#3c2f27]">
                  Why is it a hidden gem?
                </label>
                <Textarea
                  id="why-special"
                  placeholder="Tell us what makes this place special and why it's not well-known..."
                  className="min-h-[120px] border-[#e0d8c7] focus-visible:ring-[#8b6e5c]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#3c2f27]">Upload a Photo (optional)</label>
                <div className="border-2 border-dashed border-[#e0d8c7] rounded-lg p-6 text-center hover:bg-[#f8f5f0] transition-colors cursor-pointer">
                  <Camera className="h-8 w-8 text-[#8b6e5c] mx-auto mb-2" />
                  <p className="text-sm text-[#5a4a3f]">Drag and drop an image here, or click to browse</p>
                  <p className="text-xs text-[#8b6e5c] mt-1">JPG, PNG or GIF • Max 5MB</p>
                  <Input type="file" accept="image/*" className="hidden" id="photo-upload" />
                </div>
              </div>

              <Button type="submit" className="w-full bg-[#8b6e5c] hover:bg-[#5a4a3f] text-white">
                Submit Hidden Gem
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 px-4 bg-[#3c2f27] text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <Mail className="h-12 w-12 mx-auto mb-4 text-[#e0d8c7]" />
          <h2 className="font-serif text-3xl font-bold mb-2">Get Weekly Hidden Gems in Your Inbox!</h2>
          <p className="mb-8 text-[#e0d8c7] max-w-md mx-auto">
            Subscribe to our newsletter and discover a new hidden gem every week. No spam, just London's best-kept
            secrets.
          </p>

          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-[#e0d8c7]"
                aria-label="Email address for newsletter"
              />
              <Button type="submit" className="bg-[#e0d8c7] text-[#3c2f27] hover:bg-white">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-[#e0d8c7]/70 mt-4">
              By subscribing, you agree to our{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
              . You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#2a211c] text-white/70">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-serif text-xl font-bold text-white mb-2">Local Hidden Gems</div>
              <p className="text-sm">Discover London's best-kept secrets</p>
            </div>

            <div className="flex gap-6">
              {/* About Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm hover:text-white">About</button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl font-bold text-[#3c2f27] text-center">
                      About Local Hidden Gems
                    </DialogTitle>
                  </DialogHeader>
                  <div className="prose prose-stone mx-auto mt-4">
                    <p className="text-[#5a4a3f] mb-4">
                      Local Hidden Gems was born from a passion for discovery and a love for London's lesser-known
                      treasures. Our mission is to uncover and share the unique, underrated spots that make this city
                      truly special.
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">Our Story</h3>
                    <p className="text-[#5a4a3f] mb-4">
                      Founded in 2023 by a group of London enthusiasts, Local Hidden Gems began as a small collection of
                      favorite spots shared among friends. What started as a personal list quickly grew into a
                      community-driven project to document London's most charming yet overlooked locations.
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">Our Mission</h3>
                    <p className="text-[#5a4a3f] mb-4">
                      We believe that the true character of London lies not just in its famous landmarks, but in its
                      hidden corners, family-run businesses, and secret spaces. Our goal is to celebrate these places,
                      support local businesses, and help both visitors and lifelong Londoners experience the city in new
                      ways.
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">Community-Driven</h3>
                    <p className="text-[#5a4a3f] mb-4">
                      Local Hidden Gems is powered by our community. We rely on submissions from people like you who
                      want to share their discoveries. Every gem on our site has been personally visited and verified by
                      our team to ensure it meets our criteria of being truly special and relatively unknown.
                    </p>

                    <div className="flex items-center justify-center mt-8 mb-4">
                      <img
                        src="/london-explorers.png"
                        alt="The Local Hidden Gems Team exploring Hackney"
                        className="rounded-lg max-w-full h-auto"
                        width="400"
                        height="250"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder-1kaue.png"
                          e.currentTarget.onerror = null
                        }}
                      />
                    </div>
                    <p className="text-sm text-center text-[#8b6e5c] italic">
                      The Local Hidden Gems Team exploring Hackney
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Contact Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm hover:text-white">Contact</button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl font-bold text-[#3c2f27] text-center">
                      Contact Us
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#3c2f27] mb-4">Get In Touch</h3>
                        <p className="text-[#5a4a3f] mb-6">
                          Have questions, suggestions, or just want to say hello? We'd love to hear from you! Fill out
                          the form or reach out to us directly.
                        </p>

                        <div className="space-y-4">
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-[#8b6e5c] mt-0.5 mr-3" />
                            <div>
                              <h4 className="font-medium text-[#3c2f27]">Address</h4>
                              <p className="text-[#5a4a3f]">123 Hidden Lane, Shoreditch, London EC2A 3BS</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Mail className="h-5 w-5 text-[#8b6e5c] mt-0.5 mr-3" />
                            <div>
                              <h4 className="font-medium text-[#3c2f27]">Email</h4>
                              <p className="text-[#5a4a3f]">hello@localhiddengems.com</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Coffee className="h-5 w-5 text-[#8b6e5c] mt-0.5 mr-3" />
                            <div>
                              <h4 className="font-medium text-[#3c2f27]">Meet Us</h4>
                              <p className="text-[#5a4a3f]">
                                We host monthly meetups at various hidden gems around London. Subscribe to our
                                newsletter for details!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <form className="space-y-4">
                          <div className="space-y-2">
                            <label htmlFor="contact-name" className="text-sm font-medium text-[#3c2f27]">
                              Your Name
                            </label>
                            <Input
                              id="contact-name"
                              placeholder="John Smith"
                              className="border-[#e0d8c7] focus-visible:ring-[#8b6e5c]"
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="contact-email" className="text-sm font-medium text-[#3c2f27]">
                              Your Email
                            </label>
                            <Input
                              id="contact-email"
                              type="email"
                              placeholder="john@example.com"
                              className="border-[#e0d8c7] focus-visible:ring-[#8b6e5c]"
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="contact-subject" className="text-sm font-medium text-[#3c2f27]">
                              Subject
                            </label>
                            <Input
                              id="contact-subject"
                              placeholder="e.g. Question about a hidden gem"
                              className="border-[#e0d8c7] focus-visible:ring-[#8b6e5c]"
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="contact-message" className="text-sm font-medium text-[#3c2f27]">
                              Message
                            </label>
                            <Textarea
                              id="contact-message"
                              placeholder="Your message..."
                              className="min-h-[120px] border-[#e0d8c7] focus-visible:ring-[#8b6e5c]"
                            />
                          </div>

                          <Button type="submit" className="w-full bg-[#8b6e5c] hover:bg-[#5a4a3f] text-white">
                            Send Message
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Privacy Policy Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm hover:text-white">Privacy Policy</button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl font-bold text-[#3c2f27] text-center">
                      Privacy Policy
                    </DialogTitle>
                  </DialogHeader>
                  <div className="prose prose-stone mx-auto mt-4">
                    <p className="text-[#5a4a3f] mb-4">
                      At Local Hidden Gems, we take your privacy seriously. This Privacy Policy explains how we collect,
                      use, and protect your personal information when you use our website.
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">Information We Collect</h3>
                    <p className="text-[#5a4a3f] mb-4">
                      We collect information you provide directly to us, such as when you create an account, subscribe
                      to our newsletter, submit a hidden gem, or contact us. This may include your name, email address,
                      and any other information you choose to provide.
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">
                      How We Use Your Information
                    </h3>
                    <p className="text-[#5a4a3f] mb-4">We use the information we collect to:</p>
                    <ul className="list-disc pl-6 text-[#5a4a3f] mb-4">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Send you technical notices, updates, and administrative messages</li>
                      <li>Respond to your comments, questions, and requests</li>
                      <li>Send you newsletters and marketing communications</li>
                      <li>Monitor and analyze trends, usage, and activities in connection with our website</li>
                    </ul>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">
                      Cookies and Similar Technologies
                    </h3>
                    <p className="text-[#5a4a3f] mb-4">
                      We use cookies and similar technologies to collect information about your browsing activities and
                      to distinguish you from other users of our website. This helps us provide you with a good
                      experience when you browse our website and allows us to improve our site.
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">Data Security</h3>
                    <p className="text-[#5a4a3f] mb-4">
                      We take reasonable measures to help protect information about you from loss, theft, misuse, and
                      unauthorized access, disclosure, alteration, and destruction.
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">
                      Changes to This Privacy Policy
                    </h3>
                    <p className="text-[#5a4a3f] mb-4">
                      We may update this privacy policy from time to time. We will notify you of any changes by posting
                      the new privacy policy on this page and updating the "Last Updated" date.
                    </p>

                    <p className="text-sm text-[#8b6e5c] mt-8">Last Updated: May 21, 2025</p>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Terms of Use Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm hover:text-white">Terms of Use</button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl font-bold text-[#3c2f27] text-center">
                      Terms of Use
                    </DialogTitle>
                  </DialogHeader>
                  <div className="prose prose-stone mx-auto mt-4">
                    <p className="text-[#5a4a3f] mb-4">
                      Welcome to Local Hidden Gems. By accessing or using our website, you agree to be bound by these
                      Terms of Use. Please read them carefully.
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">Use of Our Website</h3>
                    <p className="text-[#5a4a3f] mb-4">
                      You may use our website only for lawful purposes and in accordance with these Terms of Use. You
                      agree not to use our website:
                    </p>
                    <ul className="list-disc pl-6 text-[#5a4a3f] mb-4">
                      <li>
                        In any way that violates any applicable federal, state, local, or international law or
                        regulation
                      </li>
                      <li>
                        To transmit, or procure the sending of, any advertising or promotional material, including any
                        "junk mail," "chain letter," "spam," or any other similar solicitation
                      </li>
                      <li>
                        To impersonate or attempt to impersonate Local Hidden Gems, a Local Hidden Gems employee,
                        another user, or any other person or entity
                      </li>
                      <li>
                        To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the
                        website
                      </li>
                    </ul>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">User Contributions</h3>
                    <p className="text-[#5a4a3f] mb-4">
                      Our website may contain features that allow users to submit hidden gems, post comments, and
                      provide other content ("User Contributions"). All User Contributions must comply with the Content
                      Standards set out in these Terms of Use.
                    </p>
                    <p className="text-[#5a4a3f] mb-4">
                      By providing any User Contribution on our website, you grant us and our affiliates and service
                      providers, and each of their and our respective licensees, successors, and assigns the right to
                      use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any
                      such material.
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">Content Standards</h3>
                    <p className="text-[#5a4a3f] mb-4">User Contributions must:</p>
                    <ul className="list-disc pl-6 text-[#5a4a3f] mb-4">
                      <li>Be accurate (where they state facts)</li>
                      <li>Be genuinely held (where they state opinions)</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                    <p className="text-[#5a4a3f] mb-4">User Contributions must not:</p>
                    <ul className="list-disc pl-6 text-[#5a4a3f] mb-4">
                      <li>
                        Contain any material that is defamatory, obscene, indecent, abusive, offensive, harassing,
                        violent, hateful, inflammatory, or otherwise objectionable
                      </li>
                      <li>
                        Promote sexually explicit or pornographic material, violence, or discrimination based on race,
                        sex, religion, nationality, disability, sexual orientation, or age
                      </li>
                      <li>
                        Infringe any patent, trademark, trade secret, copyright, or other intellectual property or other
                        rights of any other person
                      </li>
                      <li>
                        Violate the legal rights of others or contain any material that could give rise to any civil or
                        criminal liability
                      </li>
                    </ul>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">
                      Intellectual Property Rights
                    </h3>
                    <p className="text-[#5a4a3f] mb-4">
                      The website and its entire contents, features, and functionality (including but not limited to all
                      information, software, text, displays, images, video, and audio, and the design, selection, and
                      arrangement thereof), are owned by Local Hidden Gems, its licensors, or other providers of such
                      material and are protected by copyright, trademark, patent, trade secret, and other intellectual
                      property or proprietary rights laws.
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#3c2f27] mt-6 mb-3">Changes to These Terms</h3>
                    <p className="text-[#5a4a3f] mb-4">
                      We may revise and update these Terms of Use from time to time in our sole discretion. All changes
                      are effective immediately when we post them.
                    </p>

                    <p className="text-sm text-[#8b6e5c] mt-8">Last Updated: May 21, 2025</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="border-t border-white/10 mt-6 pt-6 text-center text-xs">
            &copy; {new Date().getFullYear()} Local Hidden Gems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
