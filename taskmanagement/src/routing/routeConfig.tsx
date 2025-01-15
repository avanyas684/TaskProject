import { lazy } from 'react';
import Login from '../Pages/Login/Login';


export const routeConfig = [
  {
    path: "/",
    component: <Login />,
  },
 
];

export const authArray = [
  "/individual-details",
  "/company-details",
  "/kyc-documents",
  "/director-details",
  "/bank-details",
 
 ];

 export const dashboardAuthArray = [
  "/dashboard",
  "/initiate-kyc",
  "/initiate-kyc/initiate-cpv",
  "/initiate-kyc/payout",
  "/sanction",
  "/sanction-2",
  "/e-sign",
  "/empanelment",
  "/loan-application"
 ]