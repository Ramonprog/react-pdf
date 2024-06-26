import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { PdfTemplate } from '../PdfTemplate';
import { PDFViewer } from '@react-pdf/renderer';
import { useMarketList } from '../../hooks/useMarketList';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '90%',
  boxShadow: 24,

};

export function ModalPdf() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { items } = useMarketList()
  return (
    <div>
      <Button onClick={handleOpen}>Gerar lista</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PDFViewer width={'100%'} height={'100%'} >
            <PdfTemplate items={items} />
          </PDFViewer>
        </Box>
      </Modal>
    </div>
  );
}