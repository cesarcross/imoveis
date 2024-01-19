import { saveAs } from "file-saver";
import styles from "../styles/DownloadButton.module.scss";

const DownloadPresentation = () => {
  const handleDownload = () => {
    const pdfPath = "/pdfFile/casaaguasdelindoia.pdf";
    saveAs(pdfPath, "casaaguasdelindoia.pdf");
  };

  return (
    <div className={styles.button}>
      <button onClick={handleDownload}>Baixar Apresentação</button>
    </div>
  );
};

export default DownloadPresentation;
