import "./Home.css";
import Layout from "../../components/Layout/Layout";
import HomeTacos from "../../components/HomeTacos/HomeTacos";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStylesGrid = makeStyles((theme) => ({
  gridRoot: {
    flexGrow: 1,
    margin: 32,
  },
  gridOurMission: {
    width: "50%",
    textAlign: "justify",
    alignContent: "center",
    minWidth: "300px",
  },
  gridMissionTitle: {
    textAlign: "center",
  },
  carousel: {
    width: "50%",
    textAlign: "center",
    minWidth: "300px",
  },
}));

function Home(props) {
  const classesGrid = useStylesGrid();
  return (
    <>
      <Layout user={props.user}>
        <img
          className="tacoBanner"
          src="https://res.cloudinary.com/dy6xpqkkj/image/upload/c_fill,h_250,w_1600/v1631595561/Tactato%20Truck/tacobanner.jpg"
          alt="taco table"
        ></img>
        <div className={classesGrid.gridRoot}>
          <Grid container spacing={3}>
            <Grid item m className={classesGrid.gridOurMission}>
              <div className="cat-mission">
                <img
                  className="catInHat"
                  src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/istockphoto-833450608-612x612-removebg-preview_ms3oez.png"
                  alt="cat"
                ></img>
                <h1 className="mewow">Our Mission</h1>
              </div>
              <Grid item m className={classesGrid.gridMissionTitle}>
                <article className="mission">
                  TaCato Truck was founded by four amazing full stack software
                  engineers. Driving their success is their love for tacos, and
                  their passion for partnering with the{" "}
                  <a
                    href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
                    target="_blank"
                  >
                    ASPCA for cat adoption.
                  </a>
                </article>
              </Grid>
            </Grid>
            <Grid item m className={classesGrid.carousel}>
              <h1 className="mewow">The Cat's Mewow</h1>
              <HomeTacos />
            </Grid>
          </Grid>
        </div>
      </Layout>
    </>
  );
}

export default Home;
