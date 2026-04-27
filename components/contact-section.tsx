"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

const contactSchema = z.object({
  name:         z.string().min(1, "Name is required"),
  mobile:       z.string().min(10, "Enter a valid mobile number"),
  email:        z.string().email("Enter a valid email address"),
  businessType: z.string().optional(),
  message:      z.string().optional(),
});
type ContactForm = z.infer<typeof contactSchema>;

const WA_SVG = (
  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

export default function ContactSection() {
  const { toast } = useToast();
  const { t } = useTranslation();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", mobile: "", email: "", businessType: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast({ title: "Message received!", description: "We will get back to you soon." });
      form.reset();
    },
    onError: (err: Error) => {
      toast({ title: "Error", description: err.message || "Failed to send. Please try again.", variant: "destructive" });
    },
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.sections.contact}</h2>
          <p className="text-xl text-gray-600">{t.sections.contactSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.sendMessage}</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit((d) => mutation.mutate(d))} className="space-y-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.name} *</FormLabel>
                      <FormControl><Input placeholder={t.contact.namePlaceholder} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="mobile" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.mobile} *</FormLabel>
                      <FormControl><Input placeholder={t.contact.mobilePlaceholder} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.emailLabel}</FormLabel>
                      <FormControl><Input type="email" placeholder={t.contact.emailPlaceholder} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="businessType" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.businessType}</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value ?? ""}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder={t.contact.businessTypePlaceholder} /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.entries(t.contact.businessTypes).map(([key, value]) => (
                            <SelectItem key={key} value={key}>{value}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.message}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t.contact.messagePlaceholder} rows={4} {...field} value={field.value ?? ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700" size="lg" disabled={mutation.isPending}>
                    {mutation.isPending ? t.cta.sending : t.cta.sendMessage}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Info */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.contactInfo}</h3>
                <div className="space-y-6">
                  {[
                    { icon: <Phone className="w-6 h-6" />, label: t.contact.phone, lines: t.footer.phone },
                    { icon: <Mail  className="w-6 h-6" />, label: t.contact.email, lines: t.footer.email },
                    { icon: <MapPin className="w-6 h-6" />, label: t.contact.address, lines: t.footer.address },
                    { icon: <Clock className="w-6 h-6" />, label: t.contact.hours,   lines: t.contact.hoursValue },
                  ].map(({ icon, label, lines }) => (
                    <div key={label} className="flex items-start">
                      <div className="text-primary-600 mr-4 mt-1 flex-shrink-0">{icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{label}</h4>
                        {lines.map((l) => <p key={l} className="text-gray-600">{l}</p>)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.contact.preferWhatsApp}</h3>
                <p className="text-gray-600 mb-4">{t.contact.preferWhatsAppDesc}</p>
                <a
                  href="https://wa.me/917406296116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors inline-flex items-center"
                >
                  {WA_SVG}
                  {t.cta.chatWhatsApp}
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
