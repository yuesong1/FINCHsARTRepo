import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import FormUpload from '../UtilTest/Upload'
const BaseRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/upload" element={<FormUpload />} />
                </Routes>
                <Routes>
                    <Route path="*" element={<> 404 </>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default BaseRouter;