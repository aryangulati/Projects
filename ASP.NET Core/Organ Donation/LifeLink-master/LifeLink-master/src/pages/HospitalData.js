import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { DonarList } from '../components/donar';
import { SeekerList } from '../components/seeker';

export const HospitalData = () => {


  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1',my: 10 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="List Of Donars" value="1" style={{ fontSize: "15px" }}/>
            <Tab label="List Of Seekers" value="2" style={{ fontSize: "15px" }}/>
          </TabList>
        </Box>
        <TabPanel value="1"><DonarList/></TabPanel>
        <TabPanel value="2"><SeekerList/></TabPanel>
      </TabContext>
    </Box>
  );
}
