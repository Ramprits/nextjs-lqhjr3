import { useRouter } from 'next/router';
import React from 'react';

function Docs() {
  const router = useRouter();
  return (
    <div>
      Docs
      {JSON.stringify(router, null, 6)}
    </div>
  );
}

export default Docs;
