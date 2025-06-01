import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Vamshi Krishna",
    role: "Wedding Client",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    testimonial: "Absolutely amazing balloon decorations! I was blown away by the creativity, attention to detail, and vibrant color combinations. The setup transformed the entire space and made the event feel truly special. Everything was delivered on time and exactly as discussed. The team was professional, friendly, and clearly passionate about their work. Highly recommend for anyone looking to add a magical touch to their celebration!",
  },
  {
    name: "Velpula Jagadeesh",
    role: "Flower Decor client",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    testimonial: "Beautiful flower decorations that exceeded all my expectations! Every arrangement was fresh, vibrant, and perfectly matched the theme of our event. The team was professional, punctual, and truly understood our vision. The floral backdrop was a showstopper, and our guests couldn’t stop complimenting the setup. Highly recommended for weddings, parties, and any special occasion. Thank you for making our day so stunning!",
  },
  {
    name: "Durga Ponnaganti",
    role: "Birthday Party Client",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    testimonial: "I contacted Mahima Event's for my daughter's 1st birthday celebrations after checking google reviews. They responded very quickly and politely.Earlier i contacted another event organizers....i was shocked by their response. They responded very rudely , impatiently. Later I contacted Mahima Event's i  felt very happy by their response. They responded very politely and explained everything.They patiently listened all  my needs  And suggested me some more which are now trending and upgrade versions. The conversation went in very respectful manner. The way of  talking  made me comfirmed their events.They came up with 30k package which includes...,Butterfly theme  decoration, b'day cake , chocolate fountain, popcorn, tattoos ....Their output amazed me in that budget.Everyone (our guests) in the event complimented and praised for all the arrangements. Me and my family especially felt very happy and satisfied.They just made my daughter's 1st b'day memorable. My next approach for every event in my family is always Mahima Event's. I can strongly recommend to my family and friends for any occasion.Thank you Mahima Event's and their team for their fabulous work. 👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the families and businesses we've helped create magical moments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover-lift"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.i
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + i * 0.1, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    className="fas fa-star text-accent mr-1 cursor-pointer"
                  ></motion.i>
                ))}
              </div>

              <div className="relative mb-6">
                <motion.i
                  className="fas fa-quote-left text-3xl text-primary/20 absolute -top-2 -left-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                ></motion.i>
                <p className="text-gray-600 italic leading-relaxed pl-6">
                  {testimonial.testimonial}
                </p>
                <motion.i
                  className="fas fa-quote-right text-3xl text-primary/20 absolute -bottom-2 -right-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                ></motion.i>
              </div>

              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-primary/20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>



                  <motion.div
                    className="absolute -bottom-1 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-check text-white text-xs flex items-center justify-center h-full"></i>
                  </motion.div>
                </motion.div>
                <div>
                  <div className="font-semibold text-primary flex items-center">
                    {testimonial.name}
                    <i className="fas fa-certificate text-accent ml-2 text-sm"></i>
                  </div>
                  <div className="text-gray-500 text-sm flex items-center">
                    <i className="fas fa-user mr-1"></i>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
