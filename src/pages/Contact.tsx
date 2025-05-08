
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
      
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fcfaff]">
      <Navbar />
      
      <main className="container pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have questions about StyleMyFit? We'd love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-300 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    123 Fashion Street<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-brand-300 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    contact@stylemyfit.com<br />
                    support@stylemyfit.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-brand-300 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567<br />
                    Mon-Fri, 9am-5pm PST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t py-8">
        <div className="container">
          <div className="text-center">
            <h3 className="font-bold text-xl text-brand-500 mb-2">StyleMyFit</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Personalized fashion recommendations based on your unique body shape.
            </p>
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">FAQ</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">Contact Us</a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} StyleMyFit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
