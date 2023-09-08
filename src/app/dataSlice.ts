import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  requisitionDetails: {
    gender: string;
    noOfOpenings: number;
    requisitionTitle: string;
    urgency: string;
  };
  jobDetails: {
    jobDetails: string;
    jobLocation: string;
    jobTitle: string;
  };
  interviewSettings: {
    interviewDuration: string;
    interviewLanguage: string;
    interviewMode: string;
  };
}

const initialState: DataState = {
  requisitionDetails: {
    gender: "",
    noOfOpenings: 0,
    requisitionTitle: "",
    urgency: "",
  },
  jobDetails: {
    jobDetails: "",
    jobLocation: "",
    jobTitle: "",
  },
  interviewSettings: {
    interviewDuration: "",
    interviewLanguage: "",
    interviewMode: "",
  },
};


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateRequisitionDetails: (state, action: PayloadAction<Partial<DataState['requisitionDetails']>>) => {
      state.requisitionDetails = {
        ...state.requisitionDetails,
        ...action.payload,
      };
    },
  },
});

export const { updateRequisitionDetails } = dataSlice.actions;
export default dataSlice.reducer;
