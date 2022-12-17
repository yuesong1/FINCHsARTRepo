import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import {FileUpload} from '../UtilTest/Upload'
const BaseRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/upload" element={<FileUpload />} />
                </Routes>
                <Routes>
                    <Route path="*" element={<> 404 </>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default BaseRouter;