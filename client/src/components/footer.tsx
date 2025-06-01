import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Wedding", href: "#services" },
      { label: "Birthday Parties", href: "#services" },
      { label: "Corporate Events", href: "#services" },
      { label: "House Warming", href: "#services" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" }
    ],
  },
  {
    title: "Contact Info",
    links: [
      { label: "+918374313249", href: "tel:+918374313249", icon: "fas fa-phone" },
      { label: "mahimaevents7@gmail.com", href: "mahimaevents7@gmail.com", icon: "fas fa-envelope" },
      { label: "56/15/15 Sitharam nagar, road, Patamata, Vijayawada, Andhra Pradesh 520010", href: "https://www.google.com/maps/place/Mahima+balloon+decorations+vij+(mahima+events)/@16.4951128,80.6511634,17z/data=!3m1!4b1!4m6!3m5!1s0x3a35fb88e8cafb99:0x44d1341f5009bd8d!8m2!3d16.4951128!4d80.6537383!16s%2Fg%2F11ycmqykwf?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D", icon: "fas fa-map-marker-alt" },
    ],
  },
];

const socialLinks = [
  { icon: "fab fa-facebook-f", href: "https://www.facebook.com/p/Mahima-events-100064986092460/" },
  { icon: "fab fa-instagram", href: "https://www.instagram.com/mahima_events_?igsh=dXo0OTd5ZzlhbGd2" },
  { icon: "fab fa-youtube", href: "https://youtube.com/@mahimaballoondecorationsev9430?si=JVZUEDYabgKS9K6E" },
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("#")) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="font-dancing text-3xl font-semibold mb-4 text-accent">
              Mahima events
            </div>
            <p className="text-purple-200 mb-4">
              Creating magical moments and unforgettable experiences for life's most important celebrations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="text-purple-200 hover:text-accent transition-colors duration-300"
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2 text-purple-200">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="hover:text-accent transition-colors duration-300 flex items-center"
                      >
                        {link.icon && <i className={`${link.icon} mr-2`}></i>}
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-accent transition-colors duration-300 flex items-center"
                      >
                        {link.icon && <i className={`${link.icon} mr-2`}></i>}
                        {link.label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-purple-300/30 mt-8 pt-8 text-center text-purple-200"
        >
          <p>
            &copy; {new Date().getFullYear()} Mahima Events. All rights reserved. | Made with ❤️ for creating magical moments
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
