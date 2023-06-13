import './App.css';
import {
    AboutPage,
    ClientChoicePage,
    ContactPage,
    DocumentariesPage,
    EventsPage,
    FashionPage,
    Home,
    MaternityPage,
    PackagesPage,
    PortraitsPage,
    WeddingsPage
} from './pages';
import {Routes, Route} from 'react-router-dom'
import {Footer, Header} from './components';


function App() {
    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path='/'
                    element={<Home/>}/>
                <Route path='/about-us'
                    element={<AboutPage/>}/>
                <Route path='/contact'
                    element={<ContactPage/>}/>
                <Route path='/weddings'
                    element={<WeddingsPage/>}/>
                <Route path='/maternity'
                    element={<MaternityPage/>}/>
                <Route path='/fashion'
                    element={<FashionPage/>}/>
                <Route path='/documentaies'
                    element={<DocumentariesPage/>}/>
                <Route path='/events'
                    element={<EventsPage/>}/>
                <Route path='/clients'
                    element={<ClientChoicePage/>}/>
                <Route path='/portraits'
                    element={<PortraitsPage/>}/>
                <Route path='/clients-choice'
                    element={<ClientChoicePage/>}/>
                <Route path='/packages'
                    element={<PackagesPage/>}/>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
