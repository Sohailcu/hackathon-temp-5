// components/ShipmentTracker.js
import { useState } from 'react';

function ShipmentTracker() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipmentStatus, setShipmentStatus] = useState(null);

  const trackShipment = async () => {
    const res = await fetch(`/api/trackShipment?trackingNumber=${trackingNumber}`);
    const data = await res.json();
    setShipmentStatus(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter tracking number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      <button onClick={trackShipment}>Track Shipment</button>

      {shipmentStatus && (
        <div>
          <p>Status: {shipmentStatus.status}</p>
          <p>Carrier: {shipmentStatus.carrier}</p>
          <p>Estimated Delivery: {shipmentStatus.estimatedDelivery}</p>
        </div>
      )}
    </div>
  );
}

export default ShipmentTracker;
