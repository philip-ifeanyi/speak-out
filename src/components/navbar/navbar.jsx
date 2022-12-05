import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='w-screen bg-[#C1E3EE]'>
      <div className='nav-content max-w-[1100px] m-auto flex justify-between items-center'>
        <div className='text-[#0E2229]'>
          <svg className='fill-[#0E2229]' width="100" height="70" viewBox="0 0 148 121" fill='#0E2229' xmlns="http://www.w3.org/2000/svg">
            <path d="M36.7771 81.0339C32.2667 81.0339 27.9443 80.4432 23.8098 79.262C19.6753 78.027 16.3462 76.443 13.8226 74.51L18.2524 64.6838C20.6686 66.4021 23.5145 67.825 26.7898 68.9526C30.1189 70.0265 33.4748 70.5634 36.8576 70.5634C39.435 70.5634 41.5022 70.3218 43.0594 69.8385C44.6702 69.3016 45.8515 68.5767 46.6032 67.6639C47.3549 66.7511 47.7308 65.704 47.7308 64.5227C47.7308 63.0193 47.1402 61.838 45.9589 60.9789C44.7776 60.0661 43.2204 59.3412 41.2874 58.8043C39.3544 58.2136 37.2066 57.6767 34.8441 57.1934C32.5352 56.6565 30.1995 56.0121 27.8369 55.2604C25.528 54.5087 23.4071 53.5422 21.4741 52.3609C19.5411 51.1796 17.9571 49.6225 16.7221 47.6894C15.5408 45.7564 14.9502 43.2865 14.9502 40.2796C14.9502 37.0579 15.8093 34.1315 17.5275 31.5005C19.2994 28.8157 21.9305 26.6948 25.4206 25.1376C28.9645 23.5268 33.3943 22.7214 38.7101 22.7214C42.2539 22.7214 45.7441 23.1509 49.1806 24.01C52.617 24.8155 55.6508 26.0504 58.2818 27.715L54.2547 37.6217C51.6237 36.1182 48.9926 35.0175 46.3616 34.3194C43.7305 33.5677 41.1532 33.1919 38.6295 33.1919C36.1059 33.1919 34.0386 33.4872 32.4278 34.0778C30.817 34.6685 29.6625 35.447 28.9645 36.4135C28.2665 37.3263 27.9174 38.4002 27.9174 39.6352C27.9174 41.085 28.5081 42.2663 29.6894 43.1791C30.8707 44.0382 32.4278 44.7362 34.3608 45.2732C36.2938 45.8101 38.4148 46.3471 40.7236 46.884C43.0862 47.421 45.4219 48.0385 47.7308 48.7365C50.0934 49.4345 52.2412 50.3742 54.1742 51.5555C56.1072 52.7367 57.6643 54.2939 58.8456 56.2269C60.0806 58.1599 60.6981 60.603 60.6981 63.5562C60.6981 66.7242 59.8121 69.6238 58.0402 72.2548C56.2683 74.8858 53.6104 77.0068 50.0665 78.6176C46.5764 80.2285 42.1466 81.0339 36.7771 81.0339ZM101.025 81.0339C96.5685 81.0339 92.434 80.309 88.6217 78.8593C84.863 77.4095 81.5877 75.3691 78.7955 72.738C76.0571 70.107 73.9093 67.0196 72.3522 63.4757C70.8487 59.9318 70.097 56.0658 70.097 51.8776C70.097 47.6894 70.8487 43.8234 72.3522 40.2796C73.9093 36.7357 76.0839 33.6483 78.8761 31.0172C81.6682 28.3862 84.9436 26.3458 88.7022 24.896C92.4609 23.4463 96.5417 22.7214 100.945 22.7214C105.401 22.7214 109.482 23.4463 113.187 24.896C116.946 26.3458 120.194 28.3862 122.933 31.0172C125.725 33.6483 127.899 36.7357 129.457 40.2796C131.014 43.7697 131.792 47.6357 131.792 51.8776C131.792 56.0658 131.014 59.9587 129.457 63.5562C127.899 67.1001 125.725 70.1875 122.933 72.8186C120.194 75.3959 116.946 77.4095 113.187 78.8593C109.482 80.309 105.428 81.0339 101.025 81.0339ZM100.945 69.9191C103.468 69.9191 105.777 69.4895 107.871 68.6304C110.019 67.7713 111.898 66.5363 113.509 64.9255C115.12 63.3146 116.355 61.4085 117.214 59.207C118.127 57.0055 118.583 54.5624 118.583 51.8776C118.583 49.1929 118.127 46.7498 117.214 44.5483C116.355 42.3468 115.12 40.4406 113.509 38.8298C111.952 37.219 110.1 35.984 107.952 35.1249C105.804 34.2657 103.468 33.8362 100.945 33.8362C98.421 33.8362 96.0852 34.2657 93.9375 35.1249C91.8434 35.984 89.9909 37.219 88.38 38.8298C86.7692 40.4406 85.5074 42.3468 84.5946 44.5483C83.7355 46.7498 83.3059 49.1929 83.3059 51.8776C83.3059 54.5087 83.7355 56.9518 84.5946 59.207C85.5074 61.4085 86.7424 63.3146 88.2995 64.9255C89.9103 66.5363 91.7897 67.7713 93.9375 68.6304C96.0852 69.4895 98.421 69.9191 100.945 69.9191Z" fill="#0E2229" />
            <line x1="10.0674" y1="86.224" x2="134.656" y2="86.2239" stroke="#0E2229" strokeWidth="2.51694" />
            <path d="M17.7944 112.633C16.4856 112.633 15.2271 112.424 14.019 112.004C12.8276 111.568 11.9048 111.014 11.2503 110.343L11.9803 108.908C12.6011 109.512 13.4317 110.024 14.472 110.444C15.5291 110.846 16.6366 111.048 17.7944 111.048C18.9019 111.048 19.7996 110.914 20.4875 110.645C21.1923 110.36 21.704 109.982 22.0229 109.512C22.3585 109.043 22.5262 108.522 22.5262 107.952C22.5262 107.264 22.3249 106.71 21.9222 106.291C21.5362 105.871 21.0245 105.544 20.3868 105.309C19.7492 105.057 19.0445 104.839 18.2726 104.655C17.5008 104.47 16.7289 104.277 15.957 104.076C15.1852 103.858 14.472 103.572 13.8176 103.22C13.18 102.868 12.6598 102.406 12.2571 101.836C11.8712 101.248 11.6782 100.485 11.6782 99.5453C11.6782 98.6728 11.9048 97.8758 12.3578 97.1542C12.8276 96.4159 13.5408 95.8287 14.4972 95.3924C15.4536 94.9393 16.6786 94.7128 18.1719 94.7128C19.1619 94.7128 20.1435 94.8554 21.1168 95.1407C22.09 95.4092 22.929 95.7867 23.6337 96.2733L23.0045 97.7583C22.2494 97.2549 21.444 96.8858 20.5882 96.6509C19.7492 96.4159 18.9354 96.2985 18.1468 96.2985C17.0897 96.2985 16.2171 96.4411 15.5291 96.7264C14.8412 97.0116 14.3294 97.3975 13.9938 97.8842C13.675 98.354 13.5156 98.8909 13.5156 99.495C13.5156 100.183 13.7086 100.737 14.0945 101.156C14.4972 101.576 15.0174 101.903 15.655 102.138C16.3094 102.373 17.0225 102.582 17.7944 102.767C18.5663 102.952 19.3297 103.153 20.0848 103.371C20.8567 103.589 21.5614 103.874 22.199 104.227C22.8534 104.562 23.3736 105.015 23.7595 105.586C24.1623 106.157 24.3636 106.903 24.3636 107.826C24.3636 108.682 24.1287 109.479 23.6589 110.217C23.189 110.939 22.4675 111.526 21.4943 111.979C20.5379 112.415 19.3046 112.633 17.7944 112.633ZM25.779 112.482V94.8638H32.3734C33.8668 94.8638 35.1504 95.1071 36.2243 95.5937C37.2982 96.0636 38.1204 96.7515 38.6909 97.6576C39.2782 98.547 39.5718 99.6292 39.5718 100.904C39.5718 102.146 39.2782 103.22 38.6909 104.126C38.1204 105.015 37.2982 105.703 36.2243 106.19C35.1504 106.677 33.8668 106.92 32.3734 106.92H26.8109L27.6415 106.039V112.482H25.779ZM27.6415 106.19L26.8109 105.284H32.3231C34.0849 105.284 35.4189 104.906 36.325 104.151C37.2479 103.379 37.7093 102.297 37.7093 100.904C37.7093 99.495 37.2479 98.4043 36.325 97.6325C35.4189 96.8606 34.0849 96.4747 32.3231 96.4747H26.8109L27.6415 95.5937V106.19ZM42.6175 102.742H51.9302V104.328H42.6175V102.742ZM42.8189 110.872H53.4152V112.482H40.9564V94.8638H53.0377V96.4747H42.8189V110.872ZM52.3316 112.482L60.3858 94.8638H62.2231L70.2774 112.482H68.3141L60.9143 95.9461H61.6694L54.2696 112.482H52.3316ZM55.5029 107.776L56.0566 106.266H66.3006L66.8543 107.776H55.5029ZM72.16 108.103L72.0844 105.838L82.7563 94.8638H84.8957L77.1183 103.019L76.0612 104.151L72.16 108.103ZM70.5491 112.482V94.8638H72.4116V112.482H70.5491ZM83.2093 112.482L75.6082 103.723L76.8666 102.364L85.4242 112.482H83.2093ZM97.4466 112.633C96.121 112.633 94.8877 112.415 93.7467 111.979C92.6224 111.526 91.6408 110.897 90.8018 110.091C89.9796 109.269 89.3336 108.321 88.8638 107.247C88.4107 106.157 88.1842 104.965 88.1842 103.673C88.1842 102.381 88.4107 101.198 88.8638 100.124C89.3336 99.0336 89.9796 98.0855 90.8018 97.2801C91.6408 96.4579 92.6224 95.8287 93.7467 95.3924C94.8709 94.9393 96.1042 94.7128 97.4466 94.7128C98.7722 94.7128 99.9971 94.9393 101.121 95.3924C102.246 95.8287 103.219 96.4495 104.041 97.2549C104.88 98.0603 105.526 99.0084 105.979 100.099C106.449 101.19 106.684 102.381 106.684 103.673C106.684 104.965 106.449 106.157 105.979 107.247C105.526 108.338 104.88 109.286 104.041 110.091C103.219 110.897 102.246 111.526 101.121 111.979C99.9971 112.415 98.7722 112.633 97.4466 112.633ZM97.4466 110.972C98.5037 110.972 99.4769 110.796 100.366 110.444C101.272 110.075 102.053 109.563 102.707 108.908C103.378 108.237 103.898 107.465 104.267 106.593C104.637 105.703 104.821 104.73 104.821 103.673C104.821 102.616 104.637 101.651 104.267 100.779C103.898 99.8893 103.378 99.1175 102.707 98.4631C102.053 97.7919 101.272 97.2801 100.366 96.9277C99.4769 96.5586 98.5037 96.374 97.4466 96.374C96.3895 96.374 95.4078 96.5586 94.5017 96.9277C93.5956 97.2801 92.807 97.7919 92.1358 98.4631C91.4814 99.1175 90.9612 99.8893 90.5753 100.779C90.2062 101.651 90.0216 102.616 90.0216 103.673C90.0216 104.713 90.2062 105.678 90.5753 106.568C90.9612 107.457 91.4814 108.237 92.1358 108.908C92.807 109.563 93.5956 110.075 94.5017 110.444C95.4078 110.796 96.3895 110.972 97.4466 110.972ZM115.314 112.633C113.065 112.633 111.295 111.987 110.003 110.695C108.711 109.403 108.065 107.49 108.065 104.957V94.8638H109.927V104.881C109.927 106.962 110.397 108.497 111.337 109.487C112.276 110.477 113.602 110.972 115.314 110.972C117.042 110.972 118.376 110.477 119.315 109.487C120.255 108.497 120.725 106.962 120.725 104.881V94.8638H122.537V104.957C122.537 107.49 121.891 109.403 120.599 110.695C119.324 111.987 117.562 112.633 115.314 112.633ZM128.586 112.482V96.4747H122.394V94.8638H136.64V96.4747H130.448V112.482H128.586Z" fill="#0E2229" />
            <line x1="10.0674" y1="117.224" x2="134.656" y2="117.224" stroke="#0E2229" strokeWidth="2.51694" />
          </svg>

        </div>

        <div className="links">
          <ul className="nav-list flex">
            <li className='nav-item'>
              <NavLink to="/" className='item px-2'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/about" className='item px-2'>About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/support" className='item px-2 mr-2'>Support</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/login" className='px-4 py-3 mr-1 rounded border-[#0E2229] border nav-button item'>Login</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/register" className='px-4 py-3 ml-1 rounded text-[#FFD280] bg-[#0E2229] border border-[#0E2229]'>Get Started</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;