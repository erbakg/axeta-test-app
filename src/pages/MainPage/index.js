import React, { useRef } from 'react';
import ProfileBody from '../../components/MainPageComponents/ProfileBody';
import ProfileHeader from '../../components//MainPageComponents/ProfileHeader';
import { useReactToPrint } from 'react-to-print';

export default function MainPage() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div ref={componentRef}>
      <ProfileHeader print={handlePrint} />
      <ProfileBody />
    </div>
  );
}
