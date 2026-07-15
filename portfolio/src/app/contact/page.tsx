import { ContactPageClient } from "./ContactPageClient";
import { site } from "@/lib/site";

export const metadata = {
  title: `Contact — ${site.name}`,
};

export default function ContactPage() {
  return <ContactPageClient />;
}
