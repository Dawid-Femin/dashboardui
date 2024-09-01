import { FC, Fragment, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  Box,
  Typography,
  Button,
  Modal,
  Divider,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  width: `calc(100% - 30px)`,
  bgcolor: "background.paper",
  p: "32px",
  border: "1px solid #F2F2F2",
  boxShadow: "0px 4px 24px 0px #A6A6A633",
  borderRadius: "16px",
};

const CreateStructure: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition
          component="div"
          classNames="TabsAnimation"
          appear={true}
          timeout={1500}
          enter={false}
          exit={false}
        >
          <Box className="root">
            <Box sx={{ marginBottom: "32px" }}>BreadCrumbs</Box>
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "32px",
                letterSpacing: "13%",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              Tworzenie struktury
            </Typography>
            <Box
              sx={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 24px 0 #A6A6A633",
                borderRadius: "16px",
              }}
            >
              <Box
                sx={{
                  marginBottom: "16px",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                ICON
              </Box>
              <Typography
                sx={{
                  marginBottom: "8px",
                  fontSize: "16px",
                  lineHeight: "26px",
                  fontWeight: 700,
                }}
              >
                Stwórz strukturę dla firmy
              </Typography>
              <Typography
                sx={{
                  marginBottom: "16px",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "20px",
                }}
              >
                Struktura będzie obejmować wszystkich pracowników w Twojej
                firmie.
              </Typography>
              <Button
                sx={{
                  background: "#102B3F",
                  padding: "14px 24px",
                  borderRadius: "24px",
                  fontSize: "15px",
                  lineHeight: "23px",
                  color: "#FFFFFF",
                }}
                onClick={handleOpen}
              >
                Zaczynamy
              </Button>
            </Box>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{ padding: "0 15px" }}
            >
              <Box sx={style}>
                <Typography
                  sx={{
                    marginBottom: "24px",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#24272A",
                  }}
                  component="h2"
                >
                  Nowa struktura
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "24px",
                    fontWeight: 500,
                    fontSize: "17px",
                    lineHeight: "22px",
                  }}
                  component="h4"
                >
                  Struktura będzie widoczna dla wszystkich pracowników w Twojej
                  organizacji.
                </Typography>
                <Box sx={{ marginY: "24px" }}>
                  <Divider />
                </Box>
                <Box
                  sx={{ display: "flex", gap: "16px", marginBottom: "24px" }}
                >
                  <TextField
                    id="outlined-helperText"
                    label="Nazwa PL"
                    defaultValue="Benefit Systems"
                    helperText="Tak będzie się nazywał startowy element w Twojej strukturze."
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    id="outlined-helperText"
                    label="Nazwa EN"
                    defaultValue="Benefit Systems"
                    sx={{ width: "100%" }}
                  />
                </Box>
                <Typography
                  sx={{
                    marginBottom: "16px",
                    fontWeight: 800,
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#24272A",
                  }}
                >
                  AVATAR STRUKTURY:
                </Typography>
                <Box
                  sx={{
                    height: "150px",
                    width: "100%",
                    border: "1px dashed #C4C4C4",
                    borderRadius: "4px",
                    padding: "24px 16px",
                    gap: "8px",
                  }}
                >
                  Click to upload
                </Box>
                <Box sx={{ display: "flex", marginTop: "24px", gap: "16px" }}>
                  <Button
                    sx={{
                      width: "100%",
                      border: "1px solid #E5E5E5",
                      borderRadius: "5px",
                      height: "50px",
                      fontWeight: 700,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "#24272A",
                      textTransform: "none",
                    }}
                    onClick={handleClose}
                  >
                    Wróć
                  </Button>
                  <Button
                    sx={{
                      width: "100%",
                      border: "1px solid #00A1ED",
                      borderRadius: "5px",
                      height: "50px",
                      background: "#00A1ED",
                      fontWeight: 700,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "#FFFFFF",
                      textTransform: "none",
                    }}
                  >
                    Dalej
                  </Button>{" "}
                </Box>
              </Box>
            </Modal>
          </Box>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default CreateStructure;
