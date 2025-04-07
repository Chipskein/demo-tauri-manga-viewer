
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import MangaViewer from './pages/manga/MangaViewer';
import FileUploader from './pages/file/FileUploader';
function App() {
  return (
    <Router basename='/demo-tauri-manga-viewer'>
      <NavBar />
      <main className="pt-40 px-4">
        <Routes>
          <Route path="/manga" element={<MangaViewer />} />
          <Route path="/file" element={<FileUploader />} />
          <Route path="*" element={<Navigate to="/manga" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
