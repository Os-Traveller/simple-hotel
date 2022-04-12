import heroPic from "../../Resources/IMG/Hero.jpg";
import { Button } from "../../Components/UI/UI";
const Home = () => {
  return (
    // * hero
    <>
      <section className="bg-[#C5EAD9] mt-5">
        <div className="container mx-auto flex p-5 items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-mono font-bold mb-3">Don't Miss Our Daily Amazing Deals</h1>
            <p className="text-[#838383] font-mono text-xl mb-8">Save up to 60% off on your first order</p>
            <input className="py-1 px-4" type="text" placeholder="Enter Your Email Adress" />
            <Button className="bg-[#3BB77E] text-white rounded-none">Subscribe</Button>
          </div>
          <div className="w-1/2 rounded overflow-hidden">
            <img src={heroPic} alt="" />
          </div>
        </div>
      </section>

      <section>
        <h1>Explore more travel vacation rentals</h1>
      </section>
    </>
  );
};

export default Home;
