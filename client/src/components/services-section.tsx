import { motion } from "framer-motion";
const services = [
  {
    title: "Wedding",
    icon: "fas fa-heart",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "From intimate ceremonies to grand celebrations, we create your perfect wedding day.",
    features: ["Engagement", "Mehandhi", "Haldhi Ceremony", "Sangeeth", "Reception"],
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  {
    title: "Birthday Parties",
    icon: "fas fa-birthday-cake",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "Celebrate life’s milestones with themed decorations and joyful vibes for all ages.",
    features: ["Custom Decorations", "Baby Boy/Girl", "Baby Shower", "Pre Birthday Shoot"],
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    title: "Ritual Ceremonies",
    icon: "fas fa-building",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "Celebrate traditional milestones with grace, color, and heartfelt customs.",
    features: ["Half-Saree Ceremony", "Dhothi Ceremony"],
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "House Warming",
    icon: "fas fa-home",
    image: "https://media.istockphoto.com/id/1141907178/photo/beautiful-photo-from-india-of-pooja-thaali-kept-ready-as-an-offering-to-god-for-traditional.webp?a=1&b=1&s=612x612&w=0&k=20&c=I4S7lbmoDIR3dIpsKA1uwrFaL5t9n3i1z56nIMBAA6E=",
    description: "Create warm and welcoming memories as you celebrate a fresh start in your new home.",
    features: ["Home Decoration", "Welcome Ceremonies"],
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    title: "Others",
    icon: "fas fa-home",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "From business gatherings to casual get-togethers, we make every event special and seamless.",
    features: ["Corporate Events", "Kitty Parties"],
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
];


export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating extraordinary experiences for life's most important moments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="service-card rounded-2xl p-8 text-center hover-lift bg-white shadow-lg"
            >
              <div className="relative mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <div
                  className="absolute -bottom-6 origin-center left-1/2 w-14 h-14 -translate-x-1/2 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl"
                >
                  <motion.i
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    className={`${service.icon} text-white text-xl drop-shadow-sm`}
                  ></motion.i>
                </div>
              </div>

              <h3 className="font-playfair text-2xl font-semibold mb-4 mt-6">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="text-sm text-gray-600 text-left space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center group cursor-pointer"
                  >
                    <motion.i
                      className="fas fa-check-circle text-accent mr-3 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                    ></motion.i>
                    <span className="group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
