import { useState } from "react";
import { ChevronDown, MapPin, HelpCircle, Users } from "lucide-react";

const ContactUsPage = () => {
  const [expandedCountries, setExpandedCountries] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCountry = (countryId: string) => {
    setExpandedCountries((prev) => ({
      ...prev,
      [countryId]: !prev[countryId],
    }));
  };

  const regions = [
    {
      name: "India",
      countries: [
        {
          id: "uk",
          name: "Location",
          flag: "",
          offices: [
            {
              city: "[City]",
              address: "[Your Address]",
              hasLocation: true,
            },
            {
              city: "Reading",
              address: "Sarthifx GLOBAL TRADING SOLUTIONS",
              hasLocation: true,
            },
          ],
        },
      ],
    },
    // Add more regions here
  ];

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact us</h1>
        <p className="text-lg md:text-xl mb-12 text-[var(--text-secondary)]">
          Got questions? Here's how to get answers.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-colors font-medium flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5" /> Visit our help centre
          </button>
          <button className="px-6 py-3 border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-colors font-medium flex items-center justify-center gap-2">
            <Users className="w-5 h-5" /> Ask Sarthifx community
          </button>
        </div>
      </section>

      {/* Office Locations */}
      <section className="pb-16 px-6 md:px-12 max-w-5xl mx-auto">
        {regions.map((region, regionIndex) => (
          <div key={regionIndex} className="mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
              {region.name}
            </h2>

            <div className="space-y-6">
              {region.countries.map((country) => (
                <div
                  key={country.id}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
                >
                  {/* Country Header */}
                  <button
                    onClick={() => toggleCountry(country.id)}
                    className="w-full flex items-center justify-between py-5 px-6 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{country.flag}</span>
                      <span className="text-lg md:text-xl font-semibold">
                        {country.name}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform ${
                        expandedCountries[country.id] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Office Locations */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      expandedCountries[country.id]
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 space-y-6">
                        {country.offices.map((office, officeIndex) => (
                          <div
                            key={officeIndex}
                            className="p-4 rounded-lg bg-[var(--bg-secondary)]"
                          >
                            <h3 className="text-lg font-bold mb-2">
                              {office.city}
                            </h3>
                            <p className="text-[var(--text-secondary)] mb-3">
                              {office.address}
                            </p>
                            {office.hasLocation && (
                              <button className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-blue-400 transition-colors font-medium">
                                <MapPin className="w-4 h-4" /> See location
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ContactUsPage;
