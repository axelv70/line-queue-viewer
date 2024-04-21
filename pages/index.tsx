import { WithDefaultLayout } from '../components/DefautLayout';
// import { Title } from '../components/Title';
import { Page } from '../types/Page';
// import QueueManager from './QueueManager';
import { Input, Button, Row, Col, Space, message } from 'antd';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';

export default function Home() {
  const [cashiers, setCashiers] = useState<{
    [key: string]: string[];
  }>({
    cashier1: [],
    cashier2: [],
    cashier3: [],
  });
  const [customerName, setCustomerName] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerName(e.target.value);
  };

  const handleAddCustomer = (cashier: string) => {
    if (customerName.trim() !== '') {
      setCashiers((prevCashiers) => ({
        ...prevCashiers,
        [cashier]: [...(prevCashiers[cashier] || []), customerName],
      }));
      setCustomerName('');
    }
  };

  const handleNextCustomer = (cashier: string) => {
    if (cashiers[cashier] && cashiers[cashier]!.length > 0) {
      const updatedCashiers = { ...cashiers };
      if (updatedCashiers[cashier]) {
        updatedCashiers[cashier]!.shift();
        setCashiers(updatedCashiers);
      }
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Row gutter={16}>
        <Col span={8}>
          <h2>Cashier 1</h2>
          <div style={{ border: '1px solid #ccc', padding: 10 }}>
            {cashiers['cashier1'] && cashiers['cashier1'].map((customer, index) => (
              <div key={index} style={{ marginBottom: 5 }}>
                {customer}
              </div>
            ))}
          </div>
          <Space>
            <Input
              placeholder="Enter customer name"
              value={customerName}
              onChange={handleInputChange}
            />
            <Button onClick={() => handleAddCustomer('cashier1')}>
              Add Customer
            </Button>
            <Button onClick={() => handleNextCustomer('cashier1')}>
              Handle Customer
            </Button>
          </Space>
        </Col>
        <Col span={8}>
          <h2>Cashier 2</h2>
          <div style={{ border: '1px solid #ccc', padding: 10 }}>
            {cashiers['cashier2'] && cashiers['cashier2'].map((customer, index) => (
              <div key={index} style={{ marginBottom: 5 }}>
                {customer}
              </div>
            ))}
          </div>
          <Space>
            <Input
              placeholder="Enter customer name"
              value={customerName}
              onChange={handleInputChange}
            />
            <Button onClick={() => handleAddCustomer('cashier2')}>
              Add Customer
            </Button>
            <Button onClick={() => handleNextCustomer('cashier2')}>
              Handle Customer
            </Button>
          </Space>
        </Col>
        <Col span={8}>
          <h2>Cashier 3</h2>
          <div style={{ border: '1px solid #ccc', padding: 10 }}>
            {cashiers['cashier3'] && cashiers['cashier3'].map((customer, index) => (
              <div key={index} style={{ marginBottom: 5 }}>
                {customer}
              </div>
            ))}
          </div>
          <Space>
            <Input
              placeholder="Enter customer name"
              value={customerName}
              onChange={handleInputChange}
            />
            <Button onClick={() => handleAddCustomer('cashier3')}>
              Add Customer
            </Button>
            <Button onClick={() => handleNextCustomer('cashier3')}>
              Handle Customer
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
}
