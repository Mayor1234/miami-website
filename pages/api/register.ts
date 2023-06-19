import bcrypt from 'bcrypt';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { createClient } from '@sanity/client';
import { dataset, projectId, token } from '@/sanity/env';
import { signToken } from '@/utils/auth';
import { NextRequest, NextResponse } from 'next/server';

export const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

// const router = createRouter<NextApiRequest, NextApiResponse>();

const tokenWithWriteAcess = token;

export default async function createUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, password } = req.body;

  try {
    const createMutations = [
      {
        create: {
          _type: 'user',
          name,
          email,
          password: bcrypt.hash(password, 10),
        },
      },
    ];

    const response = axios.post(
      `https://${projectId}.api.sanity.io/v3/data/mutate/${dataset}?returnIds=true`,
      { mutations: createMutations },
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${tokenWithWriteAcess}`,
        },
      }
    );

    const userId = (await response).data.results[0].id;
    const user = {
      _id: userId,
      name,
      email,
    };
    const token = signToken(user);
    return res.status(200).json({ ...user, token });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'could not register this user' });
  }
}
