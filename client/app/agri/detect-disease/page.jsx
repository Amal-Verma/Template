"use client"

import React, { useState, useRef } from 'react';
import { Container, Card, Button, Spinner, Form, Row, Col, Alert, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaCamera, FaUpload, FaSearch, FaLeaf, FaInfoCircle, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DetectDisease = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        setImage(file);
      };
      reader.readAsDataURL(file);
      setError(null);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
      setShowCamera(true);
      setError(null);
    } catch (err) {
      setError('Unable to access camera. Please check permissions.');
      console.error('Error accessing camera:', err);
    }
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    
    const dataUrl = canvas.toDataURL('image/jpeg');
    setPreview(dataUrl);
    
    // Convert dataURL to Blob
    canvas.toBlob((blob) => {
      setImage(blob);
    }, 'image/jpeg');
    
    stopCamera();
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
      setShowCamera(false);
    }
  };

  // Placeholder function for model integration
  const detectDisease = async () => {
    if (!image) {
      setError('Please upload or capture an image first.');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call to model with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Placeholder result (in a real app, this would come from the model)
      const mockResult = {
        disease: 'Late Blight',
        confidence: 0.89,
        description: 'Late blight is a plant disease caused by the oomycete pathogen Phytophthora infestans. It primarily affects potatoes and tomatoes, causing significant crop losses.',
        treatment: [
          'Apply fungicides as a preventive measure',
          'Remove and destroy infected plant parts',
          'Ensure good air circulation between plants',
          'Use resistant varieties when available'
        ],
        severity: 'High'
      };
      
      setResult(mockResult);
    } catch (err) {
      setError('Error analyzing image. Please try again.');
      console.error('Error detecting disease:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="py-5 px-4 px-md-5 bg-light min-vh-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-lg border-0 mb-5 overflow-hidden">
          <Card.Header className="bg-gradient py-3" style={{ background: 'linear-gradient(90deg, #2E7D32 0%, #43A047 100%)' }}>
            <h2 className="text-center mb-0 text-white d-flex align-items-center justify-content-center" 
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
              <FaLeaf className="me-3" />
              Plant Disease Detection
            </h2>
            <p className="text-center text-white mb-0 mt-2" style={{ opacity: 0.9 }}>
              Upload or capture an image of your plant for analysis
            </p>
          </Card.Header>
          
          <Card.Body className="p-4 p-md-5">
            <Row className="mb-4 g-4">
              <Col lg={6} className="mb-3 mb-lg-0">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-100 border-0 shadow-sm bg-white rounded-3">
                    <Card.Body className="d-flex flex-column p-4">
                      <h4 className="mb-3 fw-bold d-flex align-items-center" style={{ color: '#2E7D32' }}>
                        <span className="bg-success bg-opacity-10 p-2 rounded-circle me-2 text-success">
                          <FaCamera />
                        </span>
                        Upload or Capture Image
                      </h4>
                      
                      {error && (
                        <Alert variant="danger" className="d-flex align-items-center">
                          <FaInfoCircle className="me-2" /> {error}
                        </Alert>
                      )}
                      
                      <div className="d-flex gap-3 mb-3">
                        <Button 
                          variant="outline-success" 
                          className="d-flex align-items-center justify-content-center w-50 py-2"
                          onClick={() => fileInputRef.current.click()}
                        >
                          <FaUpload className="me-2" /> <span style={{ color: '#2E7D32' }}>Upload Image</span>
                        </Button>
                        <input 
                          type="file" 
                          ref={fileInputRef} 
                          className="d-none" 
                          accept="image/*" 
                          onChange={handleImageUpload} 
                        />
                        
                        <Button 
                          variant={showCamera ? "danger" : "outline-primary"}
                          className="d-flex align-items-center justify-content-center w-50 py-2"
                          onClick={showCamera ? stopCamera : startCamera}
                        >
                          <FaCamera className="me-2" /> <span style={{ color: showCamera ? '#fff' : '#0d6efd' }}>
                            {showCamera ? 'Stop Camera' : 'Take Photo'}
                          </span>
                        </Button>
                      </div>
                      
                      {showCamera && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="position-relative mb-3 bg-dark rounded-3 overflow-hidden"
                        >
                          <video 
                            ref={videoRef} 
                            autoPlay 
                            className="w-100 rounded-3" 
                            style={{ maxHeight: '350px', objectFit: 'cover' }}
                          />
                          <Button 
                            variant="success" 
                            size="lg"
                            className="position-absolute bottom-0 end-0 m-3 rounded-circle p-3 d-flex align-items-center justify-content-center"
                            style={{ width: '60px', height: '60px' }}
                            onClick={captureImage}
                          >
                            <FaCamera size={24} />
                          </Button>
                        </motion.div>
                      )}
                      
                      <div className="mt-auto">
                        <Button 
                          variant="success" 
                          size="lg"
                          className="w-100 d-flex align-items-center justify-content-center py-3 mt-3"
                          onClick={detectDisease}
                          disabled={!image || loading}
                          style={{ 
                            background: !image || loading ? '#77aa77' : 'linear-gradient(90deg, #2E7D32 0%, #43A047 100%)',
                            borderColor: '#2E7D32'
                          }}
                        >
                          {loading ? (
                            <>
                              <Spinner as="span" animation="border" size="sm" className="me-2" />
                              <span style={{ fontWeight: 500 }}>Analyzing...</span>
                            </>
                          ) : (
                            <>
                              <FaSearch className="me-2" /> <span style={{ fontWeight: 500 }}>Detect Disease</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
              
              <Col lg={6}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-100 border-0 shadow-sm bg-white rounded-3">
                    <Card.Body className="p-4">
                      <h4 className="mb-3 fw-bold d-flex align-items-center" style={{ color: '#1565C0' }}>
                        <span className="bg-primary bg-opacity-10 p-2 rounded-circle me-2 text-primary">
                          <FaLeaf />
                        </span>
                        Image Preview
                      </h4>
                      
                      <div className="preview-container bg-light rounded-3 d-flex align-items-center justify-content-center" 
                        style={{ minHeight: '350px', overflow: 'hidden' }}>
                        {preview ? (
                          <motion.img 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            src={preview} 
                            alt="Preview" 
                            className="img-fluid rounded-3" 
                            style={{ maxHeight: '350px', objectFit: 'contain' }} 
                          />
                        ) : (
                          <div className="text-center p-5">
                            <div className="mb-3" style={{ color: '#adb5bd' }}>
                              <FaLeaf size={48} />
                            </div>
                            <p style={{ color: '#6c757d', fontWeight: 500 }} className="mb-0">
                              No image selected. Please upload or capture a plant image for disease detection.
                            </p>
                          </div>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
            
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow mt-4 rounded-3 overflow-hidden">
                  <Card.Header className="py-3" style={{ background: 'linear-gradient(90deg, #1565C0 0%, #1976D2 100%)' }}>
                    <h4 className="mb-0 text-white d-flex align-items-center" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
                      <FaCheckCircle className="me-2" /> Analysis Results
                    </h4>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <Row className="g-4">
                      <Col lg={8}>
                        <h3 className="mb-3 fw-bold" style={{ color: '#1565C0', textShadow: '0px 1px 1px rgba(0,0,0,0.1)' }}>
                          {result.disease}
                        </h3>
                        <div className="bg-light p-3 rounded-3 mb-4">
                          <p className="mb-0 lh-lg" style={{ color: '#212529' }}>{result.description}</p>
                        </div>
                        
                        <h5 className="mb-3 d-flex align-items-center" style={{ color: '#2E7D32' }}>
                          <span className="bg-success bg-opacity-10 p-2 rounded-circle me-2 text-success">
                            <FaInfoCircle />
                          </span>
                          Recommended Treatment
                        </h5>
                        <div className="bg-light p-3 rounded-3">
                          <ul className="mb-0 lh-lg">
                            {result.treatment.map((item, index) => (
                              <motion.li 
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="mb-2 d-flex align-items-baseline"
                                style={{ color: '#495057' }}
                              >
                                <FaArrowRight className="me-2 text-success" /> {item}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="sticky-top" style={{ top: '1rem' }}>
                          <Card className="mb-4 border-0 shadow-sm">
                            <Card.Body className="text-center p-4">
                              <h5 className="mb-3" style={{ color: '#1565C0' }}>Confidence Level</h5>
                              <div className="position-relative mb-2">
                                <div className="progress" style={{ height: '2rem', backgroundColor: '#e9ecef' }}>
                                  <div 
                                    className="progress-bar" 
                                    role="progressbar" 
                                    style={{ 
                                      width: `${result.confidence * 100}%`,
                                      background: `linear-gradient(90deg, ${result.confidence > 0.7 ? '#43A047' : result.confidence > 0.4 ? '#FB8C00' : '#E53935'} 0%, ${result.confidence > 0.7 ? '#66BB6A' : result.confidence > 0.4 ? '#FFCA28' : '#EF5350'} 100%)` 
                                    }}
                                    aria-valuenow={result.confidence * 100} 
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
                                  />
                                </div>
                                <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center">
                                  <strong className="text-white" style={{ textShadow: '0px 1px 2px rgba(0,0,0,0.3)' }}>
                                    {Math.round(result.confidence * 100)}%
                                  </strong>
                                </div>
                              </div>
                              <p className="mt-2 mb-0 small" style={{ color: '#6c757d' }}>
                                Confidence score represents the model's certainty in its prediction
                              </p>
                            </Card.Body>
                          </Card>
                          
                          <Card className="border-0 shadow-sm">
                            <Card.Body className="text-center p-4">
                              <h5 className="mb-3" style={{ color: '#1565C0' }}>Disease Severity</h5>
                              <div className="d-flex justify-content-center">
                                <Badge pill 
                                  bg={
                                    result.severity === 'High' ? 'danger' : 
                                    result.severity === 'Medium' ? 'warning' : 
                                    'success'
                                  }
                                  className="px-4 py-3 fs-5"
                                  style={{ 
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    color: result.severity === 'Medium' ? '#212529' : 'white'
                                  }}
                                >
                                  {result.severity}
                                </Badge>
                              </div>
                              
                              <p className="mt-3 mb-0 small" style={{ 
                                color: result.severity === 'High' ? '#dc3545' : 
                                      result.severity === 'Medium' ? '#fd7e14' : 
                                      '#198754',
                                fontWeight: 500
                              }}>
                                {result.severity === 'High' ? 'Immediate action recommended' : 
                                 result.severity === 'Medium' ? 'Treatment should be applied soon' : 
                                 'Monitor condition but low concern'}
                              </p>
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>
            )}
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
};

export default DetectDisease;
