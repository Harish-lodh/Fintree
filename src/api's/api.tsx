import axiosInstance from './axiosInstance';

export interface FormData {
  name: string;
  email: string;
  mobile: string;
  dob: string;
  loanType: string;
}

export const sendEmail = async (data: FormData) => {
  try {
    const response = await axiosInstance.post('/FormApplication', data);
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
