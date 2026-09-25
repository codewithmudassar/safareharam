export type PackageStatus = "draft" | "published";
export interface Package { id: string; slug: string; title: string; duration: number; nightsMakkah: number; nightsMadinah: number; price: number; previousPrice?: number; departure: string; airline: string; hotelMakkah: string; hotelMadinah: string; distanceMakkah: string; distanceMadinah: string; image: "makkah" | "madinah" | "hotel" | "transport"; featured: boolean; status: PackageStatus; tags: string[]; summary: string; inclusions: string[]; exclusions: string[]; documents: string[]; itinerary: { day: string; title: string; detail: string }[]; }
export interface Offer { id: string; title: string; description: string; badge: string; validUntil: string; active: boolean; }
export interface Inquiry { id: string; name: string; phone: string; packageTitle: string; travelers: number; status: "new" | "contacted" | "converted" | "closed"; createdAt: string; }
export interface Contact { id: string; name: string; email: string; phone: string; subject: string; message: string; status: "unread" | "read" | "resolved"; createdAt: string; }
export interface Testimonial { id: string; name: string; city: string; quote: string; rating: number; active: boolean; order: number; demo: true; }
export interface Faq { id: string; question: string; answer: string; category: string; active: boolean; order: number; }
export interface Settings { agencyName: string; phone: string; whatsapp: string; email: string; address: string; tagline: string; }
