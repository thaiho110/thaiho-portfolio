import { Facebook, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { Description } from "@radix-ui/react-toast";
import { useRef, useState } from "react";
import emailJS from "@emailjs/browser"

export const Contact = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true);
        emailJS.sendForm("service_oz3d0vs", "template_qrteait", form.current, "aR9u1TblTO77o0VN8").then(() => {
            toast({
            title: "Message Sent",
            description: "Thank you for your message. I will get back to you soon!"
            });
            form.current.reset();
        },
        (error) => {
            toast({
            title: "Error Sending Message",
            description: `ERROR: ${error.text}`
            });
            form.current.reset();
        }
        )
            
        setIsSubmitting(false)
    }

    return (
        <section id="contact" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Get In Touch
                </h2>
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or just want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas. Let's connect and create something amazing together!
            </p>

            <div className="grid gird-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="flex flex-col text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="flex flex-col space-y-6 justify-center items-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"></Mail>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:thaiho500@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        thaiho500@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"></Phone>
                                </div>
                                <div>
                                    <h4 className="font-medium ml">Phone</h4>
                                    <a
                                        href="tel:+84908436754"
                                        className="ml-6 text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                    (+84) 908 436 754
                                    </a>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"></MapPin>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        Ho Chi Minh, Vietnam
                                    </a>
                                </div>
                            </div>


                            <div className="pt-8">
                                <h4 className="font-medium mb-4"> Connect with me</h4>
                                <div className="flex space-x-4 justify-center mb-2">
                                    <a href="www.linkedin.com/in/thaiho110" target="www.linkedin.com/in/thaiho110">
                                        <Linkedin/>
                                    </a>
                                    <a href="https://www.facebook.com/thai.ho.120785/" target="https://www.facebook.com/thai.ho.120785/">
                                        <Facebook/>
                                    </a>
                                    <a href="https://dev.to/thaiho110" target="https://dev.to/thaiho110">
                                        <div>
                                            <img src="src/assets/dev-rainbow.png" className="h-6 w-6"></img>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm mb-2 font-medium">Your Name</label>
                                <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className="w-full px-4 py-2 border border-secondary rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required
                                placeholder="Enter your name (e.g. Thai Ho)"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm mb-2 font-medium">Your Email</label>
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="w-full px-4 py-2 border border-secondary rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" required
                                placeholder="Enter your email (e.g. john@gmail.com)"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm mb-2 font-medium">Your Message</label>
                                <textarea 
                                id="message" 
                                name="message" 
                                className="w-full px-4 py-2 border border-secondary rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" required
                                placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                            )}>
                                {isSubmitting ? "Sending": "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
            </div>
            
        </section>
    );
}