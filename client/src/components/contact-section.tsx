import React, { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: "fas fa-phone-alt",
    title: "Call Us",
    value: "+918374313249",
    href: "tel:+918374313249",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: "fas fa-envelope",
    title: "Email Us",
    value: "mahimaevents7@gmail.com",
    href: "mailto:mahimaevents7@gmail.com",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Visit Us",
    value:
      "56/15/15 Sitharam nagar, road, Patamata, Vijayawada, Andhra Pradesh 520010",
    href: "https://www.google.com/maps/place/Mahima+balloon+decorations+vij+(mahima+events)/@16.4951128,80.6511634,17z/data=!3m1!4b1!4m6!3m5!1s0x3a35fb88e8cafb99:0x44d1341f5009bd8d!8m2!3d16.4951128!4d80.6537383!16s%2Fg%2F11ycmqykwf?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    icon: "fas fa-clock",
    title: "Business Hours",
    value: "Mon-Fri: 9AM-6PM\nSat-Sun: 10AM-4PM",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
];

const socialLinks = [
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/p/Mahima-events-100064986092460/",
  },
  {
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/mahima_events_?igsh=dXo0OTd5ZzlhbGd2",
  },
  {
    icon: "fab fa-youtube",
    href: "https://youtube.com/@mahimaballoondecorationsev9430?si=JVZUEDYabgKS9K6E",
  },
];

export default function ContactSection() {

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Let's Create <span className="gradient-text">Magic</span> Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to plan your dream event? Get in touch with us today and let's
            start bringing your vision to life!
          </p>
        </motion.div>

<div className="flex justify-center">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 w-3/4"
          >
            {/* Main Contact Card */}
            <div className="contact-card rounded-2xl p-8 text-white bg-primary relative overflow-hidden">
              <h3 className="font-playfair text-3xl font-semibold mb-6 relative z-10">
                Get in Touch
              </h3>
              <div className="space-y-6 relative z-10">
                {contactInfo.map((info, index) => {
                  const Wrapper = info.href ? 'a' : 'div';
                  const wrapperProps = info.href
                    ? { href: info.href, target: "_blank", rel: "noopener noreferrer" }
                    : {};

                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center space-x-4 group cursor-pointer"
                    >
                      <Wrapper {...wrapperProps} className="flex items-center space-x-4 w-full">
                        <motion.div
                          className="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                          whileHover={{ rotate: 5 }}
                        >
                          <i className={`${info.icon} text-xl text-white drop-shadow-sm`}></i>
                        </motion.div>
                        <div className="flex-1">
                          <div className="font-semibold text-lg flex items-center">
                            {info.title}
                            <motion.i
                              className="fas fa-arrow-right ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              initial={{ x: -10 }}
                              whileHover={{ x: 0 }}
                            ></motion.i>
                          </div>
                          <div className="opacity-90 whitespace-pre-line text-sm">
                            {info.value}
                          </div>
                        </div>
                      </Wrapper>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-semibold text-xl mb-6">Follow Our Journey</h4>
              <div className="flex space-x-4 mb-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.icon}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-600">
                See our latest events and behind-the-scenes moments!
              </p>
            </div>

            {/* Quick Response Card */}
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-bolt text-accent text-2xl mr-3"></i>
                <h4 className="font-semibold text-lg">Quick Response Guarantee</h4>
              </div>
              <p className="text-gray-600">
                We respond to all inquiries within 24 hours. For urgent requests,
                call us directly!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
