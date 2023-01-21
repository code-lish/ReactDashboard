import {
  Box,
  Container,
  Typography,
  useTheme,
  IconButton,
  InputBase,
  Badge,
  Divider,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import FlexBetween from "../../components/FlexBetween";
import profile from "../../assets/img/profile.jpeg";
import { Search } from "@mui/icons-material";
import Contact from "./Contact";
import ChatContact from "./ChatContact";
import Messages from "./Messages";
const Chat = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" sx={{ mt: "20px" }}>
      <Grid container height="75vh">
        <Grid
          className="scrollbar"
          xs={1.7}
          lg={3.5}
          sx={{
            backgroundColor: theme.palette.bgColor[1000],
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          <Box display="flex" alignItems="center" p="10px" height="70px">
            <Badge
              color="success"
              variant="dot"
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={profile}
                sx={{ cursor: "pointer" }}
              />
            </Badge>
            <Box
              display={"flex"}
              backgroundColor={theme.palette.light.main}
              borderRadius="20px"
              p="0.1rem 1rem"
              flexGrow={1}
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                  border: `1px solid ${theme.palette.black[1100]}`,
                },
                ml: "10px",
              }}
            >
              <IconButton>
                <Search sx={{ color: theme.palette.grey[800] }} />
              </IconButton>
              <InputBase placeholder="Search..." sx={{ ml: "5px" }} />
            </Box>
          </Box>
          <Divider />
          {/* Chats users and contacts */}
          <Box py="10px" height="70vh" sx={{ overflowY: "scroll" }}>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: "bold",
                py: "15px",
                px: "10px",
                fontSize: {
                  xs: "11px",
                  md: "20px",
                },
              }}
            >
              Chats
            </Typography>

            <ChatContact hasMessage={true} />
            <ChatContact hasMessage={false} />

            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: "bold",
                py: "15px",
                px: "10px",
                fontSize: {
                  xs: "11px",
                  md: "20px",
                },
              }}
            >
              Contacts
            </Typography>

            <Contact />
            <Contact />
          </Box>
        </Grid>

        {/* Messges */}
        <Grid
          className="scrollbar"
          xs={10}
          lg={8}
          sx={{
            backgroundColor: theme.palette.bgColor[600],
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
          flexGrow={1}
        >
          <Messages />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
