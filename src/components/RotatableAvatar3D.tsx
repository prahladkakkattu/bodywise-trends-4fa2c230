import DynamicBodyMeasurementSVG from './DynamicBodyMeasurementSVG';
import { BodyMeasurement } from '@/types';

interface RotatableAvatar3DProps {
  measurements?: BodyMeasurement;
}

const RotatableAvatar3D: React.FC<RotatableAvatar3DProps> = ({ measurements }) => {
  return <DynamicBodyMeasurementSVG measurements={measurements} showFrontView={true} />;
};

export default RotatableAvatar3D;