import { ref, unref } from '@vue/composition-api';
import useAuth from 'composition/useAuth';

export default function useUserProfileData() {
  const { signedInUser } = useAuth();
  const {
    displayName, phoneNumber, email, photoURL,
  } = unref(signedInUser);

  return {
    name: ref(displayName),
    phoneNumber: ref(phoneNumber),
    email: ref(email),
    photo: ref(photoURL),
    department: ref(''),
    faculty: ref(''),
    batchYear: ref(2000),
    studentId: ref(''),
    // studentIdCard: ref(''),
    originAddress: ref(''),
    currentAddress: ref(''),
    verified: ref(false),
  };
}
