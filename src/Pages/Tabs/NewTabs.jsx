import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Jobs from '../JobsRelated/Jobs/Jobs';
import Onsite from '../JobsRelated/Onsite/Onsite';
import Remote from '../JobsRelated/Remote/Remote';
import Hybrid from '../JobsRelated/Hybrid/Hybrid';
import PartTime from '../JobsRelated/PartTime/PartTime';

const NewTabs = () => {
  const [allJobs, setAllJobs] = useState([])
  const [onsiteJobs, setOnsiteJobs] = useState([])
  const [remoteJobs, setRemoteJobs] = useState([])
  const [hybridJobs, setHybridJobs] = useState([])
  const [partTimeJobs, setPartTimeJobs] = useState([])

  useEffect(() =>{
      fetch('https://assignment-11-server-side-topaz.vercel.app/jobs')
      .then(res => res.json())
      .then(data => setAllJobs(data))
  },[])

  useEffect(() =>{
    fetch('https://assignment-11-server-side-topaz.vercel.app/jobs/onsite')
    .then(res => res.json())
    .then(data => setOnsiteJobs(data))
  },[])

  useEffect(() =>{
    fetch('https://assignment-11-server-side-topaz.vercel.app/jobs/remote')
    .then(res => res.json())
    .then(data => setRemoteJobs(data))
  },[])

  useEffect(() =>{
    fetch('https://assignment-11-server-side-topaz.vercel.app/jobs/hybrid')
    .then(res => res.json())
    .then(data => setHybridJobs(data))
  },[])

  useEffect(() =>{
    fetch('https://assignment-11-server-side-topaz.vercel.app/jobs/part-time')
    .then(res => res.json())
    .then(data => setPartTimeJobs(data))
  },[])


  
  return (
        <div className='max-w-7xl mx-auto mt-20'>
          <h2 className='text-3xl font-bold text-center mb-10 text-gray-700'>Featured Jobs</h2>
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
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-gray-600 text-center mt-5'>
                {
                  remoteJobs.map(remote =><Remote key={remote._id} remote={remote}></Remote>)
                }
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-gray-600 text-center mt-5'>
                {
                  hybridJobs.map(hybrid =><Hybrid key={hybrid._id} hybrid={hybrid}></Hybrid>)
                }
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-gray-600 text-center mt-5'>
                {
                  partTimeJobs.map(partTime => <PartTime key={partTime._id} partTime={partTime}></PartTime>)
                }
              </div>
            </TabPanel>
        </Tabs>
        </div>
  );
};

export default NewTabs;