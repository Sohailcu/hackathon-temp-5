// pages/api/trackShipment.js
import { getShipmentStatus } from '../../lib/shipmentAPI'; // Function to call EasyPost/Shippo API

export default async function handler(req, res) {
  const { trackingNumber } = req.query;

  if (!trackingNumber) {
    return res.status(400).json({ error: 'Tracking number is required' });
  }

  try {
    const shipmentStatus = await getShipmentStatus(trackingNumber);
    res.status(200).json(shipmentStatus);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shipment status' });
  }
}
