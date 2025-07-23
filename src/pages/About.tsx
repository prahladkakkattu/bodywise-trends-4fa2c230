
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Top Strip */}
      <div className="h-2 bg-gradient-to-r from-brand-100 to-brand-200"></div>
      
      <main className="container pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          StyleMyFit is committed to revolutionizing how people shop for clothes online by eliminating the guesswork from sizing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              Our mission is to create a personalized shopping experience by matching your unique body measurements 
              with clothing that fits perfectly, reducing returns and increasing customer satisfaction.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-6">
              We envision a world where every online shopper can confidently purchase clothes 
              knowing they'll fit perfectly the first time, every time.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-muted-foreground mb-6">
            StyleMyFit was founded by a team of fashion industry experts and technology innovators 
            who recognized the need for better sizing solutions in online shopping.
          </p>
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

export default About;
