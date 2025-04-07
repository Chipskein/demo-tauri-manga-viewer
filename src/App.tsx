
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import MangaViewer from './pages/manga/MangaViewer';
import FileUploader from './pages/file/FileUploader';
function App() {
  return (
    <Router>
      <NavBar />
      <main className="pt-40 px-4">
        <Routes>
          <Route path="/" element={<MangaViewer />} />
          <Route path="/file" element={<FileUploader />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
