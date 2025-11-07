import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArticleProvider } from './context/ArticleContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetailPage from './pages/ArticleDetailPage';
import NewArticle from './pages/NewArticle';
import './assets/styles/global.css';

function App() {
    return (
        <ArticleProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/articles" element={<Articles />} />
                        <Route path="/articles/:id" element={<ArticleDetailPage />} />
                        <Route path="/new" element={<NewArticle />} />
                    </Routes>
                </Layout>
            </Router>
        </ArticleProvider>
    );
}

export default App;