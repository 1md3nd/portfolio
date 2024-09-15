// import React, { useEffect } from 'react';
// import css from './TestPage.module.css';

// function TestPage() {
//     useEffect(() => {

//         const test1Element = document.querySelector('.test1');
//         const test2Element = document.querySelector('.test2');

//         if (test1Element && test2Element) {
//             const observer = new IntersectionObserver((entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         // Apply a CSS class to test2Element
//                         test2Element.style.backgroundColor = 'red';
//                         // test1Element.style.opacity = 0;
//                         test1Element.style.backgroundColor = 'yellow';

//                         test2Element.classList.add('highlighted');
//                         test2Element.textContent = 'Now Visible!';
//                         // Remove a CSS class from test1Element
//                         test1Element.classList.remove('other-class');
//                     } else {
//                         // Reset classes
//                         test1Element.style.backgroundColor = 'blue';

//                         test2Element.classList.remove('highlighted');
//                         test2Element.textContent = 'test 2';
//                         test1Element.classList.add('other-class');
//                         // Reset to default styles
//                         test2Element.style.backgroundColor = 'blue'; // Reset background color
//                         // test1Element.style.opacity = 1;
//                     }

//                 });
//             });

//             observer.observe(test2Element);
//             observer.observe(test1Element);
//         } else {
//             console.error('One or both of the elements (.test1 and .test2) not found.');
//         }
//     }, []); // Empty dependency array ensures this effect runs only once when the component mounts

//     return (
//         <>

//             <div className='blank-space' style={{ height: `var(--baseline-10x)`, borderBottom: `var(--border)` }}></div>
//             <div className='test1' style={{ height: `var(--baseline-4x)`, borderBottom: `var(--border)` }}>
//                 <h1>test 1</h1>
//             </div>
//             <div className='blank-space' style={{ height: `var(--baseline-4x)`, borderBottom: `var(--border)` }}></div>
//             <div className='test2' style={{ height: `var(--baseline-4x)`, borderBottom: `var(--border)` }}>
//                 <h1>test 2</h1>
//             </div>
//             <div className='blank-space' style={{ height: `var(--baseline-4x)`, borderBottom: `var(--border)` }}></div>

//         </>
//     );
// }

// export default TestPage;
