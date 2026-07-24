'use client'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Mail, Phone, MessageSquare, User, AtSign, Send, CheckCircle2, X, Sparkles } from "lucide-react";
import { spaceGrotesk } from "@/lib/fonts";

const Contact = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_FORMSUBMIT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setShowSuccessModal(true);
                e.target.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section id="contact" className="reveal-section mb-24 pt-12 scroll-mt-20">
                {/* Section Header */}
                <div className="mb-10">
                    <h2 className={`${spaceGrotesk.className} text-center text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]`}>
                        Contact information
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto space-y-10">
                    {/* Top 3 Info Cards Grid matching the layout structure */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1: Location */}
                        <div className="bg-neutral-900/80 border border-white/5 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
                            <div className="flex items-center gap-3 text-blue-400">
                                <MapPin className="w-5 h-5" />
                                <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">Address Details</span>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Country:</span>
                                    <span className="text-white font-medium">Bangladesh</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400">City:</span>
                                    <span className="text-white font-medium">Sylhet</span>
                                </div>
                                <div className="flex justify-between pb-1">
                                    <span className="text-gray-400">Location:</span>
                                    <span className="text-white font-medium">Moulvibazar</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Channels */}
                        <div className="bg-neutral-900/80 border border-white/5 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
                            <div className="flex items-center gap-3 text-blue-400">
                                <Mail className="w-5 h-5" />
                                <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">Digital Channels</span>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Email:</span>
                                    <a href="mailto:ahmeddulal4211@gmail.com" className="text-blue-400 hover:underline font-medium text-xs truncate max-w-[160px]">ahmeddulal4211@gmail.com</a>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-gray-400">WhatsApp:</span>
                                    <a href="https://wa.me/8801825248883" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 font-medium text-xs">01825248883</a>
                                </div>
                                
                            </div>
                        </div>

                        {/* Card 3: Support / Phone */}
                        <div className="bg-neutral-900/80 border border-white/5 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
                            <div className="flex items-center gap-3 text-blue-400">
                                <Phone className="w-5 h-5" />
                                <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">Direct Contact</span>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Support:</span>
                                    <a href="tel:01825248883" className="text-white hover:text-blue-400 font-medium">01825248883</a>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Office:</span>
                                    <a href="tel:01825248883" className="text-white hover:text-blue-400 font-medium">01825248883</a>
                                </div>
                                <div className="flex justify-between pb-1">
                                    <span className="text-gray-400">Personal:</span>
                                    <a href="tel:01825248883" className="text-white hover:text-blue-400 font-medium">01825248883</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Get In Touch Form Section */}
                    <div>
                        <div className="mb-6">
                            <h3 className={`${spaceGrotesk.className} text-xl md:text-2xl font-bold tracking-tight text-white`}>
                                Get in touch
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit} className="bg-neutral-900/80 border border-white/5 p-5 md:p-8 md:p-10 rounded-2xl shadow-2xl space-y-6">
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New message from your Portfolio!" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            {/* Name Input Field */}
                            <div className="relative flex items-center bg-neutral-950 border border-white/10 rounded-lg overflow-hidden focus-within:border-blue-500 transition-colors">
                                <div className="px-4 py-4 text-gray-400 border-r border-white/10 bg-neutral-900/50">
                                    <User className="w-5 h-5" />
                                </div>
                                <input 
                                    type="text" 
                                    name="Name" 
                                    placeholder="Name" 
                                    required 
                                    className="w-full bg-transparent px-4 py-4 text-sm text-white focus:outline-none placeholder:text-gray-500" 
                                />
                            </div>

                            {/* Email Input Field */}
                            <div className="relative flex items-center bg-neutral-950 border border-white/10 rounded-lg overflow-hidden focus-within:border-blue-500 transition-colors">
                                <div className="px-4 py-4 text-gray-400 border-r border-white/10 bg-neutral-900/50">
                                    <AtSign className="w-5 h-5" />
                                </div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    required 
                                    className="w-full bg-transparent px-4 py-4 text-sm text-white focus:outline-none placeholder:text-gray-500" 
                                />
                            </div>

                            {/* Message Textarea Field */}
                            <div className="relative flex items-start bg-neutral-950 border border-white/10 rounded-lg overflow-hidden focus-within:border-blue-500 transition-colors">
                                <div className="px-4 py-4 text-gray-400 border-r border-white/10 bg-neutral-900/50">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <textarea 
                                    name="message" 
                                    placeholder="Message" 
                                    rows={5} 
                                    required 
                                    className="w-full bg-transparent px-4 py-4 text-sm text-white focus:outline-none resize-none placeholder:text-gray-500"
                                ></textarea>
                            </div>

                            {/* Submit Button in Blue color scheme */}
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-blue-500 hover:bg-blue-600 text-neutral-950 font-bold px-8 py-4 rounded-lg tracking-widest uppercase text-xs shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccessModal && (
                    <div className="fixed inset-0 z-[100000] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowSuccessModal(false)}
                            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 15 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 15 }}
                            className="relative bg-neutral-900 border border-white/10 p-8 md:p-10 rounded-[2.5rem] max-w-md w-full text-center shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500"></div>

                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/10"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="mb-6 relative">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 250 }}
                                    className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto border border-blue-500/20 text-blue-400"
                                >
                                    <CheckCircle2 className="w-10 h-10" />
                                </motion.div>
                            </div>

                            <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-white mb-3`}>
                                Message Sent Successfully!
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                Thank you for reaching out. I have received your message and will get back to you shortly.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setShowSuccessModal(false)}
                                className="w-full bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3.5 rounded-xl font-bold tracking-wider uppercase text-xs transition-colors"
                            >
                                Back to Portfolio
                            </motion.button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Contact;