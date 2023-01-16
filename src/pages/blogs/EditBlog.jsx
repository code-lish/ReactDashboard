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
import { useUpdateBlogMutation } from "../../features/blog/blogApiSlice";
import { selectBlogById } from "../../features/blog/blogApiSlice";
import { useSelector } from "react-redux";
import FlexBetween from "../../components/FlexBetween";
const EditBlog = ({ showModal, setShowModal, id }) => {
  const theme = useTheme();
  const blog = useSelector((state) => selectBlogById(state, id));
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [categories, setCategories] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const [updateBlog, { isLoading, isSuccess, isError, error }] =
    useUpdateBlogMutation();

  useEffect(() => {
    if (isSuccess) {
      setTitle("");
      setSlug("");
      setContent("");
      setExcerpt("");
      setCategories("");
      setStatus("");
      setImage("");
      setSelectedFile(undefined);
      setPreview(undefined);
    }

    if (blog) {
      setTitle(blog?.title?.fa);
      setSlug(blog?.slug);
      setContent(blog?.content?.fa);
      setExcerpt(blog?.excerpt?.fa);
      setImage(blog?.image);
      setCategories(blog?.categories);
      setStatus(blog?.status);
    }
  }, [isSuccess, blog]);

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

    const formData = new FormData()
    formData.append('title', title)
    formData.append('slug', slug)
    formData.append('content', content)
    formData.append('excerpt', excerpt)
    formData.append('image', selectedFile)
    formData.append('status', status)

    await updateBlog({ id, formData });
    setShowModal(false);
  };

  return (
    <div>
      <Dialog open={showModal === "edit"} onClose={handleClose} fullWidth>
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
              defaultValue={blog?.title?.fa}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="slug"
              label="slug"
              onChange={(e) => setSlug(e.target.value)}
              type="text"
              multiline
              defaultValue={blog?.slug}
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
            defaultValue={blog?.content?.fa}
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
            defaultValue={blog?.excerpt?.fa}
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
              defaultValue={blog?.categories}
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
              defaultValue={blog?.status}
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
              <img
                src={preview ? preview : image}
                width="120px"
                height="120px"
              />
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

export default EditBlog;
