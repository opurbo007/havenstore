import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
   projectId: "6c1myscz",
   dataset: "production",
   useCdn: true,
   apiVersion: "2024-02-04",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
   return builder.image(source);
}
