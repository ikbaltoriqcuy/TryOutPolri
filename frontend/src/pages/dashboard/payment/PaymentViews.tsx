import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import { getAllPacket, Packet, insertPacketPurchased, submitPayment, PaymentResponse} from "../../../api/payment.api";
import { getCache, CACHE_KEY } from "../../../cache/CacheUtils";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { QRCodeCanvas } from 'qrcode.react';


const PaketKursusPembayaran = () => {
  const [packets, setPackets] = useState<Packet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [showDialogSuccessPayment, setShowDialogSuccessPayment] = useState(false);
  const [showDialogErrorPayment, setShowDialogErrorPayment] = useState(false);
  const [qris, setQris] = useState("");

  const [selectedCourse, setSelectedCourse] = useState<{
    name: string;
    price: string;
  } | null>(null);


  const cache = getCache(CACHE_KEY);
  
  const formatPrice = (price: string | number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(Number(price));
  };

  const hitPacketPurchased = async (packet: Packet) => {

    const packetPurchased = {
      data: {
      user_id:  cache?.user_id || -1, 
      price: parseFloat(packet.price.replace(/[^0-9.-]+/g, "")), // Remove currency formatting
      current_quota: packet.quota_per_day,
      packet_id: packet.packet_id,
      }
    };

    try {
      setLoading(true);
      const response = await insertPacketPurchased(packetPurchased);
      setError(null);
      setShowDialogSuccessPayment(true);
    } catch (err: any) {
      setError(err.message ||"Gagal membeli paket.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPackets = async () => {
      setLoading(true);
      try {
        const response = await getAllPacket();
        const fetchedPackets = response.data.map((packet: Packet) => ({
          packet_id: packet.packet_id,
          name: packet.name,
          price: packet.price,
          quota_per_day: packet.quota_per_day,
          login_quota: packet.login_quota,
        }));
        setPackets(fetchedPackets);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Gagal memuat paket kursus.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackets();
  }, []);

 
  const getQris = async (packet: Packet) => {
    setLoading(true);
    try {
      console.log("get qris " + packet.price);
      const price = parseInt(packet.price.replace(/[^0-9.-]+/g, ""));
      const result = await submitPayment(price); 
      setQris(result.QrString);
      handleOpenDialog({ name: packet.name, price: packet.price })
    } catch (error) {
      console.log("get qris " + error);
      setError("Gagal mendapatkan Qris.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (course: { name: string; price: string }) => {
    setSelectedCourse(course);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCourse(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Pilihan Paket Kursus
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {packets.map((packet) => (
            <Grid item xs={12} sm={6} md={4} key={packet.packet_id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {packet.name}
                  </Typography>
                  <Typography variant="body1">
                    Harga: <strong>{formatPrice(packet.price)}</strong>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Batas akses per hari: {packet.quota_per_day}
                  </Typography>
                  <Button
                    variant="contained"
                    style={{
                      marginTop: "15px",
                      backgroundColor: "#FFC107",
                      color: "black",
                    }}
                    fullWidth
                    onClick={() => {
                         if (packet.price != null || packet.price != undefined) {
                              getQris(packet);
                         }
                        //  hitPacketPurchased(packet);
                        //  handleOpenDialog({ name: packet.name, price: packet.price })
                      }
                    }
                  >
                    Pilih
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <SuccessPaymentDialog
        isShow={showDialogSuccessPayment}
        onClose={() => setShowDialogSuccessPayment(false)}
      />

      <FailedPaymentDialog
        isShow={showDialogErrorPayment}
        onClose={() => setShowDialogErrorPayment(false)}
      />

      {/* Dialog QRIS */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>QRIS untuk {selectedCourse?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Silakan scan QRIS di bawah untuk membayar paket kursus.
          </Typography>
          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
             <QRCodeCanvas value={qris} size={300} />
          </div>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginTop: "10px", textAlign: "center" }}
          >
            Total: {selectedCourse?.price}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Tutup
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

interface SuccessPaymentDialogProps {
  isShow: boolean; 
  onClose?: () => void; 
}

const SuccessPaymentDialog: React.FC<SuccessPaymentDialogProps> = ({ isShow, onClose }) => {
  const [open, setOpen] = useState(isShow);

  useEffect(() => {
    setOpen(isShow);
  }, [isShow]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose(); 
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <CheckCircleIcon style={{ color: "green", fontSize: "30px" }} />
        Payment Successful
      </div>
    </DialogTitle>
    <DialogContent>
      <Typography variant="body1">
        Thank you for your payment! Your transaction was successful.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
  );
};


interface FailedPaymentDialogProps {
  isShow: boolean; // Controls visibility of the dialog
  onClose?: () => void; // Callback when the dialog is closed
}

const FailedPaymentDialog: React.FC<FailedPaymentDialogProps> = ({ isShow, onClose }) => {
  const [open, setOpen] = useState(isShow);

  // Sync `open` state with `isShow` prop
  useEffect(() => {
    setOpen(isShow);
  }, [isShow]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose(); // Notify parent when dialog is closed
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ErrorIcon style={{ color: "red", fontSize: "30px" }} />
          Payment Failed
        </div>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Unfortunately, your payment was not successful. Please try again or contact support.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default PaketKursusPembayaran;
