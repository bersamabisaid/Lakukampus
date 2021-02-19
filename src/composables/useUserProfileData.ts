import {
  reactive, toRefs,
} from '@vue/composition-api';
import useAuth from 'composables/useAuth';

export default function useUserProfileData() {
  const { signedInUser } = useAuth();
  const {
    displayName, phoneNumber, email, photoURL,
  } = signedInUser.value || {
    displayName: '', phoneNumber: '', email: '', photoURL: '',
  };
  const profileData = reactive({
    name: displayName,
    phoneNumber,
    email,
    photo: photoURL,
    department: '',
    faculty: '',
    batchYear: 2000,
    studentId: '',
    // studentIdCard: '',
    originAddress: '',
    currentAddress: '',
    verified: false,
  });

  return {
    ...toRefs(profileData),
  };
}
