import React, { useState } from 'react';
import { FaDownload, FaSpinner, FaCheck } from 'react-icons/fa';

function DownloadResumeButton({ 
  variant = 'primary', // 'primary' | 'secondary' | 'minimal'
  size = 'medium', // 'small' | 'medium' | 'large'
  showText = true,
  className = '',
  style = {}
}) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      // Add a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Download the pre-existing PDF from public folder
      const link = document.createElement('a');
      link.href = '/Interview_resume.pdf';
      link.download = 'Interview_resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadComplete(true);
      
      // Reset the button state after 2 seconds
      setTimeout(() => {
        setDownloadComplete(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Error downloading resume. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  // Dynamic styling based on variant
  const getButtonStyles = () => {
    const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      gap: showText ? '0.5rem' : '0',
      padding: size === 'large' ? '0.8rem 1.5rem' : 
               size === 'small' ? '0.4rem 0.8rem' : '0.6rem 1.2rem',
      borderRadius: '12px',
      border: 'none',
      cursor: isDownloading ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: size === 'large' ? '1rem' : 
                size === 'small' ? '0.8rem' : '0.9rem',
      fontWeight: '600',
      textDecoration: 'none',
      position: 'relative',
      overflow: 'hidden',
      ...style
    };

      switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          background: downloadComplete 
            ? 'linear-gradient(135deg, #10b981, #059669)' 
            : 'linear-gradient(135deg, var(--primary), var(--accent))',
          color: 'white',
          boxShadow: '0 8px 20px rgba(108, 140, 255, 0.2)',
          WebkitTapHighlightColor: 'transparent',
          transform: 'scale(1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        };      case 'secondary':
        return {
          ...baseStyles,
          background: 'transparent',
          color: 'var(--primary)',
          border: '2px solid var(--primary)',
          boxShadow: '0 0 20px rgba(108, 140, 255, 0.2)',
        };
      
      case 'minimal':
        return {
          ...baseStyles,
          background: 'rgba(108, 140, 255, 0.1)',
          color: 'var(--primary)',
          border: '1px solid rgba(108, 140, 255, 0.3)',
        };
      
      default:
        return baseStyles;
    }
  };

  const renderIcon = () => {
    const iconSize = size === 'large' ? 20 : size === 'small' ? 16 : 18;
    if (downloadComplete) {
      return (
        <div className="icon-wrapper success">
          <FaCheck size={iconSize} />
        </div>
      );
    }
    if (isDownloading) {
      return (
        <div className="icon-wrapper loading">
          <FaSpinner 
            size={iconSize}
            style={{ animation: 'spin 1s linear infinite' }}
          />
        </div>
      );
    }
    return (
      <div className="icon-wrapper">
        <FaDownload size={iconSize} />
      </div>
    );
  };

  const getButtonText = () => {
    if (downloadComplete) return { main: 'Ready', sub: 'Resume Downloaded' };
    if (isDownloading) return { main: 'Please Wait', sub: 'Generating PDF...' };
    return { main: 'Get Resume', sub: 'Download PDF Version' };
  };

  return (
    <>
      {/* Add keyframe animation for spinner */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .button-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.1;
        }

        .main-text {
          font-weight: 600;
          font-size: ${size === 'large' ? '1rem' : size === 'small' ? '0.8rem' : '0.9rem'};
        }

        .sub-text {
          font-weight: 400;
          opacity: 0.8;
          font-size: ${size === 'large' ? '0.8rem' : size === 'small' ? '0.65rem' : '0.7rem'};
        }
      `}</style>
      
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className={`download-resume-btn ${className}`.trim()}
        style={getButtonStyles()}
        title="Download Resume as PDF"
        onMouseEnter={(e) => {
          if (!isDownloading && variant === 'primary') {
            e.target.style.transform = 'scale(1.02)';
            e.target.style.boxShadow = '0 10px 30px rgba(108, 140, 255, 0.4)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isDownloading && variant === 'primary') {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 8px 20px rgba(108, 140, 255, 0.2)';
          }
        }}
        onMouseDown={(e) => {
          if (!isDownloading && variant === 'primary') {
            e.target.style.transform = 'scale(0.98)';
          }
        }}
        onMouseUp={(e) => {
          if (!isDownloading && variant === 'primary') {
            e.target.style.transform = 'scale(1)';
          }
        }}
      >
        {renderIcon()}
        {showText && (
          <div className="button-text">
            <span className="main-text">{getButtonText().main}</span>
            <span className="sub-text">{getButtonText().sub}</span>
          </div>
        )}
        
        {/* Ripple effect overlay */}
        {variant === 'primary' && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'left 0.6s ease',
              pointerEvents: 'none',
            }}
            onMouseEnter={(e) => {
              e.target.style.left = '100%';
            }}
          />
        )}
      </button>
    </>
  );
}

export default DownloadResumeButton;