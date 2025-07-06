import "./Home.css";
import HomeTacos from "../../components/HomeTacos/HomeTacos";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStylesGrid = makeStyles((theme) => ({
  gridRoot: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  gridOurMission: {
    flex: 1,
    minWidth: 300,
    textAlign: "justify",
  },
  gridMissionTitle: {
    textAlign: "center",
  },
  carousel: {
    flex: 1,
    minWidth: 300,
    textAlign: "center",
  },
}));

function Home(props) {
  const classesGrid = useStylesGrid();
  return (
    <>
      <img
        className="tacoBanner"
        src="https://res.cloudinary.com/dy6xpqkkj/image/upload/c_fill,h_250,w_1600/v1631595561/Tactato%20Truck/tacobanner.jpg"
        alt="taco table"
      />
      <div className={classesGrid.gridRoot}>
        <Grid container spacing={3}>
          <Grid item className={classesGrid.gridOurMission}>
            <div className="cat-mission">
              <img
                className="catInHat"
                src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/istockphoto-833450608-612x612-removebg-preview_ms3oez.png"
                alt="cat"
              />
              <h1 className="mewow">Our Mission</h1>
            </div>
            <Grid item className={classesGrid.gridMissionTitle}>
              <article className="mission">
                TaCato Truck was founded by four amazing full stack software
                engineers. Driving their success is their love for tacos, and
                their passion for partnering with the{" "}
                <a
                  href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ASPCA for cat adoption.
                </a>
              </article>
            </Grid>
          </Grid>
          <Grid item className={classesGrid.carousel}>
            <h1 className="mewow">The Cat's Mewow</h1>
            <HomeTacos />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;