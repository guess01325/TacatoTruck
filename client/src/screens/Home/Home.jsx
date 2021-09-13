import "./Home.css";
// import { Layout } from "../../components";
import HomeTacos from "../../components/HomeTacos/HomeTacos";

function Home(props) {
  return (
    <>
      <Layout user={props.user}>
      <img src="" alt="taco table"></img>
      <h1>Our Mission</h1>
      <article>
        TaCato Truck was founded by four amazing full stack software engineers.
        Driving their success is their love for tacos, and their passion for
        partnering with the{" "}
        <a
          href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
          target="_blank"
        >
          ASPCA for cat adoption.
        </a>
      </article>
      <img src="" alt="cat"></img>
      <h1>The Cat's Mewow</h1>
      <HomeTacos />
     </Layout>
    </>
  );
}

export default Home;
