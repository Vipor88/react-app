import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51N3WumF59faQ5nZ682fhmUJMserMDOniZcE8oVAgehJ3EvDVPlgN9GLZoBqc7qXQkiYQK79QnL3bJenDAHSMaIaj00KEfPKTMZ');
  }
  return stripePromise;
};

export default getStripe;