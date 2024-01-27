import React from 'react';
import ProjectExtension from './ProjectExtension.js';
import {Routes,Route} from 'react-router-dom';
import AssignPro from './AssignPro.js';
import Paywall from './paywall.js';
import Confirm from './confirm.js';

function Content(){
    return(
        <div>
            <Routes>
                <Route path='/' element={<ProjectExtension/>}></Route>
                <Route path='/project-extension' index    element={<ProjectExtension/>}></Route>
                <Route path='/assign-professionals' element={<AssignPro />}></Route>
                <Route path='/perform-certification' element={<div>Perform Certification</div>}></Route>
                <Route path='/payment' element={<Paywall/>}></Route>
                <Route path='/confirm' element={<Confirm/>}></Route>
            </Routes>
        </div>
    );
}

export default Content;