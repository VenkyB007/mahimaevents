import { motion } from "framer-motion";

const stats = [
  { number: "250+", label: "Happy Clients", icon: "fas fa-users", color: "text-blue-500" },
  { number: "250+", label: "Events Planned", icon: "fas fa-calendar-check", color: "text-green-500" },
  { number: "100%", label: "Satisfaction Rate", icon: "fas fa-star", color: "text-yellow-500" },
  { number: "24/7", label: "Support", icon: "fas fa-headset", color: "text-purple-500" },
];

const expertise = [
  { skill: "Creative Planning", icon: "fas fa-lightbulb" },
  { skill: "Budget Management", icon: "fas fa-calculator" }, 
  { skill: "Vendor Coordination", icon: "fas fa-handshake" },
  { skill: "Day-of Execution", icon: "fas fa-tasks" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Event planner arranging decorations"
              className="rounded-2xl shadow-2xl w-full hover-lift"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Our Story</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 2 years of experience in event planning, we've had the privilege of creating
              magical moments for hundreds of families and businesses. Our passion lies in transforming
              your vision into reality, no matter how big or small.
            </p>
           
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <motion.i 
                    className={`${stat.icon} text-2xl ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  ></motion.i>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary/10 text-primary px-4 py-3 rounded-full font-medium flex items-center group hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <i className={`${item.icon} mr-2 group-hover:scale-110 transition-transform duration-300`}></i>
                  <span>{item.skill}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
