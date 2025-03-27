"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Container, Card, Row, Col, Button, Form, Alert, Badge, Spinner, ProgressBar, Tabs, Tab, Table, ListGroup } from 'react-bootstrap';
import { 
  FaCamera, FaUpload, FaLeaf, FaInfoCircle, FaHistory, 
  FaCloudUploadAlt, FaMapMarkerAlt, FaChartBar, FaWifi, 
  FaRegClock, FaCheckCircle, FaExclamationTriangle
} from 'react-icons/fa';

const CropHealthPage = () => {
  // State management
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isOffline, setIsOffline] = useState(false);
  const [savedDiagnoses, setSavedDiagnoses] = useState([]);
  const [activeTab, setActiveTab] = useState('diagnose');

  // Refs
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Check network status on mount
  useEffect(() => {
    const handleOnlineStatus = () => setIsOffline(!navigator.onLine);
    
    // Set initial status
    setIsOffline(!navigator.onLine);
    
    // Add event listeners
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);
    
    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  // Load saved diagnoses from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedDiagnoses');
    if (saved) {
      setSavedDiagnoses(JSON.parse(saved));
    }
  }, []);

  // Dummy data for regional insights
  const regionalInsights = {
    regionName: 'Northern Agricultural Zone',
    totalScans: 1245,
    commonIssues: [
      { name: 'Late Blight', percentage: 28, trend: 'increasing' },
      { name: 'Nitrogen Deficiency', percentage: 22, trend: 'stable' },
      { name: 'Powdery Mildew', percentage: 17, trend: 'decreasing' },
      { name: 'Aphid Infestation', percentage: 14, trend: 'increasing' },
      { name: 'Leaf Spot', percentage: 11, trend: 'stable' }
    ],
    recentAlerts: [
      { date: '2023-11-12', issue: 'Late Blight', severity: 'High', area: 'Northern Districts' },
      { date: '2023-11-08', issue: 'Aphid Infestation', severity: 'Medium', area: 'Central Valley' }
    ],
    seasonalTrends: {
      winter: ['Frost Damage', 'Root Rot'],
      spring: ['Seedling Damping Off', 'Cutworms'],
      summer: ['Late Blight', 'Aphids', 'Leaf Spot'],
      fall: ['Early Blight', 'Powdery Mildew']
    }
  };

  // Dummy data for previous diagnoses
  const previousDiagnoses = [
    {
      id: 1,
      date: '2023-11-12',
      cropType: 'Tomato',
      diagnosis: 'Late Blight',
      severity: 'High',
      recommendations: [
        'Apply copper-based fungicide as soon as possible',
        'Remove affected leaves and destroy them',
        'Improve air circulation between plants'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1592418239323-0828744c70c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      date: '2023-11-10',
      cropType: 'Rice',
      diagnosis: 'Nitrogen Deficiency',
      severity: 'Medium',
      recommendations: [
        'Apply nitrogen-rich fertilizer',
        'Consider split application of nitrogen',
        'Conduct soil testing for precise nutrient management'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1536345171317-9b35b4f3af51?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      date: '2023-11-05',
      cropType: 'Potato',
      diagnosis: 'Healthy',
      severity: 'None',
      recommendations: [
        'Continue current management practices',
        'Monitor regularly for signs of disease'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ];

  // Handle image upload
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

  // Start camera for photo capture
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

  // Capture image from camera
  const captureImage = () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    
    const dataUrl = canvas.toDataURL('image/jpeg');
    setPreview(dataUrl);
    
    canvas.toBlob((blob) => {
      setImage(blob);
    }, 'image/jpeg');
    
    stopCamera();
  };

  // Stop camera stream
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
      setShowCamera(false);
    }
  };

  // Detect crop health issues
  const detectIssues = async () => {
    if (!image) {
      setError('Please upload or capture an image first.');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call to model with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Dummy result (in a real app, this would come from the model)
      const mockResult = {
        timestamp: new Date().toISOString(),
        cropType: 'Tomato',
        issue: 'Late Blight',
        confidence: 0.89,
        severity: 'High',
        description: 'Late blight is a plant disease caused by the oomycete pathogen Phytophthora infestans. It primarily affects potatoes and tomatoes, causing significant crop losses.',
        affectedArea: '30-40% of the plant',
        spreadRisk: 'High, especially in humid conditions',
        treatment: [
          'Apply copper-based fungicide immediately',
          'Remove and destroy all infected plant parts',
          'Increase spacing between plants to improve air circulation',
          'Avoid overhead irrigation; use drip irrigation instead',
          'Rotate crops in the following season to break disease cycle'
        ],
        preventiveMeasures: [
          'Use resistant varieties',
          'Apply preventive fungicides during high-risk periods',
          'Ensure proper plant spacing',
          'Avoid wetting leaves when watering'
        ],
        environmentalImpact: 'Low to medium with proper application of recommended treatments',
        additionalResources: [
          {
            title: 'Late Blight Management Guide',
            type: 'PDF',
            size: '2.3 MB',
            url: '#'
          },
          {
            title: 'Organic Control Methods',
            type: 'Video',
            duration: '8 min',
            url: '#'
          }
        ]
      };
      
      setResult(mockResult);
      
      // Save to local storage for offline access
      const newDiagnosis = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        cropType: mockResult.cropType,
        diagnosis: mockResult.issue,
        severity: mockResult.severity,
        recommendations: mockResult.treatment.slice(0, 3),
        imageUrl: preview
      };
      
      const updatedDiagnoses = [newDiagnosis, ...savedDiagnoses].slice(0, 10); // Keep last 10
      setSavedDiagnoses(updatedDiagnoses);
      localStorage.setItem('savedDiagnoses', JSON.stringify(updatedDiagnoses));
      
    } catch (err) {
      setError('Error analyzing image. Please try again.');
      console.error('Error detecting crop health issues:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="py-5 px-4 bg-light min-vh-100">
      {isOffline && (
        <Alert variant="warning" className="d-flex align-items-center mb-4">
          <FaExclamationTriangle className="me-2" />
          <div>
            <strong>You are currently offline.</strong> Basic diagnosis features and your saved history are still available, but new scans will not be saved to the cloud.
          </div>
        </Alert>
      )}
      
      <Card className="shadow-lg border-0 mb-5">
        <Card.Header className="bg-gradient py-3" style={{ background: 'linear-gradient(90deg, #2E7D32 0%, #43A047 100%)' }}>
          <h2 className="text-center mb-0 text-white d-flex align-items-center justify-content-center">
            <FaLeaf className="me-3" />
            Real-Time Crop Health Diagnostic Tool
          </h2>
          <p className="text-center text-white mb-0 mt-2" style={{ opacity: 0.9 }}>
            Upload or capture images of your crops for instant health analysis
          </p>
        </Card.Header>
        
        <Card.Body className="p-4">
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-4"
          >
            <Tab eventKey="diagnose" title={<span><FaCamera className="me-2" />Diagnose</span>}>
              <Row className="g-4">
                <Col lg={6}>
                  <Card className="h-100 border-0 shadow-sm">
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
                        <div className="position-relative mb-3 bg-dark rounded-3 overflow-hidden">
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
                        </div>
                      )}
                      
                      <div className="mt-auto">
                        <Button 
                          variant="success" 
                          size="lg"
                          className="w-100 d-flex align-items-center justify-content-center py-3 mt-3"
                          onClick={detectIssues}
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
                              <FaLeaf className="me-2" /> <span style={{ fontWeight: 500 }}>Detect Issue</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col lg={6}>
                  <Card className="h-100 border-0 shadow-sm">
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
                          <img 
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
                              No image selected. Please upload or capture a plant image for analysis.
                            </p>
                          </div>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              
              {result && (
                <Card className="border-0 shadow mt-4 rounded-3 overflow-hidden">
                  <Card.Header className="py-3" style={{ background: 'linear-gradient(90deg, #1565C0 0%, #1976D2 100%)' }}>
                    <h4 className="mb-0 text-white d-flex align-items-center">
                      <FaCheckCircle className="me-2" /> Analysis Results
                    </h4>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <Row className="g-4">
                      <Col lg={8}>
                        <h3 className="mb-3 fw-bold" style={{ color: '#1565C0' }}>
                          {result.issue}
                        </h3>
                        <div className="bg-light p-3 rounded-3 mb-4">
                          <p className="mb-0 lh-lg">{result.description}</p>
                        </div>
                        
                        <h5 className="mb-3 d-flex align-items-center" style={{ color: '#2E7D32' }}>
                          <span className="bg-success bg-opacity-10 p-2 rounded-circle me-2 text-success">
                            <FaInfoCircle />
                          </span>
                          Recommended Treatment
                        </h5>
                        <div className="bg-light p-3 rounded-3 mb-4">
                          <ul className="mb-0 lh-lg">
                            {result.treatment.map((item, index) => (
                              <li key={index} className="mb-2 d-flex align-items-baseline">
                                <span className="text-success me-2">●</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <h5 className="mb-3 d-flex align-items-center" style={{ color: '#2E7D32' }}>
                          <span className="bg-warning bg-opacity-10 p-2 rounded-circle me-2 text-warning">
                            <FaExclamationTriangle />
                          </span>
                          Preventive Measures
                        </h5>
                        <div className="bg-light p-3 rounded-3">
                          <ul className="mb-0 lh-lg">
                            {result.preventiveMeasures.map((item, index) => (
                              <li key={index} className="mb-2 d-flex align-items-baseline">
                                <span className="text-warning me-2">●</span> {item}
                              </li>
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
                                <ProgressBar 
                                  now={result.confidence * 100} 
                                  className="shadow-sm" 
                                  style={{ height: '2rem' }} 
                                  variant={result.confidence > 0.7 ? 'success' : result.confidence > 0.4 ? 'warning' : 'danger'}
                                />
                                <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center">
                                  <strong className="text-white">
                                    {Math.round(result.confidence * 100)}%
                                  </strong>
                                </div>
                              </div>
                              <p className="mt-2 mb-0 small text-muted">
                                Confidence score represents the model's certainty in its diagnosis
                              </p>
                            </Card.Body>
                          </Card>
                          
                          <Card className="mb-4 border-0 shadow-sm">
                            <Card.Body className="text-center p-4">
                              <h5 className="mb-3" style={{ color: '#1565C0' }}>Severity</h5>
                              <div className="d-flex justify-content-center">
                                <Badge 
                                  bg={result.severity === 'High' ? 'danger' : 
                                      result.severity === 'Medium' ? 'warning' : 'success'}
                                  className="px-4 py-3 fs-5"
                                  style={{ 
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    color: result.severity === 'Medium' ? '#212529' : 'white'
                                  }}
                                >
                                  {result.severity}
                                </Badge>
                              </div>
                              
                              <p className="mt-3 mb-0 small text-muted">
                                {result.severity === 'High' ? 'Immediate action recommended' : 
                                 result.severity === 'Medium' ? 'Treatment should be applied soon' : 
                                 'Monitor condition but low concern'}
                              </p>
                            </Card.Body>
                          </Card>
                          
                          <Card className="border-0 shadow-sm">
                            <Card.Body className="p-4">
                              <h5 className="mb-3" style={{ color: '#1565C0' }}>Additional Resources</h5>
                              <ListGroup variant="flush">
                                {result.additionalResources.map((resource, index) => (
                                  <ListGroup.Item key={index} className="border-bottom py-3 px-0">
                                    <div className="d-flex align-items-center">
                                      <div className="me-3">
                                        <span className={`bg-${resource.type === 'PDF' ? 'danger' : 'primary'} text-white p-2 rounded`}>
                                          <i className={`fas fa-${resource.type === 'PDF' ? 'file-pdf' : 'video'}`}></i>
                                        </span>
                                      </div>
                                      <div>
                                        <h6 className="mb-0">{resource.title}</h6>
                                        <small className="text-muted">
                                          {resource.type === 'PDF' ? `${resource.size}` : `${resource.duration}`}
                                        </small>
                                      </div>
                                      <Button variant="outline-primary" size="sm" className="ms-auto">
                                        Download
                                      </Button>
                                    </div>
                                  </ListGroup.Item>
                                ))}
                              </ListGroup>
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              )}
            </Tab>
            
            <Tab eventKey="history" title={<span><FaHistory className="me-2" />History</span>}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <h4 className="mb-4">Your Previous Diagnoses</h4>
                  
                  {savedDiagnoses.length === 0 ? (
                    <div className="text-center py-5">
                      <FaRegClock size={48} className="text-muted mb-3" />
                      <h5>No diagnosis history yet</h5>
                      <p className="text-muted">Your previous crop diagnoses will appear here</p>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <Table hover className="align-middle">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Image</th>
                            <th>Crop</th>
                            <th>Diagnosis</th>
                            <th>Severity</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {savedDiagnoses.map((diagnosis) => (
                            <tr key={diagnosis.id}>
                              <td>{diagnosis.date}</td>
                              <td>
                                <div style={{ width: '70px', height: '70px' }} className="rounded overflow-hidden">
                                  <img src={diagnosis.imageUrl} alt={diagnosis.diagnosis} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                </div>
                              </td>
                              <td>{diagnosis.cropType}</td>
                              <td>
                                <span className={`badge rounded-pill bg-${diagnosis.severity === 'High' ? 'danger' : 
                                    diagnosis.severity === 'Medium' ? 'warning' : 
                                    diagnosis.diagnosis === 'Healthy' ? 'success' : 'primary'}`}>
                                  {diagnosis.diagnosis}
                                </span>
                              </td>
                              <td>{diagnosis.severity}</td>
                              <td>
                                <Button variant="outline-primary" size="sm" className="me-2">
                                  <i className="fas fa-eye"></i> View
                                </Button>
                                <Button variant="outline-secondary" size="sm">
                                  <i className="fas fa-download"></i> Export
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Tab>
            
            <Tab eventKey="insights" title={<span><FaChartBar className="me-2" />Regional Insights</span>}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">
                      <FaMapMarkerAlt className="me-2 text-danger" />
                      {regionalInsights.regionName}
                    </h4>
                    <div>
                      <Badge bg="primary" className="me-2 px-3 py-2">
                        Total Scans: {regionalInsights.totalScans.toLocaleString()}
                      </Badge>
                      <Badge bg="success" className="px-3 py-2">
                        Last Updated: Today
                      </Badge>
                    </div>
                  </div>
                  
                  <Row className="g-4">
                    <Col lg={7}>
                      <Card className="border h-100">
                        <Card.Header>
                          <h5 className="mb-0">Common Issues in Your Region</h5>
                        </Card.Header>
                        <Card.Body>
                          <Table>
                            <thead>
                              <tr>
                                <th>Issue</th>
                                <th>% of Cases</th>
                                <th>Trend</th>
                              </tr>
                            </thead>
                            <tbody>
                              {regionalInsights.commonIssues.map((issue, index) => (
                                <tr key={index}>
                                  <td>{issue.name}</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div className="me-2 flex-grow-1">
                                        <ProgressBar 
                                          now={issue.percentage} 
                                          variant={index === 0 ? 'danger' : index === 1 ? 'warning' : 'info'} 
                                        />
                                      </div>
                                      <span>{issue.percentage}%</span>
                                    </div>
                                  </td>
                                  <td>
                                    <span className={`text-${issue.trend === 'increasing' ? 'danger' : 
                                        issue.trend === 'decreasing' ? 'success' : 'warning'}`}>
                                      <i className={`fas fa-arrow-${issue.trend === 'increasing' ? 'up' : 
                                          issue.trend === 'decreasing' ? 'down' : 'right'}`}></i>
                                      {' '}
                                      {issue.trend}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </Card.Body>
                      </Card>
                    </Col>
                    
                    <Col lg={5}>
                      <Card className="border mb-4">
                        <Card.Header>
                          <h5 className="mb-0">Recent Alerts</h5>
                        </Card.Header>
                        <ListGroup variant="flush">
                          {regionalInsights.recentAlerts.map((alert, index) => (
                            <ListGroup.Item key={index} className="border-bottom">
                              <div className="d-flex justify-content-between">
                                <span className="fw-medium">{alert.issue}</span>
                                <Badge bg={alert.severity === 'High' ? 'danger' : 'warning'}>
                                  {alert.severity}
                                </Badge>
                              </div>
                              <div className="d-flex justify-content-between mt-2 small text-muted">
                                <span>{alert.area}</span>
                                <span>{alert.date}</span>
                              </div>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </Card>
                      
                      <Card className="border">
                        <Card.Header>
                          <h5 className="mb-0">Seasonal Trends</h5>
                        </Card.Header>
                        <Card.Body>
                          <div className="mb-3">
                            <h6 className="text-primary">
                              <i className="fas fa-snowflake me-2"></i> Winter
                            </h6>
                            <p className="ms-4 mb-0 small">
                              {regionalInsights.seasonalTrends.winter.join(', ')}
                            </p>
                          </div>
                          <div className="mb-3">
                            <h6 className="text-success">
                              <i className="fas fa-seedling me-2"></i> Spring
                            </h6>
                            <p className="ms-4 mb-0 small">
                              {regionalInsights.seasonalTrends.spring.join(', ')}
                            </p>
                          </div>
                          <div className="mb-3">
                            <h6 className="text-danger">
                              <i className="fas fa-sun me-2"></i> Summer
                            </h6>
                            <p className="ms-4 mb-0 small">
                              {regionalInsights.seasonalTrends.summer.join(', ')}
                            </p>
                          </div>
                          <div>
                            <h6 className="text-warning">
                              <i className="fas fa-leaf me-2"></i> Fall
                            </h6>
                            <p className="ms-4 mb-0 small">
                              {regionalInsights.seasonalTrends.fall.join(', ')}
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
      
      <div className="bg-white p-4 rounded-3 shadow text-center">
        <h4 className="mb-3">Need Expert Advice?</h4>
        <p className="mb-4">Connect with agricultural specialists for personalized guidance on managing crop health issues</p>
        <Button variant="success" className="me-3">
          <i className="fas fa-comments me-2"></i> Chat with an Expert
        </Button>
        <Button variant="outline-primary">
          <i className="fas fa-calendar me-2"></i> Schedule a Consultation
        </Button>
      </div>
    </Container>
  );
};

export default CropHealthPage;
