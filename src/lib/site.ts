// Single source for contact details used across the site.

// Location confirmed from the academy's Google Maps pin.
const city = "Nellore";
const geo = { lat: 14.4541036, lng: 79.9718088 };
const region = "Andhra Pradesh";

export const site = {
  name: "Spark Academy",
  founder: "Ziyauddin",
  email: "ziyauddinshaik7@gmail.com",
  phoneDisplay: "+91 7337006907",
  phoneHref: "tel:+917337006907",
  phoneE164: "+917337006907",
  whatsappNumber: "917337006907",
  instagram: "https://www.instagram.com/spark_academy_nlr?igsh=N2NnZWVkdXVrcWR5",
  city,
  region,
  location: `${city}, ${region}`,
  geo,
  mapQuery: `${geo.lat},${geo.lng}`, // exact pin for the embedded map
  mapsUrl: "https://maps.app.goo.gl/pfxLveuyzkLnt38p6", // the academy's own Google Maps link
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function mapsLink() {
  return site.mapsUrl
}

// Fired when a batch card is clicked so the enquiry form can preselect it.
export const SELECT_BATCH_EVENT = "spark:select-batch"
