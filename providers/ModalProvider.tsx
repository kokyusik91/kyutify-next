'use client';

import { useEffect, useState } from 'react';

// import Modal from '@/components/Modal';
import AuthModal from '@/components/AuthModal';
import UploadModal from '@/components/UploadModal';

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  // 모달은 서버에서 실행안되니깐 트릭걸어줘야함
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
}

export default ModalProvider;
