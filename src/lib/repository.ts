import { packages as seedPackages, faqs as seedFaqs, offers as seedOffers, inquiries as seedInquiries, contacts as seedContacts } from './mock-data';
const clone=<T,>(value:T):T=>JSON.parse(JSON.stringify(value));
export const db={packages:clone(seedPackages),faqs:clone(seedFaqs),offers:clone(seedOffers),inquiries:clone(seedInquiries),contacts:clone(seedContacts)};
export const packageRepo={list:()=>db.packages.filter(x=>x.status==='published'),all:()=>db.packages,get:(slug:string)=>db.packages.find(x=>x.slug===slug),create:(value:any)=>{db.packages.unshift({...value,id:value.id||crypto.randomUUID()});return db.packages[0]},update:(id:string,value:any)=>{const i=db.packages.findIndex(x=>x.id===id);if(i<0)return null;db.packages[i]={...db.packages[i],...value};return db.packages[i]},remove:(id:string)=>{const i=db.packages.findIndex(x=>x.id===id);if(i<0)return false;db.packages.splice(i,1);return true}};
export const faqRepo={list:()=>db.faqs};
export const offerRepo={list:()=>db.offers.filter(x=>x.active)};
export const inquiryRepo={list:()=>db.inquiries,create:(value:any)=>{const item={...value,id:crypto.randomUUID(),status:'new',createdAt:new Date().toISOString().slice(0,10)};db.inquiries.unshift(item);return item}};
export const contactRepo={list:()=>db.contacts,create:(value:any)=>{const item={...value,id:crypto.randomUUID(),status:'unread',createdAt:new Date().toISOString().slice(0,10)};db.contacts.unshift(item);return item}};
