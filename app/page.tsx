import Feature from "./component/Feature";
import Hero from "./component/Hero";

export default function Home() {
   return (
      <div className="pt-12 bg-white sm:pb-8 lg:12">
         <Hero />
         <Feature />
      </div>
   );
}
