
import { useLoader } from '@/context/useLoader'
import React, { useEffect } from 'react'

const LoaderComponent = (props) => {
  const { isLoading, setisloading } = useLoader()


  return (
    <>
    {isLoading ?  <div style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      width: "100vw",
      height: "100vh",
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width={200}
        height={200}
        style={{
          shapeRendering: "auto",
          display: "block",
          background: "transparent",
        }}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <g>
          <circle r={20} fill="#765da7" cy={50} cx={30}>
            <animate
              begin="-0.5s"
              values="30;70;30"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
              attributeName="cx"
            />
          </circle>
          <circle r={20} fill="#69be55" cy={50} cx={70}>
            <animate
              begin="0s"
              values="30;70;30"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
              attributeName="cx"
            />
          </circle>
          <circle r={20} fill="#765da7" cy={50} cx={30}>
            <animate
              begin="-0.5s"
              values="30;70;30"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
              attributeName="cx"
            />
            <animate
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;0.499;0.5;1"
              calcMode="discrete"
              values="0;0;1;1"
              attributeName="fill-opacity"
            />
          </circle>
          <g />
        </g>
      </svg>
    </div> :<></>}
      
    </>
  )
}

export default LoaderComponent  