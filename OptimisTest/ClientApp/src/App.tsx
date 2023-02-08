import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import { GroupContextProvider } from './context/GroupContext.tsx';
import './custom.css';

function App() {
 

    return (
 <GroupContextProvider>
        <Layout>
        <div className="container-md">
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
            </Routes>
            </div>
        </Layout>
        
        </GroupContextProvider>
    );
  }



export default App;