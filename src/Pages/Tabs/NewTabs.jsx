import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Jobs from '../JobsRelated/Jobs/Jobs';
import Onsite from '../JobsRelated/Onsite/Onsite';

const NewTabs = () => {
  const [allJobs, setAllJobs] = useState([])
  const [onsiteJobs, setOnsiteJobs] = useState([])

  useEffect(() =>{
      fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => setAllJobs(data))
  },[])

  useEffect(() =>{
    fetch('http://localhost:5000/jobs/onsite')
    .then(res => res.json())
    .then(data => setOnsiteJobs(data))
  },[])
  
  return (
        <div className='max-w-7xl mx-auto mt-20'>
          <Tabs>
            <TabList>
              <Tab>All Jobs</Tab>
              <Tab>Onsite Jobs</Tab>
              <Tab>Remote Jobs</Tab>
              <Tab>Hybrid Jobs</Tab>
              <Tab>Part Times Jobs</Tab>
            </TabList>

            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-gray-600 text-center mt-5'>
                {
                  allJobs.map(job =><Jobs key={job._id} job={job}></Jobs>)
                }
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-gray-600 text-center mt-5'>
                {
                  onsiteJobs.map(onsite =><Onsite key={onsite._id} onsite={onsite}></Onsite>)
                }
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
        </div>
  );
};

export default NewTabs;