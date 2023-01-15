import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useAddBlogMutation } from "../../features/blog/blogApiSlice";
import { selectBlogById } from "../../features/blog/blogApiSlice";
import { useSelector } from "react-redux";
import FlexBetween from "../../components/FlexBetween";
const CreateBlog = ({ showModal, setShowModal, id }) => {
  const theme = useTheme();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [categories, setCategories] = useState("");
  const [status, setStatus] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const [addBlog, { isLoading, isSuccess, isError, error }] =
    useAddBlogMutation();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedFile(undefined);
    setPreview(undefined);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // if (question.trim() && answer.trim()) {
    await addBlog({
      id,
      title,
      slug,
      content,
      excerpt,
      image: selectedFile,
      categories,
      status,
    });
    setShowModal(false);
    setSelectedFile(undefined);
    setPreview(undefined);

    // }
  };

  return (
    <div>
      <Dialog open={showModal === "create"} onClose={handleClose} fullWidth>
        <DialogTitle
          sx={{
            backgroundColor: theme.palette.bgColor[500],
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Edit Blog
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: theme.palette.bgColor[500] }}>
          <FlexBetween>
            <TextField
              sx={{ mr: "30px" }}
              autoFocus
              margin="dense"
              id="title"
              label="title"
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              multiline
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="slug"
              label="slug"
              type="text"
              multiline
              fullWidth
              variant="standard"
            />
          </FlexBetween>
          <TextField
            autoFocus
            margin="dense"
            id="content"
            label="content"
            type="text"
            onChange={(e) => setContent(e.target.value)}
            multiline
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="excertp"
            label="excertp"
            type="text"
            onChange={(e) => setExcerpt(e.target.value)}
            multiline
            fullWidth
            variant="standard"
          />
          <FlexBetween>
            <TextField
              sx={{ mr: "30px" }}
              autoFocus
              margin="dense"
              id="categories"
              label="categories"
              type="text"
              onChange={(e) => setCategories(e.target.value)}
              multiline
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="status"
              label="status"
              type="text"
              onChange={(e) => setStatus(e.target.value)}
              multiline
              fullWidth
              variant="standard"
            />
          </FlexBetween>
          <FlexBetween sx={{ mt: "20px" }}>
            <FlexBetween>
              <Typography sx={{ mr: "10px" }}>Choice your photo</Typography>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={onSelectFile}
                />
                <PhotoCamera />
              </IconButton>
            </FlexBetween>
            <Box>
              <img src={preview && preview} width="120px" height="120px" />
            </Box>
          </FlexBetween>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: theme.palette.bgColor[500] }}>
          <Button
            onClick={handleClose}
            sx={{ color: theme.palette.error.main }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={onSubmit}
            sx={{ color: theme.palette.primary[500] }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateBlog;
