import React from 'react';
import Task1 from '@/pages/Task1';
import Task2 from '@/pages/Task2';
import { Route, Routes } from "react-router-dom"

const DefaultRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={ <Task1 /> } />
    <Route path="/task2" element={ <Task2 /> } />
    <Route path="*" element={'Error'} />
  </Routes>
);

export default DefaultRouter;
