import './App.css';
import { useEffect, useState } from 'react';
import Article from './component/Article';
import Footer from './component/Footer';
import { Switch } from '@mui/material';
// import ReactSwitch from "react-switch";

function App() {
  const [news, setNews] = useState([]);
  const [theme, setTheme] = useState('light');

  const title = async (title) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-06-04&sortBy=publishedAt&apiKey=175ec5a179cb4de49f74d3ec67906da9`
    );
    const data = await response.json();
    setNews(data.articles);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    title();
  }, []);

  return (
    <div className="App" data-theme={theme}>
      <div className="contents">
        <div className="navbar">
          <div className="nav-logo">
            <img
              src="https://ssl.gstatic.com/gnews/logo/google_news_192.png"
              alt="logo"
              className="g-logo"
            />
            <h1 className="nav-header">GOOGLE NEWS</h1>
          </div>
          {/* <ReactSwitch onChange={toggleTheme} /> */}
          <Switch
            onChange={toggleTheme}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>

        <div className="news">
          <div className="articles">
            {news.map((news) => {
              return <Article news={news} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
