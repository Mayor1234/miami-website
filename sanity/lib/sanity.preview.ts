'use client';

import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from '../env';

function onPublicAccessOnly() {
  throw new Error('unable to preview as you are not logged in');
}

if (!projectId || !dataset) {
  throw new Error(
    'Missing projectId or dataset. Check your sanity.json or .env'
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
