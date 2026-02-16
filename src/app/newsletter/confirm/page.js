import { Suspense } from 'react';
import ConfirmClient from './ConfirmClient';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ConfirmClient />
    </Suspense>
  );
}
