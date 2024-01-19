import React from 'react';
import ProjectExtension from './ProjectExtension.js';
import {Routes,Route} from 'react-router-dom';
import AssignPro from './AssignPro.js';
import Paywall from './paywall.js';

function Content(){
    return(
        <div>
            <Routes>
                <Route path='/project-extension-detail' element={<ProjectExtension/>}></Route>
                <Route path='/assign-professionals' element={<AssignPro />}></Route>
                <Route path='/perform-certification' element={<div>Perform Certification</div>}></Route>
                <Route path='/payment' element={<Paywall/>}></Route>
            </Routes>
        </div>
    );
}

export default Content;