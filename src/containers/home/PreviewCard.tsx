import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import {
  IFormInputProps,
  IInterViewSettings,
  IJobDetails,
  IRequisitionDetails,
} from "../../interface/forms";
import {
  genderOptions,
  interviewDurationOptions,
  interviewLanguageOptions,
  interviewModeOptions,
  urgencyOptions,
} from "./constants";

// --------------
import React from "react";
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
// --------------



const DataCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {

  return (
    <Box mt="1rem" bg="white" width="100%" p="16px 24px" borderRadius="10px">
      <Text fontSize="1rem" as="h6" fontWeight="600" mb="12px">
        {title}
      </Text>
      <Grid gap="16px" templateColumns="1fr 1fr">
        {children}
      </Grid>
    </Box>
  );
};

// --------------------------------------------

const KeyValue: React.FC<{
  title: string;
  value?: string;
}> = ({ title, value }) => {


  return (
    <Box w="100%">

      <Text fontSize=".875rem" color="gray" mb="8px">
        {title}
      </Text>

      {/* somehow not upd values realtime */}
      <Text fontSize=".875rem" mb="8px">
        {value ? value : "-"}
      </Text>

    </Box>
  );
};


// --------------------------------------------------------

const PreviewCard: React.FC<{
  requisitionDetails?: IRequisitionDetails;
  jobDetails?: IJobDetails;
  interviewSettings?: IInterViewSettings;
  // name? : IFormInputProps;
}> = ({ jobDetails, interviewSettings }) => {

  const requisitionDetails = useSelector((state: RootState) => state.data.requisitionDetails);

  return (
    <Box p="1rem">
      <Box borderRadius="10px" bgColor="gray.100" height="fit-content">
        <Flex justifyContent="space-between">
          <Text fontWeight="bold" fontStyle="italic" m="0.4rem 2rem">
            Draft
          </Text>
          <Box
            bgColor="#EE5353"
            color="white"
            p="0.4rem 2rem"
            borderTopRightRadius="10px"
          >
            <Text fontStyle="italic">Preview</Text>
          </Box>
        </Flex>

        <Box w="100%" p="16px 24px">
          <Box
            width="100%"
            bgColor="#432B7D"
            color="white"
            p="1rem"
            borderRadius="10px"
          >
            <Flex
              fontFamily="Poppins"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="0.9rem" fontWeight="500">
                {requisitionDetails?.requisitionTitle}
              </Text>

              <Flex justifyContent="space-around" alignItems="center">
                <Text fontSize="0.8rem" mr="0.4rem" fontWeight="200" as="p">
                  OPENINGS
                </Text>
                <Text fontSize="1rem" fontWeight="bold" as="span">
                  {requisitionDetails?.noOfOpenings}
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>


        <Box maxH="40rem" overflowY="auto" px="24px" pb="24px">

          <DataCard title="Requisition Details">
            <KeyValue
              title="Urgency"
              value={
                urgencyOptions.find(
                  (item) => item?.value === requisitionDetails?.urgency
                )?.label
              }
            // value={"go"}
            />

            <KeyValue
              title="Gender"
              value={
                genderOptions.find(
                  (item) => item?.value === requisitionDetails?.gender
                )?.label
              }
            />
          </DataCard>



          {/* -------------------job details starts here */}

          <DataCard title="Job Detail">
            <KeyValue title="Job Title" value={requisitionDetails?.jobTitle} />
            <KeyValue title="Job Details" value={requisitionDetails?.jobDetails} />
            <KeyValue title="Job Location" value={requisitionDetails?.jobLocation} />
          </DataCard>

          {/* ---------------done upto here---------------------- */}

          <DataCard title="Interview Settings">

            <KeyValue
              title="Interview Duration"
              value={
                interviewDurationOptions.find(
                  (item) => item?.value === requisitionDetails?.interviewDuration
                )?.label
              }
            />

            <KeyValue
              title="Interview Language"
              value={
                interviewLanguageOptions.find(
                  (item) => item?.value === requisitionDetails?.interviewLanguage
                )?.label
              }
            />

            <KeyValue
              title="Interview Mode"
              value={
                interviewModeOptions.find(
                  (item) => item?.value === requisitionDetails?.interviewMode
                )?.label
              }
            />

          </DataCard>

        </Box>
      </Box>
    </Box>
  );
};

export default PreviewCard;
