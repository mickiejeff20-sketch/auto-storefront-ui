import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Nexus Core Hub',
    description: 'The central nervous system for your smart home and office. Integrates over 200+ protocols.',
    price: 299.99,
    category: 'Smart Home',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9686ca87-237e-4cd3-8c8c-107118bfc904/product-hub-2960393b-1774676578553.webp',
    features: ['Zigbee 3.0', 'Matter Compatible', 'AI Voice Processing', 'Offline Security'],
    stock: 45
  },
  {
    id: '2',
    name: 'AutoArm Precision-1',
    description: 'Compact robotic arm designed for laboratory and desktop automation tasks with 0.1mm precision.',
    price: 1249.00,
    category: 'Industrial',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9686ca87-237e-4cd3-8c8c-107118bfc904/product-robot-c41875e5-1774676579992.webp',
    features: ['6-Axis Movement', 'Python API', 'Collision Detection', 'Interchangeable Grippers'],
    stock: 12
  },
  {
    id: '3',
    name: 'OmniSense Node Kit',
    description: 'A comprehensive suite of environmental and motion sensors for industrial monitoring.',
    price: 450.00,
    category: 'Industrial',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9686ca87-237e-4cd3-8c8c-107118bfc904/product-sensors-99252dc4-1774676579086.webp',
    features: ['LoRaWAN', '3-Year Battery', 'IP67 Waterproof', 'Mesh Networking'],
    stock: 89
  },
  {
    id: '4',
    name: 'SkyNet Logic Controller',
    description: 'Advanced PLC with edge computing capabilities for real-time process optimization.',
    price: 899.00,
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    features: ['Edge AI', 'Gigabit Ethernet', 'DIN Rail Mount', 'Real-time OS'],
    stock: 24
  },
  {
    id: '5',
    name: 'FluxOS Enterprise',
    description: 'Cloud-based automation orchestration platform for managing complex multi-site deployments.',
    price: 199.00,
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    features: ['Unlimited Nodes', 'Custom Dashboards', 'SLA Support', 'Data Archiving'],
    stock: 999
  },
  {
    id: '6',
    name: 'NeuroLink Gateway',
    description: 'Neural-interface bridge for advanced biological monitoring and automation feedback.',
    price: 599.00,
    category: 'Components',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    features: ['Low Latency', 'EEG Processing', 'Bluetooth 5.2', 'Secure Encryption'],
    stock: 15
  }
];