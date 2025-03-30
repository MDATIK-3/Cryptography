import { NextResponse } from 'next/server';
import { encryptAdditive, decryptAdditive } from '@/../../lib/cipherLogic/additive';
import { encryptMultiplicative, decryptMultiplicative } from '../../../../lib/cipherLogic/multiplicative';
import { encryptAffine, decryptAffine } from '@/../../lib/cipherLogic/affine';
import { encryptMonoalphabetic, decryptMonoalphabetic } from '@/../../lib/cipherLogic/monoalphabetic';
import { encryptAutokey, decryptAutokey } from '@/../../lib/cipherLogic/autokey';
import { encryptPlayfair, decryptPlayfair } from '@/../../lib/cipherLogic/playfair';
import { encryptVigenere, decryptVigenere } from '@/../../lib/cipherLogic/vigenere';

export async function POST(req) {
  try {
    const body = await req.json();
    const { cipher, operation, input, cipherKey } = body;
    
    if (!cipher || !operation || !input || !cipherKey) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    let result, steps;

    switch (cipher) {
      case 'additive':
        ({ result, steps } = operation === 'encrypt' 
          ? encryptAdditive(input, cipherKey) 
          : decryptAdditive(input, cipherKey));
        break;

      case 'multiplicative':
        ({ result, steps } = operation === 'encrypt' 
          ? encryptMultiplicative(input, cipherKey) 
          : decryptMultiplicative(input, cipherKey));
        break;

      case 'affine':
        ({ result, steps } = operation === 'encrypt' 
          ? encryptAffine(input, cipherKey) 
          : decryptAffine(input, cipherKey));
        break;

      case 'monoalphabetic':
        ({ result, steps } = operation === 'encrypt' 
          ? encryptMonoalphabetic(input, cipherKey) 
          : decryptMonoalphabetic(input, cipherKey));
        break;

      case 'autokey':
        ({ result, steps } = operation === 'encrypt' 
          ? encryptAutokey(input, cipherKey) 
          : decryptAutokey(input, cipherKey));
        break;

      case 'playfair':
        ({ result, steps } = operation === 'encrypt' 
          ? encryptPlayfair(input, cipherKey) 
          : decryptPlayfair(input, cipherKey));
        break;

      case 'vigenere':
        ({ result, steps } = operation === 'encrypt' 
          ? encryptVigenere(input, cipherKey) 
          : decryptVigenere(input, cipherKey));
        break;

      default:
        return NextResponse.json({ error: 'Invalid cipher type' }, { status: 400 });
    }

    return NextResponse.json({ result, steps });
  } catch (error) {
    console.error('Error processing cipher:', error);
    return NextResponse.json({ error: 'An error occurred while processing the cipher' }, { status: 500 });
  }
}
