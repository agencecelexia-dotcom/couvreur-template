import type { CompanyInfo } from "@/types";

export const company: CompanyInfo = {
  name: "Toitures Prestige",
  legalName: "Toitures Prestige SARL",
  siret: "987 654 321 00045",
  address: {
    street: "12 Rue des Artisans",
    city: "Paris",
    postalCode: "75015",
    region: "Île-de-France",
    country: "France",
  },
  contact: {
    phone: "+33 1 45 67 89 10",
    email: "contact@toitures-prestige.fr",
    hours: "Lun-Ven: 7h30-18h00, Sam: 8h00-12h00",
  },
  social: {
    facebook: "https://facebook.com/toitures-prestige",
    instagram: "https://instagram.com/toitures.prestige",
    linkedin: "https://linkedin.com/company/toitures-prestige",
  },
  coordinates: {
    lat: 48.8421,
    lng: 2.2978,
  },
};
