"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, Loader2, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  quoteSchema,
  type QuoteFormData,
  SERVICE_TYPE_OPTIONS,
  BUILDING_TYPE_OPTIONS,
} from "@/lib/validations/quote-schema"

const STEPS = [
  { title: "Vos coordonnées", desc: "Qui êtes-vous ?" },
  { title: "Votre chantier", desc: "Où se situe le projet ?" },
  { title: "Votre projet", desc: "Décrivez vos besoins" },
]

export function QuoteForm() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      serviceType: undefined,
      buildingType: undefined,
      surface: "",
      description: "",
      rgpd: undefined,
    },
  })

  const onSubmit = async (data: QuoteFormData) => {
    setLoading(true)
    // TODO: Replace with Server Action
    await new Promise((r) => setTimeout(r, 1500))
    console.log("Form submitted:", data)
    setLoading(false)
    setSubmitted(true)
  }

  const nextStep = async () => {
    const fieldsPerStep: (keyof QuoteFormData)[][] = [
      ["firstName", "lastName", "email", "phone"],
      ["address", "city", "postalCode"],
      ["serviceType", "buildingType", "description", "rgpd"],
    ]
    const valid = await form.trigger(fieldsPerStep[step])
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3">Demande envoyée !</h3>
        <p className="text-slate-600 max-w-md mx-auto">
          Merci pour votre demande de devis. Notre équipe vous contactera sous{" "}
          <strong>24h ouvrées</strong> pour convenir d'un rendez-vous de diagnostic gratuit.
        </p>
      </div>
    )
  }

  return (
    <Form {...form}>
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((s, i) => (
          <div key={i} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                i < step
                  ? "bg-green-500 text-white"
                  : i === step
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-slate-200 text-slate-500"
              }`}
            >
              {i < step ? "✓" : i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 ${i < step ? "bg-green-500" : "bg-slate-200"}`} />
            )}
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="font-bold text-slate-800 text-lg">{STEPS[step].title}</h3>
        <p className="text-slate-500 text-sm">{STEPS[step].desc}</p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        {/* Step 1 */}
        {step === 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom *</FormLabel>
                  <FormControl>
                    <Input placeholder="Jean" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom *</FormLabel>
                  <FormControl>
                    <Input placeholder="Dupont" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="jean@email.fr" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone *</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="06 12 34 56 78" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Adresse du chantier *</FormLabel>
                  <FormControl>
                    <Input placeholder="12 rue des Lilas" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ville *</FormLabel>
                  <FormControl>
                    <Input placeholder="Paris" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code postal *</FormLabel>
                  <FormControl>
                    <Input placeholder="75001" maxLength={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de prestation *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {SERVICE_TYPE_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="buildingType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de bâtiment *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {BUILDING_TYPE_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surface"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Surface approximative (m²)</FormLabel>
                  <FormControl>
                    <Input placeholder="ex: 120" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Description du projet *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Décrivez votre projet : état actuel de la toiture, travaux souhaités, contraintes particulières..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rgpd"
              render={({ field }) => (
                <FormItem className="sm:col-span-2 flex flex-row items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value === true}
                      onCheckedChange={(checked) => field.onChange(checked === true ? true : undefined)}
                      className="mt-0.5"
                    />
                  </FormControl>
                  <div className="space-y-1">
                    <FormLabel className="font-normal text-sm">
                      J&apos;accepte que mes données soient traitées par Couverture Pro dans le cadre de ma
                      demande de devis, conformément à la{" "}
                      <a href="/politique-confidentialite" className="text-[#1E3A8A] underline">
                        politique de confidentialité
                      </a>
                      . *
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-4 border-t border-slate-100">
          {step > 0 ? (
            <Button type="button" variant="outline" onClick={() => setStep((s) => s - 1)}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Précédent
            </Button>
          ) : (
            <div />
          )}
          {step < STEPS.length - 1 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="bg-[#1E3A8A] hover:bg-blue-900 text-white font-semibold"
            >
              Suivant <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={loading}
              className="bg-[#F97316] hover:bg-[#EA6B0A] text-white font-bold px-8"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Envoi en cours...
                </>
              ) : (
                "Recevoir mon devis gratuit"
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
