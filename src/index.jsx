import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
				<Route path="/survey" element={<Survey/>}></Route>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
)
