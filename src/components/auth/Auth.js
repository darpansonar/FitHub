import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase-config';

export default function Auth() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button 
      onClick={handleLogin}
      className="btn-primary flex items-center gap-2"
    >
      <img src="/google-logo.svg" className="h-5 w-5" alt="Google"/>
      Sign in with Google
    </button>
  );
}