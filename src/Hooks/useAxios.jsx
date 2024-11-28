
import { useLoader } from '@/context/useLoader';
import axios from 'axios';

import { useState } from 'react';
export default function useAxios() {

    const {setIsLoading}=useLoader()


    // const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmY1NDk4MTRiMDM1ZGU4NTEzMTg5MmEiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyOTU4OTQ4NiwiZXhwIjoxNzMyMTgxNDg2fQ.kCaEDzV6YVVGmc34qp0vvYxxG6t68L9tSV1I3ZZ0sLQ"

    // console.log({ token });
    const token = 'sgahjkfd'

    const instance = axios.create({

        baseURL: 'https://backend.navyaedu.com/api/v1',
        // baseURL: 'https://backend.navyaedu.com/api/v1/courses/transaction/payapi',

        // baseURL:"http://backend.jimsbelpkl.in:7013",//local system ip
        mode: 'cors',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    // Validate response
    instance.interceptors.request.use((config) => {
        setIsLoading(true)
        // showLoader()

        return config;
    });

    instance.interceptors.response.use(
        (response) => {
            setIsLoading(false);
            // hideLoader();
            return response;
        },
        (error) => {
            setIsLoading(false)
            const errData = {}
            // Check if the error has a response (i.e., it was returned from the server)
            if (error.response) {
                // Server responded with a status other than 2xx
                // console.log('API Error Response:', error.response);
                // errData.response=errData.response
                errData.status = error.response.status
                errData.data = error.response.data
                // console.log('Status Code:', error.response.status);
                // console.log('Data:', error.response.data);  // Error data returned from the server
                // console.log('Headers:', error.response.headers);
            } else if (error.request) {
                // The request was made, but no response was received
                console.log('No response received:', error.request);
            } else {
                // Something happened in setting up the request
                console.log('Error', error.message);
                errData.msg = error.message
            }
            // Optionally return a custom error object
            return Promise.reject(errData);
        }
    );





    return instance;
}
