import React from 'react';
import { Link } from 'react-router-dom';
import resume_logo from '../../../../static/images/resume_logo.png';

function Resume() {
  const text = "  Explore my professional journey through my resume.";
  const args = {
    topic_name: 'Resume',
    color: `#FF8C00`,
    logo: resume_logo,
  };

  return (
    <div style={{ display: 'flex', height: 'var(--baseline-4x)', borderBottom: 'var(--border)', borderLeft: 'var(--border)', }}>
      <div style={{
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

      }}>
        {/* <div style={{
          color: '#FF8C00',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          width:'50%',
          fontSize: '25px',
          borderRight: 'var(--border)',
        }}>
          <h3 style={{ width: '100%',display: 'flex',justifyContent: 'center', }}>
            {args.topic_name}
          </h3>
        </div> */}
        <div style={{
          display: 'flex',
          // width:'50%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src={args.logo}
            style={{ height: '100%', padding: '10px', maxWidth: '90%', }}
            alt="Resume Logo"
          />
        </div>
      </div>
      <div style={{
        width: '100%',
        display: 'flex',
        fontSize: 'var(--maru-normal)',
        justifyContent: 'center',
        lineHeight: 'var(--baseline)',
        borderLeft: 'var(--border)',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{ padding: '0 20px' }}>
          {text}
        </div>
        <Link to='/'>
          <button style={{
            background: 'linear-gradient(45deg, #FF8C00, #FF6347)',
            color: '#fff',
            display: 'flex',
            padding: '10px 20px',
            alignItems: 'center',
            border: '2px solid var(--border)',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(255, 140, 0, 0.2)',
            transition: 'background 0.3s ease-in-out, transform 0.2s ease-in-out',
          }}
            onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
          >
            <h3 style={{ margin: 0 }}>View Resume</h3>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Resume;
