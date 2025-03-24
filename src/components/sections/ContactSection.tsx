
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-secondary/50 dark:bg-gray-900/50">
      <div className="section-container">
        <p className="subtitle">Get In Touch</p>
        <h2 className="section-heading">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in-right">
            <p className="text-lg">
              I'm always open to new opportunities, collaborations, or just a friendly chat about technology. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <Card className="glass-card">
                <CardContent className="p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:jaiswalpratham@outlook.com" className="text-primary hover:underline">
                      jaiswalpratham@outlook.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+919999130394" className="text-primary hover:underline">
                      +91 999 913 0394
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      New Delhi, India
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://github.com/Pratham-Git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20"
                >
                  <Github className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratham-jaiswal-ab89a8277/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-left">
            <Card className="glass-card">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="bg-white/50 dark:bg-gray-800/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-white/50 dark:bg-gray-800/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                      rows={5}
                      className="bg-white/50 dark:bg-gray-800/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
