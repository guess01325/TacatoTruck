import "./Home.css";
import Layout from "../../components/Layout/Layout";
import HomeTacos from "../../components/HomeTacos/HomeTacos";

function Home(props) {
  return (
    <>
      <Layout user={props.user}>
        <img
          className="tacoBanner"
          src="https://res.cloudinary.com/dy6xpqkkj/image/upload/c_fill,h_250,w_1600/v1631595561/Tactato%20Truck/tacobanner.jpg"
          alt="taco table"
        ></img>
        <h1>Our Mission</h1>
        <article>
          TaCato Truck was founded by four amazing full stack software
          engineers. Driving their success is their love for tacos, and their
          passion for partnering with the{" "}
          <a
            href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
            target="_blank"
          >
            ASPCA for cat adoption.
          </a>
        </article>
        <img
          className="catInHat"
          src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/istockphoto-833450608-612x612-removebg-preview_ms3oez.png"
          alt="cat"
        ></img>
        <h1>The Cat's Mewow</h1>
        <HomeTacos />
      </Layout>
    </>
  );
}

export default Home;
