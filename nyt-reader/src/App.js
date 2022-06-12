import './App.css';
import NavBar from './structure/01-navbar';
import ListArticles from './structure/03-listArticles';

function App() {
  return (
    <div className='Test Cage'>
        <NavBar />
        
        <div className = 'news-desk'>
            {/* Needed to change news desk variables because
            not all of them returned values.*/}

            <ListArticles news_desk='Business' />
            <ListArticles news_desk='Entrepreneurs' />
            <ListArticles news_desk='Financial' />
            <ListArticles news_desk='National' />
            <ListArticles news_desk='Opinion' />
        </div>
    </div>
  );
}

export default App;
