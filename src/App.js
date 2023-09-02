import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layouts';
function App() {
    return (
        <Router>
            <div className="App">
        
                <Routes>
                    {publicRoutes.map((publicRoute, index) => {
                        let Layout = DefaultLayout;
                        if (publicRoute.layout){
                            Layout = publicRoute.layout;
                        }
                        else if(publicRoute.layout === null){
                            Layout = Fragment;
                        }
                        const Page = publicRoute.component;
                        return (
                            <Route
                                path={publicRoute.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                                key={index}
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
