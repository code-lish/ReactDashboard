import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "../../components/ComponentToPrint ";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Button, Box } from "@mui/material";
import Header from "../../components/Header";
import { BackupTableRounded } from "@mui/icons-material";

const AddContainer = () => {
  const componentRef = useRef(null);
  return (
    <>
      <Header
        title="Adding Container"
        subtitle="Here add new container to system"
      />

      <form>
        <Grid container m="15px" gap="10px">
          <Grid sx={12} sm={5.5}>
            <TextField
              id="container-num"
              label="Container Number"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid sx={12} sm={5.5}>
            <TextField
              id="company"
              label="Company Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid sx={12} sm={5.5}>
            <TextField
              id="Cargo-Name"
              label="Cargo Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid sx={12} sm={5.5}>
            <TextField
              id="date"
              label="date"
              value="1/28/2023 09:35 Am"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid sx={12} sm={5.5}>
            <TextField
              id="truck-num"
              label="Truck Number"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </form>

      <Box m="15px">
        <Box>
          <ReactToPrint
            trigger={() => (
              <Button
                fullWidth
                // disabled={true}
                variant="contained"
                sx={{ fontWeight: "bold" }}
                endIcon={<BackupTableRounded />}
              >
                Print
              </Button>
            )}
            content={() => componentRef.current}
          />
          <ComponentToPrint ref={componentRef} />
        </Box>
      </Box>
    </>
  );
};

export default AddContainer;
