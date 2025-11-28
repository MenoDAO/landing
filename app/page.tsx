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
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    location: "",
    package: "Gold Membership - KES 700/mo (Recommended)",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const packages = [
    "Gold Membership - KES 700/mo (Recommended)",
    "Silver Membership - KES 500/mo",
    "Bronze Membership - KES 300/mo",
  ];

  const packageBenefits = {
    "Gold Membership - KES 700/mo (Recommended)": [
      "Unlimited Checkups (Bila Kikomo)",
      "Priority Pain Relief",
      "Full Cleaning & Polishing",
      "Emergency Filling Coverage",
    ],
    "Silver Membership - KES 500/mo": [
      "2 Checkups per Year",
      "Basic Cleaning",
      "Pain Relief Consultation",
    ],
    "Bronze Membership - KES 300/mo": [
      "1 Checkup per Year",
      "Basic Consultation",
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const benefits =
      packageBenefits[formData.package as keyof typeof packageBenefits] || [];
    const benefitsText = benefits
      .map((benefit, index) => `${index + 1}. ${benefit}`)
      .join("\n");

    const message = `Hello! I would like to join MenoDAO as a Founding Member.

*MEMBERSHIP APPLICATION*

*Full Name (Jina Kamili):*
${formData.fullName}

*Phone Number (M-Pesa):*
${formData.phoneNumber}

*Location (Eneo):*
${formData.location}

*Selected Package:*
${formData.package}

*Benefits:*
${benefitsText}

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254743178950?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="MenoDAO Logo"
                className="h-10 w-10 md:h-12 md:w-12"
                onError={(e) => {
                  e.currentTarget.src = "/logo.svg";
                }}
              />
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0F172A] text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 md:space-y-8">
            {/* Pre-Header */}
            <p className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
              COMING SOON TO MOMBASA & KWALE
            </p>

            {/* Headline */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-outfit">
                Quality Dental Care.
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent font-outfit">
                Powered by Community.
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join the first Community Health Membership that protects your
              smile and your pocket. No surprise bills. Just fair, affordable
              care for everyone.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-[#22C55E] hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg"
              >
                Join Founding Members
              </button>
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-blue-50 hover:bg-opacity-10 font-semibold rounded-lg transition-colors duration-200">
                How It Works
              </button>
            </div>

            {/* Secure Footer Text */}
            <p className="text-sm md:text-base text-gray-400 pt-4">
              🔒 Secure. Transparent. Community Owned.
            </p>
          </div>
        </div>
      </section>

      {/* Why MenoDAO Section */}
      <section className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-outfit">
              Why MenoDAO
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We are replacing the broken system of "pain and high costs" with a
              system of "prevention and care."
            </p>
          </div>

          {/* Three-Column Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Affordable Contributions */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Wallet className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-outfit">
                Affordable Contributions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Instead of paying KES 30,000 when you are in pain, you
                contribute a small amount monthly (like buying airtime). This
                pool protects you when you need it.
              </p>
            </div>

            {/* Card 2: Preventive Care (Orange Border) */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-[#F97316]">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <Syringe className="h-8 w-8 text-[#F97316]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-outfit">
                Preventive Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our membership focuses on catching problems early. We prioritize
                checkups and cleaning so you never have to lose a tooth
                unnecessarily.
              </p>
            </div>

            {/* Card 3: Community Owned */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-outfit">
                Community Owned
              </h3>
              <p className="text-gray-600 leading-relaxed">
                This isn't a big corporation. It is a cooperative. Members have
                a voice in how the funds are used and how the community grows.
              </p>
            </div>
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
            <p className="text-gray-400 text-center md:text-left">
              Community-led dental care for Kenya.
            </p>
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

      {/* Membership Form Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#F8FAFC] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-white rounded-t-lg border-t-4 border-[#3B82F6] p-6 md:p-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-outfit mb-2">
                    MenoDAO Membership
                  </h2>
                  <p className="text-base text-gray-600">
                    Join the community. Protect your smile.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white m-4 md:m-6 rounded-xl shadow-lg p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name (Jina Kamili)
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. John Kamau"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (M-Pesa)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. 0712345678"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Location Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location (Eneo)
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g. Ukunda, Kwale"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Package Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Your Package (Chagua Plan)
                  </label>
                  <div className="relative">
                    <Coins className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-10 py-3 bg-blue-50 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                    >
                      {packages.map((pkg) => (
                        <option key={pkg} value={pkg}>
                          {pkg}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Benefits Section */}
                {packageBenefits[
                  formData.package as keyof typeof packageBenefits
                ] && (
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-[#F97316] mr-2" />
                      <h3 className="text-lg font-bold text-gray-900">
                        {formData.package.includes("Gold")
                          ? "Gold Benefits:"
                          : formData.package.includes("Silver")
                          ? "Silver Benefits:"
                          : "Bronze Benefits:"}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {packageBenefits[
                        formData.package as keyof typeof packageBenefits
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#22C55E] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#22C55E] hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Submit Application via WhatsApp</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </button>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to the community rules. No payments
                  are required today.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
