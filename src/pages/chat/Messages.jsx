import {
  Box,
  Badge,
  Avatar,
  Divider,
  IconButton,
  useTheme,
  Typography,
  InputBase,
} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import profile from "../../assets/img/profile.jpeg";
import { VideoCall, Call, KeyboardVoice, DoneAll } from "@mui/icons-material";
import Contact from "./Contact";

const Messages = () => {
  const theme = useTheme();
  return (
    <Box height="75vh" width="100%" sx={{ position: "relative" }}>
      <FlexBetween px="20px" height="70px">
        <Box
          display="flex"
          sx={{
            py: "10px",
          }}
        >
          <Badge
            color="warning"
            variant="dot"
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar alt="Remy Sharp" src={profile} />
          </Badge>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            sx={{ ml: "10px" }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", color: theme.palette.grey[900] }}
            >
              Sara Sussan
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: theme.palette.grey[800], fontWeight: "bold" }}
            >
              Web developer
            </Typography>
          </Box>
        </Box>
        <FlexBetween>
          <IconButton>
            <Call
              sx={{ color: theme.palette.primary.main, fontSize: "25px" }}
            />
          </IconButton>
          <IconButton>
            <VideoCall
              sx={{ color: theme.palette.primary.main, fontSize: "25px" }}
            />
          </IconButton>
        </FlexBetween>
      </FlexBetween>
      <Divider />

      <Box
        sx={{
          backgroundColor: theme.palette.bgColor[1000],
          mx: "10px",
          px: "10px",
          position: "absolute",
          bottom: "0",
          // left: "0",
          width: "95%",
          borderRadius: "20px",
          py: "5px",
        }}
      >
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            <InputBase
              placeholder="Type your message here..."
              sx={{ ml: "5px", fontWeight: "bold" }}
              fullWidth
            />
          </Box>
          <FlexBetween>
            <IconButton>
              <Call sx={{ color: theme.palette.grey[800] }} />
            </IconButton>
            <IconButton>
              <KeyboardVoice sx={{ color: theme.palette.grey[800] }} />
            </IconButton>
          </FlexBetween>
        </Box>
      </Box>

      <Box
        className="messages-container "
        display="flex"
        flexDirection="column"
        gap="10px"
        sx={{ p: "20px", overflowY: "scroll", height: "70vh" }}
      >
        {/* Messages sent to user */}
        <Box className="sender" alignSelf="end">
          <Box display="flex" alignItems="start">
            <Box
              display="flex"
              flexDirection="column"
              gap="10px"
              alignItems="end"
              sx={{ mr: "10px" }}
            >
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  p: "10px",
                  borderRadius: "5px",
                  borderTopRightRadius: "0",
                }}
              >
                This is my first message and you can see every things
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  p: "10px",
                  borderRadius: "5px",
                  borderTopRightRadius: "0",
                }}
              >
                This is my seconde message
              </Typography>
            </Box>
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 34, height: 34 }}
            />
          </Box>
          <Box
            display="flex"
            className="time"
            sx={{ float: "right", mr: "44px", mt: "10px" }}
          >
            <DoneAll color="success" sx={{ mr: "5px" }} />
            <Typography sx={{ color: theme.palette.grey[800] }}>
              12:45 Am
            </Typography>
          </Box>
        </Box>

        {/* Messages that reciev from user */}
        <Box className="receiver" alignSelf="start">
          <Box display="flex" flexDirection="row-reverse" alignItems="start">
            <Box
              display="flex"
              flexDirection="column"
              gap="10px"
              alignItems="start"
              sx={{ ml: "10px" }}
            >
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: theme.palette.bgColor[1000],
                  p: "10px",
                  borderRadius: "5px",
                  borderTopLeftRadius: "0",
                }}
              >
                This is my first message and you can see every things
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: theme.palette.bgColor[1000],
                  p: "10px",
                  borderRadius: "5px",
                  borderTopLeftRadius: "0",
                }}
              >
                This is my seconde message
              </Typography>
            </Box>
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 34, height: 34 }}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row-reverse"
            className="time"
            sx={{ float: "left", ml: "44px", mt: "10px" }}
          >
            <DoneAll color="success" sx={{ ml: "5px" }} />
            <Typography sx={{ color: theme.palette.grey[800] }}>
              12:45 Am
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Messages;
