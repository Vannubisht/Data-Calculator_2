// // YourComponent.js

// import React, { useEffect } from 'react';

// const YourComponent = () => {
//   useEffect(() => {
//     const handle = document.getElementById('draggable-point');
//     const progressBar = document.getElementById('audio-progress-bar');

//     let isDragging = false;

//     const handleDrag = (e) => {
//       if (isDragging) {
//         const bar = document.getElementById('audio-progress');
//         if (bar) {
//           const mouseX = e.clientX - bar.getBoundingClientRect().left;
//           const barWidth = bar.clientWidth - handle.clientWidth;
//           let percentage = (mouseX / barWidth) * 100;

//           percentage = Math.min(100, Math.max(0, percentage));

//           handle.style.left = `${percentage}%`;
//           progressBar.style.width = `${percentage}%`;
//         }
//       }
//     };

//     handle.addEventListener('mousedown', () => {
//       isDragging = true;
//       document.addEventListener('mousemove', handleDrag);
//       document.addEventListener('mouseup', () => {
//         isDragging = false;
//         document.removeEventListener('mousemove', handleDrag);
//       });
//     });

//     return () => {
//       handle.removeEventListener('mousedown', () => {});
//       document.removeEventListener('mousemove', handleDrag);
//       document.removeEventListener('mouseup', () => {});
//     };
//   }, []); // Empty dependency array to run the effect only once

//   return (
//     <div id="audio-player-container">
//       <div className="audio-progress" id="audio-progress">
//         <div id="draggable-point" className="draggable">
//           <div id="audio-progress-handle"></div>
//         </div>
//         <div id="audio-progress-bar" className="bar" style={{ width: '45%' }}></div>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;
