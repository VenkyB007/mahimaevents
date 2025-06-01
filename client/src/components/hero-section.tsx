import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1080"
          alt="Elegant wedding ceremony setup"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-4 bg-accent rounded-full opacity-60"
        />
      </div>
      <div className="absolute top-40 right-20">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-6 h-6 bg-white rounded-full opacity-40"
        />
      </div>
      <div className="absolute bottom-40 left-20">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="w-5 h-5 bg-secondary rounded-full opacity-50"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="floating-animation"
          >
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Creating <span className="gradient-text">Magical</span>
              <br />
              <span className="font-dancing text-accent">Moments</span> That Last Forever
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          >
            From intimate celebrations to grand occasions, we craft unforgettable experiences
            that reflect your unique story and style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover-lift transition-all duration-300 shadow-lg"
            >
              <motion.i 
                className="fas fa-calendar-check mr-3"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              ></motion.i>
              Plan Your Event
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary))", color: "white" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("portfolio")}
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <motion.i 
                className="fas fa-images mr-3"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              ></motion.i>
              View Portfolio
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-8 mt-12"
          >
            <motion.div 
              className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl"
              whileHover={{ y: -5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-3xl font-bold text-primary flex items-center justify-center"
              >
                <i className="fas fa-calendar-check mr-2 text-accent"></i>
                250+
              </motion.div>
              <div className="text-gray-600 font-medium">Events Planned</div>
            </motion.div>
            <motion.div 
              className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl"
              whileHover={{ y: -5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-3xl font-bold text-primary flex items-center justify-center"
              >
                <i className="fas fa-star mr-2 text-accent"></i>
                5★
              </motion.div>
              <div className="text-gray-600 font-medium">Client Rating</div>
            </motion.div>
            <motion.div 
              className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl"
              whileHover={{ y: -5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="text-3xl font-bold text-primary flex items-center justify-center"
              >
                <i className="fas fa-award mr-2 text-accent"></i>
                2+
              </motion.div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
        onClick={() => scrollToSection("services")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-chevron-down text-2xl text-primary"></i>
      </motion.div>
    </section>
  );
}
