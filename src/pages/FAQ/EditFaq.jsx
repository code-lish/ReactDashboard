import { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
} from "@mui/material";
import { useUpdateFaqMutation } from "../../features/faq/faqApiSlice";
import { selectFaqById } from "../../features/faq/faqApiSlice";
import { useSelector } from "react-redux";
const EditFaq = ({ showModal, setShowModal, id }) => {
  const theme = useTheme();
  const faq = useSelector((state) => selectFaqById(state, id));

  const [qusetion, setQuestion] = useState(
    faq?.question?.fa || faq?.question?.ps || faq?.question?.en
  );
  const [answer, setAnswer] = useState(
    faq?.answer?.fa || faq?.answer?.ps || faq?.answer?.en
  );

  const handleClose = () => {
    setShowModal(false);
  };

  const [updateFaq, { isLoading, isSuccess, isError, error }] =
    useUpdateFaqMutation();

  const onSubmit = async (e) => {
    await updateFaq({ id, qusetion, answer });
  };

  return (
    <div>
      <Dialog open={showModal} onClose={handleClose} fullWidth>
        <DialogTitle
          sx={{
            backgroundColor: theme.palette.bgColor[500],
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Edit Faq
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: theme.palette.bgColor[500] }}>
          <TextField
            autoFocus
            margin="dense"
            id="question"
            label="question"
            onChange={(e) => setQuestion(e.target.value)}
            type="text"
            multiline
            defaultValue={faq?.question?.fa}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="answer"
            label="answer"
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
            defaultValue={faq?.answer?.fa}
            multiline
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: theme.palette.bgColor[500] }}>
          <Button
            onClick={handleClose}
            sx={{ color: theme.palette.error.main }}
          >
            Cancel
          </Button>
          <Button onClick={onSubmit} sx={{ color: theme.palette.primary[500] }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditFaq;
