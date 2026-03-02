"use client";

import {
  Wallet,
  Syringe,
  Users,
  CheckCircle2,
  MessageCircle,
  Instagram,
  Menu,
  User,
  Phone,
  MapPin,
  Coins,
  Star,
  X,
  UserPlus,
  Smartphone,
  Heart,
  Briefcase,
  Image as ImageIcon,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

// Gallery Image Component with Next.js Image optimization
function GalleryImage({ index }: { index: number }) {
  const [hasError, setHasError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageNumber = index + 1;

  if (hasError) {
    // Don't render placeholder if image fails - keeps grid clean
    return null;
  }

  return (
    <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group relative">
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
          <div
            className="w-full h-full animate-pulse bg-gradient-to-r from-transparent via-white/40 to-transparent"
            style={{ animation: "shimmer 1.5s infinite" }}
          />
        </div>
      )}
      <Image
        src={`/gallery/image-${imageNumber}.jpg`}
        alt={`Gallery image ${imageNumber}`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
        className={`object-cover transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onError={() => setHasError(true)}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
        quality={90}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQADAQEBAAAAAAAAAAAAAAABAgMAETH/2gAMAwEAAhEDEQA/ANB6f6ouNS1O2huLWGONySoRiTwODz+1J3frC8tbueCO0t2WKRkBZjk4JGT7+0pTqpEwMjmT1LP/2Q=="
      />
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isHowItWorksOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isHowItWorksOpen]);

  useEffect(() => {
    if (isHowItWorksOpen) {
      // Scroll to top of modal when it opens
      const timer = setTimeout(() => {
        const modalContainer = document.querySelector(
          "[data-how-it-works-modal]",
        );
        if (modalContainer) {
          modalContainer.scrollTop = 0;
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isHowItWorksOpen]);

  // Dynamically generate carousel slides from available images (up to 11)
  const carouselSlides: Array<{
    image: string;
    bgGradient: string;
    title: string;
    subtitle: string;
    description: string;
  }> = Array.from({ length: 11 }, (_, index) => {
    const slideNumber = index + 1;
    const gradients = [
      "from-blue-900 via-green-900 to-blue-800",
      "from-green-800 via-blue-800 to-purple-900",
      "from-purple-900 via-blue-900 to-teal-900",
      "from-blue-800 via-indigo-900 to-purple-900",
      "from-teal-900 via-green-800 to-blue-900",
      "from-indigo-900 via-purple-900 to-pink-900",
      "from-green-900 via-teal-900 to-cyan-900",
      "from-blue-900 via-indigo-900 to-purple-900",
      "from-purple-900 via-pink-900 to-red-900",
      "from-cyan-900 via-blue-900 to-indigo-900",
      "from-green-900 via-emerald-900 to-teal-900",
    ];

    // Default content for first 3 slides, generic for others
    if (slideNumber === 1) {
      return {
        image: `/carousel/slide-${slideNumber}.jpg`,
        bgGradient: gradients[0],
        title: "Quality Dental Care.",
        subtitle: "Powered by Community.",
        description:
          "Join the first Community Health Membership that protects your smile and your pocket.",
      };
    } else if (slideNumber === 2) {
      return {
        image: `/carousel/slide-${slideNumber}.jpg`,
        bgGradient: gradients[1],
        title: "Affordable Health for Everyone",
        subtitle: "No Surprise Bills. Just Fair Care.",
        description:
          "From KES 350/month, access quality dental care without the financial stress.",
      };
    } else if (slideNumber === 3) {
      return {
        image: `/carousel/slide-${slideNumber}.jpg`,
        bgGradient: gradients[2],
        title: "Community-Led, Member-Owned",
        subtitle: "Transparent. Secure. Trusted.",
        description:
          "Every shilling is accounted for. Your health data stays private. You're in control.",
      };
    } else {
      // Generic content for additional slides
      return {
        image: `/carousel/slide-${slideNumber}.jpg`,
        bgGradient: gradients[(slideNumber - 1) % gradients.length],
        title: "MenoDAO",
        subtitle: "Community Dental Care",
        description: "Building healthier communities, one smile at a time.",
      };
    }
  });

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length,
    );
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Transparent with backdrop blur */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center"
              >
                <img
                  src="/logo.png"
                  alt="MenoDAO Logo"
                  className={`h-10 w-10 md:h-12 md:w-12 transition-all duration-300 ${
                    !scrolled ? "drop-shadow-lg" : ""
                  }`}
                  style={
                    !scrolled
                      ? {
                          filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))",
                        }
                      : {}
                  }
                  onError={(e) => {
                    e.currentTarget.src = "/logo.svg";
                  }}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className={`transition-colors duration-200 font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white drop-shadow-lg [text-shadow:_1px_1px_3px_rgb(0_0_0_/_80%)] hover:text-blue-200"
                }`}
              >
                About
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className={`transition-colors duration-200 font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white drop-shadow-lg [text-shadow:_1px_1px_3px_rgb(0_0_0_/_80%)] hover:text-blue-200"
                }`}
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("gallery");
                }}
                className={`transition-colors duration-200 font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white drop-shadow-lg [text-shadow:_1px_1px_3px_rgb(0_0_0_/_80%)] hover:text-blue-200"
                }`}
              >
                Gallery
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className={`transition-colors duration-200 font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white drop-shadow-lg [text-shadow:_1px_1px_3px_rgb(0_0_0_/_80%)] hover:text-blue-200"
                }`}
              >
                Contact
              </a>
              <a
                href="https://app.menodao.org"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#22C55E] hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden transition-colors ${
                scrolled ? "text-gray-700" : "text-white drop-shadow-lg"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              className={`md:hidden py-4 animate-slideDown ${
                scrolled
                  ? "border-t border-gray-200 bg-white"
                  : "border-t border-white/20 bg-black/30 backdrop-blur-md"
              }`}
            >
              <nav className="flex flex-col space-y-4">
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                  className={`transition-colors duration-200 font-medium py-2 ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  About
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                  className={`transition-colors duration-200 font-medium py-2 ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  Services
                </a>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("gallery");
                  }}
                  className={`transition-colors duration-200 font-medium py-2 ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  Gallery
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className={`transition-colors duration-200 font-medium py-2 ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  Contact
                </a>
                <a
                  href="https://app.menodao.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-5 py-3 bg-[#22C55E] hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 text-center shadow-lg"
                >
                  Get Started
                </a>
              </nav>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Carousel Section - Fullscreen */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Carousel Container */}
        <div
          className="relative w-full h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image with Fallback Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index < 3} // Preload first 3 slides for smooth transitions
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQADAQEBAAAAAAAAAAAAAAABAgMAETH/2gAMAwEAAhEDEQA/ANB6f6ouNS1O2huLWGONySoRiTwODz+1J3frC8tbueCO0t2WKRkBZjk4JGT7+0pTqpEwMjmT1LP/2Q=="
                  onError={(e) => {
                    // Hide image if it fails to load, gradient background will show
                    (e.target as HTMLImageElement).style.opacity = "0";
                  }}
                />
                {/* Dark Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
                {/* Gradient Overlay for Better Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 h-full flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="text-center space-y-6 md:space-y-8">
                    {/* Pre-Header */}
                    <p className="text-sm md:text-base text-emerald-400 uppercase tracking-wider font-semibold drop-shadow-lg bg-emerald-900/40 px-4 py-2 rounded-full inline-block">
                      ✓ NOW SERVING MOMBASA & KWALE
                    </p>

                    {/* Headline with Text Shadow for Legibility */}
                    <div className="space-y-2 md:space-y-4">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-outfit text-white drop-shadow-2xl [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
                        Stop Paying KES 30,000
                      </h1>
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-outfit text-emerald-400 drop-shadow-2xl [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
                        When You're in Pain
                      </h1>
                    </div>

                    {/* Value Proposition with Pricing */}
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
                      <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-bold mb-4">
                        Pay as little as KES 350/month
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Get checkups, cleanings, and emergency care without
                        surprise bills. Join 500+ Kenyans who chose smart dental
                        care.
                      </p>

                      {/* Quick Benefits */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="flex items-center gap-2 text-gray-800">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm font-medium">
                            No Hidden Costs
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-800">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm font-medium">
                            Pay via M-Pesa
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-800">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm font-medium">
                            Cancel Anytime
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                      <a
                        href="https://app.menodao.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-10 py-5 bg-[#22C55E] hover:bg-green-600 text-white text-lg font-bold rounded-xl transition-all duration-200 shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 text-center"
                      >
                        Join Now - From KES 350/mo
                      </a>
                      <a
                        href="https://wa.me/254743178950?text=Hi%2C%20I%20want%20to%20learn%20more%20about%20MenoDAO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-gray-50 text-gray-900 text-lg font-bold rounded-xl transition-all duration-200 shadow-2xl hover:scale-105 text-center flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5 text-green-600" />
                        Join WhatsApp Community
                      </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-white/90 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>500+ Active Members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>100% Transparent</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wallet className="h-4 w-4" />
                        <span>Community Owned</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-12 h-3 bg-white shadow-lg"
                    : "w-3 h-3 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Compare Plans Section - NEW */}
      <section className="py-16 md:py-24 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-outfit mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              All plans include M-Pesa payments, instant activation, and no
              surprise bills. Pick what works for your family.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Bronze Plan */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-block bg-amber-100 px-4 py-1 rounded-full text-amber-800 text-sm font-bold mb-4">
                  STARTER
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bronze
                </h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  350
                  <span className="text-xl text-gray-600">/mo</span>
                </div>
                <p className="text-gray-600 text-sm">Best for singles</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      1 Checkup/Year
                    </p>
                    <p className="text-sm text-gray-600">
                      Catch problems early
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Basic Consultation
                    </p>
                    <p className="text-sm text-gray-600">
                      Talk to a dentist anytime
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Community Support
                    </p>
                    <p className="text-sm text-gray-600">
                      WhatsApp group access
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://app.menodao.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-center transition-all hover:scale-105"
              >
                Start with Bronze
              </a>
            </div>

            {/* Silver Plan */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-4 border-blue-400 hover:border-blue-500 transition-all hover:shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                MOST POPULAR
              </div>

              <div className="text-center mb-6 mt-4">
                <div className="inline-block bg-blue-100 px-4 py-1 rounded-full text-blue-800 text-sm font-bold mb-4">
                  RECOMMENDED
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Silver
                </h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  550
                  <span className="text-xl text-gray-600">/mo</span>
                </div>
                <p className="text-gray-600 text-sm">Best for families</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      2 Checkups/Year
                    </p>
                    <p className="text-sm text-gray-600">
                      Stay ahead of problems
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Basic Cleaning
                    </p>
                    <p className="text-sm text-gray-600">Keep teeth healthy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Pain Relief</p>
                    <p className="text-sm text-gray-600">
                      Emergency consultation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Priority Support
                    </p>
                    <p className="text-sm text-gray-600">Faster appointments</p>
                  </div>
                </div>
              </div>

              <a
                href="https://app.menodao.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center transition-all hover:scale-105 shadow-lg"
              >
                Join with Silver
              </a>
            </div>

            {/* Gold Plan */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-orange-300 hover:border-orange-400 transition-all hover:shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-block bg-orange-100 px-4 py-1 rounded-full text-orange-800 text-sm font-bold mb-4">
                  PREMIUM
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gold</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  700
                  <span className="text-xl text-gray-600">/mo</span>
                </div>
                <p className="text-gray-600 text-sm">Complete protection</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Unlimited Checkups
                    </p>
                    <p className="text-sm text-gray-600">
                      Come as often as needed
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Full Cleaning</p>
                    <p className="text-sm text-gray-600">
                      Deep clean + polishing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Priority Pain Relief
                    </p>
                    <p className="text-sm text-gray-600">
                      Same-day emergency care
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Filling Coverage
                    </p>
                    <p className="text-sm text-gray-600">
                      Emergency fillings included
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://app.menodao.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl text-center transition-all hover:scale-105"
              >
                Go Premium with Gold
              </a>
            </div>
          </div>

          {/* Real-World Example */}
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-emerald-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Here's What You Save
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Without MenoDAO
                  </h4>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    • Toothache emergency:{" "}
                    <span className="font-bold text-red-600">KES 5,000</span>
                  </p>
                  <p>
                    • Filling:{" "}
                    <span className="font-bold text-red-600">KES 8,000</span>
                  </p>
                  <p>
                    • Cleaning:{" "}
                    <span className="font-bold text-red-600">KES 3,000</span>
                  </p>
                  <p>
                    • Checkup:{" "}
                    <span className="font-bold text-red-600">KES 2,000</span>
                  </p>
                  <div className="border-t-2 border-gray-200 pt-3 mt-3">
                    <p className="text-xl font-bold text-red-600">
                      Total: KES 18,000+
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    With MenoDAO Gold
                  </h4>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    • Toothache emergency:{" "}
                    <span className="font-bold text-emerald-600">Included</span>
                  </p>
                  <p>
                    • Filling:{" "}
                    <span className="font-bold text-emerald-600">Included</span>
                  </p>
                  <p>
                    • Cleaning:{" "}
                    <span className="font-bold text-emerald-600">Included</span>
                  </p>
                  <p>
                    • Checkup:{" "}
                    <span className="font-bold text-emerald-600">
                      Unlimited
                    </span>
                  </p>
                  <div className="border-t-2 border-emerald-200 pt-3 mt-3">
                    <p className="text-xl font-bold text-emerald-600">
                      Total: KES 700/month
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      That's KES 8,400/year
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-lg font-bold text-gray-900 mt-8">
              Save over <span className="text-emerald-600">KES 9,600</span> in
              your first year!
            </p>
          </div>

          {/* Not Sure CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Not sure which plan is right for you?
            </p>
            <a
              href="https://wa.me/254743178950?text=Hi%2C%20I%20need%20help%20choosing%20a%20plan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why MenoDAO Section */}
      <section className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-outfit">
              Why Kenyans Choose MenoDAO
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We're changing how dental care works in Kenya. No more waiting
              until you're in pain to see a dentist.
            </p>
          </div>

          {/* Three-Column Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Pay Small, Small */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Wallet className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-outfit">
                Pay Small, Small
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Instead of paying KES 30,000 when you're in pain, you pay a
                little every month - like buying airtime. When you need care,
                it's already covered.
              </p>
              <p className="text-emerald-600 font-bold">
                From just KES 350/month
              </p>
            </div>

            {/* Card 2: Catch Problems Early */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-[#F97316]">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <Syringe className="h-8 w-8 text-[#F97316]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-outfit">
                Catch Problems Early
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Regular checkups mean we find small problems before they become
                big, expensive ones. You'll never lose a tooth unnecessarily.
              </p>
              <p className="text-orange-600 font-bold">
                Prevention saves money
              </p>
            </div>

            {/* Card 3: Your Community, Your Rules */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-outfit">
                Your Community, Your Rules
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                This isn't a big insurance company. It's a cooperative owned by
                members like you. You have a say in how things work.
              </p>
              <p className="text-blue-600 font-bold">100% community owned</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://app.menodao.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-[#22C55E] hover:bg-green-600 text-white text-lg font-bold rounded-xl transition-all hover:scale-105 shadow-xl"
            >
              Join 500+ Members Today
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Takes less than 2 minutes to sign up
            </p>
          </div>
        </div>
      </section>

      {/* Transparent Technology Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">
              TRANSPARENT TECHNOLOGY
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-outfit">
                Your Data. Your Money. Secure.
              </h2>

              {/* Feature List */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-[#22C55E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      Transparent Ledger
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every shilling contributed is accounted for using secure
                      digital technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-[#22C55E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      Data Privacy
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your medical records stay private between you and the
                      doctor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-[#22C55E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      Easy Payments
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Seamless integration with M-Pesa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 md:w-80 h-[500px] md:h-[600px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-3 md:p-4 shadow-2xl">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-gray-800 rounded-[2.5rem] p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Card with Blue Background */}
                    <div className="w-full bg-[#3B82F6] rounded-2xl p-6 md:p-8 text-white space-y-4">
                      <div className="text-sm md:text-base text-blue-100">
                        MenoDAO Balance
                      </div>
                      <div className="text-3xl md:text-4xl font-bold">
                        KES 500
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="bg-[#22C55E] text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
                          Active Member
                        </span>
                      </div>
                    </div>

                    {/* Floating Orange Button */}
                    <div className="absolute bottom-6 right-6 w-12 h-12 md:w-14 md:h-14 bg-[#F97316] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl md:text-3xl font-bold">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm inline-block mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-outfit mt-4">
              Building Healthier Communities, One Smile at a Time
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                MenoDAO is a community-led dental cooperative that transforms
                how people access and pay for dental care in Kenya. We believe
                everyone deserves quality dental health without the financial
                burden.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded on principles of transparency, affordability, and
                community ownership, we pool resources to make preventive and
                essential dental care accessible to all members.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-blue-50 rounded-lg p-4 flex-1 min-w-[150px]">
                  <div className="text-3xl font-bold text-blue-600">2025</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 flex-1 min-w-[150px]">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Community Owned</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 flex-1 min-w-[150px]">
                  <div className="text-3xl font-bold text-orange-600">
                    KES 300+
                  </div>
                  <div className="text-sm text-gray-600">Monthly Start</div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[400px] shadow-xl">
              <Image
                src="/gallery/image-1.jpg"
                alt="MenoDAO Community"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQADAQEBAAAAAAAAAAAAAAABAgMAETH/2gAMAwEAAhEDEQA/ANB6f6ouNS1O2huLWGONySoRiTwODz+1J3frC8tbueCO0t2WKRkBZjk4JGT7+0pTqpEwMjmT1LP/2Q=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm inline-block mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-outfit mt-4">
              Comprehensive Dental Care Packages
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All packages include
              transparent pricing and community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bronze Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-outfit mb-2">
                  Bronze
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  KES 350
                  <span className="text-lg text-gray-500 font-normal">/mo</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">1 Checkup per Year</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Basic Consultation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Community Access</span>
                </li>
              </ul>
            </div>

            {/* Silver Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-200">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-outfit mb-2">
                  Silver
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  KES 550
                  <span className="text-lg text-gray-500 font-normal">/mo</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">2 Checkups per Year</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Basic Cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">
                    Pain Relief Consultation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Priority Support</span>
                </li>
              </ul>
            </div>

            {/* Gold Package */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-orange-300">
              <div className="text-center mb-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-outfit mb-2">
                  Gold
                </h3>
                <div className="text-sm font-semibold text-orange-600 mb-2">
                  RECOMMENDED
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  KES 700
                  <span className="text-lg text-gray-500 font-normal">/mo</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Unlimited Checkups</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Priority Pain Relief</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">
                    Full Cleaning & Polishing
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">
                    Emergency Filling Coverage
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm inline-block mb-4">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-outfit mt-4">
              Our Community in Action
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              See how we're making dental care accessible to communities across
              Mombasa and Kwale.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Gallery images - Will try to load from /gallery/ directory (up to 16 images) */}
            {Array.from({ length: 16 }).map((_, index) => (
              <GalleryImage key={index} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm inline-block mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-outfit mt-4">
              Ready to Join?
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Choose how you want to get started. Both options are quick and
              easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Option 1: Sign Up Directly */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 shadow-xl border-2 border-emerald-300 hover:border-emerald-400 transition-all">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserPlus className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-outfit mb-4 text-center">
                Sign Up Now
              </h3>
              <p className="text-gray-700 mb-6 text-center leading-relaxed">
                Create your account, choose your plan, and start getting care
                today. Takes less than 2 minutes.
              </p>
              <a
                href="https://app.menodao.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#22C55E] hover:bg-green-600 text-white text-lg font-bold rounded-xl text-center transition-all hover:scale-105 shadow-lg"
              >
                Join MenoDAO
              </a>
              <p className="text-center text-sm text-gray-600 mt-4">
                ✓ Instant activation • ✓ Pay via M-Pesa
              </p>
            </div>

            {/* Option 2: Join WhatsApp First */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl border-2 border-green-300 hover:border-green-400 transition-all">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-outfit mb-4 text-center">
                Join WhatsApp Community
              </h3>
              <p className="text-gray-700 mb-6 text-center leading-relaxed">
                Have questions? Want to learn more? Join our WhatsApp group and
                chat with current members.
              </p>
              <a
                href="https://wa.me/254743178950?text=Hi%2C%20I%20want%20to%20join%20the%20MenoDAO%20WhatsApp%20community"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-xl text-center transition-all hover:scale-105 shadow-lg"
              >
                Join WhatsApp Group
              </a>
              <p className="text-center text-sm text-gray-600 mt-4">
                ✓ Ask questions • ✓ Meet members
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <a
              href="https://wa.me/254743178950"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center group"
            >
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-outfit mb-2">
                WhatsApp
              </h3>
              <p className="text-gray-600 text-sm mb-2">+254 743 178 950</p>
              <p className="text-xs text-gray-500">Quick responses</p>
            </a>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-outfit mb-2">
                Location
              </h3>
              <p className="text-gray-600 text-sm mb-2">Mombasa & Kwale</p>
              <p className="text-xs text-gray-500">Now serving</p>
            </div>

            {/* Email */}
            <a
              href="mailto:info@menodao.org"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center group"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Mail className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-outfit mb-2">
                Email
              </h3>
              <p className="text-gray-600 text-sm mb-2">info@menodao.org</p>
              <p className="text-xs text-gray-500">General inquiries</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="/logo.png"
                alt="MenoDAO Logo"
                className="h-10 w-10 md:h-12 md:w-12"
                onError={(e) => {
                  e.currentTarget.src = "/logo.svg";
                }}
              />
            </div>
            <p className="text-gray-400 text-center md:text-left flex-1 mx-4">
              Community-led dental care for Kenya.
            </p>
            <a
              href="https://app.menodao.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-3 bg-[#22C55E] hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg"
            >
              Launch App
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-start space-x-6 mb-8 md:mb-12">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
              aria-label="TikTok"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-gray-800 pt-8">
            <p className="text-sm md:text-base text-gray-400">
              © 2025 MenoDAO Cooperative. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* How It Works Modal */}
      {isHowItWorksOpen && (
        <div
          data-how-it-works-modal
          className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black bg-opacity-50 overflow-y-auto"
          onClick={() => setIsHowItWorksOpen(false)}
        >
          <div
            className="bg-slate-50 w-full max-w-5xl mt-8 md:mt-12 mb-8 md:mb-12 rounded-lg shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Decor (Subtle Swirls) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
              <div className="absolute top-10 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
              <div className="absolute bottom-10 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 pt-12 md:pt-16">
              {/* Close Button */}
              <button
                onClick={() => setIsHowItWorksOpen(false)}
                className="absolute top-8 right-8 md:top-12 md:right-12 text-gray-400 hover:text-gray-600 transition-colors z-20"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Header */}
              <div className="text-center mb-12 md:mb-16">
                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm inline-block">
                  Simple Process
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight font-outfit">
                  Your Journey to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                    Care-Free Health
                  </span>
                </h2>
                <p className="text-slate-500 mt-6 text-lg max-w-2xl mx-auto">
                  We removed the paperwork, the waiting lines, and the stress.
                  Here is how you join the family.
                </p>
              </div>

              {/* Steps */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 rounded-full -translate-x-1/2 md:translate-x-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 mb-12 md:mb-24">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 w-full md:w-1/2 md:pr-12 md:text-right pl-20 md:pl-0">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 font-outfit">
                        1. Sign Up on the App
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Visit <strong>app.menodao.org</strong> and sign up with
                        your phone number. Choose your preferred membership
                        package (Bronze, Silver, or Gold).
                      </p>
                    </div>

                    {/* Icon Circle */}
                    <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center -translate-x-0 md:-translate-x-1/2 shadow-xl shadow-blue-500/20 z-20">
                      <UserPlus className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1 w-full md:w-1/2 md:pl-12 hidden md:block"></div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 mb-12 md:mb-24">
                  <div className="flex flex-col md:flex-row-reverse items-center">
                    <div className="flex-1 w-full md:w-1/2 md:pl-12 md:text-left pl-20 md:pl-0">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 font-outfit">
                        2. Make Your Payment
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Complete your registration by paying your monthly
                        contribution via <strong>M-Pesa</strong>. Your account
                        activates instantly once payment is confirmed.
                      </p>
                    </div>

                    {/* Icon Circle */}
                    <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-white border-4 border-green-500 rounded-full flex items-center justify-center -translate-x-0 md:-translate-x-1/2 shadow-xl shadow-green-500/20 z-20">
                      <Smartphone className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1 w-full md:w-1/2 md:pr-12 hidden md:block"></div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 w-full md:w-1/2 md:pr-12 md:text-right pl-20 md:pl-0">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 font-outfit">
                        3. Access Quality Care
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Visit any partner clinic. Show your digital membership
                        card. Get treated according to your package benefits.{" "}
                        <br />
                        <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded-md mt-2 inline-block">
                          No surprise bills. Just care.
                        </span>
                      </p>
                    </div>

                    {/* Icon Circle */}
                    <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 border-4 border-white rounded-full flex items-center justify-center -translate-x-0 md:-translate-x-1/2 shadow-xl shadow-blue-900/30 z-20">
                      <Heart className="h-7 w-7 text-white animate-pulse" />
                    </div>
                    <div className="flex-1 w-full md:w-1/2 md:pl-12 hidden md:block"></div>
                  </div>
                </div>
              </div>

              {/* Get Started Button */}
              <div className="text-center mt-12 md:mt-16">
                <a
                  href="https://app.menodao.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsHowItWorksOpen(false)}
                  className="inline-block px-8 py-4 bg-[#22C55E] hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg text-lg"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
