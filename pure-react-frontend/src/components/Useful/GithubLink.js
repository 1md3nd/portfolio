import React from 'react';
import { Link } from 'react-router-dom';

function GithubLink(props) {
    return (
        <div style={{
            background: 'var(--gray-light)',
            height: 'var(--baseline)',
            borderLeft: 'var(--border)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderBottom: 'var(--border)',
        }}>
            {/* You can add any additional content or styling within the Box */}
            <p style={{ fontWeight: 'bold' }}>See {props.props.project_name} project at GitHub</p>
            <Link to={props.props.project_link}>
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
                    onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}>
                    <h3 style={{ margin: 0 }}>GitHub Repository</h3>
                </button>
            </Link>
        </div>
    );
}

export default GithubLink;
