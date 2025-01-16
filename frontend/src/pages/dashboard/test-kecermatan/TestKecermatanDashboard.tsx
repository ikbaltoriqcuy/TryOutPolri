import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
  Button,
  Box,
  IconButton,
  Typography,
  Link,
  Paper,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import {
  getAllExercises,
  Exercise,
  ExerciseResponse,
} from "../../../api/execersie.api";
import { getCache, CACHE_KEY } from "../../../cache/CacheUtils";
import { ApiResponse, ApiResponseError } from "../../../api/response";
import { useNavigate } from "react-router-dom";
import Loading from "../../utils/LoadingBackdrop";
import ErrorAlert from "../../utils/DialogError";
import {
  getExercisesLogs,
  updateExerciseLogs,
  deleteExercise
} from "../../../api/execersie.api"; 

const answerSymbol = [
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
];

const TestKecermatanDashboard: React.FC = (onStartTest) => {
  const cache = getCache(CACHE_KEY);
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorShow, setIsErrorShow] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  //Quota Dialog
  const [isDialogQuotaOpen, setIsDialogQuotaOpen] = useState(false);

  const handleQuotaOpenDialog = () => {
    setIsDialogQuotaOpen(true);
  };

  const handleQuotaCloseDialog = () => {
    setIsDialogQuotaOpen(false);
  };

  const handleQuotaUpgradePlan = () => {
    setIsDialogQuotaOpen(false);
    navigate("/dashboard/payment");
  };
  //

  //Packet End Dialog
  const [isDialogPacketEndOpen, setIsDialogPacketEndOpen] = useState(false);

  const handlePacketEndOpenDialog = () => {
    setIsDialogQuotaOpen(true);
  };

  const handlePacketEndCloseDialog = () => {
    setIsDialogQuotaOpen(false);
  };

  const handlePacketEndUpgradePlan = () => {
    setIsDialogQuotaOpen(false);
    navigate("/dashboard/payment");
  };
  //

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const [openDialogConfirm, setOpenDialogConfirm] = useState(false);
  const [selectedExerciseId, setSelectedExerciseId] = useState<number | null>(null);

  const handleOpenDialogConfirm = (id: number) => {
    setLoading(true);
    setSelectedExerciseId(id);
    setOpenDialogConfirm(true);
  };

  const handleCloseDialogConfirm = () => {
    setOpenDialogConfirm(false);
    setSelectedExerciseId(null);
  };


  const handleDialogOpen = async (idExercise: number) => {
    setLoading(true);
    try {
        const logs = await getExercisesLogs(Number(idExercise));
        setIsErrorShow(false);
        logs.data.map((log, index) => {
          const charArray = log.question.split("");

          answerSymbol[index].id_logs = log.log_id;
          answerSymbol[index].totalAnswer = log.total_answer;
          answerSymbol[index].totalCorrect = log.total_correct;
          answerSymbol[index].totalIncorrect = log.total_incorrect;
        });
        setOpenDialog(true);
    } catch (error) {
      console.error("Error fetching exercise logs:", error);
      setErrorMessage("Error fetching exercise logs , please reload");
      setIsErrorShow(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    await fetchExercises(value);
  };

  const handleDelete = () => {
    if (selectedExerciseId !== null) {
        deletedExercises(selectedExerciseId)
    }
  };

  const fetchExercises = async (page: number) => {
    try {
      setIsErrorShow(false);
      const response = await getAllExercises(page, cache?.email as string);
      if (response.status === 200) {
        setExercises(response.data.exercises);
        setTotalPages(response.data.totalPages);
      } else {
        console.error("Failed to fetch exercises");
      }
    } catch (error) {
      setErrorMessage("Error fetching exercise , please reload");
      setIsErrorShow(true);
    } finally {
      setLoading(false);
    }
  };

  const deletedExercises = async (id_course: number) => {
    try {
      setIsErrorShow(false);
      const response = await deleteExercise(id_course);
      if (response.status === 200) {
        setExercises((prevExercises) => prevExercises.filter((exercise) => exercise.exercise_id !== id_course));
      } else {
        console.error("Failed to delete exercises");
      }
    } catch (error) {
      setErrorMessage("Error fetching delete exercise , please reload");
      setIsErrorShow(true);
    } finally {
      setLoading(false);
      handleCloseDialogConfirm();
    }
  };


  useEffect(() => {
    const delayFetch = setTimeout(() => {
      setLoading(true)
      fetchExercises(page);
    }, 500);

    return () => clearTimeout(delayFetch); // Cleanup timeout if `page` changes
  }, [page]);

  return (
    <div>
       <QuotaWarningDialog
        open={isDialogQuotaOpen}
        onClose={handleQuotaCloseDialog}
        onUpgrade={handleQuotaUpgradePlan}
      />

      <PacketEndWarningDialog
        open={isDialogPacketEndOpen}
        onClose={handlePacketEndCloseDialog}
        onUpgrade={handlePacketEndUpgradePlan}
      />
      
    <ConfirmDialog
        open={openDialogConfirm}
        onClose={handleCloseDialogConfirm}
        onConfirm={handleDelete}
        title="Delete Exercise"
        description="Apakah kamu akan menghapus exercise ini?"
      />
      <ErrorAlert
        isOpen={isErrorShow}
        message={errorMessage}
        onClose={(error) => {
          setIsErrorShow(error);
        }}
      />
      <Loading isShow={loading} />
      <Box
        sx={{
          width: "80vw",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "24px",
          margin: 0,
          background: "white",
        }}
      >
        <HasilTesKecermatanDialog
          open={openDialog}
          onClose={handleDialogClose}
        />
        <Typography variant="h6" fontWeight="bold" sx={{ textAlign: "center" }}>
          Test Kecermatan
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <Link href="/dashboard/test_kecermatan/add">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#f1db25", boxShadow: "none" }}
            >
              Buat Soal
            </Button>
          </Link>
        </Box>

        <TableContainer>
          <Table sx={{ "& .MuiTableCell-root": { borderBottom: "none" } }}>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Nama Test</TableCell>
                <TableCell align="center">Start Test</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exercises.map((exercise, index) => (
                <TableRow
                  key={exercise.exercise_id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                  }}
                >
                  <TableCell>{index + 1 + (page - 1) * 10}</TableCell>
                  <TableCell>{exercise.exercise_name}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        const nowInMillis = new Date().getTime();

                        const dateString = "2024-12-01 21:33:32.326";
                        const date = new Date(dateString);
                        const datePurchasedMillis = date.getTime();
                        const daysSincePurchase = nowInMillis - datePurchasedMillis;

                        // Check if the packet has expired (30 days in milliseconds)
                        if (daysSincePurchase > 30 * 24 * 60 * 60 * 1000) {
                          handlePacketEndOpenDialog();
                          return;
                        }
                        if ((cache?.current_quota || 0) <= 0) {
                          handleQuotaOpenDialog();
                          return
                        } 

                        navigate(`/dashboard/test_symbol/${exercise.exercise_id}`);

                      }}
                      sx={{ color: "#1976d2", borderColor: "#1976d2" }}
                    >
                      Start Test
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="primary"
                      aria-label="view stats"
                      onClick={()=> handleDialogOpen(exercise.exercise_id)}
                    >
                      <InsertChartIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={()=> handleOpenDialogConfirm(exercise.exercise_id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          sx={{ padding: "16px", display: "flex", justifyContent: "center" }}
        />
      </Box>
    </div>
  );
};

interface HasilTesKecermatanDialogProps {
  open: boolean;
  onClose: () => void;
}

const HasilTesKecermatanDialog: React.FC<HasilTesKecermatanDialogProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Detail Hasil Tes Kecermatan</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <CheckCircleIcon sx={{ fontSize: 50, color: "green" }} />
        </Box>
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Nilai yang tampil merupakan hasil dari jumlah soal yang terjawab, dan
          bukan merupakan bobot penilaian seperti saat tes sesungguhnya.
        </Typography>

        <Typography variant="h6" mt={4} fontWeight="bold">
          Hasil Penilaian
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2, mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Kolom</TableCell>
                <TableCell>Soal Terjawab</TableCell>
                <TableCell>Benar</TableCell>
                <TableCell>Salah</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {answerSymbol.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.totalAnswer} soal terjawab</TableCell>
                  <TableCell>{row.totalCorrect} benar</TableCell>
                  <TableCell>{row.totalCorrect} salah</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <BarChart
          xAxis={[{ data: columns }]}
          series={[
            { data: answeredData, label: "Soal Terjawab", color: "#4D90FE" },
            { data: correctData, label: "Soal Benar", color: "#79D70F" },
          ]}
          width={700}
          height={400}
        /> */}
      </DialogContent>
    </Dialog>
  );
};

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ 
  open, 
  onClose, 
  onConfirm, 
  title = "Confirm Action", 
  description = "Are you sure you want to proceed?" 
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-description"
    >
      <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="confirm-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Tutup
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained">
          Hapus
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface QuotaWarningDialogProps {
  open: boolean;
  onClose: () => void;
  onUpgrade: () => void;
  title?: string;
  message?: string;
}

const QuotaWarningDialog: React.FC<QuotaWarningDialogProps> = ({ 
  open, 
  onClose, 
  onUpgrade, 
  title = "Kuota Habis", 
  message = "Kuota penggunaan Anda hampir habis. Silakan tingkatkan paket Anda untuk terus menggunakan layanan ini." 
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="quota-warning-dialog-title"
      aria-describedby="quota-warning-dialog-description"
    >
      <DialogTitle id="quota-warning-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="quota-warning-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Tutup
        </Button>
        <Button onClick={onUpgrade} color="primary" variant="contained">
          Tingkatkan Paket
        </Button>
      </DialogActions>
    </Dialog>
  );
};


interface PacketEndWarningDialogProps {
  open: boolean;
  onClose: () => void;
  onUpgrade: () => void;
  title?: string;
  message?: string;
}

const PacketEndWarningDialog: React.FC<QuotaWarningDialogProps> = ({ 
  open, 
  onClose, 
  onUpgrade, 
  title = "Paket Kamu sudah habis", 
  message = "Paket kamu habis. Silakan tingkatkan paket untuk terus menikmati layanan ini." 
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="quota-warning-dialog-title"
      aria-describedby="quota-warning-dialog-description"
    >
      <DialogTitle id="quota-warning-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="quota-warning-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Tutup
        </Button>
        <Button onClick={onUpgrade} color="primary" variant="contained">
          Tingkatkan Paket
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default TestKecermatanDashboard;
